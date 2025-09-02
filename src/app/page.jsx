import React from 'react';

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-gray-200 min-h-screen">
      <div className="h-105 w-210 bg-gray-300 flex border border-black rounded-4xl">
        <div className="flex gap-10 items-center w-full">
          
          <div className="">
            <img src="/img/my-pfp.jpg" alt="Foto de Miguel Sarti" className="rounded-full h-60 w-60" />
          </div>
          
          <div>
          <ul className="space-y-0">
            <li className="text-1xl text-right"><span className='font-semibold'>Nome:</span> Miguel Sarti</li>
            <li className="text-1xl text-right"><span className='font-semibold'>Idade:</span> 17 anos</li>
          </ul>
          </div>

        </div>
      </div>
    </div>
  )
}