import { PromotionsCards } from "./Components/PromotionsCards";
import { PromotionsCardGrid, PromotionsContainer } from "./styles";
import ConjuntoDeDubaiPreto from "../../../../assets/Promotions/ConjuntoDeDubaiPreto.webp";
import SofaDeltaAzul from "../../../../assets/Promotions/SofaDeltaAzul.webp";
import SofaRetroBegeComDuasPoltronas from "../../../../assets/Promotions/SofaRetroBegeComDuasPoltronas.webp";
import SofaRetratilComPuffsAzul from "../../../../assets/Promotions/SofaRetratilComPuffsAzul.webp";
import LyonRack from "../../../../assets/Promotions/LyonRack.webp";

interface Promotion {
  id: number;
  imgSrc: string;
  productTitle: string;
  price: string;
  oldPrice: string;
  textForWhatsApp: string;
}

export function Promotions() {
  const promotionsData: Promotion[] = [
    {
      id: 1,
      imgSrc: SofaRetroBegeComDuasPoltronas,
      productTitle: "Sofá Retrô com Duas Poltronas King",
      price: "1799,99",
      oldPrice: "1899,99",
      textForWhatsApp:
        "Olá, gostaria de comprar Sofá Retrô com Duas Poltronas King",
    },
    {
      id: 2,
      imgSrc: SofaRetratilComPuffsAzul,
      productTitle: "Sofá Retrátil com Dois Puffs Retrô",
      price: "1099,99",
      oldPrice: "1199,99",
      textForWhatsApp:
        "Olá, gostaria de comprar Sofá Retrátil com Dois Puffs Retrô",
    },
    {
      id: 3,
      imgSrc: ConjuntoDeDubaiPreto,
      productTitle: "Conjunto de Dubai",
      price: "849,99",
      oldPrice: "899,99",
      textForWhatsApp: "Olá, gostaria de comprar Conjunto de Dubai",
    },
    {
      id: 4,
      imgSrc: SofaDeltaAzul,
      productTitle: "Sofá Delta com Puff Incluso",
      price: "1199,99",
      oldPrice: "1299,99",
      textForWhatsApp: "Olá, gostaria de comprar Sofá Delta com Puff Incluso",
    },
    {
      id: 5,
      imgSrc: LyonRack,
      productTitle: "Rack Lyon",
      price: "349,99",
      oldPrice: "499,99",
      textForWhatsApp: "Olá, gostaria de comprar Rack Lyon",
    },
  ];
  return (
    <>
      <PromotionsContainer>
        <div>
          <h1>Produtos em destaques</h1>
        </div>
      </PromotionsContainer>
      <PromotionsCardGrid>
        {promotionsData.map((promotion) => (
          <PromotionsCards
            key={promotion.id}
            imgSrc={promotion.imgSrc}
            productTitle={promotion.productTitle}
            price={promotion.price}
            oldPrice={promotion.oldPrice}
            textForWhatsApp={promotion.textForWhatsApp}
          />
        ))}
      </PromotionsCardGrid>
    </>
  );
}
