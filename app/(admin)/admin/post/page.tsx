import InputIcon from '@/components/CustomUi/InputIcon'
import DivPrimary from '@/components/DivPrimary'
import React from 'react'
import SearchIcon from '@/public/icons/search-normal-1.svg'

function page() {
  return (
    <div className=''>
      <div className='mt-4 flex'>
        <InputIcon Icon={SearchIcon} />
      </div>
      <div className="mt-4">
        <DivPrimary className=' rounded-xl overflow-hidden border'>


          <div className="relative overflow-x-auto  sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label className="sr-only">checkbox</label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Post name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Accessories
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Available
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Weight
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>


                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label className="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    AirTag
                  </th>
                  <td className="px-6 py-4">
                    Silver
                  </td>
                  <td className="px-6 py-4">
                    Accessories
                  </td>
                  <td className="px-6 py-4">
                    Yes
                  </td>
                  <td className="px-6 py-4">
                    No
                  </td>
                  <td className="px-6 py-4">
                    $29
                  </td>
                  <td className="px-6 py-4">
                    53 g
                  </td>
                  <td className="flex items-center px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label className="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    AirTag
                  </th>
                  <td className="px-6 py-4">
                    Silver
                  </td>
                  <td className="px-6 py-4">
                    Accessories
                  </td>
                  <td className="px-6 py-4">
                    Yes
                  </td>
                  <td className="px-6 py-4">
                    No
                  </td>
                  <td className="px-6 py-4">
                    $29
                  </td>
                  <td className="px-6 py-4">
                    53 g
                  </td>
                  <td className="flex items-center px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label className="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    AirTag
                  </th>
                  <td className="px-6 py-4">
                    Silver
                  </td>
                  <td className="px-6 py-4">
                    Accessories
                  </td>
                  <td className="px-6 py-4">
                    Yes
                  </td>
                  <td className="px-6 py-4">
                    No
                  </td>
                  <td className="px-6 py-4">
                    $29
                  </td>
                  <td className="px-6 py-4">
                    53 g
                  </td>
                  <td className="flex items-center px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label className="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    AirTag
                  </th>
                  <td className="px-6 py-4">
                    Silver
                  </td>
                  <td className="px-6 py-4">
                    Accessories
                  </td>
                  <td className="px-6 py-4">
                    Yes
                  </td>
                  <td className="px-6 py-4">
                    No
                  </td>
                  <td className="px-6 py-4">
                    $29
                  </td>
                  <td className="px-6 py-4">
                    53 g
                  </td>
                  <td className="flex items-center px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label className="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    AirTag
                  </th>
                  <td className="px-6 py-4">
                    Silver
                  </td>
                  <td className="px-6 py-4">
                    Accessories
                  </td>
                  <td className="px-6 py-4">
                    Yes
                  </td>
                  <td className="px-6 py-4">
                    No
                  </td>
                  <td className="px-6 py-4">
                    $29
                  </td>
                  <td className="px-6 py-4">
                    53 g
                  </td>
                  <td className="flex items-center px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label className="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    AirTag
                  </th>
                  <td className="px-6 py-4">
                    Silver
                  </td>
                  <td className="px-6 py-4">
                    Accessories
                  </td>
                  <td className="px-6 py-4">
                    Yes
                  </td>
                  <td className="px-6 py-4">
                    No
                  </td>
                  <td className="px-6 py-4">
                    $29
                  </td>
                  <td className="px-6 py-4">
                    53 g
                  </td>
                  <td className="flex items-center px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label className="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    AirTag
                  </th>
                  <td className="px-6 py-4">
                    Silver
                  </td>
                  <td className="px-6 py-4">
                    Accessories
                  </td>
                  <td className="px-6 py-4">
                    Yes
                  </td>
                  <td className="px-6 py-4">
                    No
                  </td>
                  <td className="px-6 py-4">
                    $29
                  </td>
                  <td className="px-6 py-4">
                    53 g
                  </td>
                  <td className="flex items-center px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label className="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    AirTag
                  </th>
                  <td className="px-6 py-4">
                    Silver
                  </td>
                  <td className="px-6 py-4">
                    Accessories
                  </td>
                  <td className="px-6 py-4">
                    Yes
                  </td>
                  <td className="px-6 py-4">
                    No
                  </td>
                  <td className="px-6 py-4">
                    $29
                  </td>
                  <td className="px-6 py-4">
                    53 g
                  </td>
                  <td className="flex items-center px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </DivPrimary>
      </div>

    </div>
  )
}

export default page