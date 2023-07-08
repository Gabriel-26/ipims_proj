import { BsPersonAdd } from "react-icons/bs";
import { SlRefresh } from "react-icons/sl";

import Table from "./table";
import AddForm from "./AddForm";

const Admin = () => {
  return (
    <>
      <div className="container mx-auto flex justify-between py-5 px-24  ">
        <div className="left flex gap-3">
          <h1 className=" text-4xl font-semibold">Doctors</h1>
          <button className="flex bg-blue-700 text-white px-4 py-2 border rounded-md hover:bg-gray-400 hover:border-blue-700 hover:text-gray-800">
            Add Doctor{" "}
            <span className="px-1">
              <BsPersonAdd size={23}></BsPersonAdd>
            </span>
          </button>
        </div>
      </div>
      <div>
        <hr />
        <form className="grid lg:grid-cols-2 w-4/6 gap-4 px-24">
          {/* <button className="border content-center w-8 h-7 px-1 focus:outline-none rounded-md">
            <SlRefresh size={22}></SlRefresh>
          </button> */}
          {/* <input type="text" role="search" value= /> */}
        </form>
      </div>
      <div className="container mx-auto">
        <AddForm></AddForm>
      </div>

      <div className="container mx-auto ml-20">
        <Table></Table>
      </div>
    </>
  );
};

export default Admin;
