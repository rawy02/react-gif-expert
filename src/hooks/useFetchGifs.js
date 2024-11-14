import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'

// HOOK personalizado / Customs Hooks
// Un hook es mas que una funcion que regresa algo

// Lo siguiente es un custom hook
export function useFetchGifs({ category }) {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages)
        setIsLoading(false)
    }

    // este hook lo unico que hace es mandar a traer las imagenes
    useEffect(() => {
        getImages()
    }, [])

    return {
        images: images,
        isLoading: isLoading
    }
}
