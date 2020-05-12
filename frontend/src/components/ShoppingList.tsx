import React, { useEffect, useState } from 'react'
import { Recipe as Recipe, Ingredient } from '../domain'
import Ingredients from './Ingredients'

export interface ListProps {
}

export const ShoppingList = (props: ListProps) => {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [shoppingList, setShoppingList] = useState<Ingredient[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch("http://localhost:7000/recipes")
            setRecipes(await result.json())
        }

        fetchData()
    }, [])
    
    const addRecipeIngredients = (ingredients: Ingredient[])=> {
        const currentListItems = shoppingList.map(i => i.name)
 
        const updatedShoppingList = ingredients.reduce((shoppingList, ingredient) => {
            if (!currentListItems.includes(ingredient.name)) {
                return shoppingList.concat(ingredient)
            }

            const exisitingItem = shoppingList.find(listItem => listItem.name === ingredient.name && listItem.unit === ingredient.unit)

            if (!exisitingItem) {
                return shoppingList.concat(ingredient)
            }

            return shoppingList.map(item => {
                if (item.name === ingredient.name && item.unit === ingredient.unit) {
                    const itemCopy = Object.assign({}, item)
                    itemCopy.quantity = itemCopy.quantity + ingredient.quantity
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
        return <div key={recipe.id} onClick={() => addRecipeIngredients(recipe.ingredients)}>{recipe.name}</div>
    })

    return (<>
        {recipeList}
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <Ingredients ingredients={shoppingList}/>
    </>)



}

export default ShoppingList