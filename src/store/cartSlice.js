import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:'name',
    initialState:{
       items:[],
       totalQuantity:0
    },
    reducers:{
        addItem(state, action){

            let newItem = action.payload;
            console.log(newItem);

            let existingItem = state.items.find((item) => newItem.id === item.id);
            
            console.log(existingItem)
            
            if(existingItem){
                console.log("there is product")
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }else{
                console.log("there is no product")
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    name: newItem.title,
                    totalPrice: newItem.price,
                });
                console.log(newItem.id)
            }
            state.totalQuantity++;
        },
        removeItem(state,action){
            const id = action.payload;
            const existingItem = state.items.find( item => item.id === id);
            console.log(existingItem.id)
            if(existingItem.quantity === 1){
                let indexOfItem = state.items.findIndex( item => item.id === id );
                state.items.splice(indexOfItem,1);
            }else{
                console.log("more then one product is there")
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
            state.totalQuantity--;
        },
        resetState(state, action){
            console.log(state);
            console.log(action);
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;