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
// API Externa:
import { EcomapsList} from 'components/react-admin/ecomaps';
import EcomapsIcon from '@mui/icons-material/Palette';
// AuthProvider Token:
import { default as AuthProvider } from 'components/react-admin/authProvider';
import { default as Login } from 'pages/login'
import { useState } from 'react';
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
      {/* <Resource name="migrations" 
        list={MigrationList} icon={MigrationIcon} edit={MigrationEdit} create={MigrationCreate}/>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} /> */}
      <Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name" />
    </Admin>
  )
}

export default RAdmin;
