import React,{useContext} from 'react'
//import React from 'react'
import './FoodDisplay.css'
//import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
function FoodDisplay({category}) {
    const{food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
    <hr></hr>
    <h2> top dishes near you</h2>
    <div className='food-display-list'>
    {food_list.map((item,index)=>{
        if(category==='All' || category===item.category){
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>  
        }
       
        })}
    </div>
    </div>
  )
}

export default FoodDisplay