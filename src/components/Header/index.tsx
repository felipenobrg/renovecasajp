import { GlobalStyle } from "../../styles/global";
import { HeaderContainer, HeaderContent } from "./styles";
import LogoRenoveCasa from "../../assets/logoRenoveCasa.webp";
import { DropDownMenu } from "./MenuDropdown";
import { ShoppingCart } from "phosphor-react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { cartQuantity } = useCart();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkout");
  };
  return (
    <>
      <GlobalStyle />
      <HeaderContainer>
        <HeaderContent>
          <DropDownMenu />
          <img
            src={LogoRenoveCasa}
            alt="Renove Casa Logotipo"
            width="350"
            height="auto"
          />
          <div className="shopping-cart" onClick={handleClick}>
            <ShoppingCart size={35} color="#ffff" />
            <span className="cart-count">{cartQuantity}</span>
          </div>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
}
