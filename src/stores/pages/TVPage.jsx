import React, { useState } from 'react'
import { tvData } from '../data/tv'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const TVPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])

    const companyHandler=(brand)=>{
            if(selectedProduct.includes(brand)){
                setSelectedProduct(selectedProduct.filter(item => item !== brand))
            }else{
                setSelectedProduct([...selectedProduct, brand]) 
            }
    }

    const filteredProduct = selectedProduct.length===0?
        tvData : tvData.filter((item)=>selectedProduct.includes(item.brand))

return (
<>
<Navbar />
<div className="fullpage">
    
<div className="pro-selected">

{filteredProduct.map((tv)=>{
    return(
        <div className='pro-input'>
            <label >
                <input type="checkbox" 
                checked = {selectedProduct.includes(tv.brand)}
                onChange={()=>companyHandler(tv.brand)}
                />
                {tv.brand}
            </label>
        </div>
    )
})}

</div>

<div className='pageSection'>
    {filteredProduct.map((item)=>{
        return(
            <div>

            <Link to={`/tv/${item.id}`}>
                <div className="pageImg">
                    <img src={item.image} alt="" />
                </div>
            </Link>
                <div className="proModel">
                    {item.brand}, {item.model}
                </div>
            </div>
        )
    })}

 </div>
</div>
</>
  )
}

export default TVPage
