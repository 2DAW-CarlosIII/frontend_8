import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from 'components/react-admin/users';
import { PostList, PostEdit, PostCreate } from 'components/react-admin/posts';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import { AdminLayout } from 'components/react-admin/adminLayout';

// Imports Dependencies PHP API CRUD Test:
import { MigrationList } from 'components/react-admin/migrations';
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
    <Resource name="migrations" list={MigrationList} icon={MigrationIcon} recordRepresentation="migration" />
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name" />
  </Admin>
)

export default RAdmin;
