import {useState} from "react" 
import "./App.css"

const Counter = () => {
 const [count, setCount] = useState(0)

 const OnIncrease = () => {
    setCount(count+1)
 }

 return (
    <div class="main-container">
      <h1>Counter App</h1>
      <p class="para">{count}</p>
      <button class="button" onClick={OnIncrease}>Click</button>
    </div>
 )
}

export default Counter