import Restaurantcard from "./RestaurantCard";
import reslist from "../utils/Mockdata";
import { useEffect, useState } from "react";



const Body = () => {

    const [listofrestaurants,setlistofrestaurants] = useState([])
   
    useEffect(() => {
      fetchData();
    },[]
    )
   const fetchData = async () => {
      const data = await fetch("https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667")
      const json = data.json();
      console.log(json)
      setlistofrestaurants(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants.info)
   }

    return(  
    <div className='body'>
          <div className='filter'>
            <input className="input-box"/>
            <button className="filter-btn" 
             onClick={() => {
              
              const filteredlist = listofrestaurants.filter(
                (res) => res.data.avgRating > 4
              );
              setlistofrestaurants(filteredlist)
            }}>
              Top Rated Restaurant
            </button>
            </div>
          <div className='res-container'>
            {listofrestaurants.map((restaurant) => 
              <Restaurantcard
               resData={restaurant}
               key = {restaurant.data.id}
              />)}
             
             
             
  
          </div>
      </div>
    )
  }
  
export default Body