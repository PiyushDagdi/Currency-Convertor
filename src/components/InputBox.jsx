import { useId } from "react"
import React  from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    currencySelected = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
    }) {
    

    const amountInputId = useId

  return (
    <div className={`flex bg-white p-3 rounded-lg text-sm ${className}`}>
        <div className='w-1/2'>
            <label htmlFor="amountInputId" className='text-black/40'>
             {label}
            </label>
            <input 
            id = "amountInputId"
            className='w-full bg-transparent outline-none py-4'
            type="number"
            placeholder='Amount'
            disabled = {amountDisabled}
            value={amount}
            onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>

        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black/40 w-full mb-2'>
            currency type
            </p>
            <select 
            className='rounded-lg px-1 py-1 outline-none bg-gray-100 cursor-pointer'
            value={currencySelected}
            onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled = {currencyDisabled}
            >
                {currencyOptions.map((currency)=>(
                    <option key={currency} value={currency}>
                    {currency}
                    </option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox;