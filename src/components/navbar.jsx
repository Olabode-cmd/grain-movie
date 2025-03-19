const Navbar = ()=>{
    return (
      <div className="bg-black py-5 fixed top-0 w-full z-30">
        <div className="flex items-center justify-between max-w-7xl 2xl:max-w-[96rem] px-4 mx-auto">
          <div className="text-white text-xl">Prime video</div>
          <button className="bg-white hover:bg-blue-600 duration-150 text-black hover:text-white py-2 px-2 rounded-md">Get started</button>
        </div>
      </div>
    );
}

export default Navbar;