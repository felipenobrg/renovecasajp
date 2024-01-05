import { Link } from "react-router-dom";
import { Li, Ul } from "./styles";
import { AllProducts } from "../../../data/AllProducts";


interface ResearchedProductsProps {
    searchBar: string;
    setSearchBar: React.Dispatch<React.SetStateAction<string>>;
  }
  

export function ResearchedProducts({ searchBar, setSearchBar}: ResearchedProductsProps) {
    const filteredAllProducts = AllProducts.filter((product) =>
    product.title.toLowerCase().includes(searchBar.toLowerCase())
  );
  return filteredAllProducts.length ? (
    <Ul>
      {filteredAllProducts.map((product) => {
        const route = `${product.routeProduct}${product.productId}`;
        return (
          <Link
            key={product.productId}
            to={`/${route}`}
            className="product-link"
            onClick={() => setSearchBar("")}
          >
            <Li>
              <div>
                <h1>{product.title}</h1>
                <p>R$ {product.price}</p>
              </div>
              <img src={product.imgSrc} alt={product.title} />
            </Li>
          </Link>
        );
      })}
    </Ul>
  ) : null; 
}