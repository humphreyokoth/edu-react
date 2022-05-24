import React,{useEffect,useState} from "react";
import { Navigate } from "react-router-dom";

const Home =()=>{
 const [user,setUser] = useState(null);


  useEffect (()=>{
    const user = JSON.parse(localStorage.getItem('uset'))
    if(uset){
        setUser(user);
    }else{
        Navigate("/login")
    }
  },[])
    return(
        <div className="App">
    <h1>Home</h1>
    <h3> Welcome{user.email}</h3>

        
        </div>
    )

}

export default Home