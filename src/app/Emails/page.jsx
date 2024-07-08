
import React from "react";
import axios from "axios";
import EmailCard from "@/ui/Email/emailCard"
import EmailForm from "@/ui/Email/emailform";

import Header from "@/ui/Email/header"

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
        <>
            <Header/>
            <div className="d-flex flex-row-reverse">
                <EmailForm/>
                <div className="d-flex flex-column mt-3">
                    {emails.map(email => (
                        <EmailCard email={email} key={email.id}/>
                    ))}
                </div>
            </div>
        </>
    );
}

