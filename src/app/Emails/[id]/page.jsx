"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "react-bootstrap";
import Button from "./buttons";
import { useRouter, useParams } from "next/navigation";

async function loadEmail(emailId) {
  try {
    const { data } = await axios.get(`/api/emails/${emailId}`);
    return data;
  } catch (error) {
    console.error("Error loading email:", error);
    return null;
  }
}

function Page({ params }) {
  const [emailItem, setEmailItem] = useState(null);
  const router = useRouter();
  const handleDelete = async () => {
    if (confirm("Are you sure want to delete this email?")) {
      try {
        const res = await axios.delete(`/api/emails/${params.id}`);
        if (res.status === 500) {
          router.push("/Emails");
        } else {
          console.error(`Error deleting email: ${res.status} ${res.statusText}`);
        }
      } catch (error) {
        console.error(`Error deleting email: ${error.message}`);
      }
    }
  };

  useEffect(() => {
    async function fetchEmail() {
      if (params.id) {
        const email = await loadEmail(params.id);
        setEmailItem(email);
      }
    }
    fetchEmail();
  }, [params.id]);

  if (!params.id) {
    return (
      <Container className="text-center py-5">
        <Row>
          <Col>
            <Card bg="danger" text="white">
              <CardBody>
                <CardTitle>Email ID is required.</CardTitle>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  if (!emailItem) {
    return (
      <Container className="text-center py-5">
        <Row>
          <Col>
            <Card bg="primary" text="white">
              <CardBody>
                <CardTitle>Loading...</CardTitle>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="text-center py-5">
      <Row>
        <Col>
          <Card bg="light" className="shadow">
            <CardBody>
              <CardTitle>Email Details</CardTitle>
              <hr />
              <CardText>
                <strong>Name:</strong> {emailItem.name}
              </CardText>
              <CardText>
                <strong>Email:</strong> {emailItem.email}
              </CardText>
              <CardText>
                <strong>Phone:</strong> {emailItem.phone}
              </CardText>
              <CardText>
                <strong>Description:</strong> {emailItem.description}
              </CardText>
              <Button emailId={params.id} onDelete={handleDelete} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Page;