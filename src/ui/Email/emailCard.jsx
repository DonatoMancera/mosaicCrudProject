"use client"
import React from "react"
import Link from "next/link";
import { Card, Button} from "react-bootstrap";
import styled from "styled-components";

const CardLink = styled.a`
    text-decoration: none;
    &:hover{
        color:  #101010; ;
    }
`

export default function page({email}){
    return(
            <Card className="me-3 mb-2">
                <CardLink href={`/Emails/${email.email_id}`}>
                    <Card.Header>{email.name}</Card.Header>
                </CardLink>
                <Card.Body>
                    <Card.Text>
                        correo: {email.email}
                        
                    <br/>
                        phone: {email.phone}
                    <br/>
                        description: ...
                    </Card.Text>
                </Card.Body>
            </Card>
        
    )
}

