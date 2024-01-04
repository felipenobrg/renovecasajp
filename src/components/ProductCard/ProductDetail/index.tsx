import { useParams } from "react-router-dom";
import { Header } from "../../Header";
import {
  AboutGuarantee,
  Description,
  MoneySign,
  ProductDetailContainer,
  ShareButton,
} from "./styles";
import { Price } from "../styles";
import { Export } from "phosphor-react";
import queryString from "query-string";
import { BuyWhatsAppButton } from "../../BuyWhatsAppButton";
import { AddCartButton } from "../../AddCartButton";
import { useCart } from "../../../context/CartContext";

type ProductType = {
  id: number;
  productId: string;
  imgSrc: string;
  title: string;
  price: string;
  oldPrice?: string;
  textForWhatsApp: string;
  description?: string;
  cardValue: string;
  routeProduct: string;
  quantity?: number;
};

type PartialProductType = Omit<ProductType, "id"> &
  Partial<Pick<ProductType, "id">>;

interface Props {
  products: PartialProductType[];
}

export function ProductDetail({ products }: Props) {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  const parsedProductId = productId ? productId : undefined;
  const product = products.find((p) => p.productId === parsedProductId);

  const handleAddToCart = () => {
    const productToAdd = {
      imgSrc: product?.imgSrc ?? "",
      title: product?.title ?? "",
      price: product?.price ?? "",
      productId: parsedProductId ?? "",
      quantity: product?.quantity || 0,
    };
    addToCart(productToAdd);
  };

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
      navigator
        .share({
          text: product.title,
          url: shareURL,
        })
        .then(() => {
          console.log("Shared successfully!");
        })
        .catch((error) => {
          console.error("Error sharing:", error);
        });
    } else {
      alert(
        "Your browser does not support the Web Share API. You can manually copy the link."
      );
    }
  };

  return (
    <>
      <Header />

      <ProductDetailContainer>
        <img src={product.imgSrc} alt={product.title} loading="lazy" />
        <ShareButton onClick={handleShare}>
          <Export size={30} color="#000000" />
        </ShareButton>
        <h1>{product.title}</h1>
        <div>
          <Price>
            <strong>R$ {product.price} à vista</strong>
          </Price>
        </div>
        <p>
          ou <strong>12x</strong> de{" "}
          <strong>
            <MoneySign>R$</MoneySign> {product.cardValue}
          </strong>
        </p>
        <Description>{product.description}</Description>
        <AddCartButton
          TextButton="ADICIONAR AO CARRINHO"
          handleAddToCart={handleAddToCart}
        />
        <BuyWhatsAppButton
          TextButton="COMPRAR NO WHATSAPP"
          handleButtonClick={handleWhatsAppClick}
        />
        <AboutGuarantee>
          <h1>Sobre a Garantia:</h1>
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
