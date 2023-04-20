import React from 'react'
import styles from './TotalSums.module.css'

export default function TotalSums() {
    return (
        <div>
            <div className='flex justify-between mb-5'>
                <div className='bg-[#DDEFE0] p-2 rounded-xl'>
                    <i className="float-right fas fa-dollar-sign pl-7 pr-1"></i>
                    <p>Total Revenues</p>
                    <h3 className='pl-3 pr-3'>$2,129,430</h3>
                </div>
                <div className='bg-[#F4ECDD] p-2 rounded-xl'>
                    <i className="float-right fas fa-exchange-alt pl-7 pr-1"></i>
                    <p>Total Transitions</p>
                    <h3 className='pl-3 pr-3'>1,520</h3>
                </div>
                <div className='bg-[#EFDADA] p-2 rounded-xl'>
                    <i className="float-right fas fa-heart pl-7 pr-1"></i>
                    <p>Total Likes</p>
                    <h3 className='pl-3 pr-3'>9,721</h3>
                </div>
                <div className='bg-[#DEE0EF] p-2 rounded-xl '>
                    <i className="float-right fas fa-users pl-7 pr-1"></i>
                    <p>Total Users</p>
                    <h3 className='pl-3 pr-3'>892</h3>
                </div>
            </div>
        </div>
    )
}
