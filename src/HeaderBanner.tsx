import banner from "./assets/Cover.png";

export function HeaderBanner() {
  return (
    <header>
      <img src={banner} alt="" className="w-[26.75rem] h-[11.375rem] object-cover object-left"/>
      <h1 className="text-white pt-[5.5rem] pl-[1.5rem] font-bold text-[1.5rem] absolute top-0">Lista de Compras</h1>
    </header>
  );
}
