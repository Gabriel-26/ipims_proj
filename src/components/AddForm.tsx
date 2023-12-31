"use client";
import { useReducer } from "react";

const formReducer = (
  state: any,
  event: { target: { name: any; value: any } }
) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function AddForm() {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form
      className="grid lg:grid-cols-2 w-4/6 gap-4 px-24"
      onSubmit={handleSubmit}
    >
      <div className="input-type">
        <input
          type="text"
          name="firstname"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="FirstName"
          onChange={setFormData}
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="lastname"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="LastName"
          onChange={setFormData}
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="doctorid"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="LastName"
          onChange={setFormData}
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="firstname"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="LastName"
          onChange={setFormData}
        />
      </div>

      <div>
        <div className="form-check">
          <input
            type="radio"
            value="Active"
            id="radioDefault1"
            name="status"
            onChange={setFormData}
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault1" className="inline-block text-gray-800">
            Active
          </label>
        </div>

        <div className="form-check">
          <input
            type="radio"
            value="Inactive"
            id="radioDefault2"
            name="status"
            onChange={setFormData}
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault2" className="inline-block text-gray-800">
            Inactive
          </label>
        </div>
      </div>

      <button className="flex justify-center text w-1/3 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
        Add
      </button>
    </form>
  );
}
