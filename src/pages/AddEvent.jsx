import React from 'react'
import { Form, Button, Container, FloatingLabel, Col, Card } from 'react-bootstrap'
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import * as yup from "yup"
import { addEvent } from '../redux/slice/eventSlice'

const AddEvent = () => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            title: "",
            type: "",
            sDate: "",
            eDate: "",
            desc: "",
            handler: "",
            organization: "",
            subEvent: ""
        },
        validationSchema: yup.object({
            title: yup
                .string()
                .required("Please Enter Something")
                .min(2, "Please Enter 2 or more chars")
                .max(15, "please enter less than 15 chars"),
            type: yup
                .string()
                .required("Please Choose Something"),
            sDate: yup
                .string()
                .required("Please Enter Start Date"),
            eDate: yup
                .string()
                .required("Please Enter End Date"),
            desc: yup
                .string()
                .required("Please Enter Something")
                .min(10, "Please Enter 2 or more chars")
                .max(50, "please enter less than 50 chars"),
            handler: yup
                .string()
                .required("Please Enter Name")
                .min(2, "Please Enter 2 or more chars")
                .max(5, "please enter less than 15 chars"),
            organization: yup
                .string()
                .required("Please Enter Organization Name")
                .min(2, "Please Enter 2 or more chars")
                .max(15, "please enter less than 15 chars"),
            subEvent: yup
                .string()
                .required("Please Enter Sub Event")
        }),
        onSubmit: values => {
            console.log(values);
            dispatch(addEvent(values))
            formik.resetForm();
        }
    })

    return (
        <Container fluid className='form-container py-5'>
            <Col
                className="col-12 col-sm-10 
                            col-md-8 
                            col-lg-6 mx-auto">
                <Card bg="transparent">
                    <Card.Header className="text-center text-light">
                        <h3>Add Event</h3>
                    </Card.Header>
                    <Card.Body>

                        <Form onSubmit={formik.handleSubmit}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Event Name"
                                className="mb-3 text-light"
                            >
                                <Form.Control name="title" value={formik.values.title} onChange={formik.handleChange} className={`input ${formik.errors.title && 'is-invalid'}`} type="text" placeholder="Event Name" />
                            </FloatingLabel>
                            <Form.Group
                                className="mb-3 text-light"
                            >
                                <Form.Select name="type" value={formik.values.type} onChange={formik.handleChange} className={`input ${formik.errors.type && 'is-invalid'}`}>
                                    <option disabled selected>Select Type</option>
                                    <option>Sports</option>
                                    <option>Music</option>
                                    <option>General</option>
                                    <option>Children</option>
                                    <option>School</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3 text-light">
                                <Form.Control name="sDate" value={formik.values.sDate} onChange={formik.handleChange} className={`input ${formik.errors.sDate && 'is-invalid'}`} type="date" />
                            </Form.Group>
                            <Form.Group className="mb-3 text-light">
                                <Form.Control name="eDate" value={formik.values.eDate} onChange={formik.handleChange} className={`input ${formik.errors.eDate && 'is-invalid'}`} type="date" />
                            </Form.Group>
                            <FloatingLabel
                                controlId="floatingDesc"
                                label="Event Description"
                                className="mb-3 text-light"
                            >
                                <Form.Control name="desc" value={formik.values.desc} onChange={formik.handleChange} className={`input ${formik.errors.desc && 'is-invalid'}`} type="text" placeholder="Event Description" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingDesc"
                                label="Event Handled By"
                                className="mb-3 text-light"
                            >
                                <Form.Control name="handler" value={formik.values.handler} onChange={formik.handleChange} className={`input ${formik.errors.handler && 'is-invalid'}`} type="text" placeholder="Event Handlers Name" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingOrg"
                                label="Event Organization"
                                className="mb-3 text-light"
                            >
                                <Form.Control name="organization" value={formik.values.organization} onChange={formik.handleChange} className={`input ${formik.errors.organization && 'is-invalid'}`} type="text" placeholder="Event Organization" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingSub"
                                label="Sub events"
                                className="mb-3 text-light"
                            >
                                <Form.Control name="subEvent" value={formik.values.subEvent} onChange={formik.handleChange} className={`input ${formik.errors.subEvent && 'is-invalid'}`} type="text" placeholder="Sub Events" />
                            </FloatingLabel>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    )
}

export default AddEvent