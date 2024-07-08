"use client"
import React from "react";
import EmailForm from "@/ui/Email/emailform";
import "bootstrap/dist/css/bootstrap.min.css";

export default function page(){
    return(
        <div className="d-flex justify-content-center align-items-center">
            <EmailForm/>
        </div>
        
    )
}