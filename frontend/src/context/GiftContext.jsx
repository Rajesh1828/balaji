import { createContext, useState } from "react";
import { products } from "../assets/assets";



export const GiftContext = createContext();


const GiftContextProvider =(props)=>{





 const value = {
     products

 }

    return(
        <GiftContext.Provider value={value}>
            {props.children}
        </GiftContext.Provider>
    )

}


export default GiftContextProvider
