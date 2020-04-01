import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import "./portfolio.css";

class WorkModal extends React.Component {
  
  componentDidMount(){
    document.getElementById('close').scrollIntoView();
}


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
          id={'close'}
            className="modal__closeButton"
            onClick={evt => this.props.closeModal(evt, work)}
          > <FontAwesomeIcon icon={faWindowClose} size="2x" />
          </span>
          <h2 className="modal__title">{work.title}</h2>
          {work.code!=='Proprietary'?<a className="modal__link" href={work.code}  target="_blank" rel="noopener noreferrer">
            See the code
          </a>: 'The code is Proprietary'}
          <p className="modal__description">
            <span className={'standout'}>Tech:</span> {work.long_dsc.tech} <br />
            <br />
            {work.long_dsc.dsc}<br /><br />
            {work.web? <a className="modal__link" href={work.web}  target="_blank" rel="noopener noreferrer">
            See Live
          </a>: null }
          </p>
        </div>
      </div>
    );
  }
}
export default WorkModal;
