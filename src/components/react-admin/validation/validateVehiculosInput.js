// Validacion de Vehiculos.js:
const validateVehiculosInput = (values) => {
    const errors = {};
    if(!values.customer_id) errors.customer_id = 'Customer is Required';
    if(!values.combustible) errors.combustible = 'Combustible is Required';
    if(!values.modelo) errors.modelo = 'Modelo is Required';
    if(!values.plazas) errors.plazas = 'Plazas is Required';
    if(!values.consumo_medio) errors.consumo_medio = 'Consumo Medio is Required';
    
    if(!values.matricula) errors.matricula = 'Matricula is Required';
    else if(values.matricula && !/^[0-9]{4}[a-z]{3}$/i.test(values.matricula)) {
        errors.matricula = 'La Matricula Debe Contener 4 Numeros y 3 Letras';
    }
    return errors;
}
export default validateVehiculosInput;