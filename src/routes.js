import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/globalStyles.scss'
import Main from "pages/main";
import Project from "pages/project";
import CanvasA from "pages/standalone/canvas/canvasA";
import CanvasB from "pages/standalone/canvas/canvasB";


function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/"         element={<Main />} />
        <Route path="/project/:category/:id"  element={<Project />} />
        <Route path="/project/:category/canvasA"  element={<CanvasA />} />
        <Route path="/project/:category/canvasB"  element={<CanvasB />} />
        <Route path="*"         element={<div> Page not found </div>} />
      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes;
