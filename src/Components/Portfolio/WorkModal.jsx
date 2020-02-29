import React from "react";
import "./portfolio.css";

class WorkModal extends React.Component {
  render() {
    let work = this.props.work;
    let modalClass = this.props.open ? "modal--open" : "modal--closed";

    return (
      <div className={modalClass} id="modal">
        <img
          alt={work.image.description}
          src={work.image.src}
          className="modal__image"
        />
        <div className="modal__text">
          <span
            className="modal__closeButton"
            onClick={evt => this.props.closeModal(evt, work)}
          >x
          </span>
          <h2 className="modal__title">{work.title}</h2>
          <a className="color--blue modal__link" href={work.code}>
            See the code
          </a>
          <p className="modal__description">
            Tech: {work.long_dsc.tech} <br />
            <br />
            {work.long_dsc.dsc}
          </p>
        </div>
      </div>
    );
  }
}
export default WorkModal;
