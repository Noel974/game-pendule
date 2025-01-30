import './App.css';
import Routex from "./Routes/RoutesIndex";

// Importation du BrowserRouter depuis react-router-dom pour la gestion des routes
import { BrowserRouter } from 'react-router-dom';

// Importation du Provider pour intégrer Redux avec React
import { Provider } from 'react-redux';

// Importation du store Redux configuré
import { store } from './Redux/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routex />
      </Provider>
    </BrowserRouter>
  );
}

export default App
