import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IError, ILoginRequest } from './interfaces';
import axiosInstance from '../../http/axios';
import { useNavigate } from 'react-router-dom';
import { AlertError } from '../../Components/AlertError/AlertError';

function LoginPage() {
  const navigate = useNavigate()

const initialValues :ILoginRequest = {
  email: "",
  password: "",
};
const [values, setValues] = useState(initialValues);
const [error, setError] = useState<IError>({message:'',show:false,statusCode:0});

const handleInputChange = (e : any) => {
  const { name, value } = e.target;

  setValues({
    ...values,
    [name]: value,
  });
};
const toggleError = (visible: boolean, message?: string) => {
      setError({show:visible, message: message ?? '', statusCode:200})
}
const login =  () => {
  axiosInstance.post('/login', values).then((response) => {
        localStorage.setItem("AccessToken", response.data.AccessToken);
      toggleError(false)
        navigate('/dashboard')
  }).catch((ex)=>{
      console.log(ex)
      toggleError(true, ex.response.data)
  })
}
  return (
      <Form>
      <AlertError message={error.message} show={error.show} statusCode={error.statusCode}/>
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