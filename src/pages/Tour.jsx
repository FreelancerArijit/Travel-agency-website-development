import React, { useState } from 'react';
import Herosection from '../components/Herosection';
import DetailedCard from '../components/DetailedCard';
import toursData from '../data/tours.json';

function Tour() {
  const data = toursData.tours; 

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);


  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <>
      <Herosection image="./images/tour-banner.png" />

      <section className="detailedcard-section">
        <h3>Our Tour & Travel Packages</h3>
        <div className="detailedcards">
          {
            currentItems.map((elm, idx) => (
              <DetailedCard
                key={idx}
                image={elm.image}
                name={elm.name}
                description={elm.description}
                price={elm.price}
                duration={elm.duration}
                location={elm.location.join(" - ")}
                highlights={elm.highlights.join(" - ")}
              />
            ))
          }
        </div>

        <div className='pagenation' style={{ marginTop: "20px" }}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              style={{
                margin: "0 5px",
                backgroundColor: currentPage === number ? "#0E7886" : "#eee",
                color: currentPage === number ? "white" : "black"
              }}
            >
              {number}
            </button>
          ))}
        </div>
      </section>
    </>
  )
}

export default Tour;
