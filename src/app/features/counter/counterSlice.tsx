import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


 interface CounterState {
    value: number,
    textIncrement:string
    textDecrement:string

  }
  
  const initialState: CounterState = {
    value: 0,
    textIncrement:"Increace ounter",
    textDecrement:"Decriment ounter"

  }

  const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        incrementAction:(state,actionPayload:PayloadAction<number>)=>{
            state.value += actionPayload.payload
        },
        decrementAction:(state,actionPayload:PayloadAction<number>)=>{
            state.value -= actionPayload.payload
        }


    }
  })

  export const {incrementAction,decrementAction} = counterSlice.actions;


  export default counterSlice.reducer;