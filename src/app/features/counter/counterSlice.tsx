import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


 interface CounterState {
    value: number,
    text:string
  }
  
  const initialState: CounterState = {
    value: 0,
    text:"Increace ounter"
  }

  const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        incrementAction:(state,actionPayload:PayloadAction<number>)=>{
            state.value += actionPayload.payload
        
        }


    }
  })

  export const {incrementAction} = counterSlice.actions;


  export default counterSlice.reducer;