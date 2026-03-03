import React from 'react'
import Header from '../../controllers/Header'
import FindNavigaror from '../../controllers/FindNavigaror'
import TopDoctorList from '../../controllers/TopDoctorList'
import AdverBooking from '../../controllers/AdverBooking'


function Home() {
  return (
    <div className=''>
      <Header/>

      <div className='max-w-vl mx-auto px-5 max-sm:p-3'>
        <FindNavigaror/>
        <TopDoctorList/>
        <AdverBooking/>
        
      </div>
     

    </div>
  )
}

export default Home