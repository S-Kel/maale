import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  onChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  onSubmit = async evt => {
    evt.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    if (!post.title || !post.body) return;

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post)
    });
    const data = await res.json();
    console.log(data);
    this.setState({ title: "", body: "" });
  };
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <div className="row">
          <form className="col s12" onSubmit={this.onSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">mode_edit</i>
                <textarea
                  id="icon_prefix2"
                  className="materialize-textarea"
                  name="title"
                  onChange={this.onChange}
                  value={this.state.title}
                />
                <label htmlFor="icon_prefix2" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">message</i>
                <textarea
                  id="textarea1"
                  className="materialize-textarea"
                  name="body"
                  onChange={this.onChange}
                  value={this.state.body}
                />
                <label />
              </div>
            </div>
            <button
              className="btn waves-effect waves-light right"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default PostForm;
