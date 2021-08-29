import logo from './logo.svg';
import './App.css';
import useSettings from './hooks/useSettings'
import routes,{renderRoutes} from './routes'
import {Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import { AuthProvider } from './contexts/AuthContext';

let history = createBrowserHistory();

function App() {

  let settings = useSettings()
  console.log("in app",settings)
  return (
     <Router history={history} >
       <AuthProvider>
          {renderRoutes(routes)}
       </AuthProvider>
     
     </Router>
  );
}

export default App;
