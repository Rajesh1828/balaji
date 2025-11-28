import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";



export const GiftContext = createContext();


const GiftContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})


    //Add to cart

    const addToCart = async (itemId, size, color) => {
        if (!size) {
            toast.error("Please select a size");
            return;
        }

        if (!color) {
            toast.error("Please select a color");
            return;
        }

        let cartData = structuredClone(cartItems);

        if (!cartData[itemId]) cartData[itemId] = {};
        if (!cartData[itemId][size]) cartData[itemId][size] = {};
        if (!cartData[itemId][size][color]) cartData[itemId][size][color] = 0;

        cartData[itemId][size][color]++;

        setCartItems(cartData);
        toast.success("Product added to cart");
    };

    console.log(cartItems);

    //get cart count
    const getCartItemsCount = () => {
        let count = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                for (const color in cartItems[items][item]) {
                    try {
                        if (cartItems[items][item][color] > 0) {
                            count += cartItems[items][item][color]
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }
            }
        }
        return count
    }


    //update quantity
    const updateQuantity = async (itemId, size, color, quantity) => {
        let cartData = structuredClone(cartItems);
        if (quantity <= 0) {
            delete cartData[itemId][size][color];
            if (Object.keys(cartData[itemId][size]).length === 0) {
                delete cartData[itemId][size];
                if (Object.keys(cartData[itemId]).length === 0) {
                    delete cartData[itemId];
                }
            }
        } else {
            cartData[itemId][size][color] = quantity;
        }
        setCartItems(cartData);
    }

    const value = {
        products,
        cartItems,
        addToCart,
        getCartItemsCount,
        updateQuantity

    }

    return (
        <GiftContext.Provider value={value}>
            {props.children}
        </GiftContext.Provider>
    )

}


export default GiftContextProvider
