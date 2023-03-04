import 'antd/dist/reset.css';
import './styles/App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes/Routes";

function App() {
  const isAuthenticated = false; 
  return (
    <BrowserRouter>
    <Routes isAuthenticated={isAuthenticated} />
  </BrowserRouter>
  );
}

export default App;
