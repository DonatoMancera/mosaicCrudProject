"use client"
import React from "react"
import { Card, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
export default function page({email}){
    return(
            <Card className="me-3">
                <Card.Body>
                    <Card.Title>{email.name}</Card.Title>
                    <Card.Text>
                        phone: {email.phone}
                    <br/>
                        asunto: {email.description}
                    </Card.Text>
                    <Button className="text-light bg-dark">Edit</Button>
                </Card.Body>
            </Card>
    )
}

