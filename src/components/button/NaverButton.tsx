import React from "react"
import ButtonBase from "./ButtonBase"

interface INaverButtonProps {
    href : string;
}

const NaverButton = (props : INaverButtonProps) => {
  return (
    <ButtonBase href={`https://cafe.naver.com/${props.href}`} name="Naver Cafe" style="text-[#03C75A] xl:hover:bg-[#03C75A]"/>
)}

export default NaverButton