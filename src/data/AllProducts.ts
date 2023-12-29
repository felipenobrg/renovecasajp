import { camaData} from "./Cama"
import { moveisData} from "./Moveis"
import { poltronasData } from "./Poltronas"
import { produtosEmVimeData } from "./Produtos-em-vime"
import { sofaRetratilData } from "./Sofa-retratil"
import { sofaRetroData } from "./Sofa-retro"
import { sofasPopularesData } from "./Sofas-populares"
import { utilidadesData } from "./Utilidades"

export const AllProducts = [
    ...camaData,
    ...moveisData,
    ...poltronasData,
    ...produtosEmVimeData,
    ...sofaRetratilData,
    ...sofaRetroData,
    ...sofasPopularesData,
    ...utilidadesData,
]
