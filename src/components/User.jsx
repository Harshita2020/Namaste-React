import { useState } from "react"

const User = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>Count = {count}</h1>
            <h2> Name: Harshita</h2>
            <h3>Location: Delhi</h3>
            <h4>COntact: harshitaautocad@gmail.com</h4>
        </div>
    )
}

export default User