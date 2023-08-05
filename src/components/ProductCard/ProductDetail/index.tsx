import { useParams } from "react-router-dom";
import { Header } from "../../Header";
import { AboutDelivery } from "../../AboutDelivery";
import { SectionLink } from "../../SectionLink";

import { ProductDetailContainer } from "./styles";

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

  return (
    <>
      <Header />
      <AboutDelivery />
      <SectionLink />
      <ProductDetailContainer>
        <img src={product.imgSrc} alt={product.title} />
        <h1>{product.title}</h1>
        <p>{product.price}</p>
        <p>{product.oldPrice}</p>
      </ProductDetailContainer>
    </>
  );
}
