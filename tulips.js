import { useState } from "react";

const images = [
  "/img1.png",
  "/img2.png",
  "/img3.png",
  "/img4.png",
];

function App() {
  const [idx, setIdx] = useState(0);

 

  const randomImage = () => {
    setIdx(Math.floor(Math.random() * images.length));
  };

  return (
    <div>
     
      <button onClick={randomImage}>Random</button>

      <img src={images[idx]} alt="preview" width={200} />
    </div>
  );
}

export default App;