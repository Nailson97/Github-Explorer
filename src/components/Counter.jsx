import { useState } from 'react'

export function Counter() {
    const [counter, setCounter] = useState(0)

    function increment() {
        if (counter >= 0) {
            setCounter(counter + 1)
        }
    }

    function decrement() {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }


    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Incrementar</button>
            <div>
                <button type="button" onClick={decrement}>Decrementar</button>
            </div>

        </div>
    )
}