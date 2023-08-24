import { Plus } from "lucide-react";

export function FormItem() {
  return (
    <div className="absolute top-[8.5rem] left-[1.5rem] right-[1.5rem]">
      <form className="grid justify-center">
        <div className="grid">
          <label className="text-gray200 font-[400] text-[0.75rem] mb-[.5rem]">
            Item
          </label>
          <input
            type="text"
            name=""
            id=""
            className="w-[22.5rem] bg-gray500 rounded-[.375rem] border border-gray300 h-[2rem]"
          />
        </div>

        <div className="flex mt-[.75rem]">
          <div className="grid">
            <label className="text-gray200 font-[400] text-[0.75rem] mb-[.5rem]">
              Quantidade
            </label>
            <input
              type="text"
              name=""
              id=""
              className="w-[4.15rem] bg-gray500 rounded-[.375rem] border border-gray300 h-[2rem]"
            />
          </div>

          <div className="grid ">
            <label className="text-gray200 font-[400] text-[0.75rem] mb-[.5rem]">
              Categoria
            </label>
            <input
              type="text"
              name=""
              id=""
              className="w-[4.15rem] bg-gray500 rounded-[.375rem] border border-gray300 h-[2rem]"
            />
          </div>
          <button className="w-[2.5rem] h-[2.5rem] rounded-[62.4375rem] bg-purpleLight text-white">
            <Plus className="ml-[.5rem]" />
          </button>
        </div>
      </form>
    </div>
  );
}
