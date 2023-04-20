import React from 'react'

export default function TodaysSchedule() {
  return (
    <div className='bg-white rounded-lg shadow-lg p-5 px-10 pr-15'>
        <div className='flex justify-between'>
            <div className='flex'>
                <h1 className='text-xl font-bold'>Today's Schedule</h1>
            </div>
            <div className='flex'>
                <p className='text-blue-500'>See All</p>
            </div>
        </div>
        <div className='text-left mt-2 pl-4 border-l-4 border-green-500'>
            <h3 className='text-lg font-bold'>Meeting with suppliers from Kuta Bali </h3>
            <p className='p-0 text-start'>14.00-15.00</p>
            <p className='p-0 text-left'>at Sunset Road, Kuta, Bali</p>
        </div>
        <div className='text-left mt-2 pl-4 border-l-4 border-[#6972C3]'>
            <h3 className='text-lg font-bold'>Check operation at Giga Factory 1</h3>
            <p className='p-0'>18.00-20.00</p>
            <p className='p-0'>at Central Jakarta</p>
        </div>
    </div>
  )
}
