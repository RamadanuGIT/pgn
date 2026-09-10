function Hero() {
  return (
    <section className="bg-[#23303F] text-white px-15 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12 items-center">
        {/* KIRI */}
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            SOLUSI KEAMANAN
            <br />
            PROFESIONAL & TERPERCAYA
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Kami hadir
            memberikan layanan keamanan profesional, disiplin, dan terpercaya.
          </p>

          <div className="flex gap-4">
            <button className="bg-[#CEB288] text-[#23303F] px-6 py-3 rounded-md font-semibold hover:bg-[#b99d70] transition">
              Hubungi Kami
            </button>

            <button className="border border-[#CEB288] text-[#CEB288] px-6 py-3 rounded-md font-semibold hover:bg-[#CEB288] hover:text-[#23303F] transition">
              Lihat Layanan
            </button>
          </div>
        </div>

        {/* KANAN */}
        <div>
          <img
            src="hero.jpeg"
            alt="PT Purbaya Garda Nusantara"
            className="w-full h-112.5 object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
