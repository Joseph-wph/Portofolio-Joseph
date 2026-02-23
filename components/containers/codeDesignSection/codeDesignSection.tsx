import { IoMdArrowForward } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";

const codeDesignSection = () => {
  return (
    <div className="mx-auto flex flex-col my-15 bg-linear-to-t from-pink-50 to-white font-heading">
      <div className="flex-flex-col font-heading p-5 mx-auto gap-10">
        <h1 className="text-center font-bold text-[36px]">
          Code, Design, and Everything in Between
        </h1>
        <p className="text-center text-[20px] leading-10">
          These are the technologies that power my workflow and bring ideas to
          life.
        </p>
      </div>
      
      <div className="flex flex-row items-center gap-5 mx-auto p-5">

        {/* html */}
        <div className="bg-secondary w-50 h-80 rounded-full flex flex-col justify-center items-center p-4 gap-4">
          <div className="bg-white rounded-full w-18 h-18 p-3 flex items-center justify-center">
            <img src="/assets/logo/html.svg" alt="logo" className="w-10 h-10" />
          </div>
          <h1 className="font-semibold text-[20px]">HTML</h1>
          <p className="text-[16px] text-center">
            Crafting semantic, accessible HTML structures.
          </p>
        </div>

        {/* css */}
        <div className="border-slate-400 border w-50 h-80 rounded-full flex flex-col justify-center items-center p-4 gap-4">
          <div className="bg-slate-100 rounded-full w-18 h-18 p-3 flex items-center justify-center">
            <img src="/assets/logo/css.svg" alt="logo" className="w-10 h-10" />
          </div>
          <h1 className="font-semibold text-[20px]">CSS</h1>
          <p className="text-[16px] text-center">
            Crafting semantic, accessible HTML structures.
          </p>
        </div>

        {/* javascript */}
        <div className="bg-secondary hidden lg:flex w-50 h-80 rounded-full flex-col justify-center items-center p-4 gap-4">
          <div className="bg-white rounded-full w-18 h-18 p-3 flex items-center justify-center">
            <img src="/assets/logo/js.svg" alt="logo" className="w-15 h-15" />
          </div>
          <h1 className="font-semibold text-[20px]">Javascript</h1>
          <p className="text-[16px] text-center">
            Crafting semantic, accessible HTML structures.
          </p>
        </div>

        {/* react */}
        <div className="border-slate-400 hidden lg:flex border w-50 h-80 rounded-full flex-col justify-center items-center p-4 gap-4">
          <div className="bg-slate-100 rounded-full w-18 h-18 p-3 flex items-center justify-center">
            <img src="/assets/logo/react.svg" alt="logo" className="w-15 h-15" />
          </div>
          <h1 className="font-semibold text-[20px]">React</h1>
          <p className="text-[16px] text-center">
            Crafting semantic, accessible HTML structures.
          </p>
        </div>

      </div>
      <div className="flex flex-row gap-4 items-center justify-center my-5">
        <IoMdArrowBack className="w-15 h-15 p-3 rounded-full border border-slate-300 text-slate-400 hover:text-black" />
        <IoMdArrowForward className="w-15 h-15 p-3 rounded-full border border-slate-300 text-slate-400 hover:text-black" />
      </div>
    </div>
  );
};

export default codeDesignSection;
