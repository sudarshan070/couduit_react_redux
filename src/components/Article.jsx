import React from "react";
import { connect } from "react-redux";
import { fetchArticle } from "../action/action";

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
      <div className="article-div">
        {articles.map((article, i) => {
          return (
            <li className="article" key={i}>
              <div className="article-flex">
                <img
                  className="article-img"
                  src={article.author.image}
                  alt={article.author.username}
                />
                <div className="info">
                  <h3 className="author">{article.author.username} </h3>
                  <span className="date">
                    {new Date(article.updatedAt).toDateString()}
                  </span>
                </div>
              </div>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <ul className="tag-list">
                {article.tagList.map((tag, i) => {
                  return (
                    <li key={i} className="tag-btn">
                      {tag}
                    </li>
                  );
                })}
              </ul>
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
