import React from "react"
import ButtonBase, { IButtonProps } from "./ButtonBase";


const TwitchButton = (props : IButtonProps) => {
  return (
    <ButtonBase href={`https://www.twitch.tv/${props.href}`} name="Twitch" secondary_color="twitch" primary_color={props.primary_color}/>
)}

export default TwitchButton