// function Validation(values) {
//     let error ={};

//     const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     const password_pattern  = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/

//     if (values.email_address === ""){
//         error.email_address  = "Email should not be empty"
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
    let error = {};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

    if (!values || typeof values !== 'object') {
        error.general = "Invalid input";
        return error;
    }

    if (!values.email_address) {
        error.email_address = "Email should not be empty";
    } else if (!email_pattern.test(values.email_address)) {
        error.email_address = "Invalid email format";
    }

    if (!values.password) {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password must contain at least one letter, one number, and be at least 8 characters long";
    }

    return error;
}

export default Validation;
