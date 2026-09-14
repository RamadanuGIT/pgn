const PortofolioCard = ({ nama, kategori, gambar }) => {
  return (
    <div>
      <h2>{nama}</h2>
      <p>{kategori}</p>
      <img src={gambar} height={200} width={200} alt="portofolio image" />
    </div>
  );
};

export default PortofolioCard;
