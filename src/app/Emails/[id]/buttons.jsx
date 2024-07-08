import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ButtonComponent({ emailId, onDelete }) {
  return (
    <>
      <Button href={`/Emails/edit/${emailId}`} variant="dark" className="me-2">
        Edit
      </Button>
      <Button variant="danger" onClick={onDelete}>
        Delete
      </Button>
    </>
  );
}