import React from "react"
import ButtonBase from "./ButtonBase"

interface ITwitterButtonProps {
    href : string
}

const TwitterButton = (props : ITwitterButtonProps) => {
  return (
    <ButtonBase href={`https://twitter.com/${props.href}`} style="text-[#1D9BF0] xl:hover:bg-[#1D9BF0]" name="Twitter"/>
)}

export default TwitterButton