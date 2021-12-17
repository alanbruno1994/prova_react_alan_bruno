import { createSlice } from '@reduxjs/toolkit';

type LoginRedux={
  token:string
  expireAtToken:string
  name:string
  user_id:number
  logged:boolean
  email:string
}


const initialLogin:LoginRedux = {
    token: '',
    expireAtToken:'',
    name: '',
    user_id:0,
    logged:false,
    email:'',    
  };
  
  const loginSlice = createSlice({
    name: 'login',
    initialState: localStorage.getItem('loginData') ? JSON.parse(''+localStorage.getItem('loginData')) : initialLogin,
    reducers: {//Aqui nao que action precisao tenha o type
      setLogin(state,action) {       
        state=action.payload
        localStorage.setItem("loginData",JSON.stringify(action.payload))
      },
      logout(state)
      {      
        state=initialLogin
        localStorage.removeItem('loginData')
      }
    },
  });
  

  export const  loginActions = loginSlice.actions;
  
  export default loginSlice.reducer;