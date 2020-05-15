import React, { useState } from 'react'

export interface AddIngredientProps {
    handleSubmit: (e: any, name: string, quantity: string, unit: string) => void
}

export const AddIngredient = ({handleSubmit}: AddIngredientProps) => {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [unit, setUnit] = useState('')

    return (
    <form>
        <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />

        <input
            type="text"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
        />

        <input
            type="text"
            name="unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
        />
        <input type="button" value="Submit Ingredient" onClick={(e) => handleSubmit(e, name, quantity, unit)}/>
    </form>
    )
}

export default AddIngredient