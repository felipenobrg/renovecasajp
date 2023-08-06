import { useParams } from "react-router-dom";
import { Header } from "../../Header";
import { SectionLink } from "../../SectionLink";

import { Description, ProductDetailContainer } from "./styles";
import { MoneySign, Price } from "../styles";
import { WhatsappLogo } from "phosphor-react";
import queryString from "query-string";

type ProductType = {
  id: number;
  productId: number;
  imgSrc: string;
  title: string;
  price: string;
  oldPrice?: string;
  textForWhatsApp: string;
  description?: string;
  cardValue: string;
};

type PartialProductType = Omit<ProductType, 'id'> & Partial<Pick<ProductType, 'id'>>;

interface Props {
  products: PartialProductType[];
}

export function ProductDetail({ products }: Props) {
  const { productId } = useParams<{ productId: string }>();
  const parsedProductId = productId ? parseInt(productId) : undefined;
  const product = products.find((p) => p.productId === parsedProductId);

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  const handleWhatsAppClick = () => {
    const url = `https://api.whatsapp.com/send?${queryString.stringify({
      phone: "5583987663399",
      text: product.textForWhatsApp,
    })}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Header />
      <SectionLink />
      <ProductDetailContainer>
        <img src={product.imgSrc} alt={product.title} />
        <h1>{product.title}</h1>
        <div>
        <Price><MoneySign>R$ </MoneySign>{product.price} à vista</Price>
        </div>
        <p>ou <strong>12x</strong> de <strong><MoneySign>R$</MoneySign> {product.cardValue}</strong></p>
        <Description>{product.description}</Description>
        <button onClick={handleWhatsAppClick}><WhatsappLogo size={20} weight="fill" />COMPRAR</button>
      </ProductDetailContainer>
    </>
  );
}
