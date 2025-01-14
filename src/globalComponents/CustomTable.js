import React from 'react';

const CustomTable = ({ columns, data }) => {
    if (!columns || !data || data.length === 0) {
        return (
            <div className="text-center p-4 text-gray-500">
                No data available
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <div className="max-h-96 overflow-y-auto">
                <table className="min-w-full bg-gray-800 rounded-lg">
                    <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th
                                key={index}
                                className="px-4 py-2 text-left text-green-500"
                            >
                                {column.Header}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className="border-b border-gray-700 even:bg-gray-700"
                        >
                            {columns.map((column, colIndex) => (
                                <td
                                    key={`${rowIndex}-${colIndex}`}
                                    className="px-4 py-2 text-white whitespace-nowrap"
                                >
                                    {column.accessor ? row[column.accessor] : row[column.header]}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default CustomTable;