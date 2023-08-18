import React from "react"
import ButtonBase, { IButtonProps } from "./ButtonBase"

const NaverButton = (props : IButtonProps) => {
  return (
    <ButtonBase href={`https://cafe.naver.com/${props.href}`} name="Naver Cafe" primary_color={props.primary_color} secondary_color="#03C75A"/>
)}

export default NaverButton