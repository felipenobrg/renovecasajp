import PuffRetro from '../assets/Utilidades/PuffsRetro.webp';
import SapateiraPretaBege from '../assets/Utilidades/SapateiraPretaBege.webp';
import SapateiraCinzaVermelho from '../assets/Utilidades/SapateiraCinzaVermelho.webp';
import Baus from '../assets/Utilidades/Baus.webp';
import CadeiraDeBalancoDeFio from '../assets/Utilidades/CadeiraDeBalanco.webp';
import CantinhoDeCafe from '../assets/Utilidades/CatinhoDeCafe.webp';
import QuadroLeaoLaranja from '../assets/Utilidades/QuadroLeaoLaranja.webp';
import QuadroLeao from '../assets/Utilidades/QuadroLeao.webp';
import QuadroLeaoELeoa from '../assets/Utilidades/QuadroLeaoELeoa.webp';
import { v4 as uuidv4 } from 'uuid';

export const utilidadesData = [
    {
      productId: uuidv4(),
      imgSrc: PuffRetro,
      title: "Puff Retrô",
      price: "89,99",
      oldPrice: "109,99",
      cardValue: "8,99",
      textForWhatsApp: "Olá. Gostaria de comprar Puff Retrô",
    },
    {
      productId: uuidv4(),
      imgSrc: SapateiraPretaBege,
      title: "Sapateira",
      price: "149,99",
      oldPrice: "189,99",
      cardValue: "14,99",
      textForWhatsApp: "Olá. Gostaria de comprar Sapateira",
    },
    {
      productId: uuidv4(),
      imgSrc: SapateiraCinzaVermelho,
      title: "Sapateira",
      price: "149,99",
      oldPrice: "189,99",
      cardValue: "14,99",
      textForWhatsApp: "Olá. Gostaria de comprar Sapateira",
    },
    {
      productId: uuidv4(),
      imgSrc: Baus,
      title: "Báu",
      description: "Dimensões: 90x40cm",
      price: "99,99",
      oldPrice: "129,99",
      cardValue: "9,99",
      textForWhatsApp: "Olá. Gostaria de comprar Baú",
    },
    {
      productId: uuidv4(),
      imgSrc: CadeiraDeBalancoDeFio,
      title: "Cadeira de Balanço de Fio",
      price: "189,99",
      oldPrice: "199,99",
      cardValue: "18,99",
      textForWhatsApp: "Olá. Gostaria de comprar Cadeira de Balanço de Fio",
    },
    {
      productId: uuidv4(),
      imgSrc: CantinhoDeCafe,
      title: "Cantinho de Café",
      price: "299,99",
      oldPrice: "329,99",
      cardValue: "28,99",
      textForWhatsApp: "Olá. Gostaria de comprar Cantinho de Café",
    },
    {
      productId: uuidv4(),
      imgSrc: QuadroLeaoLaranja,
      title: "Quadro Decorativo Leão Laranja",
      description: "Dimensões: 1.20x60",
      price: "129,99",
      oldPrice: "159,99",
      cardValue: "12,99",
      textForWhatsApp: "Olá. Quadro Decorativo Leão Laranja",
    },
    {
      productId: uuidv4(),
      imgSrc: QuadroLeao,
      title: "Quadro Decorativo Leão",
      description: "Dimensões: 1.20x60",
      price: "129,99",
      oldPrice: "159,99",
      cardValue: "12,99",
      textForWhatsApp: "Olá. Gostaria de comprar Quadro Decorativo Leão",
    },
    {
      productId: uuidv4(),
      imgSrc: QuadroLeaoELeoa,
      title: "Quadro Decorativo Leão e Leoa",
      description: "Dimensões: 1.20x60",
      price: "129,99",
      oldPrice: "159,99",
      cardValue: "12,99",
      textForWhatsApp: "Olá. Quadro Decorativo Leão e Leoa",
    },
  ];