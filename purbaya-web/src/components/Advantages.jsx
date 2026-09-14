import AdvantagesCard from "./AdvantagesCard";

const keunggulan = [
  {
    nama: "Profesional",
    deskripsi:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, rerum. Commodi necessitatibus, iste repellendus repudiandae aliquam aperiam deserunt animi nihil!",
  },
  {
    nama: "Disiplin",
    deskripsi:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, rerum. Commodi necessitatibus, iste repellendus repudiandae aliquam aperiam deserunt animi nihil!",
  },
  {
    nama: "Siaga",
    deskripsi:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, rerum. Commodi necessitatibus, iste repellendus repudiandae aliquam aperiam deserunt animi nihil!",
  },
  {
    nama: "Terpercaya",
    deskripsi:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, rerum. Commodi necessitatibus, iste repellendus repudiandae aliquam aperiam deserunt animi nihil!",
  },
];

const Advantages = () => {
  return (
    <>
      <section className="bg-[#f8f8f8] py-20 px-15">
        <div className="text-center mb-12">
          <p className="text-[#CEB288] font-semibold mb-3">KEUNGGULAN KAMI</p>

          <h2 className="text-[#23303f] text-4xl font-bold">
            Kenapa Memilih Kami
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keunggulan.map((item) => (
            <AdvantagesCard
              key={item.nama}
              nama={item.nama}
              deskripsi={item.deskripsi}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Advantages;
