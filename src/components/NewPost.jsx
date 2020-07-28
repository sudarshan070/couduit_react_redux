import React from "react";
import { connect } from "react-redux";
import { ADD_ARTICLE } from "../types/types";
import { addNewArticle } from "../action/action";

class NewPost extends React.Component {
  state = {
    title: "",
    description: "",
    body: "",
    tagList: "",
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  submitArticle = () => {
    let articleUrl = "https://conduit.productionready.io/api/articles";
    this.props.dispatch(
      addNewArticle(articleUrl, { ...this.state }, this.props.history)
    );
  };

  render() {
    let { title, description, body, tagList } = this.state;
    return (
      <div className="container">
        <div className="form-container">
          <input
            className="form-control"
            type="text"
            value={title}
            onChange={this.handleInput}
            name="title"
            placeholder="Article Title"
          />
          <input
            className="form-control article-form-control"
            type="text"
            value={description}
            onChange={this.handleInput}
            name="description"
            placeholder="Write this article about?"
          />
          <textarea
            className="form-control"
            value={body}
            onChange={this.handleInput}
            name="body"
            cols="30"
            rows="6"
            placeholder="Write your article"
          ></textarea>
          <input
            className="form-control article-form-control"
            type="text"
            placeholder="Enter tags"
            name="tagList"
            value={tagList}
            onChange={this.handleInput}
          />
          <button
            onClick={this.submitArticle}
            className="btnRegisterLogin"
            type="submit"
          >
            Publish Article
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(NewPost);
