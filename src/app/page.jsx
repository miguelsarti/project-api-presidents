import React from 'react';

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-gray-200 min-h-screen">
      <div className=" bg-gray-300 rounded-lg p-10 shadow-lg h-90 w-200">
        <div className="flex gap-6 items-center">
          
          <div className="flex-shrink-0">
            <img src="/img/my-pfp.jpg" 
            alt="Foto de Miguel Sarti"
            width={150} 
            height={150} 
            className="rounded-lg object-cover" />
          </div>
          
          <div className='flex-1'>
          <h2 className='text-2xl font-bold mb-3'>Título do Card</h2>
          <p>ofoeopfkepofkweopfkepwofkpoe</p>
          </div>

        </div>
      </div>
    </div>
  )
}