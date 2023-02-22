import Alert from 'react-bootstrap/Alert';
import { IMessageDialog } from '../../Pages/Login/interfaces';

export function AlertMessage({title, message, show}: IMessageDialog) : any{
  if (show) {
    return (
      <Alert variant="danger" show={true} dismissible>
        <Alert.Heading>{title}</Alert.Heading>
        <p>
          {message}
        </p>
      </Alert>
    );
  }
}

