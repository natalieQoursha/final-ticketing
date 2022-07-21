import React, { useState,useEffect } from 'react'
import axios from 'axios'
import SearchBar from '../components/SearchBar'
const Test = () => {
  
    const formInfo={
      username:"Bill123",
      password:"mypassword"
    }

    const submitUser = (e)=> {
      e.preventDefault()
      axios.post("http://localhost:5000/api/user/all-users", formInfo,{
        headers:{
          'Content-type':'application/json'
        },
      }).then(res => console.log(res))
    }
      
  

  
    const [users,setUsers] = useState()

    useEffect(() => {
        const fetchUsers = () => {
          axios.get("http://localhost:5000/api/ticket/all-tickets").then((res) => {
            setUsers(res.data);
          });
        };
        fetchUsers();
      }, []);
  return (
        <div className='testPage'>


<button onClick={submitUser}>Submit</button>
<table id="myTable1">
          <thead>
            <tr>
            <th>Ticket_ID</th>
              <th>Product_Types</th>
              <th>Ticket_Type</th>
              <th>Created_On</th>
              <th>Status</th>
              <th>Sevirity</th>

            </tr>
          </thead>
          {users &&
            users.map((element) => {
              return(
                <>
                
          <tbody>
            <td>{element.Ticket_ID}</td>
            <td>{element.Product_Types}</td>
            <td>{element.Ticket_Type}</td>
            <td>{element.Created_On}</td>
            <td>{element.Status}</td>
            <td>{element.Sevirity}</td>
          </tbody>
                </>
              )
            })}
                    </table>

        </div>
  )
}

export default Test