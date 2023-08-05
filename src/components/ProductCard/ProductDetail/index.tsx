import { useParams } from "react-router-dom";
import { Header } from "../../Header";
import { AboutDelivery } from "../../AboutDelivery";
import { SectionLink } from "../../SectionLink";

import { ProductDetailContainer } from "./styles";

type ProductType = {
  id: number;
  title: string;
  imgSrc: string;
  price: number;
  oldPrice: number;
  productId: number;
};

interface Props {
  products: ProductType[];
}

export function ProductDetail({ products }: Props) {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.productId === parseInt(productId));


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
