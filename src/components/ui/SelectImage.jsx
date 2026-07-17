import React from 'react'

const SelectImage = ({ onChange, placeholder, label = '', labelIcon, direction = 'col', error='',existingImageUrl='', ...props}) => {
     const {id} = props
     const wrapperClass = error
  ? "border-red-500 hover:border-red-500 focus-within:border-red-500  focus-within:ring-red-500 focus-within:text-red-500 text-red-500"
  : "border-[#ba3d04] hover:border-[#f55307] focus-within:border-[#f55307] focus-within:ring-[#f55307]";
  const [previewImage, setPreviewImage] = React.useState(existingImageUrl);
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
               type='file'
               placeholder={placeholder}
               className="w-full bg-transparent border-none outline-none"
               onChange={(e) =>{ 
                const file = e.target.files[0];
                if (file){
                setPreviewImage(URL.createObjectURL(file))
                onChange?.(file)}
               }}
               {...props}
             />
           </div>
           {previewImage && <img src={previewImage} alt="" className='w-40 h-40 align-center m-2' />}
           {error && <p className='text-red-500 text-s m-2'>{error}</p>}
         </div>
       </>
     )
}

export default SelectImage
