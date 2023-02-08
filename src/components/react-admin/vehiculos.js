import { List, SimpleList, Datagrid, TextField, ReferenceField, EditButton, Edit, Create, SimpleForm, ReferenceInput, TextInput } from 'react-admin';

import { useRecordContext} from 'react-admin';
import { useMediaQuery } from '@mui/material';

const vehiculoFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="customer_id" label="User" reference="customers" />
];

export const VehiculoList = () => {
    const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    // JSX:
    return (
    <List filters={vehiculoFilters} >
        {isSmall ? (
        <SimpleList
            primaryText="%{modelo} %{fecha_matriculacion}"
            secondaryText={(record) => record.combustible}
            tertiaryText="%{plazas} - %{consumo_medio}"
            linkType={(record) => (record.canEdit ? 'edit' : 'show')}
        >
            <EditButton />
        </SimpleList>
        ) : (
        <Datagrid bulkActionButtons={false}>
            <TextField source="id" />
            <ReferenceField source="customer_id" reference="customers" />
            <TextField source="combustible" />
            <TextField source="fecha_matriculacion" />
            <TextField source="modelo" />
            <TextField source="potencia_cv" />
            <TextField source="plazas" />
            <TextField source="puertas" />
            <TextField source="consumo_medio" />
            <TextField source="matricula" />
            <EditButton />
        </Datagrid>
        )}
    </List>
    );
}
// Edit - Create:
const VehiculoTitle = () => {
    const record = useRecordContext();
    // JSX:
    return <span>Vehiculo {record ? `"${record.modelo} ${record.fecha_matriculacion}"` : ''}</span>;
};
export const VehiculoEdit = () => (
    <Edit title={<VehiculoTitle />}>
    <SimpleForm>
        <TextInput source="id" disabled />
        <ReferenceInput source="customer_id" reference="customers" />
        <TextInput source="combustible" />
        <TextInput source="fecha_matriculacion" />
        <TextInput source="modelo" />
        <TextInput source="potencia_cv" />
        <TextInput source="plazas" />
        <TextInput source="puertas" />
        <TextInput source="consumo_medio" />
        <TextInput source="matricula" />
    </SimpleForm>
    </Edit>
);
export const VehiculoCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="customer_id" reference="customers" />
            <TextInput source="combustible" />
            <TextInput source="fecha_matriculacion" />
            <TextInput source="modelo" />
            <TextInput source="potencia_cv" />
            <TextInput source="plazas" />
            <TextInput source="puertas" />
            <TextInput source="consumo_medio" />
            <TextInput source="matricula" />
        </SimpleForm>
    </Create>
);