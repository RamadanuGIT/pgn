function Services() {
  const layanan = [
    {
      nama: "Pengaman Gedung",
      deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      nama: "Patroli Keamanan",
      deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      nama: "Keamanan Event",
      deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <section className="bg-[#f8f8f8] py-20 px-15">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-12">
          <p className="text-[#CEB288] font-semibold mb-3">LAYANAN KAMI</p>

          <h2 className="text-[#23303f] text-4xl font-bold mb-10">
            Solusi Keamanan Profesional
          </h2>

          <div className="grid grid-cols-3 gap-8">
            {layanan.map((item) => (
              <div
                key={item.nama}
                className="bg-white p-8 rounded-xl border border-gray-200"
              >
                <h3 className="text-[#23303F] text-xl font-bold mb-4">
                  {item.nama}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.deskripsi}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
