import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

//Componentes propios
import HomePages from "./pages/HomePage";
import Loading from "./components/Loading";
import { ConocenosPage } from "./pages/ConocenosPage";
import { ObrasPage } from "./pages/ObrasPage";
import { PropuestasPage } from "./pages/PropuestasPage";
import DetallePropuestaPage from "./pages/DetallePropuestaPage";

function App() {
  //Seccion Contenido
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const resetScrollPosition = () => {
      window.scrollTo(0, 0);
    };
    // Restablecer la posición del scroll cuando se carga una nueva página
    resetScrollPosition();
  }, []);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/ConocenosPage" element={<ConocenosPage />} />
        <Route path="/PropuestasPage" element={<PropuestasPage />} />  
        <Route path="/DetallePropuestaPage/:id" element={<DetallePropuestaPage/>} />  
        <Route path="/ObrasPage" element={<ObrasPage />} />
        <Route path="*" element={<HomePages />} />
      </Routes>
    );
  }
}

export default App;
