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

const primary : {[key:string] : string } = {
  primary : 'border-primary xl:text-primary',
  kanna : 'border-kanna xl:text-kanna',
  yuni : 'border-yuni xl:text-yuni',
  tabi : 'border-tabi xl:text-tabi',
  lize : 'border-lize xl:text-lize',
  hina : 'border-hina xl:text-hina',
  mashiro : 'border-mashiro xl:text-mashiro',
}

const secondary : {[key:string] : string } = {
  stellight : 'xl:hover:bg-stellight text-stellight',
  youtube : 'xl:hover:bg-youtube text-youtube',
  twitter : 'xl:hover:bg-twitter text-twitter',
  twitch : 'xl:hover:bg-twitch text-twitch',
  soundcloud : 'xl:hover:bg-soundcloud text-soundcloud',
  naver_cafe : 'xl:hover:bg-cafe text-cafe',
}


const ButtonBase = (props : IButtonBaseProps) => {
  const primaryclass = primary[props.primary_color]
  const secondaryclass = secondary[props.secondary_color]



  const buttonStyle = `w-[150px] my-2 h-[50px] px-[25px] py-[10px] text-center transition rounded-2xl duration-300 border-2 
xl:mx-2 xl:hover:border-white xl:hover:text-white xl:hover:cursor-pointer ${primaryclass} ${secondaryclass}
`
  return (
    <a className={buttonStyle} href={props.href} target="blank">
        {props.name}
    </a>
)}

export default ButtonBase