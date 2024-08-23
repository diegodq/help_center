import ReactDOM from 'react-dom/client';
import GlobalStyles from './GlobalStyles';
import Router from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyles />
    <Router />
  </>
  
);