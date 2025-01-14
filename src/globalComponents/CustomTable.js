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
            <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-800 sticky top-0 z-10">
                <tr>
                    {columns.map((column, index) => (
                        <th
                            key={index}
                            className="px-6 py-3 text-left text-sm font-semibold text-gray-200"
                        >
                            {column.header}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                {data.map((row, rowIndex) => (
                    <tr
                        key={rowIndex}
                        className="hover:bg-gray-700 transition-colors"
                    >
                        {columns.map((column, colIndex) => (
                            <td
                                key={`${rowIndex}-${colIndex}`}
                                className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap"
                            >
                                {column.accessor ? row[column.accessor] : row[column.header]}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomTable;