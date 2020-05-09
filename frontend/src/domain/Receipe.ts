import { Ingredient } from './'

export default interface Recipe {
    bakeTemp: number
    bakeTime: number
    ingredients: Ingredient[]
    createdAt: string
    deletedAt: string | null
    id: string
    prepTime: number
    tags: string[]
    updatedAt: string
    name: string
}