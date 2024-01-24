import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { RootState } from "../../app/Store";
import { incrementAction } from "../../app/features/counter/counterSlice";

function Counter() {
   const {text,value} =useSelector((state: RootState) => state.counter)
   const dispatch = useDispatch()
    return ( 

        <>
        <h3>{value}:</h3>
        <Button onClick={()=>dispatch(incrementAction(5)) }>{text}</Button>
        </>
     );
}

export default Counter;