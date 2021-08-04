import logo from './logo.svg';
import './App.css';
import useSettings from './hooks/useSettings'
function App() {
  let settings = useSettings()
  console.log("in app",settings)
  return (
    <div className="App">
     <h1>Hello</h1>
    </div>
  );
}

export default App;
