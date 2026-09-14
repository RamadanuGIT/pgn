const ServiceCard = ({ icon, nama, deskripsi }) => {
  return (
    <div className="text-center bg-white p-8 rounded-xl border border-gray-200 hover:shadow-2xl hover:translate-y-1 transition cursor-default">
      <p className="text-4xl mb-3">{icon}</p>

      <h3 className="text-[#23303F] text-xl font-bold mb-4">{nama}</h3>

      <p className="text-gray-600 leading-relaxed">{deskripsi}</p>
    </div>
  );
};

export default ServiceCard;
