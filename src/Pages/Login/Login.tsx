import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ILoginRequest } from './interfaces';
import axiosInstance from '../../http/axios';

function LoginPage() {

const initialValues :ILoginRequest = {
  email: "",
  password: "",
};
const [values, setValues] = useState(initialValues);

const handleInputChange = (e : any) => {
  const { name, value } = e.target;

  setValues({
    ...values,
    [name]: value,
  });
};
const login = async () => {
 const response = await axiosInstance.post('/login', values)
 console.log(response)
}
  return (
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" value={values.email} name="email" onChange={handleInputChange} placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={values.password} name="password" onChange={handleInputChange} placeholder="Password" />
      </Form.Group>
      <Button variant="primary" onClick={login}>
        Login
      </Button>
    </Form>
  );
}

export default LoginPage;