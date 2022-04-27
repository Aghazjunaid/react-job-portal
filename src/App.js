import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
    </>
  );
}

export default App;
