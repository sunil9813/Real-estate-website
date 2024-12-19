import React from 'react'
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
const Myhouse = () => {
  return (
    <>
      <section className='myhouse mb'>
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Myhouse