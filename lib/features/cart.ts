'use client';
import { createSlice } from "@reduxjs/toolkit";

interface CartState {
    id: number;
    productName: string;
    quantity: number;
    price: number;
    image: string;
    description: string;
    companyName: string;
}

export interface CartArray {
    data: Array<CartState>
}

let data = []

if (typeof window !== "undefined") {
    const cart = localStorage.getItem("cart");
    data = cart ? JSON.parse(cart) : [];
  }

const initialState: CartArray = {
    data: data
}

//creating reducer | slice
export const cartSlice = createSlice({
    name: 'cart', // name of the reducer
    initialState, // initial value is empty
    reducers: {
        addCart: (state, action) => {
            state.data.push(action.payload)
            localStorage.setItem("cart",JSON.stringify(state.data))
        },      // addCart method only called when any new item will be added into the list

        changeQuantity: (state, action) => {
            const item = state.data.find(obj => obj.id === action.payload.id);
            if (item && action.payload.operation == "add") { // this will check what kind of operation we want to perform
                item.quantity += 1;
                localStorage.setItem("cart",JSON.stringify(state.data))
            } else {                                           //kind of bad logic >.<
                if (item && item.quantity > 1) {
                    item.quantity -= 1;
                    localStorage.setItem("cart",JSON.stringify(state.data))
                } else {
                    state.data = state.data.filter((item) => item.id != action.payload.id)
                    localStorage.setItem("cart",JSON.stringify(state.data))
                }
            }
        }       // chageQuantity used to change to quantity of an item whether it is increasing or decreasing
    }
})

export const { addCart, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;