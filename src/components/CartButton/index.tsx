import { ShoppingCartSimple } from "phosphor-react";
import { Button } from "./styles";

export function CartButton() {
    return (
        <Button>
            <ShoppingCartSimple size={22}/>
        </Button>
    )
}