import React from 'react';
import { GreenTick, RedCrossTick } from "shared/component/icons/icon";
import { PRICE_COMPARISON_DATA, PRICE_COMPARISON_HEADER } from "shared/constant/constant";

const PriceComparisonTable = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div className="w-full mt-20 overflow-x-auto " ref={ref}>
            <table className="min-w-full table-fixed  ">
                <thead className="text-left bg-slate-200 sticky top-0">
                    <tr>
                        {PRICE_COMPARISON_HEADER.map((header, index) => (
                            <th key={index} className="p-5 font-sans text-xl font-semibold text-center">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="overflow-x-auto">
                    {PRICE_COMPARISON_DATA.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-gray-300">
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="text-center p-5">
                                    {typeof cell === 'boolean' ? (
                                        <div className="flex justify-center items-center">
                                            {cell ? (
                                                <GreenTick className="w-5 h-5 text-green-500 dark:text-green-400" />
                                            ) : (
                                                <RedCrossTick className="w-5 h-5 text-red-500 dark:text-red-400" />
                                            )}
                                        </div>
                                    ) : (
                                        cell
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
});

export default PriceComparisonTable;