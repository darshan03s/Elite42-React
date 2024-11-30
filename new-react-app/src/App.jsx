import React from "react";
import { Parent, DataTable } from "./Components";

const App = () => {
    const tableData = [
        { name: "John Doe", designation: "Software Engineer" },
        { name: "Jane", designation: "Software Manager" }
    ];
    const tableData2 = [
        { name: "Mike", designation: "Employee" },
        { name: "Jake", designation: "CEO" }
    ];
    return (
        <div className="App">
            <Parent />
            <DataTable tableData={tableData} />
            <DataTable tableData={tableData2} />
        </div>
    );
};

export default App;
