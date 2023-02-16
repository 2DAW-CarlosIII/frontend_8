// Validate customers.js:
const validateCustomersInput = (values) => {
    const errors = {};
    // Checks:
    if(!values.user_id) errors.user_id = 'Username is Required';

    if(!values.first_name) errors.first_name = 'First Name is Required';
    else if(values.first_name && !/^[a-z]*$/i.test(values.first_name)) {
        errors.first_name = 'El Nombre Debe Contener solo Letras.';
    }

    if(!values.last_name) errors.last_name = 'Last Name is Required';
    else if(values.last_name && !/^[a-z]*$/i.test(values.last_name)) {
        errors.last_name = 'El Apellido Debe Contener solo Letras.';
    }

    if(!values.country) errors.country = 'Country is Required';

    if(!values.telefono) errors.telefono = 'Telefono is Required';
    else if(values.telefono && !/^(\+\d{0,3})?\s?\d{3}\s?\d{3}\s?\d{3}$/.test(values.telefono)) {
        errors.telefono = 'El Telefono Debe ser +34 662 468 091  +32662468091 662 468 091 662468091';
    }

    if(!values.dni) errors.dni = 'DNI is Required';
    else if(values.dni && !/^\d{8}[a-z]$/i.test(values.dni)) {
        errors.dni = 'Debes introducir un DNI 01234567-Z, 01.234.567-Z, A-1.234.567-Z, A-1234567-Z';
    }

    return errors;
}
export default validateCustomersInput;