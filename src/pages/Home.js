import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import Api from "../api";

const Home =()=>{
const navigate = useNavigate();
 const [user,setUser] = useState(null);
 const [loading, setLoading] = useState(true);
 const [parcels,setParcels] = useState([]);

     
 const fetchParcels = async ()=>{
     const res = await Api.get("/parcels");
     const data = await res.json();
     setParcels(data.parcels);
     setLoading(false);

 }
  useEffect (()=>{
    const _user = JSON.parse(localStorage.getItem('user'))
    if(typeof _user!== "undefined" || _user !== null){
        setUser(_user);
    }
    fetchParcels();
    if(_user === null){
        navigate("/login")
    }
  },[])
    return(
        <div className="App">
    <h1>Home</h1>
    <h3> Welcome{user?.email}</h3>
        <h3>Parcels</h3>
        {loading ?<h1>Fetching parcels ...</h1>:<ul>
                {parcels.map(()=>{

                    return <li key ={parcels.id}>
                        <h4>{parcels.name}</h4>
                        <p>{parcels.description}</p>

                    </li>
                })}

        </ul>}

        
        </div>
    )

}

export default Home