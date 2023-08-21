import React from "react"

interface ILineProps {
    width? : number
    height? : number
}

const Line = (props : ILineProps) => {

    const width = props.width ?? 251;
    const height = props.height ?? 1
  return (
    <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-0 top-[60.1px] px-12"
            preserveAspectRatio="xMidYMid meet"
          >
            <line
              y1="0.6"
              x2={width}
              y2="0.6"
              stroke="#E4E5E7"
              strokeWidth="0.8"
            />
          </svg>
)}

export default Line