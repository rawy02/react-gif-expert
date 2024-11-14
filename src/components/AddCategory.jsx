import { useState } from "react"
import { Input } from './ui/input'


export function AddCategory({ onNewCategory }) {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim())
        // console.log(inputValue.trim());

        // setCategories(categories => [inputValue, ...categories])
        setInputValue('')

    }

    return (
        <section className="mt-6 w-full sm:w-1/2 md:w-2/3 lg:w-1/2">
            <form onSubmit={onSubmit}>
                <Input
                    className=""
                    type="text"
                    placeholder="Buscar gifs"
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form>
        </section>

    )
}
