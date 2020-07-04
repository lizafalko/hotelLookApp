import React from 'react';

export function IconSegment(props) {
  return (
    <div className={props.iconClass}>
      <img src={props.src} className={props.imageClass} alt="" />
      <p className="icon-segment__description">{props.description}</p>
    </div>
  );
}

export default IconSegment;
