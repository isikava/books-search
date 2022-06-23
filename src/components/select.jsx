import React from 'react';

export const Select = ({ name, options, value, onChange }) => {
  return (
    <div className='py-2 flex flex-col sm:flex-row sm:items-center'>
      <label htmlFor={name} className='block mb-1 mr-1 text-lg'>
        {name}
      </label>
      <select
        name={name}
        id={name}
        className='w-full bg-gray-50 border border-gray-300 
          text-gray-900 text-md block p-2
          focus:ring-blue-500 focus:border-blue-500'
        onChange={onChange}
        value={value}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

// export const Select = ({ name, options }) => {
//   const [selected, setSelected] = useState(options[0]);

//   return (
//     <div className='py-2 flex flex-col sm:flex-row sm:items-center'>
//       <label htmlFor={name} className='block mb-1 mr-1 text-lg'>
//         {name}
//       </label>
//       <select
//         name={name}
//         id={name}
//         className='w-full bg-gray-50 border border-gray-300
//         text-gray-900 text-md block p-2
//         focus:ring-blue-500 focus:border-blue-500'
//         onChange={(e) => setSelected(e.target.value)}
//         value={selected}
//       >
//         {options?.map((option) => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//       {/* Selected :{selected} */}
//     </div>
//   );
// };
