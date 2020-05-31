import React, { useState } from 'react'
import styled from 'styled-components'

export interface AddIngredientProps {
    handleSubmit: (e: any, name: string, quantity: string, unit: string) => void
}

export const AddIngredient = ({handleSubmit}: AddIngredientProps) => {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [unit, setUnit] = useState('')

    return (
    <div>
        <StyledInput
            placeholder="ingredient name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />

        <StyledInput
            placeholder="quantity"
            type="text"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
        />

        <StyledSelect name={"unit"} onChange={(e) => setUnit(e.target.value)}>
            <option value=""></option>
            <option value="ounces">ounces</option>
            <option value="pounds">pounds</option>
            <option value="grams">grams</option>
        </StyledSelect>
        <StyledInput type="button" value="Submit Ingredient" onClick={(e) => handleSubmit(e, name, quantity, unit)}/>
    </div>
    )
}

const StyledInput = styled.input`
    padding: 10px;
    border:0;
    border-radius:10px;
    box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
    margin-right: 10px;
    &:focus {
        outline:none !important
    };
`

const StyledSelect = styled.select`
    padding: 10px;
    border:0;
    border-radius:10px;
    box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
    margin-right: 10px;
    &:focus {
        outline:none !important
    };
`

export default AddIngredient