import React from "react";
import { connect } from "react-redux";
import {  fetchArticle } from "../action/action";

class Article extends React.Component {
  componentDidMount() {
    this.props.dispatch(
      fetchArticle(
        `https://conduit.productionready.io/api/articles?limit=10&offset=0`
      )
    );
  }

  render() {
    const { articles } = this.props;
    return (
      <div>
        {articles.map((article, i) => {
          return (
            <li key={i}>
              <h2>{article.author.username} </h2>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </li>
          );
        })}
      </div>
    );
  }
}

function mapToState(state) {
  return { ...state };
}

export default connect(mapToState)(Article);
