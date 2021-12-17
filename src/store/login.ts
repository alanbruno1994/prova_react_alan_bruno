import { createSlice } from '@reduxjs/toolkit';


const initialName = {
    token: '',
  };
  
  const loginSlice = createSlice({
    name: 'login',
    initialState: initialName,
    reducers: {//Aqui nao que action precisao tenha o type
      setToken(state,action) {
        state.token=action.payload
      }
    },
  });
  

  export const nameActions = loginSlice.actions;
  
  export default loginSlice.reducer;