import { IApiKey } from '../../Pages/Login/interfaces';


function ApiToken({name, createAt, expireAt} : IApiKey) {
 return (
        <>
          <td>{name}</td>
          <td>{createAt}</td>
          <td>{expireAt}</td>
        </>)
}
export default ApiToken;
