import React from 'react';

import './SliderButton.scss';

const SliderButton = () => {
  return (
    <button
      className="button-slider-open js-slider-open"
      type="button"
      aria-label="button open slider"
    >
      <svg class="button-slider-open__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.68 11.617">
        <path class="button-slider-open__icon-square" d="M2.636 11.617H.181A.177.177 0 010 11.436V8.981A.177.177 0 01.181 8.8h2.442a.177.177 0 01.181.181v2.442a.17.17 0 01-.168.194z" />
        <path class="button-slider-open__icon-square" d="M6.073 11.617H3.618a.177.177 0 01-.181-.181V8.981a.177.177 0 01.181-.181H6.06a.177.177 0 01.181.181v2.442a.178.178 0 01-.168.194z" />
        <path class="button-slider-open__icon-square" d="M9.51 11.617H7.055a.177.177 0 01-.181-.181V8.981a.177.177 0 01.181-.181h2.442a.177.177 0 01.181.181v2.442a.178.178 0 01-.168.194z" />
        <path class="button-slider-open__icon-square" d="M2.636 8.18H.181A.177.177 0 010 7.999V5.544a.177.177 0 01.181-.181h2.442a.177.177 0 01.181.181v2.442a.17.17 0 01-.168.194z" />
        <path class="button-slider-open__icon-square" d="M6.073 7.65H3.618a.177.177 0 01-.181-.181V5.014a.177.177 0 01.181-.181H6.06a.177.177 0 01.181.181v2.442a.178.178 0 01-.168.194z" />
        <path class="button-slider-open__icon-square" d="M9.51 6.849H7.055a.177.177 0 01-.181-.181V4.213a.177.177 0 01.181-.181h2.442a.177.177 0 01.181.181v2.442a.171.171 0 01-.168.194z" />
        <path class="button-slider-open__icon-square" d="M2.636 4.742H.181A.177.177 0 010 4.561V2.106a.177.177 0 01.181-.181h2.442a.177.177 0 01.181.181v2.442a.17.17 0 01-.168.194z" />
        <path class="button-slider-open__icon-square" d="M6.073 3.605H3.618a.177.177 0 01-.181-.181V.969a.177.177 0 01.181-.181H6.06a.177.177 0 01.181.181v2.442a.171.171 0 01-.168.194z" />
        <path class="button-slider-open__icon-square" d="M9.51 2.8H7.055a.177.177 0 01-.181-.181V.181A.177.177 0 017.055 0h2.442a.177.177 0 01.181.181v2.442a.166.166 0 01-.168.177z" />
      </svg>
    </button>
  );
}

export default SliderButton;