import React from "react"
import ButtonBase, { IButtonProps } from "./ButtonBase"



const TwitterButton = (props : IButtonProps) => {
  return (
    <ButtonBase href={`https://twitter.com/${props.href}`} name="Twitter" primary_color={props.primary_color} secondary_color="twitter"/>
)}

export default TwitterButton