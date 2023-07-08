const TopNavbar = () => {
  return (
    <main>
      <div
        className="
        h-16
        flex
        flex-row
        items-center
        transition
        duration-500
        bg-white
        bg-opacity-90
        "
      >
        <img className="h-20 lg:h-18" src="/images/logo.png" alt="Logo" />
        <h1 className="text-xl md:text-2xl text-center font-bold py-10">
          Admin
        </h1>
      </div>
    </main>
  );
};

export default TopNavbar;
