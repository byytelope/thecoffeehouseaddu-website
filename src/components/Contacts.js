import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faFacebook,
    faViber,
    faWhatsapp,
    faTelegramPlane,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faAt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

import CustomButton from "./CustomButton";

const SocialBtn = ({ btnData }) => (
    <motion.button
        className="flex flex-col h-0 justify-center rounded-full cursor-pointer focus:outline-none"
        whileFocus={{ scale: 1.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", bounce: 0.5 }}
        onClick={() => window.open(btnData.link, "_blank")}
    >
        <div className={`${btnData.color} dark:text-tch-gray-md`}>
            <FontAwesomeIcon icon={btnData.icon} size="2x" />
        </div>
    </motion.button>
);

const socialIcons = [
    {
        icon: faFacebook,
        link: "https://facebook.com/The-Coffee-House-Addu-106094487875368",
        color: "text-facebook",
    },
    {
        icon: faInstagram,
        link: "https://instagram.com/thecoffeehouseaddu/",
        color: "text-instagram",
    },
    {
        icon: faViber,
        link: "viber://chat?number=9607897068",
        color: "text-viber",
    },
    {
        icon: faTwitter,
        link: "https://twitter.com/thecoffeehouseaddu",
        color: "text-twitter",
    },
    {
        icon: faTelegramPlane,
        link: "https://telegram.me/thecoffeehouseaddu",
        color: "text-telegram",
    },
    {
        icon: faWhatsapp,
        link: "https://wa.me/9607897068",
        color: "text-whatsapp",
    },
];

export function Socials() {
    return (
        <div className="grid gap-16 grid-cols-3 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6">
            {socialIcons.map((data, i) => (
                <SocialBtn key={i} btnData={data} />
            ))}
        </div>
    );
}

export function Contacts() {
    return (
        <div className="grid gap-4 grid-cols-2 select-none">
            <CustomButton
                btnData={{ text: "CALL US", icon: faPhoneAlt }}
                onClick={() => window.open("tel:+960-7897068", "_self")}
            />
            <CustomButton
                btnData={{ text: "EMAIL US", icon: faAt }}
                onClick={() => window.open("mailto:hello@thecoffeehouseaddu.com", "_blank")}
            />
        </div>
    );
}
