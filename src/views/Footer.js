import React from "react";
import { Contacts, Socials } from "../components/Contacts";

export default function Footer() {
    return (
        <div className="flex flex-col w-full justify-between bg-tch-gray-lt0 pt-2 pb-6">
            <div className="flex justify-center pt-16 pb-4">
                <Socials />
            </div>
            <div className="flex justify-center py-8 pt-12">
                <Contacts />
            </div>
            <div className="font-extrabold text-xl text-center text-tch-gray-dk self-center">
                THE COFFEE HOUSE ADDU
            </div>
            <div className="font-regular text-center text-tch-gray-dk self-center">
                RADHEBAIGE, HITHADHOO <br />
                EST.&nbsp;2020
            </div>
            <div className="font-extrabold text-tch-gray-dk self-center px-8"></div>
        </div>
    );
}
