import React from "react";
import { connect } from "react-redux";
import { fetchTag } from "../action/action";

class Tags extends React.Component {
  componentDidMount() {
    this.props.dispatch(
      fetchTag(`https://conduit.productionready.io/api/tags`)
    );
  }

  render() {
    const { tags } = this.props;
    return (
      <div>
        {tags.map((tag, i) => {
          return <p key={i}>{tag}</p>;
        })}
      </div>
    );
  }
}

function mapToProp(state) {
  return { ...state };
}

export default connect(mapToProp)(Tags);
