import React from "react";
import WorkModal from "./WorkModal";
import "./portfolio.css";

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      selectedWork: this.props.work[0]
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
}

  // Functions
  openModal(evt, work) {
    this.setState({
      modalOpen: true,
      selectedWork: work
    });
  }

  closeModal(evt, work) {
    this.setState({
      modalOpen: false,
      selectedWork: work
    });
  }

  render() {
    return (
      <span className="portfolio">
        <section className="projects">
          {this.props.work.map((work, idx) => {
            return (
              <ExampleBubble work={work} key={idx} openModal={this.openModal} />
            );
          })}
        </section >
          <WorkModal 
            work={this.state.selectedWork}
            open={this.state.modalOpen}
            closeModal={this.closeModal}
          />
      </span>
    );
  }
}

class ExampleBubble extends React.Component {
  render() {
    let work = this.props.work;
    return (
      <div
        className="project__wrapper"
        onClick={evt => this.props.openModal(evt, work)}
      >
        <section>
          <div className="img_holder">
            <img alt={work.image.description} src={work.image.src} />
          </div>
          <dl>
            <dt className="project_title">{work.title}</dt>
            <dd />
          </dl>
        </section>
      </div>
    );
  }
}
export default Projects;
export { ExampleBubble };
