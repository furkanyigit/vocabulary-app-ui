
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import Dashboard from './template/Dashboard';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Dashboard>
        </Dashboard>
      </GlobalProvider>
    </div>

  );
}


export default App;
