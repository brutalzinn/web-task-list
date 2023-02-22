import { IApiKey } from '../../Pages/Login/interfaces';


function ApiToken({name, createAt, expireAt} : IApiKey) {
 return (
        <>
          <td>{name}</td>
          <td colSpan={2}>{createAt}</td>
          <td>{expireAt}</td>
        </>)
}
export default ApiToken;
