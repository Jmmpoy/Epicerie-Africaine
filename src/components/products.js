import React from "react";
import gamme from "../components/gamme";

import Fade from "react-reveal/Fade";

export default function products() {
  console.log(gamme);

  const products = gamme.map((produit, index) => (
    <div className="products-produit" key={index}>
      <img src={produit.url} />
      <div className="products-title">
        <h4>{produit.title}</h4>
        <p>{produit.price}</p>
      </div>
    </div>
  ));
  return (
    <section className="products" id="products">
      <div className="products-block">
        <Fade big>{products}</Fade>
      </div>

      <button className="products-button">
        <a href="https://l-epicerie-africaine.afrikrea.com/fr?class=a-black">
          Nos Produits
        </a>
      </button>

      {/* PAIEMENT SÉCURISÉ Visa - Mastercard - Amex - Paypal DÉLAIS LIVRAISON
      Délais de livraison actuels : 10 à 15 jours ouvrés en moyenne LIVRAISON
      OFFERTE À partir de 50€ d'achat en France métropolitaine (hors Corse) ex:
      mykalios.com/ https://us.typology.com/?ref=maxibestof.one */}
    </section>
  );
}
