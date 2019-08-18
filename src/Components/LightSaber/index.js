import React from 'react';

import './style.css';

const LightSaber = ({
  colorMain,
  colorSecondary,
  isDoubleBladed,
}) =>
  (
    <div className="visual-box">
      <p className={`light-saber${isDoubleBladed ? ' light-saber--double' : ''}`}>
        <span className="light-saber__blade light-saber__blade--top"
            style={{
              background: colorMain,
            }}
        />
        {isDoubleBladed && (
          <span className="light-saber__blade light-saber__blade--bottom"
            style={{
              background: colorSecondary,
            }}
          />
        )}
      </p>
    </div>
  );

export default LightSaber;
