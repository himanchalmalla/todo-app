
import React from 'react'
import { FiEye, FiEyeOff, FiMail } from 'react-icons/fi';

const Input = ({value,  onChange, type = 'text', placeholder, label = '', labelIcon, direction = 'col', error='', ...props}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const wrapperClass = error
  ? "border-red-500 hover:border-red-500 focus-within:border-red-500  focus-within:ring-red-500 focus-within:text-red-500 text-red-500"
  : "border-[#ba3d04] hover:border-[#f55307] focus-within:border-[#f55307] focus-within:ring-[#f55307]";
  const {id} = props

  return (
    <>
      <div className={`flex ${direction === "row" ? "flex-row" : "flex-col"}`}>
        {label && (
          <div className="w-min-40">
            <label for={id} className="flex items-center gap-2 text-s font-bold text-[#ba3d04] mx-2">
              {label}
              {labelIcon}
            </label>
          </div>
        )}

        <div
          className={`flex justify-between items-center mx-2 px-2 py-2 border-2 rounded-xl ${wrapperClass}`}
        >
          <input
            type={type === "password" ? showPassword ? "text" : "password" : type}
            value={value}
            placeholder={placeholder}
            icon={<FiMail />}
            className="w-full bg-transparent border-none outline-none"
            onChange={(e) => onChange?.(e.target.value)}
            {...props}
          />
          { type==='password' && 
          <span>
          {showPassword ? <FiEye className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} /> : 
          <FiEyeOff className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} />}
          </span> }

        </div>
        {error && <p className='text-red-500 text-s m-2'>{error}</p>}
      </div>
    </>
  )
}

export default Input