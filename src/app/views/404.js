import React from "react";

class NothingFound extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <section className="nothing-found">
          <div className="container inner-wrapper">Nothing Found</div>
        </section>
      </>
    );
  }
}

export default NothingFound;
