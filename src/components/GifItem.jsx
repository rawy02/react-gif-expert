
export function GifItem({ title, url, id }) {
    
  return (
    <div className="flex flex-col justify-center lg:w-1/3 md:w-1/2 sm:w-full ">
      <div className="bg-black mx-5 my-5 p-1 rounded-md shadow" >
      <img src={ url } alt={ title } />
      <p className="bg-black text-white text-center p-4">{ title }</p>
      </div>
        
    </div>
  )
}
