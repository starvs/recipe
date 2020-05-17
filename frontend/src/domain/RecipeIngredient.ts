import { Ingredient } from './index'

export default interface RecipeIngredient {
    id: string
    quantity: number
    unit: string
    ingredient: Ingredient
}