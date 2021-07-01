import React from 'react';

import './Content.scss';

const Content = () => {
  return (
    <section className="content js-content">
      <div className="container">
        <div className="content__subheadings">
          <span className="content__subheading">National Parks</span>
        </div>
        <h2 className="content__heading">
          Travel in the U.S.
        </h2>
      </div>
    </section>
  );
}

export default Content;