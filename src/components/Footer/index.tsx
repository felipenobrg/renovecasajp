import { FooterContainer, FooterContent } from "./styles";

export function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <p>
                    Desenvolvido por <a href="https://portfolio-felipenobrega.vercel.app/">Felipe Nóbrega</a>
                    <br />
                    Contato: 83 98766-3399
                </p>
                <p>© {new Date().getFullYear()} Todos Direitos Reservados.</p>
            </FooterContent>
        </FooterContainer>
    )
}
