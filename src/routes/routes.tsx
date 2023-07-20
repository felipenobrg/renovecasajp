import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { SofaRetratil } from "../pages/Sofa-retratil"
import { SofaRetro } from "../pages/Sofa-retro"
import { SofasPopulares } from "../pages/Sofas-populares"
import { Poltronas } from "../pages/Poltronas"
import { Camas } from "../pages/Camas"
import { ProdutosEmVine } from "../pages/Produtos-em-vine"
import { Utilidades } from "../pages/Utilidades"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sofaretro" element={<SofaRetro />} />
            <Route path="/sofaretratil" element={<SofaRetratil />} />
            <Route path="/sofaspopulares" element={<SofasPopulares />} />
            <Route path="/poltronas" element={<Poltronas />} />
            <Route path="/camas" element={<Camas />} />
            <Route path="/produtosvine" element={<ProdutosEmVine />} />
            <Route path="/utilidades" element={<Utilidades />} />
        </Routes>
    )
}