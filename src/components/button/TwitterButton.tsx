import React from "react"
import ButtonBase, { IButtonProps } from "./ButtonBase"



const TwitterButton = (props : IButtonProps) => {
  return (
    <ButtonBase href={`https://twitter.com/${props.href}`} name="Twitter" primary_color={props.primary_color} secondary_color="#1D9BF0"/>
)}

export default TwitterButton