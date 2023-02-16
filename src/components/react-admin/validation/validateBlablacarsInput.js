// Validations for Blablacars.js:
const validateBlablacarsInput = (values) => {
    const errors = {};
    // Regex:
    const hora_regex = /\b(0[0-9]|1[0-9]|2[0-3])\b:\b(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])\b/;
    // Checks:
    if(!values.customer_id) errors.customer_id = 'Customer is Required';
    if(!values.vehiculo_id) errors.vehiculo_id = 'Vehiculo is Required';
    if(!values.titulo) errors.titulo = 'Titulo is Required';
    if(!values.fecha_inicio_viaje) errors.fecha_inicio_viaje = 'Fecha del Viaje is Required';
    
    if(!values.hora_inicio_viaje) errors.hora_inicio_viaje = 'Hora del Viaje is Required';
    else if(values.hora_inicio_viaje && !hora_regex.test(values.hora_inicio_viaje)) {
        errors.hora_inicio_viaje = 'La Hora debe ser hh:mm';
    }

    if(!values.inicio_ruta) errors.inicio_ruta = 'Origen del Viaje is Required';
    if(!values.destino_ruta) errors.destino_ruta = 'Destino del Viaje is Required';
    if(!values.distancia) errors.distancia = 'Distancia Viaje is Required';
    if(!values.precio) errors.precio = 'Precio del Viaje is Required';
    if(!values.precio_combustible) errors.precio_combustible = 'Precio del Combustible is Required';
    if(!values.plazas_disponibles) errors.plazas_disponibles = 'Plazas Disponibles is Required';
    return errors;
}
export default validateBlablacarsInput;