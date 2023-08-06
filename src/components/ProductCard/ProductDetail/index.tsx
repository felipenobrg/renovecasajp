import { useParams } from "react-router-dom";
import { Header } from "../../Header";
import { SectionLink } from "../../SectionLink";

import { AboutGuarantee, Description, ProductDetailContainer, ShareButton, WhatsAppButton } from "./styles";
import { MoneySign, Price } from "../styles";
import { Share, WhatsappLogo } from "phosphor-react";
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

type PartialProductType = Omit<ProductType, "id"> &
  Partial<Pick<ProductType, "id">>;

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

  const handleShare = () => {
    const shareURL = window.location.href;
    if (navigator.share) {
      navigator.share({
        url: shareURL,
      }).then(() => {
        console.log('Shared successfully!');
      }).catch((error) => {
        console.error('Error sharing:', error);
      });
    } else {
      alert('Your browser does not support the Web Share API. You can manually copy the link.');
    }
  };

  return (
    <>
      <Header />
      <SectionLink />
      <ProductDetailContainer>
        <img src={product.imgSrc} alt={product.title} />
        <ShareButton onClick={handleShare}><Share size={30} /></ShareButton>
        <h1>{product.title}</h1>
        <div>
          <Price>
            <MoneySign>R$ </MoneySign>
            {product.price} à vista
          </Price>
        </div>
        <p>
          ou <strong>12x</strong> de{" "}
          <strong>
            <MoneySign>R$</MoneySign> {product.cardValue}
          </strong>
        </p>
        <Description>{product.description}</Description>
        <WhatsAppButton onClick={handleWhatsAppClick}>
          <WhatsappLogo size={20} weight="fill" />
          COMPRAR
        </WhatsAppButton>
        <AboutGuarantee>
          <h1>Sobre Garantia:</h1>
          <p>
            • Troca de peças pequenas são feitas na nossa loja física em João
            Pessoa, no João Paulo ll.
          </p>
          <p>• Não realizamos trocas de estofados sem defeito de fábrica</p>
          <p>
            • Se o sofá apresentar defeito de fábrica será analisado e levada
            para conserto ou troca na fábrica
          </p>
        </AboutGuarantee>
      </ProductDetailContainer>
    </>
  );
}
