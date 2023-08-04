function Button({ children, type, onClick }) {
  const subBtnClassName = "p-[4px] min-w-[80px] h-[30px] box-content bg-black-500 border-[1px] rounded-md text-white hover:border-[1px] hover:bg-white hover:text-black-500";
  const normalClassName = "p-[4px] min-w-[80px] h-[30px] box-content bg-blue-500 border-[1px] rounded-md text-white hover:border-[1px] hover:bg-white hover:text-blue-500";
  const btnClassName = type && type == "submit" ? subBtnClassName : normalClassName;
  return (
    type ? <button type={type} className={btnClassName} onClick={onClick} >{children}</button>
      : <button className={btnClassName} onClick={onClick} >{children}</button>
  )
}
export default Button;