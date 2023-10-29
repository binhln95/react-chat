import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import useLogin from './useLogin';

export default function Login() {
  const props = useLogin();
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" onChange={(e) => props.setName(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="button" onClick={props.SubmitForm} > Submit</Button>
    </Form>
  )
}
