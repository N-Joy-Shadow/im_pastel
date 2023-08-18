import React from "react"
import ButtonBase from "./ButtonBase";

interface ITwitchButtonProps {
    href : string;

}

const TwitchButton = (props : ITwitchButtonProps) => {
  return (
    <ButtonBase href={`https://www.twitch.tv/${props.href}`} name="Twitch" style="text-[#A970FF] xl:hover:bg-[#A970FF]"/>
)}

export default TwitchButton