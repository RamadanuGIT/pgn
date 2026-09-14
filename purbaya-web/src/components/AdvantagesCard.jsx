const AdvantagesCard = ({ nama, deskripsi }) => {
  return (
    <div className="shadow-2xl rounded-2xl p-5 cursor-default">
      <h3 className="text-[#23303F] font-bold text-xl text-center mb-4">
        {nama}
      </h3>
      <p className="text-gray-600 leading-relaxed">{deskripsi}</p>
    </div>
  );
};

export default AdvantagesCard;
