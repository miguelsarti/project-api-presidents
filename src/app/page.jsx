import React from 'react';

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-gray-200 min-h-screen">
      <div className="bg-gray-300 rounded-lg p-10 shadow-lg h-200 w-200">
        <div className="gap-9 flex-col mx-2">
          
          <div className="flex-shrink-0 mx-auto flex items-center flex-col mb-5">
            <img src="/img/my-pfp.jpg" 
            alt="Foto de Miguel Sarti"
            width={250} 
            height={150} 
            className="object-cover mb-4" />
          </div>
          
          <div className='flex-1 text-center'>
            <h2 className='text-2xl font-bold mb-6'>Miguel Sarti</h2>
          </div>
          
          <div className='mb-6 bg-gray-500 p-4 rounded-lg w-100 h-50 items-center text-center flex flex-col'>
            <p className='text-center text-gray-700 mb-4'>
              Tenho 17 anos, estudo na turma 2TDS2 na Escola SENAI.
            </p>
            <a href='kdosdkos' >aaa</a>
          </div>

        </div>
      </div>
    </div>
  )
}