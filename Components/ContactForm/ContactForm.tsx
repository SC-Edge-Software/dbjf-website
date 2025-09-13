"use client";

import { FormEvent, useState } from "react";

const STATUS_BANNER_SUCCESS_CLASS = "bg-green-600";
const STATUS_BANNER_FAILURE_CLASS = "bg-red-600";

export default function ContactForm() {
    const inputClass = "rounded-md h-7 text-black px-2 w-full text-xs";

    // Status banner
    const [shouldDisplayStatusBanner, displayStatusBanner] = useState(false);
    const [statusText, setStatusText] = useState("");
    const [statusBannerClass, setStatusBannerClass] = useState(STATUS_BANNER_SUCCESS_CLASS);
    const displayStatusBannerEz = (msg: string, didSucceed: boolean) => {
        setStatusText(msg);
        setStatusBannerClass(didSucceed ? STATUS_BANNER_SUCCESS_CLASS : STATUS_BANNER_FAILURE_CLASS);
        displayStatusBanner(true);
    };

    // Form submission handler
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify({
                    name: formData.get("input-name"),
                    email: formData.get("input-email"),
                    subject: formData.get("input-subject"),
                    msg: formData.get("input-message"),
                }),
                headers: {"Content-Type": "application/json"}
            });
            if (response.status === 200) {
                displayStatusBannerEz("Email sent successfully!", true);
            } else {
                let err = await response.json();
                // Extract error text
                while (typeof err !== "string" && "error" in err) {
                    err = err["error"];
                }

                displayStatusBannerEz("Unable to send email from server. Please try again later.", false);
                console.log("Error");
            }
        } catch (err) {
            displayStatusBannerEz("Unable to send email from server. Please try again later.", false);
            console.error(err);
        }    
    }

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
                            
            {/* Status Banner */}
            {shouldDisplayStatusBanner && <div className={`
                w-full
                flex
                justify-between
                items-start
                p-2
                rounded-md
                mb-5
                ${statusBannerClass}
            `}>
                <p className={`
                    w-[85%]
                    text-xs
                    mt-4
                `} style={{ overflowWrap: "break-word" }}>
                    {statusText} 
                </p>

                {/* Close Status Banner Button */}
                <button className="w-[5%]" onClick={() => displayStatusBanner(false)}>X</button>
            </div>}

            {/* Form Fields */}
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
