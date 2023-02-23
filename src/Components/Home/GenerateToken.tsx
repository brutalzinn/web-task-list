import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axiosInstance from '../../http/HttpConfig';
import { IErrorDialog, ILink } from '../../Pages/Login/interfaces';

function TokenKey() {
const [show, setShow] = useState(false);
const [apiKey, setApiKey] = useState<string>();
const [error, setError] = useState<IErrorDialog>({message:'',show:false,statusCode:0});
//Warning: code repeated
const toggleError = (visible: boolean, message?: string) => {
      setError({show:visible, message: message ?? '', statusCode:200})
}

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const ShowApiKey = () => {
  handleShow()
}

const GenerateApiKey = () => {
///call api logic here
 axiosInstance.post('/apikey/generate').then((response) => {
      let data = response.data.accesstoken
      console.log(data)
      toggleError(false)
  }).catch((ex)=>{
      toggleError(true, ex.response.data)
  })
  setApiKey("click on generate button to confirm.")
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
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Generate
          </Button>
        </Modal.Footer>
      </Modal>
        <Button variant="primary" onClick={GenerateApiKey}>
         New API Token
      </Button>
    </>
  );
}

export default TokenKey;
