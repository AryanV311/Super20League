/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";
import axios from "axios";


// eslint-disable-next-line react-refresh/only-export-components
export const storeContext = createContext(null)

const StoreContextprovider = (props) => {

    const [cartItems, setCartItems] = useState({});  
    const [token, setToken] = useState("");
    const url = "http://localhost:4000";
    const[food_list, setFoodList] = useState([]);

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev) => ({...prev, [itemId]:1}))
        }
        else{
            setCartItems((prev) => ({...prev, [itemId]:prev[itemId] + 1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] - 1}))
    }
    
   const getTotalCartAmount =() => {
    let totalAmount = 0;
    for ( const item in cartItems){
        if(cartItems[item] > 0){
            let itemInfo = food_list.find((product) => product._id === item);
            totalAmount += itemInfo.price * cartItems[item]
        }
    }
       return totalAmount;
   }

   const fetchFoodList = async() => {
    try {
        const response = await axios.get(`${url}/api/food/list`)
        setFoodList(response.data.data)
    } catch (error) {
        console.log(error);
    }
   }

   useEffect(() => {
    async function loadData(){
        await fetchFoodList()
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
        }
    }
    loadData();
   },[])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }

    return (
        <storeContext.Provider value={contextValue}>
            {props.children}
        </storeContext.Provider>
    )
}

export default StoreContextprovider;