import ImageGene from "./components/Imagegerate/ImageGene";
import TextGene from "./components/Textgerate/TextGene";

function App() {
  return (
    <div className="">
      <div className="w-2/12">test1</div>
      <div className="w-8/12 justify-center items-center ">
        <div className="flex justify-center items-center">
          <h1 className="text-4xl font-bold text-center">Generator</h1>
        </div>
        <TextGene />

        <ImageGene />
      </div>
    </div>
  );
}

export default App;
