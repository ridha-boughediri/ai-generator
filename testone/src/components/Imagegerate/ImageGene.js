import React, { useState } from "react";
import axios from "axios";

const ImageGen = () => {
  const [generatedImage, setGeneratedImage] = useState(
    "https://placehold.co/600x400"
  );
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleGenerateImage = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/images/generations",

        {
          prompt: inputValue,
          n: 1,
          size: "600x400",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`, // Remplacez YOUR_API_KEY_HERE par votre clé d'API
          },
        }
      );

      const generatedImage = response.data.images[0].url;
      setGeneratedImage(generatedImage);
      console.log("Generated Image:", generatedImage);
    } catch (error) {
      console.error("Error:", error);
      // Gérez l'erreur de manière appropriée (par exemple, affichez un message d'erreur)
    }

    setLoading(false);
  };

  return (
    <>
      <h2 className="text-4xl font-extrabold dark:text-white">
        Generate an Image
      </h2>

      <form onSubmit={handleGenerateImage}>
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
          type="submit"
          className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Image"}
        </button>

        {/* Display the generated image */}
        {generatedImage && <img src={generatedImage} alt="Generated" />}
      </form>
    </>
  );
};

export default ImageGen;
