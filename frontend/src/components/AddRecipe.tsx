import React, { useState } from 'react'
import AddIngredient from './AddIngredient'
import { Ingredient } from './Ingredients'
import { Ingredient as IIingredient } from '../domain'

export interface AddRecipeProps {}

export const AddRecipe = (props: AddRecipeProps) => {
     const [name, setName] = useState('')
     const [ingredients, setIngredients] = useState<IIingredient[]>([])
     
     const newRecipe = (<>
        <div>THINGS WILL GO HERE</div>
        <div>Name: {name}</div>
        {ingredients.map(i => <Ingredient ingredient={i} />)}
    </>)

    const handleIngredientSubmit = (e: any, name: string, quantity: string, unit: string) => {
        const newIngredient = {
            id: null as any,
            name,
            quantity: parseInt(quantity),
            unit
        }
        setIngredients([...ingredients, newIngredient])
        e.preventDefault()
    }

    const handleSubmitRecipe = (e: any) => {
        const newRecipe = {
            name,
            ingredients
        }

        fetch("http://localhost:7000/addrecipe", {method: 'POST', body: JSON.stringify(newRecipe)})
        e.preventDefault()
    }

     return (<>
        <h1>Add a recipe</h1>

        <form onSubmit={(e) => handleSubmitRecipe(e)}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> 
            <AddIngredient handleSubmit={handleIngredientSubmit}/>

            {newRecipe}
            <input type="submit" value="Submit" />
        </form>
     </>)
}

export default AddRecipe