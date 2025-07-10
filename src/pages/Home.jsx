import React from 'react'
import Herosection from '../components/Herosection'
import Card from '../components/Card';
import toursData from '../data/tours.json';

function Home() {

  return (
    <>
      <Herosection image="./images/hero-image.png" />

      <section className="card-section">
        <h3>Top Tour & Travel Plans</h3>
        <div className="cards">
          {
            toursData.tours.slice(0, 8).map((elm, idx) => (
              <Card key={elm.id} title={elm.name} description={elm.description} img={elm.image} />
            ))
          }
        </div>
      </section>



    </>
  )
}

export default Home
