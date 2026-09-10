function Navbar() {
  return (
    <nav className="bg-[#23303F] px-15 py-5 flex items-center justify-between sticky top-0 ">
      <div className="flex justify-center items-center gap-3">
        <img
          src="kop.png"
          alt="logo PGN"
          className="h-12 w-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
        />

        <h2 className="text-[#CEB288] text-2xl font-bold ">
          PURBAYA GARDA NUSANTARA
        </h2>
      </div>

      <div className="flex items-center gap-8">
        <a href="#" className="text-white hover:text-[#CEB288] ">
          Beranda
        </a>
        <a href="#" className="text-white hover:text-[#CEB288] ">
          Profil
        </a>
        <a href="#" className="text-white hover:text-[#CEB288] ">
          Layanan
        </a>
        <a href="#" className="text-white hover:text-[#CEB288] ">
          Kontak
        </a>
        <a
          href="#"
          className="bg-[#CEB288] text-[#23303F] px-5 py-2.5 rounded font-semibold hover:bg-[#b99d70] transition"
        >
          Hubungi Kami
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
