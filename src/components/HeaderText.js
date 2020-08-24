import React, { useState } from "react";
import { useTrail, animated } from "react-spring";

const textItems = ["BREWING THE PERFECT COFFEE", "AT THE HEART OF ADDU"];
const textConfig = { mass: 5, tension: 2000, friction: 200 };

export default function HeaderText() {
    const [toggleText] = useState(true);
    const textTrail = useTrail(2, {
        textConfig,
        opacity: toggleText ? 1 : 0,
        x: toggleText ? 0 : 20,
        height: toggleText ? 80 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    });

    return (
        <div className="flex justify-center text-center text-gray-900 text-6xl">
            <div>
                <div>
                    {textTrail.map(({ x, height, ...rest }, index) => (
                        <animated.div
                            key={textItems[index]}
                            style={{
                                ...rest,
                                transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
                            }}
                        >
                            <animated.div style={{ height }}>{textItems[index]}</animated.div>
                        </animated.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
