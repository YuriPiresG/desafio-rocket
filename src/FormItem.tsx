import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";

export function FormItem() {
  const { register, handleSubmit } = useForm();
  return (
    <div className="absolute top-[8.5rem] left-[1.5rem] right-[1.5rem] grid">
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="">
          <label className="text-gray200 font-[400] text-[0.75rem] mb-[.5rem]">
            Item
          </label>
          <input
            type="text"
            {...register("name")}
            className="w-[22.5rem] bg-gray500 rounded-[.375rem] border border-gray300 h-[2.5rem]"
          />
        </div>

        <div className="flex mt-[.75rem]">
          <div className="grid">
            <label className="text-gray200 font-[400] text-[0.75rem] mb-[.5rem]">
              Quantidade
            </label>
            <div className="flex">
              <input
                type="text"
                placeholder="1"
                {...register("quantity")}
                className="w-[4.15rem] bg-gray500 rounded-l-[.375rem] border border-gray300 h-[2.5rem]"
              />
              <select
                className="w-[4.15rem] bg-gray400 rounded-r-[.375rem] border border-gray300 h-[2.5rem] text-gray200 text-[.625rem] focus:appearance-none pl-[.75rem]"
                defaultValue={"UN."}
                {...register("unit")}
              >
                <option value="unidade" className="">
                  UN.
                </option>
                <option value="litros">L</option>
              </select>
            </div>
          </div>

          <div className="grid ml-[.75rem]">
            <label className="text-gray200 font-[400] text-[0.75rem] mb-[.5rem]">
              Categoria
            </label>
            <select
              className="w-[11.15rem] bg-gray400 rounded-[.375rem] border border-gray300 h-[2.5rem] text-gray200 text-[.875rem] focus:appearance-none pl-[.75rem]"
              {...register("category")}
            >
              <option value="padaria">Padaria</option>
            </select>
          </div>
          <button
            className="w-[2.5rem] h-[2.5rem] rounded-[62.4375rem] bg-purpleLight text-white mt-[2rem] ml-[.75rem]"
            type="submit"
          >
            <Plus className="ml-[.5rem]" />
          </button>
        </div>
      </form>
    </div>
  );
}
