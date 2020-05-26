import React from 'react'
import { RecipeIngredient as IIngredient } from '../domain'
import styled from 'styled-components'

interface IngredientsProps {
    recipeIngredients: IIngredient[]
    className?: string
}

interface IngredientProps {
    recipeIngredient: IIngredient
    className?: string
}

export const Ingredients = ({ recipeIngredients, className }: IngredientsProps) => {
    return <div className={className}>{recipeIngredients.map((recipeIngredient: IIngredient) => <StyledIngredient recipeIngredient={recipeIngredient}/>)}</div>
}

export const Ingredient = ({ recipeIngredient, className }: IngredientProps): JSX.Element => {
    return (
        <div className={className}>
            <IngredientName>{recipeIngredient.ingredient.name}</IngredientName> <IngredientQuantity>{recipeIngredient.quantity} {recipeIngredient.unit}</IngredientQuantity>
        </div>
    )
}

const IngredientName = styled.span`
    grid-column-start: 1;
    grid-column-end: 2;
`

const IngredientQuantity = styled.span`
    grid-column-start: 2;
    grid-column-end: 3;
    justify-self: end;
`

const StyledIngredient = styled(Ingredient)`
    display: grid; 
    grid-template-columns: 300px 100px;
`

export default Ingredients