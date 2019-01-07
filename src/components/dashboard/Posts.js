import React, { Component } from "react";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    // console.log(posts);
    this.setState({ posts: posts });
  }
  render() {
    const postItems = this.state.posts.map(post => {
      return (
        <div key={post.id} className="text-center">
          <ul className="collection">
            <li className="collection-item avatar">
              <img
                src="https://www.bhchambermusic.org/wp-content/uploads/2017/12/no-image-icon-15.png"
                alt=""
                className="circle"
              />
              <span className="title">{post.title}</span>
              <p style={{ paddingRight: "10px" }}>{post.body}</p>
              <a href="#!" className="secondary-content">
                <i className="material-icons">grade</i>
              </a>
            </li>
          </ul>
        </div>
      );
    });

    return (
      <div>
        <h1 className=" brown lighten-4" style={{ padding: "10px" }}>
          Posts
        </h1>
        {postItems}
      </div>
    );
  }
}

export default Posts;
