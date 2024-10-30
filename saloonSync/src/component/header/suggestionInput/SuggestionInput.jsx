import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { fetchSaloons } from "../../../api/saloonsApi";
import { useNavigate } from "react-router-dom";

const SuggestionInput = ({ isSmallDevice, handleSearchBar }) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [suggestionIndex, setSuggestionIndex] = useState(-1);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSaloons(`/search/?query=${query}`)
      .then((res) => {
        setSuggestionIndex(-1);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query]);

  const handleSuggestion = (e) => {
    if (
      e.key === "ArrowDown" &&
      suggestionIndex < Math.min(data?.length - 1, 9)
    )
      setSuggestionIndex((prev) => prev + 1);
    if (e.key === "ArrowUp" && suggestionIndex > -1)
      setSuggestionIndex((prev) => prev - 1);
    if (e.key === "Enter" && suggestionIndex >= 0) {
      setQuery(data?.[suggestionIndex]?.saloonName);
      navigate(`/details/${data?.[suggestionIndex]?.saloonId}`);
      setQuery("");
      setSuggestionIndex(-1);
    }
  };

  return (
    <div className="searchInput">
      <input
        type="text"
        placeholder="Search for nearest saloon"
        onChange={(e) => setQuery(e.target.value)}
        value={
          (data?.length > 0 &&
            suggestionIndex >= 0 &&
            data[suggestionIndex].saloonName) ||
          query
        }
        onKeyUp={handleSuggestion}
        autoFocus
      />
      {isSmallDevice ? (
        <IoClose onClick={handleSearchBar} />
      ) : (
        query.length > 0 && <IoClose onClick={() => setQuery("")} />
      )}

      {data?.length > 0 && (
        <div className="suggestionBox">
          {data?.slice(0, 10).map((saloon, i) => (
            <div
              className={`suggestion ${
                suggestionIndex === i ? "selected" : ""
              }`}
              onClick={() => {
                setQuery(saloon.saloonName);
                navigate(`/details/${saloon.saloonId}`);
                setQuery("");
              }}
              key={saloon.saloonId}
            >
              {saloon.saloonName}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SuggestionInput;
