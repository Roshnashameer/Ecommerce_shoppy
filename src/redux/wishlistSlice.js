import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
    name: 'wishList',
    initialState: [],
    reducers: {
        // actions
        // updating state,action=parameter used to define arguments to addToCart fn
        addToWishlist: (state, action) => {
            state.push(action.payload)
        },
        removeWishlist: (state, action) => {
            // return new filtered array
        
            return state.filter(i => i.id != action.payload)
        }
       

    }
})
// export reducer
export default WishlistSlice.reducer

// action
export const { addToWishlist,removeWishlist } = WishlistSlice.actions