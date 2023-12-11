import React from 'react'

function MainContainer() {
  return (
    <>
    <div className='banner '>
    <a target='_blank' href="https://youtu.be/IifHb4wxoTA">
    <div className=' cursor-pointer z-10 bg-opacity-75 ml-[82rem] bg-white pt-[9px] mb-[2px] pl-[7px]   absolute text-black text-lg  flex justify-center '> Watch Video ▶</div>
    </a>
    <img className=' relative object-fit h-[520px]' src="https://tbcdn.talentbrew.com/company/287/v2_0/img/banner/banner-dei-l.jpg"

     alt="background-img"/>
    </div>
    <div className=' flex justify-center  p-2 h-16 text-white mx-auto text-4xl bg-blue-950'>Opportunities at Citi</div>
    <p className=' mt-4 p-3 leading-normal text-center text-gray-500 text-lg'>Working at Citi is far more than just a job. A career with us means joining a family of more than 230,000<br/>
         dedicated people from around the globe. We believe that everyone belongs in banking.</p>
    </>
  )
}

export default MainContainer
