function About() {
  return (
    <section className="bg-white py-20 px-15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#CEB288] font-semibold mb-3">TENTANG KAMI</p>

          <h2 className="text-[#23303F] text-5xl font-bold mb-6">
            Membangun Keamanan
            <br />
            Dengan Profesionalisme
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>

          <button className="bg-[#23303F] text-white px-6 py-3 rounded-md hover:bg-[#3D4C59] transition">
            Selengkapnya
          </button>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
            alt="Dummy"
            className="w-full h-100 object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
