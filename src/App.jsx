import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet, BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <div>
        <style>{'body { background-color: cornflowerblue ; }'}</style>
      </div>
      <CssBaseline>
        {/* <BrowserRouter> */}
        <Navbar />
        <Outlet />
        <Footer />
        {/* </BrowserRouter> */}
      </CssBaseline>
    </>
  );
}

export default App;
