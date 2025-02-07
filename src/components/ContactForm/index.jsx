import { useState } from "react"
import m from "./index.module.scss"
import emailjs from "@emailjs/browser"

const publicKey = "sXjhxxLpraM2RO7EX"

function ContactForm() {
    const [error, setError] = useState({})
    const [success, setSuccess] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.email.value)

        // email validation
        const regExpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!regExpEmail.test(e.target.email.value)) {
            setError({email: "Email invalide"})
            return
        }

        // name validation
        if (e.target.name.value === "") {
            setError({name: "Nom invalide"})
            return
        }

        const serviceID = "default_service"
        const templateID = "template_vl8mlbu"
        
        // send email with form component
        emailjs.sendForm(serviceID, templateID, e.target, publicKey)
        .then(response => {
            console.log(response)
            e.target.reset()
            setSuccess("Email envoyé !")
            error && setError({})
        })
        .catch(error => {
            console.log(error)
            setError(JSON.stringify(error))
        })

    }

    return (
        <form onSubmit={handleSubmit} className={m.form}>
            <label htmlFor="name">Nom</label>
            <input type="text"
                name="from_name"
                id="name"
                autoComplete="name"
                placeholder="Nom"
                className={`${m.form__input} ${error?.name && m.form__input_error}`}
            />
            <label htmlFor="email">Email</label>
            <input type="email"
                name="from_email"
                id="email"
                autoComplete="email"
                placeholder="Adresse email"
                className={`${m.form__input} ${error?.email && m.form__input_error}`}
            />
            <label htmlFor="message">Message</label>
            <textarea name="message"
                id="message"
                placeholder="Votre message"
            />
            {error && 
                <span className={m.form__errorMsg}>{Object.values(error)[0]}</span>
            }
            {success &&
                <span className={m.form__successMsg}>{success}</span>
            }
            <button type="submit" className={m.form__sendBtn}>Envoyer</button>
        </form>
    )
}

export default ContactForm