import { 
    List, 
    SimpleList, 
    Datagrid, 
    TextField, 
    ReferenceField, 
    EditButton, 
    Edit, 
    Create, 
    SimpleForm, 
    ReferenceInput, 
    TextInput, 
    DateInput,
    required
} from 'react-admin';

import validateCustomersInput from './validation/validateCustomersInput';

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
        <SimpleForm validate={validateCustomersInput}>
            <TextInput source="id" disabled />
            {/* <ReferenceInput source="user_id" reference="users" value="user_id" disabled /> */}
            <TextInput source="user_id" disabled/>
            <TextInput source="first_name" validate={required()} />
            <TextInput source="last_name" validate={required()} />
            <TextInput source="city" />
            <TextInput source="country" validate={required()} />
            <TextInput source="telefono" validate={required()} />
            <DateInput source="fecha_nacimiento" />
            <TextInput source="dni" validate={required()} />
        </SimpleForm>
    </Edit>
);

export const CustomerCreate = () => (
    <Create>
        <SimpleForm validate={validateCustomersInput}>
            <ReferenceInput source="user_id" reference="users"/>
            <TextInput source="first_name" validate={required()} />
            <TextInput source="last_name" validate={required()} />
            <TextInput source="city" />
            <TextInput source="country" validate={required()} />
            <TextInput source="telefono" validate={required()} />
            <DateInput source="fecha_nacimiento" />
            <TextInput source="dni" validate={required()} />
        </SimpleForm>
    </Create>
);