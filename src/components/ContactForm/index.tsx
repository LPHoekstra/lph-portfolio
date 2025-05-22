import { FormEvent, useState } from "react"
import m from "./index.module.scss"
import emailjs from "@emailjs/browser"

const key = "sXjhxxLpraM2RO7EX" // not sensible

function ContactForm() {
    const [nameError, setNameError] = useState<boolean>(false)
    const [emailError, setEmailError] = useState<boolean>(false)
    const [errorMsg, setErrorMsg] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget

        const emailElement = form.elements.namedItem("email") as HTMLInputElement
        const nameElement = form.elements.namedItem("name") as HTMLInputElement

        let errorMsg: null | string = null

        // name validation
        if (nameElement.value === "") {
            setNameError(true)
            errorMsg = "Nom invalide"
        } else if (nameError) {
            setNameError(false)
        }

        // email validation
        const regExpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!regExpEmail.test(emailElement.value)) {
            setEmailError(true)
            errorMsg = "Email invalide"
        } else if (emailError) {
            setEmailError(false)
        }

        if (errorMsg) {
            setErrorMsg(errorMsg)
            return
        }

        const serviceID = "default_service"
        const templateID = "template_vl8mlbu"

        // send email with form component
        emailjs.sendForm(serviceID, templateID, form, key)
            .then(response => {
                console.log(response)
                form.reset()
                setSuccess("Email envoyé !")
                errorMsg === null && setErrorMsg("")
            })
            .catch(error => {
                console.log(error)
                setErrorMsg(JSON.stringify(error)) // check docs if it is correct
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
                className={`${m.form__input} ${nameError && m.form__input_error}`}
            />
            <label htmlFor="email">Email</label>
            <input type="email"
                name="from_email"
                id="email"
                autoComplete="email"
                placeholder="Adresse email"
                className={`${m.form__input} ${emailError && m.form__input_error}`}
            />
            <label htmlFor="message">Message</label>
            <textarea name="message"
                id="message"
                placeholder="Votre message"
            />
            {errorMsg != null &&
                <span className={m.form__errorMsg}>{errorMsg}</span>
            }
            {success &&
                <span className={m.form__successMsg}>{success}</span>
            }
            <button type="submit" className={m.form__sendBtn}>Envoyer</button>
        </form>
    )
}

export default ContactForm