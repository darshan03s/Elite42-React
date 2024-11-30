import React from 'react'

const DataTable = (props) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Designation</th>
                    </tr>
                </thead>
                <tbody>
                    {props.tableData.map((obj, index) => (
                        <tr key={index}>
                            <td>{obj.name}</td>
                            <td>{obj.designation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable