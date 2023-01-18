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

// API Proveedora:
//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const dataProvider = jsonServerProvider('http://proyecto8.test/api/records');

// Recursos:
const RAdmin = () => (
  <Admin
    basename="/dashboard"
    dataProvider={dataProvider}
    layout={AdminLayout}
  >
    <Resource name="migrations" 
      list={MigrationList} icon={MigrationIcon} edit={MigrationEdit} create={MigrationCreate}/>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name" />
  </Admin>
)

export default RAdmin;
