import { ShoppingCart } from "phosphor-react";
import { ShoppingCartEmptyContainer } from "./styles";

export function EmptyCartText() {
    return (
        <ShoppingCartEmptyContainer>
        <h2>
          {" "}
          <ShoppingCart size={30} /> Seu carrinho está vazio
        </h2>
        <p>
          Vá para a <a href="/">página inicial</a> ou procure no site os
          produtos que vão te deixar feliz. Quando encontrá-los, clique no
          botão adicionar ao carrinho
        </p>
      </ShoppingCartEmptyContainer>
    )
}