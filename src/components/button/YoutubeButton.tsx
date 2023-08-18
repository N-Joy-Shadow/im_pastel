import React from "react"
import ButtonBase from "./ButtonBase"

interface IYoutubeButtonProps {
    href : string
}

const YoutubeButton = (props : IYoutubeButtonProps) => {
  return (
    <ButtonBase style="text-[#FF0000] xl:hover:bg-[#FF0000]" href={`https://www.youtube.com/${props.href}`} name="Youtube" />
)}

export default YoutubeButton