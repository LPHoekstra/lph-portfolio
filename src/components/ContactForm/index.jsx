import { useState } from "react"
import m from "./index.module.scss"


function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [error, setError] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // email validation
        const regExpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!regExpEmail.test(formData.email)) {
            setError({email: "Email invalide"})
            return
        }

        // name validation
        if (formData.name === "") {
            setError({name: "Nom invalide"})
            return
        }

        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit} className={m.form}>
            <label htmlFor="name">Nom</label>
            <input type="text"
                name="name"
                id="name"
                autoComplete="name"
                placeholder="Nom"
                onChange={handleChange}
                className={`${m.form__input} ${error?.name && m.form__input_error}`}
            />
            <label htmlFor="email">Email</label>
            <input type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Adresse email"
                onChange={handleChange}
                className={`${m.form__input} ${error?.email && m.form__input_error}`}
            />
            <label htmlFor="message">Message</label>
            <textarea name="message"
                id="message"
                placeholder="Votre message"
                onBlur={handleChange}
            />
            {error && 
                <span className={m.form__errorMsg}>{Object.values(error)[0]}</span>
            }
            <button type="submit" className={m.form__sendBtn}>Envoyer</button>
        </form>
    )
}

export default ContactForm