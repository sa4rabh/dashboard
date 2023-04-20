import React from 'react'
import './Dashboard.css'
import TopProducts from './TopProducts'
import Header from './Header'
import SideNav from './SideNav'
import TotalSums from './TotalSums'
import Activities from './Activities'
import TodaysSchedule from './TodaysSchedule'
export default function Dashboard() {
    return (
        <div className='bg-gray-100' >
            <div className='flex'>
                <div className="">
                    <SideNav />
                </div>
                <div className=''>
                    <div className='header'>
                        <Header />
                    </div>
                    <div className='right-down'>
                        <TotalSums />
                    </div>

                    <div className='activities'>
                        < Activities />
                    </div>
                    <div className='flex justify-between down'>
                        <div className='flex justify-between topProduct'>
                            < TopProducts />
                        </div>
                        <div  className='flex justify-between todaySchedule' >
                            <TodaysSchedule />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
