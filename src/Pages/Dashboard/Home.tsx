import ApiTokenList from '../../Components/Home/ApiToken';
import TokenKey from '../../Components/Home/GenerateToken';
import axiosInstance from '../../http/HttpConfig';
import { useEffect, useState } from 'react';
import { IApiKey, IErrorDialog } from '../Login/interfaces';
import { Button, Table } from 'react-bootstrap';

function Dashboard() {
const [apiKeys, setApiKeys] = useState<Array<IApiKey>>([]);
const [error, setError] = useState<IErrorDialog>({message:'',show:false,statusCode:0});
//Warning: code repeated
const toggleError = (visible: boolean, message?: string) => {
      setError({show:visible, message: message ?? '', statusCode:200})
}

 const GetApiKeyList = () =>{
  axiosInstance.get('/apikey').then((response) => {
      let data = response.data.data
      console.log(data)
      setApiKeys(data)
      toggleError(false)
  }).catch((ex)=>{
      toggleError(true, ex.response.data)
  })
 }
 
 useEffect(()=>{
    GetApiKeyList()
 },[])

  return (
       <>
       <TokenKey/>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Expire At</th>
          <th>Create At</th>
        </tr>
      </thead>
      <tbody>
        {apiKeys !== undefined && apiKeys.length !== 0 && 
        apiKeys.map((item, index)  => {
          console.log(item)
        return (
        <tr key={index}>
           <ApiTokenList name={item.name} createAt={item.createAt} expireAt={item.expireAt}  />
            <td>
              <Button variant="danger">Revoke</Button>
            </td>
        </tr>)
        }
        
        )}
      </tbody>
    </Table>
       </>
  );
}

export default Dashboard;