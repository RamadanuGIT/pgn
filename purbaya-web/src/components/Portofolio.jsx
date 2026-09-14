import PortofolioCard from "./PortofolioCard";

const portofolio = [
  {
    nama: "Keamanan Pulau Nirup",
    kategori: "Pengamanan Kawasan,Resort,Project,Pelabuhan",
    gambar:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/826423724.jpg?k=44f2e25698ee867af2b1492145d2abbc2212e0a3c108fe1a7ff0f19fe270d619&o=",
  },
  {
    nama: "Keamanan K-Square",
    kategori: "Pengamanan Kawasan,Project,Mall,Hotel",
    gambar:
      "https://asset.tribunnews.com/0Y6S27cs_kmu4p1Mp2W0C-bvuFE=/1200x675/filters:upscale():quality(30):format(webp):focal(0.5x0.5:0.5x0.5)/batam/foto/bank/originals/k-square.jpg",
  },
  {
    nama: "Keamanan Harbourbay",
    kategori: "Pengamanan Gedung,Pelabuhan,Apartemen,Perkantoran,Mall",
    gambar:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/58/22/bf/caption.jpg?w=1200&h=-1&s=1",
  },
];

const Portofolio = () => {
  return (
    <div>
      {portofolio.map((item) => (
        <PortofolioCard
          key={item.nama}
          nama={item.nama}
          kategori={item.kategori}
          gambar={item.gambar}
        />
      ))}
    </div>
  );
};

export default Portofolio;
