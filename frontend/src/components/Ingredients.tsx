import React from 'react'
import { RecipeIngredient as IIngredient } from '../domain'

interface IngredientsProps {
    recipeIngredients: IIngredient[]
}

interface IngredientProps {
    recipeIngredient: IIngredient
}

export const Ingredients = ({ recipeIngredients }: IngredientsProps) => {
    return <>{recipeIngredients.map((recipeIngredient: IIngredient) => <Ingredient recipeIngredient={recipeIngredient}/>)}</>
}

export const Ingredient = ({ recipeIngredient }: IngredientProps): JSX.Element => {
    return (
        <>
            <div>{recipeIngredient.ingredient.name} -- {recipeIngredient.quantity} {recipeIngredient.unit}</div>
        </>
    )
}

export default Ingredients