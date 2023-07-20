import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { SofaRetratil } from "../pages/Sofa-retratil"
import { SofaRetro } from "../pages/Sofa-retro"
import { SofasPopulares } from "../pages/Sofas-populares"
import { Poltronas } from "../pages/Poltronas"
import { Camas } from "../pages/Camas"
import { ProdutosEmVime } from "../pages/Produtos-em-vime"
import { Utilidades } from "../pages/Utilidades"
import { Moveis } from "../pages/Moveis"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sofaretro" element={<SofaRetro />} />
            <Route path="/sofaretratil" element={<SofaRetratil />} />
            <Route path="/sofaspopulares" element={<SofasPopulares />} />
            <Route path="/poltronas" element={<Poltronas />} />
            <Route path="/moveis" element={<Moveis />} />
            <Route path="/camas" element={<Camas />} />
            <Route path="/produtosvime" element={<ProdutosEmVime />} />
            <Route path="/utilidades" element={<Utilidades />} />
        </Routes>
    )
}