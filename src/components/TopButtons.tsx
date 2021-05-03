import React from "react";
import { motion } from "framer-motion";

import CustomButton from "./CustomButton";

interface TopButtonsProps {
    btnData: Array<BtnDataInterface>;
}

interface BtnDataInterface {
    id: number;
    text: string;
    ref: React.RefObject<HTMLElement>;
}

export default function TopButtons(props: TopButtonsProps) {
    const btnData = props.btnData;
    const handleOnClick = ({ current }: React.RefObject<HTMLElement>) =>
        window.scrollTo({ behavior: "smooth", top: current?.offsetTop });

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 xl:gap-8">
            {btnData.map((data) => (
                <motion.div
                    key={data.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                        type: "spring",
                        stiffness: 250,
                        delay: 1 + data.id / 10,
                    }}
                >
                    <CustomButton btnData={data} onClick={() => handleOnClick(data.ref)} />
                </motion.div>
            ))}
        </div>
    );
}
