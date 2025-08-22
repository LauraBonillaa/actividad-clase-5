import { useState, useEffect } from "react"
import "../../Components/counter/counter.css"

const Counter = () => {

const [colorcounter,setCounter] = useState(0)
const [backgroundColor, setBackgroundColor] = useState('')

const colors = [
    '#FF6B6B', 
    '#4ECDC4', 
    '#45B7D1', 
    '#96CEB4', 
    '#FFEAA7', 
    '#DDA0DD', 
    '#FFB6C1', 
    '#98D8C8', 
    '#F7DC6F',
    '#BB8FCE'  
]

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}

useEffect(() => {
    setBackgroundColor(getRandomColor())
}, [])

    return (
        
        <div id="counter-box" style={{ backgroundColor }}>
            <h1>Color counter</h1>
<p>{colorcounter}</p>
            <button onClick={() => {setCounter(colorcounter + 1);setBackgroundColor(getRandomColor())}}>Boton Contador</button>
        </div>
    )

}

export default Counter