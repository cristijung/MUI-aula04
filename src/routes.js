import Header from "components/Header";
import Boxx from "pages/Boxx";
import BtnPage from "pages/BtnPage";
import Cards from "pages/Cards";
import Costumization from "pages/Costumization";
import Error from "pages/Error";
import Formulario from "pages/Formulario";
import Grid from "pages/Grids";
import Home from "pages/Home";
import Image from "pages/Image";
import Menu from "pages/Menu";
import Tabless from "pages/Tabless";
import Theme from "pages/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return(
        <>
        <BrowserRouter>
            <Header />
            <Menu />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/Costumization' element={<Costumization/>}/>
                    <Route path='/Grids' element={<Grid/>}/>
                    <Route path='/BtnPage' element={<BtnPage/>}/>
                    <Route path='/Cards' element={<Cards/>}/>
                    <Route path='/Boxx' element={<Boxx/>}/>
                    <Route path='/Formulario' element={<Formulario/>}/>
                    <Route path='/Image' element={<Image/>}/>
                    <Route path='/Tabless' element={<Tabless/>}/>
                    <Route path='/Theme' element={<Theme/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
        
        </BrowserRouter>
        </>
    );
}
export default AppRoutes;