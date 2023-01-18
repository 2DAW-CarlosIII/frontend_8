import { useMediaQuery } from '@mui/material';
// Migrations Inport:
import { List, SimpleList, Datagrid, TextField, EditButton, Edit, Create, SimpleForm, TextInput } from 'react-admin';
import { useRecordContext} from 'react-admin';

// Migrations:
const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />
];

export const MigrationList = () => {
    const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    // JSX:
    return (
        <List filters={postFilters}>
        {isSmall ? (
            <SimpleList
            primaryText={(record) => record.id}
            secondaryText={(record) => record.migration}
            tertiaryText={(record) => record.batch}
            >
            <EditButton />
            </SimpleList>
        ) : (
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="migration" />
                <TextField source="batch" />
                <EditButton />
            </Datagrid>
        )}
        </List>
    );
};

// Migrations Create
const MigrationTitle = () => {
    const record = useRecordContext();
    // JSX:
    return <span>Migration {record ? `"${record.migration}"` : ''}</span>;
};

export const MigrationEdit = () => (
    <Edit title={<MigrationTitle />}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="migration" />
            <TextInput source="batch" />
        </SimpleForm>
    </Edit>
);

export const MigrationCreate = () => (
    <Create>
        <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="migration" />
        <TextInput source="batch" />
        </SimpleForm>
    </Create>
);