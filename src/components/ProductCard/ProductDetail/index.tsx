import { useParams } from "react-router-dom";
import { Header } from "../../Header";
import { SectionLink } from "../../SectionLink";

import { ProductDetailContainer } from "./styles";
import { OldPrice, Price } from "../styles";
import { WhatsappLogo } from "phosphor-react";
import queryString from "query-string";

type ProductType = {
  id: number;
  productId: number;
  imgSrc: string;
  title: string;
  price: string;
  oldPrice: string;
  textForWhatsApp: string;
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
        <Price>R${product.price}</Price>
        <OldPrice>R${product.oldPrice}</OldPrice>
        </div>
        <button onClick={handleWhatsAppClick}><WhatsappLogo size={20} weight="fill" />COMPRAR</button>
      </ProductDetailContainer>
    </>
  );
}
