import SofaParisCaramelo from "../../../../assets/NewProducts/SofaParisCaramelo.webp";
import ConjuntoDeVarandaPreto from "../../../../assets/NewProducts/ConjuntoDeVarandaPreta.webp";
import SofaRetroVerdeVelluti from "../../../../assets/NewProducts/SofaRetroVerdeVelluti.webp";
import SofaRetratilCinzaBola from "../../../../assets/NewProducts/SofaRetratilBolaCinza.jpg";
import { NewProductsCardGrid, NewProductsContainer } from "./styles";
import { NewProductsCards } from "./components/NewProductsCard";

interface NewProducts {
  id: number;
  imgSrc: string;
  productTitle: string;
  price: string;
  oldPrice: string;
  textForWhatsApp: string;
}

export function NewProducts() {
  const newProductsData: NewProducts[] = [
    {
      id: 1,
      imgSrc: SofaParisCaramelo,
      productTitle: "Sofá Paris Caramelo",
      price: "1299,99",
      oldPrice: "1399,99",
      textForWhatsApp:
        "Olá, gostaria de comprar Sofá Paris Caramelo",
    },
    {
      id: 2,
      imgSrc: ConjuntoDeVarandaPreto,
      productTitle: "Conjunto de Varanda Preto",
      price: "399,99",
      oldPrice: "499,99",
      textForWhatsApp:
        "Olá, gostaria de comprar Conjunto de Varanda Preto",
    },
    {
      id: 3,
      imgSrc: SofaRetroVerdeVelluti,
      productTitle: "Sofá Retrô Verde Velluti",
      price: "899,99",
      oldPrice: "999,99",
      textForWhatsApp: "Olá, gostaria de comprar Sofá Retrô Verde Velluti",
    },
    {
      id: 4,
      imgSrc: SofaRetratilCinzaBola,
      productTitle: "Sofá Retrátil Cinza Bola",
      price: "999,99",
      oldPrice: "1199,99",
      textForWhatsApp: "Olá, gostaria de comprar Sofá Retrátil Cinza Bola",
    },
  ];
  return (
    <>
      <NewProductsContainer>
        <div>
          <h1>Novidades para sua casa</h1>
        </div>
      </NewProductsContainer>
      <NewProductsCardGrid>
        {newProductsData.map((promotion) => (
          <NewProductsCards
            key={promotion.id}
            imgSrc={promotion.imgSrc}
            productTitle={promotion.productTitle}
            price={promotion.price}
            oldPrice={promotion.oldPrice}
            textForWhatsApp={promotion.textForWhatsApp}
          />
        ))}
      </NewProductsCardGrid>
    </>
  );
}
