// function Validation(values) {
//     let error ={};

//     const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     const password_pattern  = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/

//     if (values.first_name === ""){
//         error.first_name  = "FirstName should not be empty"
//     }
// else {
//         error.first_name= ""
//     }

    
//     if (values.last_name === ""){
//         error.last_name  = "lastName should not be empty"
//     }
// else {
//         error.last_name= ""
//     }




//     if (values.email_address === ""){
//         error.email_address  = "Name should not be empty"
//     }

//     else if(!email_pattern.test(values.email_address)){
//         error.email_address = "Email Did not match"
//     } else {
//         error.email_address= ""
//     }

//     if (values.password === ""){
//         error.password  = "password should not be empty"
//     }

//     else if(!password_pattern.test(values.password)){
//         error.password = "password Did not match"
//     } else {
//         error.password= ""
//     }

//     return error;



// }
// export default Validation;

function Validation(values) {
    let errors = {};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/

    if (!values.first_name.trim()) {
        errors.first_name = "First name should not be empty"
    } else {
        errors.first_name = ""
    }

    if (!values.last_name.trim()) {
        errors.last_name = "Last name should not be empty"
    } else {
        errors.last_name = ""
    }

    if (!values.email_address.trim()) {
        errors.email_address = "Email should not be empty"
    } else if (!email_pattern.test(values.email_address)) {
        errors.email_address = "Invalid email format"
    } else {
        errors.email_address = ""
    }

    if (!values.password.trim()) {
        errors.password = "Password should not be empty"
    } else if (!password_pattern.test(values.password)) {
        errors.password = "Password must contain at least one letter, one number, and be at least 8 characters long"
    } else {
        errors.password = ""
    }

    return errors;
}

export default Validation;
