import { createSlice } from "@reduxjs/toolkit";
const initialState=()=>[
    {id:'0',name:'Sapthahills'},
    {id:'1',name:'Sap'},
    {id:'2',name:'Giri'}
]
const userSlice=createSlice({
    name:'users',
    initialState,
    reducers:{

    }
})
export const selectAllUsers=(state)=>state.users;
export default userSlice.reducer;