import React from "react"

interface IButtonBaseProps {
    href: string
    name : string
    style? : string
}

const ButtonBase = (props : IButtonBaseProps) => {
  const buttonStyle = "w-[150px] xl:mx-2 my-2 h-[50px] px-[25px] py-[10px] text-center transition rounded-2xl border-[#516794] xl:hover:border-white duration-300 border-2 xl:hover:text-white xl:hover:cursor-pointer xl:text-[#516794] xl:hover:text-white"
  return (
    <a className={`${buttonStyle} ${props.style}`} href={props.href}>
        {props.name}
    </a>
)}

export default ButtonBase