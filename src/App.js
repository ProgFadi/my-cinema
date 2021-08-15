import logo from './logo.svg';
import './App.css';
import useSettings from './hooks/useSettings'
import {renderRoutes} from './routes'
import {Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import { AuthProvider } from './contexts/AuthContext';
function App() {
  let settings = useSettings()
  let history = createBrowserHistory();
  console.log("in app",settings)
  return (
     <Router history={history} >
       <AuthProvider>
       {renderRoutes()}
       </AuthProvider>
     
     </Router>
  );
}

export default App;
