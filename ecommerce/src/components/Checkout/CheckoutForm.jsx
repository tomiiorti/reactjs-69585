import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function CheckoutForm({ handleSubmit }) {
  return (
    <div className='d-flex justify-content-center mt-5'>
      <Form className='w-50' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" defaultValue='tomasorti@gmail.com' required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control defaultValue='Tomas Orti' required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control defaultValue='+541132451262' required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Comprar
        </Button>
      </Form>
    </div>
  );
}
