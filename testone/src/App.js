import ImageGene from "./components/Imagegerate/ImageGene";
import TextGene from "./components/Textgerate/TextGene";

function App() {
  return (
    <div className="">
      <div className="items-center justify-center w-8/12 ">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-bold text-center">Generator</h1>
        </div>
        <TextGene />
        <ImageGene />
      </div>
    </div>
  );
}

export default App;
