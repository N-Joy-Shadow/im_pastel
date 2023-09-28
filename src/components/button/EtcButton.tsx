import React from "react"
import ButtonBase, { IEtcButtonProps } from "./ButtonBase"


const EtcButton = (props: IEtcButtonProps) => {
  return (
    <ButtonBase href={props.href} name={props.name} primary_color={props.primary_color} secondary_color={props.secondary_color} />
  )
}

export default EtcButton