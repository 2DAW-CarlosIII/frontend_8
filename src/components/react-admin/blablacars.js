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
    NumberInput,
    required
} from 'react-admin';

import validateBlablacarsInput from './validation/validateBlablacarsInput';

import { useRecordContext} from 'react-admin';
import { useMediaQuery } from '@mui/material';

const blacarFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="customer_id" label="User" reference="customers" />
];

export const BlacarList = () => {
    const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    // JSX:
    return (
    <List filters={blacarFilters} >
        {isSmall ? (
        <SimpleList
            primaryText="%{titulo} %{fecha_inicio_viaje}"
            secondaryText={(record) => record.distancia}
            tertiaryText="%{plazas_disponibles} - %{precio}"
            linkType={(record) => (record.canEdit ? 'edit' : 'show')}
        >
            <EditButton />
        </SimpleList>
        ) : (
        <Datagrid bulkActionButtons={false}>
            <TextField source="id" />
            <ReferenceField source="customer_id" reference="customers" />
            {/* <ReferenceField source="vehiculo_id" reference="vehiculos" /> */}
            <TextField source="titulo" />
            {/* <TextField source="descripcion" /> */}
            <TextField source="fecha_inicio_viaje" />
            <TextField source="hora_inicio_viaje" />
            <TextField source="inicio_ruta" />
            <TextField source="destino_ruta" />
            <TextField source="distancia" />
            <TextField source="precio" />
            <TextField source="precio_combustible" />
            <TextField source="plazas_disponibles" />
            {/* <TextField source="estimacion_duracion" /> */}
            <EditButton />
        </Datagrid>
        )}
    </List>
    );
}
// Edit - Create:
const BlacarTitle = () => {
    const record = useRecordContext();
    // JSX:
    return <span>Blablacar {record ? `"${record.titulo} ${record.fecha_inicio_viaje}"` : ''}</span>;
};

export const BlacarEdit = () => (
    <Edit title={<BlacarTitle />}>
        <SimpleForm validate={validateBlablacarsInput}>
            <TextInput source="id" disabled />
            <ReferenceInput source="customer_id" reference="customers" />
            <ReferenceInput source="vehiculo_id" reference="vehiculos" />
            <TextInput source="titulo" validate={required()} />
            <TextInput source="descripcion" />
            <DateInput source="fecha_inicio_viaje" validate={required()} />
            <TextInput source="hora_inicio_viaje" validate={required()} />
            <TextInput source="inicio_ruta" validate={required()} />
            <TextInput source="destino_ruta" validate={required()} />
            <NumberInput source="distancia" validate={required()} />
            <NumberInput source="precio" validate={required()} />
            <NumberInput source="precio_combustible" validate={required()} />
            <NumberInput source="plazas_disponibles" validate={required()} />
            <TextInput source="estimacion_duracion" />
        </SimpleForm>
    </Edit>
);

export const BlacarCreate = () => (
    <Create>
        <SimpleForm validate={validateBlablacarsInput}>
            <ReferenceInput source="customer_id" reference="customers" />
            <ReferenceInput source="vehiculo_id" reference="vehiculos" />
            <TextInput source="titulo" validate={required()} />
            <TextInput source="descripcion" />
            <DateInput source="fecha_inicio_viaje" validate={required()} />
            <TextInput source="hora_inicio_viaje" validate={required()} />
            <TextInput source="inicio_ruta" validate={required()} />
            <TextInput source="destino_ruta" validate={required()} />
            <NumberInput source="distancia" validate={required()} />
            <NumberInput source="precio" validate={required()} />
            <NumberInput source="precio_combustible" validate={required()} />
            <NumberInput source="plazas_disponibles" validate={required()} />
            <TextInput source="estimacion_duracion" />
        </SimpleForm>
    </Create>
);