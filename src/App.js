// Aula sobre router. Carlao, agosto/2024.

import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";

const pagina = window.location.pathname === '/' ? <Inicio /> : <SobreMim />

function App() {
  return pagina;
}

export default App;

