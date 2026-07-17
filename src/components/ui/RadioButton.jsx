import React from 'react'

const RadioButton = ({ label, options, value, onChange, direction = 'col', labelIcon, error, ...props }) => {
    const { id } = props
    return (
        <div className={`flex ${direction === "row" ? "flex-row" : "flex-col"}`}>
            {label && (
                <div className="w-30">
                    <label for={id} className="flex items-center gap-2 text-s font-bold text-[#ba3d04] mx-2">
                        {label}
                        {labelIcon}
                    </label>
                </div>
            )}
            <div
                className={`flex justify-between items-center mx-2 px-2 py-2`}
            >
            {options && options.map((option) => (
                <label
                    key={option}
                    className="flex items-center gap-2 text-s font-bold text-black mx-2"
                >
                    <input
                        type="radio"
                        name={id}
                        id={option}
                        value={option}
                        checked={value === option}
                        onChange={() => onChange?.(option)}
                        className="w-full bg-transparent border-none outline-none"
                        {...props}
                    />
                    {option}
                </label>
            ))}
            </div>
            {error && <p className='text-red-500 text-s m-2'>{error}</p>}
        </div>
    )
}

export default RadioButton
