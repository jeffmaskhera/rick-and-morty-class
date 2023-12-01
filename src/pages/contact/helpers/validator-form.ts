import {ContactFormI, ContactFormValidateI} from "./contact-form.interface";


export function validatorForm(values: ContactFormI) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let errors: ContactFormValidateI = {
        name: '',
        lastName: '',
        email: '',
        phone: '',
    };

    //name
    if (!values.name.trim()) {
        errors.name = 'Name is required'
    }


    //lastName
    if (!values.lastName.trim()) {
        errors.lastName = 'Last Name is required'
    }


    //email
    if (!values.email.trim()) {
        errors.email = 'Email is required'
    } else if (!emailRegex.test(values.email)) {
        errors.email = "Invalid email format";
    }

    //phone
    if (!values.phone.trim()) {
        errors.phone = "Phone number ir required"
    } else if (isNaN(Number(values.phone)) || values.phone.length < 10) {
        errors.phone = "Invalid phone number"
    }

    return errors

}