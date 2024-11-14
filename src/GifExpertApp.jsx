import { useState } from "react"
import { AddCategory, GifGrid } from './components';


export function GifExpertApp() {

    const [categories, setCategories] = useState(['Demon Slayer'])

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])


    }


    return (
        <main className="container mx-auto px-4 min-h-screen flex flex-col items-center ">
            <h1 className="text-white text-5xl font-bold bg-black px-5 py-2 rounded-lg mt-4">GifExpertApp</h1>

            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />
            <div className="">
            {
                categories.map((category) =>
                (
                    // <GifGrid key={category} category={category} />
                    <GifGrid key={category} category={ category } />
                ))
            }
            </div>
            

        </main>
    )
}


{/* 1. */ }
{/* {categories} */ }
{/* 2. */ }
{/* {categories.map(category => {
                    return <li>Hola</li>
                })} */}
{/* 3. */ }
{/* {categories.map(category => {
                    return <li key={category} >Hola</li>
                })} */}
{/* 4. */ }
{/* {categories.map(category => {
                    return <li key={category} >{ category}}</li>
                })} */}