import { createContext, useState } from "react";

export const CategoryContext = createContext(null)

export const CategoryProvider = (props) => {

    const [category, setCategory] = useState('')
    const [task, setTask] = useState('')
    return (

        <CategoryContext.Provider value={{ category, setCategory }}>
            {props.children}
        </CategoryContext.Provider>
    )
}