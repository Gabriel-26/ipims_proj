const LeftNavbar = () => {
  return (
    <div className="p-7 w-1 bg-gray-300 h-full fixed top-20 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out-150 duration-200">
      <button className="flex bg-blue-700 text-white px-4 py-2 border rounded-md hover:bg-gray-400 hover:border-blue-700 hover:text-gray-800">
        Dashboard
      </button>
      <button className="flex bg-blue-700 text-white px-4 py-2 border rounded-md hover:bg-gray-400 hover:border-blue-700 hover:text-gray-800">
        Rooms
      </button>
      <button className="flex bg-blue-700 text-white px-4 py-2 border rounded-md hover:bg-gray-400 hover:border-blue-700 hover:text-gray-800">
        Dashboard
      </button>
      <button className="flex bg-blue-700 text-white px-4 py-2 border rounded-md hover:bg-gray-400 hover:border-blue-700 hover:text-gray-800">
        Dashboard
      </button>
    </div>
  );
};

export default LeftNavbar;
