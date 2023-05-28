
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { AboutPage} from './components/pages/AboutPage';
import { ServicePage} from './components/pages/ServicePage';
import { ContactPage} from './components/pages/ContactPage';

function App() {
  return (

    <Routes className="App">
        <Route path='/' element={ <Layout/> }/>
        <Route path='/AboutPage' element={ <AboutPage/> }/>
        <Route path='/ServicePage' element={ <ServicePage/> }/>
        <Route path='/ContactPage' element={ <ContactPage/> }/>
    </Routes>
  );
}

export default App;
