import React, { useEffect, useState } from "react";
import { Child } from "./";

const Parent = () => {
    const [username, setUserName] = useState("");

    useEffect(() => {
        console.log("Username was changed")
    }, [username])

    return (
        <>
            <div className="Parent">This is Parent</div>
            <Child message={"Prop from parent"} />
            <p>The username is {username}</p>
            <button onClick={() => setUserName("John Doe")}>Set username</button>
        </>
    );
};

export default Parent;
