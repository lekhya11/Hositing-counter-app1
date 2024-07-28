import {useState} from "react" 

const Counter = () => {
 const [count, setCount] = useState(0)

 const OnIncrease = () => {
    setCount(count+1)
 }

 return (
    <div>
      <h1>Counter App</h1>
      <p>{count}</p>
      <button onClick={OnIncrease}>Click</button>
    </div>
 )
}

export default Counter