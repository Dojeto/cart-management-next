'use client';
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart'

//creating redux store
export const store = configureStore({
    reducer: {
        cart : cartReducer //set the reducer
    },
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch