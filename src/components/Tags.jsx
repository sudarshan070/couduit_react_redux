import React from "react";
import { connect } from "react-redux";
import { fetchTag, fetchArticle } from "../action/action";

class Tags extends React.Component {
  componentDidMount() {
    this.props.dispatch(
      fetchTag(`https://conduit.productionready.io/api/tags`)
    );
  }

  handleClick = (tag) => {
    this.props.dispatch(fetchArticle(
      `https://conduit.productionready.io/api/articles?tag=${tag}&limit=10&offset=0`
    ));
  };

  render() {
    const { tags } = this.props;
    return (
      <div className="tag-div">
        <div className="tag-sidebar">
          <p>Popular Tags</p>
          <div className="tag-list">
            {tags.map((tag, i) => {
              return (
                <button
                  className="single-tag"
                  onClick={() => this.handleClick(tag)}
                  key={i}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

function mapToProp(state) {
  return { ...state };
}

export default connect(mapToProp)(Tags);
