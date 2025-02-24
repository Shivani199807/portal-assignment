import React from "react";
import "../styles/table.css";
import PropTypes from "prop-types";

const Table = ({ columns, data, excludeKeys = [] }) => {


    const columnKeys =data.length>0 && Object.keys(data[0]).filter((key) => !excludeKeys.includes(key));

    return (
        <div className="table-container">
            <table className="custom-table">
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index} data-testid={`column-${index}`}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 ? (
                        data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {columnKeys.map((col, colIndex) => (
                                    <td   data-testid={`cell-${rowIndex}-${colIndex}`} key={colIndex}>{row[col]}</td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length} className="no-data">
                                No data available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};
Table.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    excludeKeys: PropTypes.array
};

export default Table;