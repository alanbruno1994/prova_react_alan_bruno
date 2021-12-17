import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '@store/login';

const store = configureStore({
  reducer: { login: loginReducer},
});

export default store;