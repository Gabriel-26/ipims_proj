import { BiEdit, BiTrashAlt } from "react-icons/bi";

export default function Table() {
  return (
    <div className="pl-28 flex-auto ">
      <table className="min-w-full table-auto ">
        <thead>
          <tr className="bg-gray-800 rounde">
            <th className="px-16 py-2 rounded-tl-lg">
              <span className="text-gray-200">Doctor ID</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-200">Nameadfadfadfad</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-200">Name</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-200">Name</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-200">Name</span>
            </th>
            <th className="px-16 py-2 rounded-tr-lg">
              <span className="text-gray-200">Name</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          <tr className="bg-gray-50 text-center">
            <td className="px-16 py-2 flex flex-row items-center">
              <span className="text-center ml-2 font-semibold">
                Gabriel Tejana
              </span>
            </td>
            <td className="px-16 py-2">
              <span>Gabriel Tejana</span>
            </td>
            <td className="px-16 py-2">
              <span>Gabriel Tejana</span>
            </td>
            <td className="px-16 py-2">
              <span>Gabriel </span>
            </td>
            <td className="px-16 py-2">
              <span>Gabriel Tejana</span>
            </td>
            <td className="px-16 py-2 flex justify-around gap-5">
              <button className="cursor">
                <BiEdit size={25} color="green"></BiEdit>
              </button>
              <button className="cursor">
                <BiTrashAlt size={25} color="red"></BiTrashAlt>
              </button>
            </td>
          </tr>
          <tr className="bg-gray-50 text-center">
            <td className="px-16 py-2 flex flex-row items-center">
              <span className="text-center ml-2 font-semibold">
                Gabriel Tejana
              </span>
            </td>
            <td className="px-16 py-2">
              <span>Gabriel Tejana</span>
            </td>
            <td className="px-16 py-2">
              <span>Gabriel Tejana</span>
            </td>
            <td className="px-16 py-2">
              <span>Gabriel </span>
            </td>
            <td className="px-16 py-2">
              <span>Gabriel Tejana</span>
            </td>
            <td className="px-16 py-2 flex justify-around gap-5">
              <button className="cursor">
                <BiEdit size={25} color="green"></BiEdit>
              </button>
              <button className="cursor">
                <BiTrashAlt size={25} color="red"></BiTrashAlt>
              </button>
            </td>
          </tr>
          <tr className="bg-gray-50 text-center">
            <td className="px-16 py-2 flex flex-row items-center">
              <span className="text-center ml-2 font-semibold">
                Gabriel Tejana
              </span>
            </td>
            <td className="px-16 py-2">
              <span>Gabriel Tejana</span>
            </td>
            <td className="px-16 py-2">
              <span>Gabriel Tejana</span>
            </td>
            <td className="px-16 py-2">
              <span>Gabriel </span>
            </td>
            <td className="px-16 py-2">
              <span>Gabriel Tejana</span>
            </td>
            <td className="px-16 py-2 flex justify-around gap-5">
              <button className="cursor">
                <BiEdit size={25} color="green"></BiEdit>
              </button>
              <button className="cursor">
                <BiTrashAlt size={25} color="red"></BiTrashAlt>
              </button>
            </td>
          </tr>
          <tr className="bg-gray-50 text-center">
            <td className="px-16 py-2 flex flex-row items-center">
              <span className="text-center ml-2 font-semibold">
                Gabriel Tejana
              </span>
            </td>
            <td className="px-16 py-2">
              <span>Gabriel Tejana</span>
            </td>
            <td className="px-16 py-2">
              <span>Gabriel Tejana</span>
            </td>
            <td className="px-16 py-2">
              <span>Gabriel </span>
            </td>
            <td className="px-16 py-2">
              <span>Gabriel Tejana</span>
            </td>
            <td className="px-16 py-2 flex justify-around gap-5">
              <button className="cursor">
                <BiEdit size={25} color="green"></BiEdit>
              </button>
              <button className="cursor">
                <BiTrashAlt size={25} color="red"></BiTrashAlt>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
