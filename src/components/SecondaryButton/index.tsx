import { Trash } from "phosphor-react";
import { ButtonS } from "./styles";

export function SecondaryButton() {
  return (
    <ButtonS>
        <Trash size={16} />
        <span>Remover</span>
    </ButtonS>
  )
}