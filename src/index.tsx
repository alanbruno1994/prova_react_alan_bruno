import ReactDOM from 'react-dom';
import App from '@src/App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './globalStyled';
import { Provider } from 'react-redux';
import store from '@store/index';

ReactDOM.render(  
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <GlobalStyle/>    
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


