import { useEffect } from "react";
import HeaderBasico from "../components/shared/HeaderBasico"
import SeccionDesarrollos from "../components/SeccionDesarrollos"

export const DesarrollosPage = () => {
  useEffect(() => {
    const resetScrollPosition = () => {
      window.scrollTo(0, 0);
    };
    // Restablecer la posición del scroll cuando se carga una nueva página
    resetScrollPosition();
  }, []);
  return (
      <div className="w-full h-full relative">
        <HeaderBasico></HeaderBasico>
        <SeccionDesarrollos propuestas={99} />
        <small className="absolute w-20 h-20 bg-black rounded-full -bottom-10 -right-10"></small>
      </div>


  )
}
