"use client";

import { FormEvent } from "react";

export default function ContactForm() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        // TODO: Send email
        console.log(formData);
    }

    const inputClass = "rounded-md h-7 text-black px-2 w-full text-xs";

    return (
        <form onSubmit={onSubmit} className={`
            bg-dbjf-dark-gray 
            flex 
            flex-col 
            justify-between 
            items-center
            space-y-4 
            w-full 
            max-w-[450px]
            rounded-lg 
            shadow-xl 
            px-2
            py-4`}>
            <input name="input-name" type="text" placeholder="Name" className={inputClass} required />
            <input name="input-email" type="email" placeholder="Email" className={inputClass} required />
            <input name="input-subject" type="text" placeholder="Subject" className={inputClass} required />
            <textarea name="input-message" placeholder="Message" required className={`
                ${inputClass}
                !min-h-[150px]
                py-2`} />
            <button type="submit" className={`
                bg-dbjf-blue 
                text-dbjf-dark-gray 
                border-2
                border-dbjf-blue
                hover:bg-dbjf-gray
                hover:text-white
                hover:border-white
                duration-100
                px-5 
                rounded-md 
                !mt-6`}>
                Submit
            </button>
        </form>
    );
}
