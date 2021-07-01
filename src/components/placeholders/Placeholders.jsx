import React, { Component } from 'react';

class Placeholders extends Component {
  render() {
    return (
      <div className="placeholders js-placeholders">
        <div className="placeholders__img-wrap js-img-wrap" style="--aspect-ratio: 0.8;">
          <img
            src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80&ar=0.8"
            alt="building"
            className="placeholders__img"
          />
        </div>

        <div className="placeholders__img-wrap js-img-wrap" style="--aspect-ratio: 0.8;">
          <img
            src="https://images.unsplash.com/photo-1566688342604-dbe3e7357104?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80&ar=0.8"
            alt="building"
            className="placeholders__img"
          />
        </div>

        <div className="placeholders__img-wrap js-img-wrap" style="--aspect-ratio: 0.8;">
          <img
            src="https://images.unsplash.com/photo-1472835560847-37d024ebacdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80&ar=0.8"
            alt="building"
            className="placeholders__img"
          />
        </div>
      </div>
    );
  }
}

export default Placeholders;