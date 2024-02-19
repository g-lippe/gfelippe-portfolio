import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/globalStyles.scss'
import Main from "pages/main";
import Project from "pages/project";


function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/"         element={<Main />} />
        <Route path="/project"  element={<Project />} />
        <Route path="*"         element={<div> Page not found </div>} />
      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes;
