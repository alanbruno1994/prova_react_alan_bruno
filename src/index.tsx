import ReactDOM from 'react-dom';
import App from '@src/App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './globalStyled';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <GlobalStyle/>
  </BrowserRouter>,
  document.getElementById('root')
);


