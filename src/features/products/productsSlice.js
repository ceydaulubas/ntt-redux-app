// Redux Slice
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// API'dan veriyi çeken asenkron thunk
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('https://honey-badgers-ecommerce.glitch.me/products')
    return response.data
})

export const productsSlice = createSlice({
    name: 'products',
    initialState: { list: [], status: 'idle', error: null },
    reducers: {
        likeProduct: (state, action) => {
            const product = state.list.find((product) => product.id === action.payload)
            if (product) {
                product.status = 'liked'
            }
        },
        unlikeProduct: (state, action) => {
            const product = state.list.find((product) => product.id === action.payload)
            if (product) {
                product.status = 'unliked'
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched posts to the array
                state.list = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default productsSlice.reducer;
export const { likeProduct, unlikeProduct } = productsSlice.actions
