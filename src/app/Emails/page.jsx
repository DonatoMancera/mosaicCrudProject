import React from "react";
import axios from "axios";
import EmailCard from "@/ui/Email/emailCard"
import EmailForm from "@/ui/Email/emailform";
async function loadEmails() {
    try {
        const { data } = await axios.get('http://localhost:3000/api/emails');
        return data;
    } catch (error) {
        console.error('Error loading emails:', error);
        return [];
    }
}

export default async function Page() {
    const emails = await loadEmails();

    return (
        <div className="mt-4">
            <div className="contactContainer d-flex flex-column">
                <h1 className="poppins-bold fw-bold">YOUR EMAILS</h1>
                <h1 className="poppins-light">DO YOUT NEED HELP?</h1>
            </div>
            <EmailForm/>
            <div className="d-flex container-md mt-3">
                {emails.map(email => (
                    <EmailCard email={email} key={email.id}/>
                ))}
            </div>
            
        </div>
    );
}