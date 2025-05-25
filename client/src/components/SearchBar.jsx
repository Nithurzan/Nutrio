import React, { useContext, useEffect, useState, useRef } from "react";
import { ShopContext } from "../context/ShopContext";
import { useLocation } from "react-router-dom";
import { FiMic, FiX, FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (location.pathname.includes("products")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  // Voice search setup
  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) return;
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.lang = "en-US";
    recognitionRef.current.interimResults = false;
    recognitionRef.current.maxAlternatives = 1;

    recognitionRef.current.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearch(transcript);
      setListening(false);
    };
    recognitionRef.current.onend = () => setListening(false);
    recognitionRef.current.onerror = () => setListening(false);
  }, [setSearch]);

  const handleVoiceSearch = () => {
    if (recognitionRef.current) {
      setListening(true);
      recognitionRef.current.start();
    }
  };

  return showSearch && visible ? (
    <div className="flex justify-center items-center py-8 bg-transparent">
      <div className="relative w-full max-w-2xl mx-auto bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-primary/20 dark:border-secondary/20 px-8 py-6 flex flex-col items-center">
        <span className="text-xs font-semibold text-primary dark:text-secondary mb-2 tracking-widest uppercase">
          Search Products
        </span>
        <div className="flex items-center w-full">
          <input
            type="text"
            placeholder="Type to search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 outline-none bg-inherit text-base text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 px-4 py-3 rounded-l-lg border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary transition"
            aria-label="Search"
          />
          <button
            type="button"
            onClick={handleVoiceSearch}
            className={`ml-2 w-10 h-10 flex items-center justify-center rounded-full transition 
                            ${
                              listening
                                ? "bg-primary text-white animate-pulse"
                                : "bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white dark:hover:bg-secondary"
                            }`}
            aria-label="Voice search"
            title="Voice search"
          >
            <FiMic className="w-5 h-5" />
          </button>
          <span className="ml-2 text-primary dark:text-secondary">
            <FiSearch className="w-6 h-6 opacity-80" />
          </span>
        </div>
        <button
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-red-500 hover:text-white dark:hover:bg-red-600 transition"
          onClick={() => setShowSearch(false)}
          aria-label="Close search"
          type="button"
        >
          <FiX className="w-4 h-4" />
        </button>
        {listening && (
          <div className="mt-3 text-primary dark:text-secondary text-sm animate-pulse">
            Listening...
          </div>
        )}
      </div>
    </div>
  ) : null;
};

export default SearchBar;
