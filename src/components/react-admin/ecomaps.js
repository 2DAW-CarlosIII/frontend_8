import { List, SimpleList, Datagrid, TextField, ReferenceField, TextInput } from 'react-admin';
import { useRecordContext} from 'react-admin';
import { useMediaQuery } from '@mui/material';

const ecomapsFilters = [
    <TextInput source="q" label="Search" alwaysOn />
];

export const EcomapsList = () => {
    const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    // JSX:  (Botones Disabled, ya que solo queremos Visualizar)
    return (
        <List filters={ecomapsFilters} >
        {isSmall ? (
            <SimpleList
            primaryText={(record) => record.title}
            secondaryText={(record) => record.subject}
            tertiaryText={(record) => record.who}
            linkType={(record) => 'show'}
            >
            </SimpleList>
        ) : (
            <Datagrid bulkActionButtons={false} >
                <TextField source="title" />
                <TextField source="resultType" />
                <TextField source="localityType" />
                <TextField source="stateCode" />
                <TextField source="postalCode" />
            </Datagrid>
        )}
        </List>
    );
}