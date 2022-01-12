import { Route, Routes } from 'react-router-dom';
import './App.css';
import { RouteComponents } from './Data/RouteComponents';
import Layout from './Layout/Layout';
import NotFound from './Pages/404/NotFound';
import SignIn from './Pages/SignIn/SignIn';

function App() {

  const token = false;

  return (
    <div className="App">
      <Routes>
        {
          token ? <Route path="/" element={<SignIn />} /> :
          RouteComponents.map(c=>(
            <Route path={c.path} element={<Layout>{c.element}</Layout>} />
          ))
          
        }
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
