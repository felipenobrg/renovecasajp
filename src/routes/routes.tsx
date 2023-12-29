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
import { ProductDetail } from "../components/ProductCard/ProductDetail"
import {  sofaRetroData } from "../data/Sofa-retro"
import { sofaRetratilData } from "../data/Sofa-retratil"
import { sofasPopularesData } from "../data/Sofas-populares"
import { poltronasData } from "../data/Poltronas"
import { camaData } from "../data/Cama"
import { produtosEmVimeData } from "../data/Produtos-em-vime"
import { moveisData } from "../data/Moveis"
import { utilidadesData } from "../data/Utilidades"
import { Checkout } from "../pages/Checkout"

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
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:productId" element={<ProductDetail products={sofaRetroData} />} /> 
            <Route path="/product2/:productId" element={<ProductDetail products={sofaRetratilData} />} /> 
            <Route path="/product3/:productId" element={<ProductDetail products={sofasPopularesData} />} /> 
            <Route path="/product4/:productId" element={<ProductDetail products={poltronasData} />} /> 
            <Route path="/product5/:productId" element={<ProductDetail products={camaData} />} /> 
            <Route path="/product6/:productId" element={<ProductDetail products={produtosEmVimeData} />} /> 
            <Route path="/product7/:productId" element={<ProductDetail products={moveisData} />} /> 
            <Route path="/product8/:productId" element={<ProductDetail products={utilidadesData} />} /> 
        </Routes>
    )
}