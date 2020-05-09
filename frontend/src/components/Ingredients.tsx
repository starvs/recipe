import React from 'react'
import { Ingredient as IIngredient } from '../domain'

interface IngredientsProps {
    ingredients: IIngredient[]
}

interface IngredientProps {
    ingredient: IIngredient
}

export const Ingredients = ({ ingredients }: IngredientsProps) => {
    return <>{ingredients.map(ingredient => <Ingredient ingredient={ingredient}/>)}</>
}

export const Ingredient = ({ingredient}: IngredientProps): JSX.Element => {
    return (
        <>
            <div>{ingredient.name} -- {ingredient.quantity} {ingredient.unit}</div>
        </>
    )
}

export default Ingredients