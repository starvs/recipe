import React, { useState } from 'react'
import AddIngredient from './AddIngredient'
import { Ingredient } from './Ingredients'
import { RecipeIngredient as IIingredient } from '../domain'
import styled from 'styled-components'

export interface AddRecipeProps {}

export const AddRecipe = (props: AddRecipeProps) => {
     const [name, setName] = useState('')
     const [ingredients, setIngredients] = useState<IIingredient[]>([])
     
     const newRecipe = (<>
        <StyledInput type="text" placeholder={"name"} value={name} onChange={(e) => setName(e.target.value)}/>
        {ingredients.map(i => <Ingredient recipeIngredient={i} />)}
    </>)

    const handleIngredientSubmit = (e: any, name: string, quantity: string, unit: string) => {
        const newIngredient = {
            id: null as any,
            ingredient: {
                name
            },
            quantity: parseInt(quantity),
            unit
        }
        setIngredients([...ingredients, newIngredient])
        e.preventDefault()
    }

    const handleSubmitRecipe = (e: any) => {
        const newRecipe = {
            name,
            recipeIngredients: ingredients
        }

        fetch("http://localhost:7000/recipes/add", {method: 'POST', body: JSON.stringify(newRecipe)})
        e.preventDefault()
    }

     return (<>
        <Header>Add a recipe</Header>
        {newRecipe}
        <AddIngredient handleSubmit={handleIngredientSubmit}/>

        <StyledInput type="button" value="Submit Recipe" onClick={(e) => handleSubmitRecipe(e)}/>

     </>)
}

const Header = styled.div`
    padding: 0 0 20px 0;
`

const StyledInput = styled.input`
    padding:10px;
    border:0;
    border-radius:10px;
    box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
    &:focus {
        outline:none !important
    };
`

export default AddRecipe