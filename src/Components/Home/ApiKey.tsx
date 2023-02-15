import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function ApiKey() {
const [show, setShow] = useState(false);
const [apiKey, setApiKey] = useState<string>() ;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ShowApiKey = () => {
    console.log("teste fsdfsd")
    handleShow()

  }
  const GenerateApiKey = () => {
    setApiKey("your api key here")
    ///call api logic here
    ShowApiKey()
  }
  return (
  <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Token</Modal.Title>
        </Modal.Header>
        <Modal.Body>Be sure to save the passkey below. You will not be able to see her again.</Modal.Body>
        <Form.Group className="mb-3">
        <Form.Control placeholder="Disabled input" value={apiKey} disabled />
      </Form.Group>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Revoke
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Generate
          </Button>
        </Modal.Footer>
      </Modal>
        <Button variant="primary" onClick={GenerateApiKey}>
        User Token
      </Button>
    </>
  );
}

export default ApiKey;
