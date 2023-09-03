import React from 'react'
import { Typography } from "@mui/material";

const ReviewComponent = () => {
  return (
    <div className="px-32">
      <section>
        <Typography variant="h4">Summary</Typography>
        <p className="my-10 opacity-50">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquen t perlvinar.
          Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.
          Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet
          lacinia. Aliquam in elementum tellus.as
        </p>
      </section>
     
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 rounded-l-lg">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr className="font-semibold text-gray-900 dark:text-white">
                <th scope="row" className="px-6 py-3 text-base">Total</th>
                <td className="px-6 py-3">21,000</td>
            </tr>
        </tfoot>
    </table>
</div>

    </div>
  )
}

export default ReviewComponent
