import React from "react"
import ButtonBase, { IButtonProps } from "./ButtonBase"

const NaverButton = (props : IButtonProps) => {
  return (
    <ButtonBase href={`https://cafe.naver.com/${props.href}`} name="Naver Cafe" primary_color={props.primary_color} secondary_color="naver_cafe"/>
)}

export default NaverButton