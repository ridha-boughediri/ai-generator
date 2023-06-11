import { useState } from "react";

const ImageGen = () => {
  const [generatedImage, setGeneratedImage] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleGenerateImage = async () => {
    // Call the OpenAI API to generate the image based on the inputValue
    // Replace `yourOpenAIApiCall` with the actual code to generate the image using OpenAI
    // const generatedImage = await yourOpenAIApiCall(inputValue);

    // Update the state with the generated image
    setGeneratedImage(generatedImage);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <h2 className="text-4xl font-extrabold dark:text-white">
        Generer une image
      </h2>

      <form>
        {/* Your form inputs here */}
        <div class="relative mb-3" data-te-input-wrapper-init>
          <textarea
            id="comment"
            rows="4"
            class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Write a comment..."
            required
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>

        <button
          onClick={handleGenerateImage}
          type="submit"
          class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        >
          Generate Image
        </button>

        {/* Display the generated image */}
        {generatedImage && <img src={generatedImage} alt="Generated" />}
      </form>
    </>
  );
};

export default ImageGen;
