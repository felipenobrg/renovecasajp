import CamaDeCasalSimples from "../assets/Camas/CamaDeCasalSimples.webp";
import CamaDeSolteiroSimples from "../assets/Camas/CamaDeSolteiro.webp";
import CamaMolasEnsacadas from "../assets/Camas/CamaDeCasalMolas.webp";
import ColchaoDeMolas from "../assets/Camas/ColchaoDeMolas.webp";
import ColchaoMaisBaseCasal from "../assets/Camas/ColchaoComBaseCasal.webp";
import CamaAuxiliar from "../assets/Camas/CamaAuxiliar.jpg";

import { v4 as uuidv4 } from 'uuid';

export const camaData = [
    {
      productId: uuidv4(),
      imgSrc: CamaDeCasalSimples,
      title: "Cama Box de Casal Topázio",
      price: "549,99",
      oldPrice: "699,99",
      cardValue: "53,99",
      textForWhatsApp: "Olá. Gostaria de comprar Cama Box de Casal Topázio",
      routeProduct: "product5/"
    },
    {
      productId: uuidv4(),
      imgSrc: CamaDeSolteiroSimples,
      title: "Cama Box de Solteiro Topázio",
      price: "449,99",
      oldPrice: "599,99",
      cardValue: "43,99",
      textForWhatsApp: "Olá. Gostaria de comprar Cama Box de Solteiro Topázio",
      routeProduct: "product5/"
    },
    {
      productId: uuidv4(),
      imgSrc: CamaMolasEnsacadas,
      title: "Cama Box de Casal Molas Ensacadas Topázio",
      price: "899,99",
      oldPrice: "999,99",
      cardValue: "86,99",
      textForWhatsApp: "Olá. Gostaria de comprar Cama Box de Casal Molas Ensacadas Topázio",
      routeProduct: "product5/"
    },
    {
      productId: uuidv4(),
      imgSrc: CamaAuxiliar,
      title: "Cama Box de Solteiro Auxiliar",
      price: "649,99",
      oldPrice: "699,99",
      cardValue: "65,99",
      textForWhatsApp: "Olá. Gostaria de comprar Cama Box de Solteiro Auxiliar",
      routeProduct: "product5/"
    },
    {
      productId: uuidv4(),
      imgSrc: ColchaoDeMolas,
      title: "Colchão Molas Ensacadas Topázio",
      price: "849,99",
      oldPrice: "899,99",
      cardValue: "82,99",
      textForWhatsApp: "Olá. Gostaria de comprar Colchão Molas Ensacadas",
      routeProduct: "product5/"
    },
    {
      productId: uuidv4(),
      imgSrc: ColchaoMaisBaseCasal,
      title: "Colchão + Base de Casal Topázio",
      price: "799,99",
      oldPrice: "899,99",
      cardValue: "77,99",
      textForWhatsApp: "Olá. Gostaria de comprar Colchão + Base de Casal Topázio",
      routeProduct: "product5/"
    }
]