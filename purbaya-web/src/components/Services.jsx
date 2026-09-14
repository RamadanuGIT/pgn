import ServiceCard from "./ServiceCard";

function Services() {
  const layanan = [
    {
      nama: "Pengaman Gedung",
      deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "🛡️",
    },
    {
      nama: "Patroli Keamanan",
      deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "🚨",
    },
    {
      nama: "Keamanan Event",
      deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "🎉",
    },
  ];

  return (
    <section className="bg-[#f8f8f8] py-20 px-15">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-12">
          <p className="text-[#CEB288] font-semibold mb-3">LAYANAN KAMI</p>

          <h2 className="text-[#23303f] text-4xl font-bold">
            Solusi Keamanan Profesional
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {layanan.map((item) => (
            <ServiceCard
              key={item.nama}
              nama={item.nama}
              deskripsi={item.deskripsi}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
