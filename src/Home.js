import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home" >
      <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="b_logo" />

       <div className="home__row">

       <Product 
          id="58795"
          title="Daily Protein Bar - Choco Almond"
          price={599}
          rating={3}
          image="https://m.media-amazon.com/images/I/61Oq0e2OgWL._AC_UL400_.jpg"
          />
       <Product 
          id="896574"
          title="Fish Oil"
          price={699}
          rating={4}
          image="https://m.media-amazon.com/images/I/51hdZhum7vL._AC_UL400_.jpg"
          />
       </div>

       <div className="home__row">
       <Product 
          id="568521"
          title="Biotin - Hair Growth Capsules for MEN"
          price={899}
          rating={5}
          image="https://m.media-amazon.com/images/I/51VvVBlS+2L._AC_UL400_.jpg"
          />
       <Product 
          id="698569"
          title="Muscle Blaze - Mango Flavour"
          price={1800}
          rating={5}
          image="https://m.media-amazon.com/images/I/61JyvvfG1YL._AC_UL400_.jpg"
          />
       <Product 
          id="587487"
          title="Creatine Monohydrate"
          price={500}
          rating={4}
          image="https://m.media-amazon.com/images/I/71fpCxOFU-L._AC_UL400_.jpg"
          />

       </div>
       <div className="home__row">
       <Product 
          id="854217"
          title="BCAA - Big Muscle real Bcaa"
          price={966}
          rating={5}
          image="https://m.media-amazon.com/images/I/618v289E7AL._AC_UL400_.jpg"
          />


       </div>
    </div>

  );
  
}

export default Home
