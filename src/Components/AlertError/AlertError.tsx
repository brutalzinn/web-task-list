import Alert from 'react-bootstrap/Alert';
import { IErrorDialog } from '../../Pages/Login/interfaces';

export function AlertError({message, show, statusCode}: IErrorDialog) : any{
  if (show) {
    return (
      <Alert variant="danger" show={true} dismissible>
        <Alert.Heading>Ohhhh lord. You got a error.</Alert.Heading>
        <p>
          {message}
        </p>
      </Alert>
    );
  }
}

