function Button({title,onClick,isdisabled=false ,classname,type="button",Icon=null}) {
    return (
      <button onClick={onClick} disabled={isdisabled} type={type}  className={`w-full text-[16px] font-bold h-full  flex gap-2 justify-center hover:shadow-sm  transition duration-300 items-center ${classname}`}>
  {Icon && <Icon className="w-[20px]" />}
    <span>{title}</span>
      </button>
    )
  }
  export default Button