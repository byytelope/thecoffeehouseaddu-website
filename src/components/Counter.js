import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="align-middle text-center font-bold text-3xl p-3">
            <h1 onClick={() => setCount(count + 1)} className="font-bold text-center">
                +
            </h1>
            <h1 className="text-center font-bold text-3xl">
                {count}
            </h1>
            <h1 onClick={() => setCount(count - 1)} className="align-middle text-center font-bold text-3xl">
                -
            </h1>
        </div>
    );
}

export default Counter;
