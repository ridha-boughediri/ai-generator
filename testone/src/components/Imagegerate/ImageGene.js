import { useState } from "react";

const ImageGen = () => {
  const [generatedImage, setGeneratedImage] = useState(
    "https://placehold.co/600x400"
  );
  const [inputValue, setInputValue] = useState("");

  const handleGenerateImage = async () => {
    try {
      // Call the OpenAI API to generate the image based on the inputValue
      const response = await fetch("yourOpenAIApiEndpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any required headers for your API
        },
        body: JSON.stringify({ inputValue }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate image");
      }

      const generatedImage = await response.json();

      // Update the state with the generated image
      setGeneratedImage(generatedImage);
    } catch (error) {
      console.error(error);
      // Handle the error appropriately (e.g., show an error message)
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <h2 className="text-4xl font-extrabold dark:text-white">
        Generate an Image
      </h2>

      <form>
        {/* Your form inputs here */}
        <div className="relative mb-3" data-te-input-wrapper-init>
          <textarea
            id="comment"
            rows="4"
            className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Write a comment..."
            required
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>

        <button
          onClick={handleGenerateImage}
          type="button"
          className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
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
