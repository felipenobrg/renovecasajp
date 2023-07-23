import { FooterContainer, FooterContent } from "./styles";

export function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <p>
                    Feito por Felipe Nóbrega
                    <br />
                    Contato: 83 98766-3399
                </p>
                <p>© {new Date().getFullYear()} Todos Direitos Reservados.</p>
            </FooterContent>
        </FooterContainer>
    )
}
