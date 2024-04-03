"use client"
import React, { useState } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

type DropdownPropType = {
    content: React.ReactNode
    dropdown: React.ReactNode
    showIcon?: boolean,
    position?: "right" | "left",
    bgColor: string,
    className?: string
}

export default function Dropdown(props: DropdownPropType) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {isOpen && <div className='absolute w-full h-full left-0 top-0 z-0' onClick={() => { setIsOpen(prev => (!prev)) }}>
            </div>}
            <div className='relative cursor-pointer select-none'>
                <div className={`flex gap-1`} onClick={() => { setIsOpen(prev => (!prev)) }}>{props.content} <span className="text-xl">{isOpen ? <BiChevronUp /> : <BiChevronDown />}</span></div>
                {
                    isOpen &&
                    <div className={`absolute items-center m-auto ${props.position == "left" ? "left-0" : "right-0"} fadeIn`}>

                        <div className={`absolute top-0 ${props.position == "left" ? "left-2" : "right-2"} z-0`}>
                            <svg width="29" height="23" viewBox="0 0 29 23" fill={props.bgColor} xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.0359 6.35525C16.7349 0.217128 14.0359 0 14.0359 0C14.0359 0 25.3727 5.36186 28.0717 11.5C30.1603 16.2499 28.0717 23 28.0717 23H0C0 23 11.9473 11.1052 14.0359 6.35525Z" />
                            </svg>

                        </div>

                        <div className={`p-3 rounded text-gray-700 mt-3 z-10 ${props.className}`} style={{ backgroundColor: props.bgColor }}>
                            {props.dropdown}
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
