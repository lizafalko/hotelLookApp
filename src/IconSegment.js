import React from 'react';

export function IconSegment(props) {
  return (
    <div className="icon-segment">
      <img src={props.icon} className="icon-segment__image" alt="" />
      <p className="icon-segment__description">{props.description}</p>
    </div>
  );
}

export default IconSegment;
