import React from "react"

interface IButtonBaseProps {
    href: string
    name : string
    primary_color : string
    secondary_color : string
}

export interface IButtonProps {
    href : string;
    primary_color : string
}

const ButtonBase = (props : IButtonBaseProps) => {
  const buttonStyle = `w-[150px] my-2 h-[50px] px-[25px] py-[10px] text-center transition rounded-2xl border-[${props.primary_color}] text-[${props.secondary_color}] duration-300 border-2 
xl:mx-2 xl:hover:border-white xl:hover:text-white xl:hover:cursor-pointer xl:text-[${props.primary_color}] xl:hover:bg-[${props.secondary_color}]
`
  return (
    <a className={buttonStyle} href={props.href} target="blank">
        {props.name}
    </a>
)}

export default ButtonBase