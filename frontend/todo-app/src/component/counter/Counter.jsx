import { useState } from 'react'
import'./Counter.css'
import CounterButton from './CounterButton';
import CounterResetButton from './CounterResetButton.jsx';


export default function Counter(){

    const [count, setCount] = useState(0);

    function incrementCounterParentFunction(by) {
        setCount(count+by)
    }
    function decrementCounterParentFunction(by) {
        setCount(count-by)
    }
    function resetCounterParentFunction() {
        setCount(0)
    }

    function someMethodInParent(){
        console.log('parent method called')
    }
    
    return (
        <>
        <span className="totalCount">{count}</span>
        <CounterButton by = {1} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
        <CounterButton by = {2} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
        <CounterButton by = {5} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
        <CounterResetButton resetMethod={resetCounterParentFunction}/>
        </>
    )
}

 