import Gallery from "./components/Gallery";

function App() {
  const imgData = [
    {
      id: 1,
      url: "https://i.ibb.co/j4XCScM/image-1.webp",
      width: 520,
      height: 212,
      feature: true,
    },
    {id: 2, url: "https://i.ibb.co/MR5MPPK/image-2.webp", feature: false},
    {id: 3, url: "https://i.ibb.co/qdkg0YY/image-3.webp", feature: false},
    {id: 3, url: "https://i.ibb.co/CM4ZZHW/image-4.webp", feature: false},
    {id: 3, url: "https://i.ibb.co/NrdQTMj/image-5.webp", feature: false},
    {id: 3, url: "https://i.ibb.co/BCqG8xx/image-6.webp", feature: false},
    {id: 3, url: "https://i.ibb.co/F5kCD1X/image-7.webp", feature: false},
    {id: 3, url: "https://i.ibb.co/xs3Qf0p/image-8.webp", feature: false},
    {id: 3, url: "https://i.ibb.co/cY7mv9C/image-9.webp", feature: false},
    {id: 3, url: "https://i.ibb.co/tMvmfC4/image-10.jpg", feature: false},
    {id: 3, url: "https://i.ibb.co/LCmr17b/image-11.jpg", feature: false},
  ];
  return (
    <>
      <div className="items-center justify-center text-center text-5xl text-orange-600">
        <Gallery imgData={imgData} />
        <h2 className="text-5xl text-orange-600">render would do here</h2>
      </div>
    </>
  );
}

export default App;
