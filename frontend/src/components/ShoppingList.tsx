import React, { useEffect, useState } from 'react'
import { Recipe as Recipe, RecipeIngredient } from '../domain'
import Ingredients from './Ingredients'
import styled from 'styled-components'

export interface ListProps {
    className?: string
}

export const ShoppingList = ({ className }: ListProps) => {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [shoppingList, setShoppingList] = useState<RecipeIngredient[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch("http://206.189.233.64/recipes")
            setRecipes(await result.json())
        }

        fetchData()
    }, [])

    const addRecipeIngredients = (ingredients: RecipeIngredient[]) => {
        const currentListItems = shoppingList.map(i => i.ingredient.name)

        const updatedShoppingList = ingredients.reduce((shoppingList, recipeIngredient) => {
            if (!currentListItems.includes(recipeIngredient.ingredient.name)) {
                return shoppingList.concat(recipeIngredient)
            }

            const exisitingItem = shoppingList.find(listItem => listItem.ingredient.name === recipeIngredient.ingredient.name && listItem.unit === recipeIngredient.unit)

            if (!exisitingItem) {
                return shoppingList.concat(recipeIngredient)
            }

            return shoppingList.map(item => {
                if (item.ingredient.name === recipeIngredient.ingredient.name && item.unit === recipeIngredient.unit) {
                    const itemCopy = Object.assign({}, item)
                    itemCopy.quantity = itemCopy.quantity + recipeIngredient.quantity
                    return itemCopy
                }
                return item
            })

        }, shoppingList)

        setShoppingList(updatedShoppingList)
    }

    if (!recipes) {
        return <h1>loading...</h1>
    }

    const recipeList = recipes.map((recipe: Recipe) => {
        return <div key={recipe.id} onClick={() => addRecipeIngredients(recipe.recipeIngredients)}>{recipe.name}</div>
    })

    return (<div className={className}>
        <RecipeList>
            <SectionHeader>Recipes</SectionHeader>
            {recipeList}
        </RecipeList>
        <ListItems>
            <SectionHeader>My Shopping List</SectionHeader>
            <Ingredients recipeIngredients={shoppingList} />
        </ListItems>
    </div>)
}

const StyledShoppingList = styled(ShoppingList)`
    display: grid;
    grid-template-columns: 400px 400px;
`

const RecipeList = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
`

const ListItems = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
`

const SectionHeader = styled.div`
    padding: 0 0 20px 0;
`

export default StyledShoppingList