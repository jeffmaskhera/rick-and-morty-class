import React, {useState, useEffect, useContext} from 'react'
import {ContactFormI, ContactFormValidateI} from "./helpers/contact-form.interface";
import {validatorForm} from "./helpers/validator-form";
import Spinner from "../../components/spinner/spinner";
import {Store} from "../../Context";


const initialContactForm: ContactFormI = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    characters: [],
}

const initialErrors: ContactFormValidateI = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
}




const ContactUs =()=> {

    const context = useContext(Store);
    const { favoriteCharacters } = context

    const [form, setForm] = useState<ContactFormI>(initialContactForm)
    const [errors, setErrors] = useState<ContactFormValidateI>(initialErrors)
    const [showSpinner, setShowSpinner] = useState<boolean>(false)

    const handleChange =(e: any)=> {
        const name = e?.target?.name
        const value = e?.target?.value
        setForm({
            ...form,
            [name]: value,
        })
    }


    const sendInfo =()=> {
        setShowSpinner(true)
        const errorValidation = validatorForm(form)
        setErrors(errorValidation)

        if (Object.values(errorValidation).every((value) => value === '')) {
            setTimeout(()=> {
                setShowSpinner(false)
                console.log("send info", form)
            }, 3000)

        } else {
            setShowSpinner(false)
        }

    }

    const getCharacters =()=> {
        setForm((prevForm) => ({
            ...prevForm,
            characters: favoriteCharacters
        }));
    }

    useEffect(()=> {
        getCharacters()
    }, [])


    return (
        <div>
            Contact us

            <div className="contact-page">

                {
                    showSpinner && <Spinner/>
                }


                {
                    form.characters.length > 0 ?
                        <div className="contact-page__grid-form">

                            <div className="grid-row10">
                                <input
                                    type="text"
                                    value={form?.name}
                                    name="name"
                                    className="input-text"
                                    placeholder="Your name"
                                    onChange={(e)=> handleChange(e)}
                                />
                                <p>{errors.name}</p>
                            </div>

                            <div className="grid-row10">
                                <input
                                    type="text"
                                    value={form?.lastName}
                                    name="lastName"
                                    className="input-text"
                                    placeholder="Your last name"
                                    onChange={(e)=> handleChange(e)}
                                />
                                <p>{errors.lastName}</p>
                            </div>

                            <div className="grid-row10">
                                <input
                                    type="text"
                                    value={form?.email}
                                    name="email"
                                    className="input-text"
                                    placeholder="Your email"
                                    onChange={(e)=> handleChange(e)}
                                />
                                <p>{errors.email}</p>
                            </div>

                            <div className="grid-row10">
                                <input
                                    type="text"
                                    value={form?.phone}
                                    name="phone"
                                    className="input-text"
                                    placeholder="Your phone number"
                                    onChange={(e)=> handleChange(e)}
                                />
                                <p>{errors.phone}</p>
                            </div>

                            <p>
                                {
                                    form && form.characters.length >= 0 &&
                                    form.characters.map((item, index)=> {
                                        return (
                                            <span
                                                key={index}
                                            >
                                        {index > 0 && ', '}
                                                {item.name}
                                    </span>
                                        )
                                    })
                                }
                            </p>


                            <button className="button-style" onClick={sendInfo}>Enviar</button>



                        </div>
                        :
                        <h2>Para ver este formulario necesitas tener personajes guardados</h2>
                }







            </div>

        </div>
    )
}

export default ContactUs;