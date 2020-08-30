import React from "react";
import Business from "./Business";

const BusinessList = ({ searchResults, setCurrentBusiness }) => {
  return (
    <section className='my-8 px-4 md:px-0 w-full max-w-screen-md grid sm:grid-cols-2 gap-8'>
      {searchResults.map((result) => (
        <Business
          key={result.id}
          image={result.image_url}
          name={result.name}
          location={result.location}
          type={result.categories[0]?.title}
          rating={result.rating}
          reviews={result.review_count}
          setCurrentBusiness={() => setCurrentBusiness(result)}
        />
      ))}
    </section>
  );
};

export default BusinessList;
