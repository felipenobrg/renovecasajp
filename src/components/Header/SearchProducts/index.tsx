import { Link } from "react-router-dom";
import { Li, Ul } from "./styles";
import { AllProducts } from "../../../data/AllProducts";


interface SearchProductsProps {
    searchBar: string;
    setSearchBar: React.Dispatch<React.SetStateAction<string>>;
  }
  

export function SearchProducts({ searchBar, setSearchBar}: SearchProductsProps) {
    const filteredAllProducts = AllProducts.filter((product) =>
    product.title.toLowerCase().includes(searchBar.toLowerCase())
  );
    return (
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
    )
}