import LoginPanel from "./components/Login/Login";
import Register from "./components/Register/Register"; // Asegúrate de que la ruta coincida con donde guardaste el archivo
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
export default App;