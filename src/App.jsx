import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Componentes propios
import HomePages from "./pages/HomePage";
import Loading from "./components/shared/Loading";
import { ConocenosPage } from "./pages/ConocenosPage";
import { ObrasPage } from "./pages/ObrasPage";
import { DesarrollosPage } from "./pages/DesarrollosPage";
import { DetallePropuestaPage } from "./pages/DetallePropuestaPage";

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
      <Router>
        <Switch>
          <Route exact path="/" component={HomePages} />
          <Route path="/ConocenosPage" component={ConocenosPage} />
          <Route path="/DesarrollosPage" component={DesarrollosPage} />
          <Route path="/DetallePropuestaPage/:id" component={DetallePropuestaPage} />
          <Route path="/ObrasPage" component={ObrasPage} />
          <Route path="*" component={HomePages} />
        </Switch>
      </Router>
    );
  }
}

export default App;
