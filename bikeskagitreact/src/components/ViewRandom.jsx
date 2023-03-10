import React from "react";

function Random() {
    return (
        <>
            <div className="bg-gradient-to-r from-cyan-100 to-blue-300">
        <div>
            <button className="shadow bg-orange-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button"> Randomly Select a Ride </button>
        </div>
        <p>Will render one randomly selected ride from the entries currently in database.</p>
        </div>
        </>
    );
}

export default Random;
