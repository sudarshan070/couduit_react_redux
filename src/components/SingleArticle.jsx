import React from "react";
import Comment from "./Comment";
import { fetchSingleArticle } from "../action/action";
import { connect } from "react-redux";

class SingleArticle extends React.Component {
  componentDidMount() {
    const { slug } = this.props.match.params;
    this.props.dispatch(
      fetchSingleArticle(
        `https://conduit.productionready.io/api/articles/${slug}`
      )
    );
  }

  render() {
    const { article } = this.props;
    if (article.author) {
      var {
        title,
        body,
        description,
        author: { username, image },
        updatedAt,
      } = article;
    }

    return (
      <div className="article article-border-non">
        <div className="single-article-bg ">
          <div className="container">
            <p className="single-article-title">{title}</p>
            <div className=" article-flex">
              <img className="article-img" src={`${image}`} alt={username} />
              <div className="info">
                <h3 className="author">{username} </h3>
                <span className="date">
                  {new Date(updatedAt).toDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="single-article-body">
            <p>{description}</p>
            <p>{body}</p>
          </div>
        </div>
        <div className="container">
          <Comment />
        </div>
      </div>
    );
  }
}

function mapState(state) {
  return { ...state };
}

export default connect(mapState)(SingleArticle);
