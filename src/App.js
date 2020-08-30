import React, { useState } from "react";
import "./assets/css/App.css";
import Header from "./components/Header";
import SearchBarBig from "./components/SearchBarBig";
import BusinessList from "./components/BusinessList";
import BusinessModal from "./components/BusinessModal";
import Footer from "./components/Footer";
import { getBusinesses } from "./services/yelpServices";

function App({ siteInfo }) {
  const [filterBest, setFilterBest] = useState(true);
  const [filterRated, setFilterRated] = useState(false);
  const [filterReviewed, setFilterReviewed] = useState(false);
  const [inputBusiness, setInputBusiness] = useState("");
  const [inputWhere, setInputWhere] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentBusiness, setCurrentBusiness] = useState(null);

  const handleInputBusiness = (event) => setInputBusiness(event.target.value);
  const handleInputWhere = (event) => setInputWhere(event.target.value);
  const handleFilterBest = () => {
    setFilterBest(true);
    setFilterRated(false);
    setFilterReviewed(false);
  };
  const handleFilterRated = () => {
    setFilterRated(true);
    setFilterBest(false);
    setFilterReviewed(false);
  };
  const handleFilterReviewed = () => {
    setFilterReviewed(true);
    setFilterBest(false);
    setFilterRated(false);
  };

  const filteredByRating = [...searchResults].sort(
    (a, b) => b.rating - a.rating
  );

  const filteredByReviewed = [...searchResults].sort(
    (a, b) => b.review_count - a.review_count
  );

  const resultsToShow = () => {
    if (filterBest) {
      return searchResults;
    } else if (filterRated) {
      return filteredByRating;
    } else if (filteredByReviewed) {
      return filteredByReviewed;
    } else {
      return [];
    }
  };

  const search = (event) => {
    event.preventDefault();
    getBusinesses(inputBusiness, inputWhere)
      .then((response) => {
        setSearchResults(response);
        setInputBusiness("");
        setInputWhere("");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className='w-full min-h-screen flex flex-col items-center bg-gray-100'>
      <Header />
      <section className='w-full bg-image flex justify-center items-start'>
        <SearchBarBig
          filterBest={filterBest}
          filterReviewed={filterReviewed}
          filterRated={filterRated}
          handleFilterBest={handleFilterBest}
          handleFilterRated={handleFilterRated}
          handleFilterReviewed={handleFilterReviewed}
          inputBusiness={inputBusiness}
          inputWhere={inputWhere}
          handleInputBusiness={handleInputBusiness}
          handleInputWhere={handleInputWhere}
          search={search}
        />
      </section>
      {searchResults.length ? (
        <BusinessList
          searchResults={resultsToShow()}
          setCurrentBusiness={setCurrentBusiness}
        />
      ) : (
        <div className='w-full max-w-screen-md py-16 px-4 flex flex-col justify-center items-center'>
          <h3 className='text-gray-400'>
            To find the perfect place just search for any type of business and
            let's go!
          </h3>
        </div>
      )}
      {currentBusiness && (
        <BusinessModal
          business={currentBusiness}
          setCurrentBusiness={setCurrentBusiness}
        />
      )}
      <Footer siteInfo={siteInfo} />
    </div>
  );
}

export default App;
