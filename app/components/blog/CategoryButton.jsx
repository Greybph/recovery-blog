import React from 'react'

function CategoryButton({label, category, onClick}) {
  
  return (
    <button 
      id={"cb-" + label}
      className={`
      ${label === "all" ? 'hover:bg-slate-500' : ''}
      ${label === "addiction" ? 'hover:bg-red-500' : ''}
      ${label === "recovery" ? 'hover:bg-blue-500' : ''}
      ${category === label && label === 'all' ? 'bg-slate-500 text-white' : ''}
      ${category === label && label === 'addiction' ? 'bg-red-500 text-white' : ''}
      ${category === label && label === 'recovery' ? 'bg-blue-500 text-white' : ''}
      w-32 p-2 font-medium rounded-md shadow hover:text-white duration-300 border group relative`}
      onClick={onClick}
    >
      {label[0].toUpperCase() + label.substring(1)}
      <div className={`absolute top-0 left-0 w-full h-full transition-transform duration-300 rounded-md ${label === "all" ? 'border-slate-500' : ''} ${label === "addiction" ? 'border-red-500' : ''} ${label === "recovery" ? 'border-blue-500' : ''} group-hover:scale-x-[1.08] group-hover:scale-y-[1.3] group-hover:border-2 -z-10`}></div>
    </button>
  )
}

export default CategoryButton