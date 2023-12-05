// import React from 'react'
import { useEffect, useState } from 'react';
import { Table, Form, Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';

import Message from '../components/Message';
import Loader from '../components/Loader';
import { useProfileMutation } from '../slices/usersApiSlice';
// import { useGetMyOrdersQuery } from '../slices/ordersApiSlice';
import { setCredentials } from '../slices/authSlice';
// import { set } from 'mongoose';

const ProfileScreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();

    const { userInfo } = useSelector(state => state.auth);

    useEffect(() => {
        if (userInfo) {
            setName(userInfo.name);
            setEmail(userInfo.email);
        }
    }, [userInfo, userInfo.name, userInfo.email]);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('submit')
    }

  return (
    <Row>
        <Col md={3}>
            <h2>User Profile</h2>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name' className='my-2'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='name'
                        palceholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='email' className='my-2'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        palceholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>


                <Form.Group controlId='password' className='my-2'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        palceholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='confirmPassword' className='my-2'>
                    <Form.Label> Confirm Password</Form.Label>
                    <Form.Control
                        type='password'
                        palceholder='Enter confirm password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className='my-2'>Update</Button>
            </Form>
        </Col>
        <Col md={9}>column</Col>

    </Row>
  )
}

export default ProfileScreen