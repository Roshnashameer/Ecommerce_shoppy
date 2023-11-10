import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";
import productSlice from "./productsSlice";

const store=configureStore({
    reducer:{
        cart:cartSlice,
        wishList:wishlistSlice,
        productSlice
    }
})
export default store