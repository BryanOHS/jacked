
const navbar = () => {
  return (
    <>
     <nav className=" flex-col w-full h-24 flex justify-center items-center absolute top-0 left-0 z-10">
      <h1 className="text-white text-2xl uppercase font-extrabold tracking-wider shadow">
        JJACKED
      </h1>
      <span className="w-[50%] md:w-[25%] lg:w-[20%] xl:w-[10%] h-[2px] bg-white relative z-20"></span>
    </nav>
    </>
  )
}

export default navbar