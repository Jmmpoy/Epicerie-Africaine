import React from "react";
import Ratings from "./ratings";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";


export default function avis() {
  console.log(Ratings);
  const ratings = Ratings.map((avis, index) => (
    <div className="avis-comment-block" key={index}>
      <div className="avis-blocks-right-name">
        <h5>{avis.user}</h5>
        <p>{avis.country}</p>
      </div>
      <div className="avis-blocks-right-comment">
        <Rater total={5} rating={avis.rating} interactive={false} />
        <p>{avis.comment}</p>
      </div>
    </div>
  ));
  return (
    <section className="avis-section" id="avis">
      <div className="avis-blocks-left">
        <h1>AVIS</h1>
        <button>Voir tous les avis</button>
      </div>
      <div className="avis-blocks-right">{ratings}</div>
    </section>
  );
}
