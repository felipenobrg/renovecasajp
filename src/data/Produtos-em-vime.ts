import BanquetaPreta from "../assets/ProdutosEmVime/banquetaPreta.webp";
import BanquetaMarrom from "../assets/ProdutosEmVime/banquetaMarrom.webp";
import ConjuntoDeTerracoPreto from "../assets/ProdutosEmVime/ConjuntoDeTerracoPreto.webp";
import ConjuntoDeTerracoMarrom from "../assets/ProdutosEmVime/ConjuntoDeTerracoMarrom.webp";
import ConjuntodeTerracoMesclado from "../assets/ProdutosEmVime/ConjuntodeTerracoMesclado.webp";
import CadeiraDeBalanco from "../assets/ProdutosEmVime/CadeiraDeBalanco.webp";
import ConjuntoDeVarandaPreto from "../assets/ProdutosEmVime/ConjuntoDeVarandaPreto.webp";
import ConjuntoDeVarandaMarrom from "../assets/ProdutosEmVime/ConjuntoDeVarandaMarrom.webp";

import { v4 as uuidv4 } from 'uuid';


export const produtosEmVimeData = [
    {
      productId: uuidv4(),
      imgSrc: BanquetaPreta,
      title: "Banqueta Preta em Vime",
      price: "99,99",
      oldPrice: "119,99",
      cardValue: "9,99",
      textForWhatsApp: "Olá. Gostaria de comprar Banqueta Preta em Vime",
      routeProduct: "product6/"
    },
    {
      productId: uuidv4(),
      imgSrc: BanquetaMarrom,
      title: "Banqueta Marrom em Vime",
      price: "99,99",
      oldPrice: "119,99",
      cardValue: "9,99",
      textForWhatsApp: "Olá. Gostaria de comprar Banqueta Marrom em Vime",
      routeProduct: "product6/"
    },
    {
      productId: uuidv4(),
      imgSrc: ConjuntoDeVarandaMarrom,
      title: "Conjunto de Varanda Marrom",
      price: "399,99",
      oldPrice: "499,99",
      cardValue: "40,99",
      textForWhatsApp: "Olá. Gostaria de comprar Conjunto de Varanda Marrom",
      routeProduct: "product6/"
    },
    {
      productId: uuidv4(),
      imgSrc: ConjuntoDeVarandaPreto,
      title: "Conjunto de Varanda Preto",
      price: "399,99",
      oldPrice: "499,99",
      cardValue: "40,99",
      textForWhatsApp: "Olá. Gostaria de comprar Conjunto de Varanda Preto",
      routeProduct: "product6/"
    },

    {
      productId: uuidv4(),
      imgSrc: CadeiraDeBalanco,
      title: "Cadeira de Balanço",
      price: "199,99",
      oldPrice: "129,99",
      cardValue: "19,99",
      textForWhatsApp: "Olá. Gostaria de comprar Cadeira de Balanço",
      routeProduct: "product6/"
    },
    {
      productId: uuidv4(),
      imgSrc: ConjuntoDeTerracoPreto,
      title: "Conjunto de Terraço Preto",
      price: "549,99",
      oldPrice: "599,99",
      cardValue: "53,99",
      textForWhatsApp: "Olá. Gostaria de comprar Conjunto de Terraço Preto",
      routeProduct: "product6/"
    },
    {
      productId: uuidv4(),
      imgSrc: ConjuntoDeTerracoMarrom,
      title: "Conjunto de Terraço Marrom",
      price: "549,99",
      oldPrice: "599,99",
      cardValue: "53,99",
      textForWhatsApp: "Olá. Gostaria de comprar Conjunto de Terraço Marrom",
      routeProduct: "product6/"
    },
    {
      productId: uuidv4(),
      imgSrc: ConjuntodeTerracoMesclado,
      title: "Conjunto de Terraço Mesclado",
      price: "549,99",
      oldPrice: "599,99",
      cardValue: "53,99",
      textForWhatsApp: "Olá. Gostaria de comprar Conjunto de Terraço Mesclado",
      routeProduct: "product6/"
    },
  ];