import React,{useState} from "react";
import {spicyFoods,getNewRandomSpicyFood}  from "../data/food";
function SpicyFoodList(){
    const [foods,setFoods]=useState(spicyFoods)
    const [filterBy,setFilterBy]=useState("All")

    function handleAddFood(){
        const newFood=getNewRandomSpicyFood()
        setFoods([...foods,newFood])
    }
    const foodsToDisplay=foods.filter(food=>{
        if (filterBy === "All"){
            return true
            }
        else{
            return food.cuisine ===filterBy
        }            
    })
    function handleChange(e){
        setFilterBy(e.target.value)
    }
    function handleRemoveFood(id){
        const updated=foods.filter(food => food.id !=id)
        setFoods(updated)
    }

    const foodList=foodsToDisplay.map(food=>(
        <li key={food.id} onClick={()=>handleRemoveFood(food.id)}>Name: {food.name} Cuisine: {food.cuisine} Heat Level: {food.heatLevel}</li>
    ))
    return (
        <div>
            <select name="filter" onChange={handleChange}>
                <option value="All">All</option>
                <option value="American">American</option>
                <option value="Sichuan">Sichuan</option>
                <option value="Thai">Thai</option>
                <option value="Mexican">Mexican</option>
            </select>
            <ol>
                {foodList}
            </ol>
            <button onClick={handleAddFood}>Add New Food</button>
        </div>
    )
}
export default SpicyFoodList;