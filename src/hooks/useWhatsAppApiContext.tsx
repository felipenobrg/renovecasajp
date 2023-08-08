import { useContext } from "react";
import { WhatsAppApiContext } from "../context/WhatsAppApiContext";

export function useWhatsAppApi() {
    const context = useContext(WhatsAppApiContext)
    return context
}