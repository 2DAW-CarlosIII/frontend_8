import { List, SimpleList, Datagrid, TextField, ReferenceField, EditButton, Edit, Create, SimpleForm, ReferenceInput, TextInput } from 'react-admin';

import { useRecordContext} from 'react-admin';
import { useMediaQuery } from '@mui/material';

const customerFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="user_id" label="User" reference="users" />
];

export const CustomerList = () => {
    const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    // JSX:
    return (
    <List filters={customerFilters} >
        {isSmall ? (
        <SimpleList
            primaryText="%{first_name} %{last_name}"
            secondaryText={(record) => record.fecha_nacimiento}
            tertiaryText="%{city} - %{country}"
            linkType={(record) => (record.canEdit ? 'edit' : 'show')}
        >
            <EditButton />
        </SimpleList>
        ) : (
        <Datagrid bulkActionButtons={false}>
            <TextField source="id" />
            <ReferenceField source="user_id" reference="users" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="city" />
            <TextField source="country" />
            <TextField source="telefono" />
            <TextField source="fecha_nacimiento" />
            <TextField source="dni" />
            <EditButton />
        </Datagrid>
        )}
    </List>
    );
}
// Edit - Create:
const CustomerTitle = () => {
    const record = useRecordContext();
    // JSX:
    return <span>Customer {record ? `"${record.first_name} ${record.last_name}"` : ''}</span>;
};
export const CustomerEdit = () => (
    <Edit title={<CustomerTitle />}>
    <SimpleForm>
        <TextInput source="id" disabled />
        <ReferenceInput source="user_id" reference="users" />
        <TextInput source="first_name" />
        <TextInput source="last_name" />
        <TextInput source="city" />
        <TextInput source="country" />
        <TextInput source="telefono" />
        <TextInput source="fecha_nacimiento" />
        <TextInput source="dni" />
    </SimpleForm>
    </Edit>
);
export const CustomerCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="user_id" reference="users" />
            <TextInput source="first_name" />
            <TextInput source="last_name" />
            <TextInput source="city" />
            <TextInput source="country" />
            <TextInput source="telefono" />
            <TextInput source="fecha_nacimiento" />
            <TextInput source="dni" />
        </SimpleForm>
    </Create>
);