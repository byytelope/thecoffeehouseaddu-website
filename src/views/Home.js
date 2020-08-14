import React from "react";

function Home (props) {
    return (
        <div className="font-bold text-4xl text-center">
            Hello {props.name}
        </div>
    );
}

export default Home;
