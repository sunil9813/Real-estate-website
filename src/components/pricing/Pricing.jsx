import React from "react"
import Back from "../common/Back"
import PriceCard from "../home/price/PriceCard"
import img from "../images/pricing.jpg"
import "../home/price/price.css"

const Pricing = () => {
  return (
    <>
      <section className='pricing mb'>
        <Back name='30 days money back guarantee' title='No Extra Fees. Friendly Support' cover={img} />
        <div className='price container'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Pricing
