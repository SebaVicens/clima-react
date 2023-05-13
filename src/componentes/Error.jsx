import React from 'react'

function Error({children}) {
  return (
    <div className='md:w-1/3 w-2/3 m-auto text-center bg-red-600 rounded-lg text-white uppercase mb-5 py-2 font-bold'>   
        <p>{children}</p>
    </div>
  )
}

export default Error
