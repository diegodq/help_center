import ReactDOM from 'react-dom/client';
import GlobalStyles from './GlobalStyles';
import Router from './Router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyles />
    <Router />
  </>

);