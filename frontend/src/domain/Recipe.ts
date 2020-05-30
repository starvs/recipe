import { RecipeIngredient } from '.'

export default interface Recipe {
    bakeTemp: number
    bakeTime: number
    recipeIngredients: RecipeIngredient[]
    createdAt: string
    deletedAt: string | null
    id: string
    prepTime: number
    tags: string[]
    updatedAt: string
    name: string
}