
import Api from "../api/";

const loginUser = async(data)=>{
 const res = await Api.authLogin(data);
 const resData = await res.json();
 console.log(resData)


};


const registerUser = async (data)=>{

    const res = await Api.authRegister(data)

    const resData =await res.json()
    console(resData)
}

export const authService ={
loginUser,
registerUser
}


