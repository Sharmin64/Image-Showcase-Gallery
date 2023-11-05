import Gallery from "./components/Gallery";

function App() {
  const imgData = [
    {id: 1, thumbnail: "https://i.ibb.co/j4XCScM/image-1.webp", feature: true},
    {id: 2, thumbnail: "https://i.ibb.co/MR5MPPK/image-2.webp", feature: false},
    {id: 3, thumbnail: "https://i.ibb.co/qdkg0YY/image-3.webp", feature: false},
    {id: 4, thumbnail: "https://i.ibb.co/CM4ZZHW/image-4.webp", feature: false},
    {id: 5, thumbnail: "https://i.ibb.co/NrdQTMj/image-5.webp", feature: false},
    {id: 6, thumbnail: "https://i.ibb.co/BCqG8xx/image-6.webp", feature: false},
    {id: 7, thumbnail: "https://i.ibb.co/F5kCD1X/image-7.webp", feature: false},
    {id: 8, thumbnail: "https://i.ibb.co/xs3Qf0p/image-8.webp", feature: false},
    {id: 9, thumbnail: "https://i.ibb.co/cY7mv9C/image-9.webp", feature: false},
    {
      id: 10,
      thumbnail: "https://i.ibb.co/tMvmfC4/image-10.jpg",
      feature: false,
    },
    {
      id: 11,
      thumbnail: "https://i.ibb.co/LCmr17b/image-11.jpg",
      feature: false,
    },
  ];
  return (
    <>
      <div className="items-center justify-center text-center text-5xl text-orange-600">
        <Gallery imgData={imgData} />
      </div>
    </>
  );
}

export default App;
