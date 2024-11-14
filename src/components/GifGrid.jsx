import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export function GifGrid({ category }) {

    const { images, isLoading } = useFetchGifs({ category })

    return (
        <>
            <div className=' flex flex-col'>
                <h3 className='text-black text-center text-4xl mt-4 font-bold'>{category}</h3>
                <hr className=" mt-2 border-t-2 border-black" />
                {
                    isLoading
                        ? (<h2>Cargando...</h2>)
                        : null
                }
                <div className='flex flex-wrap '>
                    {
                        images.map((image) => (
                            <GifItem
                                
                                key={image.id}
                                {...image}
                            />
                        ))
                    }
                </div>
            </div>


        </>
    )
}

{/* {categories.map(category => {
                    return <li key={category} >{ category}}</li>
                })} */}