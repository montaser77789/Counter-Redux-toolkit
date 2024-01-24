import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { RootState } from "../../app/Store";
import { decrementAction, incrementAction } from "../../app/features/counter/counterSlice";

function Counter() {
   const {textIncrement,value,textDecrement} =useSelector((state: RootState) => state.counter)
   const dispatch = useDispatch()
    return ( 

        <>
        <h3>{value}:</h3>
        <Button onClick={()=>dispatch(incrementAction(5)) }>{textIncrement}</Button>\
        <Button onClick={()=>dispatch(decrementAction(5)) }>{textDecrement}</Button>

        </>
     );
}

export default Counter;