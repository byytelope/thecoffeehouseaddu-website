import React from "react";

export default function RearrangeableList() {    
    return (
        <ul className="flex flex-col justify-center p-10 space-y-6">
            <li className="w-1/6 rounded-lg overflow-hidden shadow">
                <div className="font-bold text-lg mb-2 px-3 text-center text-gray-600">List Element 1</div>
            </li>
            <li className="w-1/6 rounded-lg overflow-hidden shadow">
                <div className="font-bold text-lg mb-2 px-3 text-center text-gray-600">List Element 2</div>
            </li>
            <li className="w-1/6 rounded-lg overflow-hidden shadow">
                <div className="font-bold text-lg mb-2 px-3 text-center text-gray-600">List Element 3</div>
            </li>
            <li className="w-1/6 rounded-lg overflow-hidden shadow">
                <div className="font-bold text-lg mb-2 px-3 text-center text-gray-600">List Element 4</div>
            </li>
        </ul>
    );
}
