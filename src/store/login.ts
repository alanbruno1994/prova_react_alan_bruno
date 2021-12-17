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
      setLogin(state:LoginRedux,action) {  
        state.token=action.payload.token     
        state.email=action.payload.email
        state.expireAtToken=action.payload.expireAtToken
        state.name=action.payload.name
        state.user_id=action.payload.user_id
        state.logged=action.payload.logged
        localStorage.setItem('loginData',JSON.stringify(action.payload))
      },
      logout(state)
      {      
        state.token=initialLogin.token     
        state.email=initialLogin.email
        state.expireAtToken=initialLogin.expireAtToken
        state.name=initialLogin.name
        state.user_id=initialLogin.user_id
        state.logged=initialLogin.logged    
        localStorage.removeItem('loginData')
      }
    },
  });
  

  export const  loginActions = loginSlice.actions;
  
  export default loginSlice.reducer;