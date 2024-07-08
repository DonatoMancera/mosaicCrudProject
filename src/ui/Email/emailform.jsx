'use client'
import { useState} from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Form, Button } from "react-bootstrap";

export default function EmailForm(){

    const [Email, setEmail] = useState({
        name: "",
        email: "",
        phone: "",
        description: ""
    });
    
    const router = useRouter();

    const handleChange  = (event) =>{
        setEmail({
            ... Email,
            [event.target.name]: event.target.value
        })
    }


    const   handleSumbit = async (event) =>{
        
        event.preventDefault();
        try {
            const res = await axios.post('/api/emails', Email);
            console.log(res.data);
            router.push('/Emails')
        } catch (error) {
            console.error(error);
        }
    }

    return (
            <Form action="" className="container-md mt-4 text-bg-dark rounded" 
                onSubmit={handleSumbit}>
            <Form.Group>
                <Form.Label htmlFor="fullName" className="mt-3">Full Name</Form.Label>
                <Form.Control 
                type="text" 
                name="name" 
                id="name" 
                onChange={handleChange} 
                />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="email" className="">Email</Form.Label>
                <Form.Control 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Add email" 
                className="" 
                onChange={handleChange} 
                />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="phone" className="">Phone</Form.Label>
                <Form.Control 
                type="tel" 
                name="phone" 
                id="phone" 
                className="" 
                onChange={handleChange} 
                />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="description" className="">Description</Form.Label>
                <Form.Control
                as="textarea" 
                rows={3} 
                name="description" 
                id="description" 
                className="" 
                onChange={handleChange}
                />
            </Form.Group>
            <Button type="submit" className="mt-3 mb-3 text-light bg-dark">
                Submit
            </Button>
            </Form>
    )
}