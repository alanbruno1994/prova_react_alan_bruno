import { createSlice } from '@reduxjs/toolkit';

type LoginRedux={
  token:string
  expireAtToken:null| Date
  name:string
  user_id:number
  logged:boolean
  email:string
}


const initialName:LoginRedux = {
    token: '',
    expireAtToken:null,
    name: '',
    user_id:0,
    logged:false,
    email:'',    
  };
  
  const loginSlice = createSlice({
    name: 'login',
    initialState: initialName,
    reducers: {//Aqui nao que action precisao tenha o type
      setLogin(state,action) {      
       state=action.payload
      },
      setLogged(state,action)
      {
        state.logged=action.payload
      }
    },
  });
  

  export const  loginActions = loginSlice.actions;
  
  export default loginSlice.reducer;