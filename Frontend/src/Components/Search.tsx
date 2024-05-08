import { IoSearch } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";

const Search = ({onClose}) => {
  return (
    <div className="fixed top-0 w-screen right-0 ">
      <div className="absolute bg-white duration-100 top-0 right-0 w-full py-4  md:pl-12 gap-4">
        <form className="flex w-full">
          <input placeholder="Search" className="border-b-4 w-full px-3 py-2"></input>
          <button type="submit" className="px-2 hover:border-blue-500 rounded-r-md">
            <IoSearch className="text-2xl text-blue-500 duration-100 hover:scale-125 md:text-3xl " />
          </button>
          <button onClick={onClose} className="px-2 md:px-5 hover:border-blue-500 rounded-r-md">
            <MdOutlineClose className="text-2xl hover:text-red-500 duration-100 hover:scale-125 md:text-3xl " />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
