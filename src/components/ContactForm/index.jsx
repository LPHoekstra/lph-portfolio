import { useState } from "react"
import m from "./index.module.scss"


function ContactForm() {
    const [formData, setFormData] = useState()

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({ ...formData, [name]: value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        console.log(e.target)
    }

    return (
        <form onSubmit={handleSubmit} className={m.form}>
            <label htmlFor="name">Nom</label>
            <input type="text" name="name" id="name" autoComplete="name" onChange={handleChange}/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" autoComplete="email" onChange={handleChange} />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" onChange={handleChange} />
            <button type="submit" className={m.form__sendBtn}>Envoyer</button>
        </form>
    )
}

export default ContactForm