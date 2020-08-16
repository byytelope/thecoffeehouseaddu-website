import React from "react";
import Cover from "../assets/img/Cover_TCHM.jpg";

export default function CoverPhoto() {
    return (
        <div>
            <img src={Cover} alt="Cover" className="fixed"/>
        </div>
    );
}
