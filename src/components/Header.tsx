import { motion } from "framer-motion";

import HeaderLogo from "./HeaderLogo";

interface HeaderProps {
    delay: number;
}

export default function Header(props: HeaderProps) {
    return (
        <motion.div
            className="flex justify-center w-full py-8 xs:py-16"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: props.delay }}
        >
            <HeaderLogo
                className="px-4 xs:px-0 transform scale-125 select-none fill-current text-tch-dark-surface-2 dark:text-tch-gray-md"
                width="250px"
                height="250px"
            />
        </motion.div>
    );
}
