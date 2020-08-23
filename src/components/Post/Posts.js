import React, { Component } from 'react';
import axios from 'axios';

import PostItem from './PostItem';
import CreatePost from './CreatePost';

class Posts extends Component {
  state = {
    _config: {
      headers: {
        'Authorization': 'Bearer cd00488cd800490782fc5aec773220da91979056c55f488c0d92af8114655894'
      }
    },
    user: {},
    posts: [],
    pagination: {}
  }
  
  componentDidMount() {
    this.getUser();
    this.getPosts();
  }
  
  // get user
  getUser = () => {
    axios.get('https://gorest.co.in/public-api/users')
      .then(response => this.setState({ user: response.data.data[0] }));
  }
  
  // get posts
  getPosts = () => {
    axios.get(`https://gorest.co.in/public-api/posts`)
      .then(response => {
        this.setState({ posts: response.data.data });
        this.setState({ pagination: response.data.meta.pagination });
      });
  }
  
  // Create Post
  createPost = (post) => {
    const newPost = post;
    newPost.user = this.state.user;
    newPost.user_id = this.state.user.id;
    axios.post('https://gorest.co.in/public-api/posts', newPost, this.state._config)
      .then(response => this.setState({ posts: [...this.state.posts, response.data.data] }));
  }
  
  // Update Post
  updatePost = (post) => {
    axios.put(`https://gorest.co.in/public-api/posts/${post.id}`, post, this.state._config);
  }
  
  // Delete Post
  deletePost = (id) => {
    axios.delete(`https://gorest.co.in/public-api/posts/${id}`, this.state._config)
      .then(response => this.setState({ posts: [...this.state.posts.filter(post => post.id !== id)] }));
  }
  
  
  render() {
    return (
      <div className="row">
        <CreatePost createPost={this.createPost} />
        {this.state.posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            updatePost={this.updatePost}
            deletePost={this.deletePost}
          />
        ))}
      </div>
    );
  }
}

export default Posts;
