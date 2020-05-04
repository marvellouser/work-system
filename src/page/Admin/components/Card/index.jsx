import React from 'react'
import "./style.scss"

export default class Card extends React.PureComponent {
  render() {
    const { title, describe, imgSrc, path } = this.props;
    return (
      <div className="card" style={{ background: `url(${imgSrc}) no-repeat` }}>
        <div className="card__wrap" onClick={() => {
          this.props.history.push(path)
        }}>
          <h4>{title}</h4>
          <p>{describe}</p>
        </div>
      </div>
    )
  }
}
