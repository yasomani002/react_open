import React, { forwardRef } from 'react'

// function TextFiled({ id, type, name, label, onChange, value, ref }) {

//   return (
//     <>
//       <input
//         id={id}
//         type={type}
//         name={name}
//         value={value}
//         label={label}
//         ref={ref}
//         onChange={onChange} />
//     </>
//   )
// }

// export default TextFiled


export const TextField = forwardRef(({ name, id, value, onChange, type="text", placeholder, label, rootRef }, ref) => {
  return (
    <div ref={rootRef}>
    <input
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      label={label}
      ref={ref}

    />
    </div>
  )
})