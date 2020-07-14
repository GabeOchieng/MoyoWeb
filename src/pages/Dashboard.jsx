import React,{useContext} from 'react'
import { AuthContext } from "../context/AuthContext";


export default function Dashboard() {
    const context = useContext(AuthContext);
  const { userDetails } = context;
  console.log(userDetails)
    return (
        <div>
           <h4>Welcome {userDetails.first_name}</h4> 
        </div>
    )
}
