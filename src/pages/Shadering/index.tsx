// import React from 'react'

// type Props = {}

// const Shadering = (props: Props) => {
const Shadering = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-4">
      <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">
        {" "}
        <span
          className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500
          bg-[length:200%_200%] bg-left animate-gradient-bg"
        >
          Shader 相关的内容
        </span>
      </h1>
      <p className="text-2xl font-bold">装修中 ...</p>
    </div>
    </div>
  )
}

export default Shadering;