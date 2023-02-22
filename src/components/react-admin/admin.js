import { AdminLayout } from 'components/react-admin/adminLayout';
import { Admin, Resource } from 'react-admin';
import { UserList } from 'components/react-admin/users';
import { PostList, PostEdit, PostCreate } from 'components/react-admin/posts';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
// PHP API CRUD + Migrations:
import { MigrationList, MigrationEdit, MigrationCreate } from 'components/react-admin/migrations';
import MigrationIcon from '@mui/icons-material/Storage';
// Import Custumers Dependencies:
import jsonapiClient from 'ra-jsonapi-client';
import { CustomerList, CustomerEdit, CustomerCreate } from 'components/react-admin/customers';
import CustomerIcon from '@mui/icons-material/SupportAgent';
// Import Vehiculos Dependencies:
import { VehiculoList, VehiculoEdit, VehiculoCreate } from 'components/react-admin/vehiculos';
import VehiculoIcon from '@mui/icons-material/CarRentalTwoTone';
// Import Blablacar Dependencies:
import { BlacarList, BlacarEdit, BlacarCreate } from 'components/react-admin/blablacars';
import BlacarIcon from '@mui/icons-material/PostAddTwoTone';
// API Externa:
import { EcomapsList} from 'components/react-admin/ecomaps';
import EcomapsIcon from '@mui/icons-material/MapTwoTone';
// AuthProvider Token:
import { default as AuthProvider } from 'components/react-admin/authProvider';
import { default as Login } from 'pages/login'
import { useState } from 'react';
import { Route } from 'react-router-dom';
// API Proveedora:
//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
//const dataProvider = jsonServerProvider('http://proyecto8.test/api/records');
const dataProvider = jsonapiClient('http://proyecto8.test/api');

// Recursos:
const RAdmin = () => {
  // Enviar Token en Cada Request al Backend]
  function handleDataProvider(dataProvider) {
    setDataProvider(() => dataProvider)
  }
  const myLogin = <Login handleDataProvider={handleDataProvider} />
  // Avoid Expulsion Url When Forbidden:
  let token = localStorage.getItem('auth')
  let settings = null
  if (token) {
    token = JSON.parse(localStorage.getItem('auth'))
      settings = {
        headers: {
          Authorization: `${token.token_type} ${token.access_token}`,
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
  }
  const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api`
  const [dataProvider, setDataProvider] = useState(null)
  if (!dataProvider) handleDataProvider(jsonapiClient(API_URL))
  // JSX:
  return (
    <Admin
      basename="/dashboard"
      dataProvider={dataProvider}
      authProvider={AuthProvider}
      loginPage={myLogin}
    >
      <Resource name="ecomaps" list={EcomapsList} icon={EcomapsIcon} />
      <Resource name="customers" list={CustomerList} icon={CustomerIcon} edit={CustomerEdit} create={CustomerCreate} />
      <Resource name="vehiculos" list={VehiculoList} icon={VehiculoIcon} edit={VehiculoEdit} create={VehiculoCreate} />
      <Resource name="blablacars" list={BlacarList} icon={BlacarIcon} edit={BlacarEdit} create={BlacarCreate} />
      <Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name" />
      {/* <Resource name="migrations" 
        list={MigrationList} icon={MigrationIcon} edit={MigrationEdit} create={MigrationCreate}/>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} /> */}
    </Admin>
  )
}

export default RAdmin;
