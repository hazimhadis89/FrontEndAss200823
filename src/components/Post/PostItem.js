import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export class PostItem extends Component {
  state = {
    post: this.props.post,
    showModal: false
  }
  
  onChange = (e) => {
    const currentState = this.state.post;
    currentState[e.target.name] = e.target.value;
    this.setState({ post: currentState });
  };
  
  onSubmit = (e) => {
    e.preventDefault();
    this.props.updatePost(this.state.post);
    this.viewPost();
  };
  
  truncate = (string, length) => {
    return string.length > length ? string.substring(0, length-1) + '...' : string;
  }
  
  // view Post
  viewPost = () => {
    this.setState({ showModal: !this.state.showModal });
  }
  
  render() {
    const { title, body } = this.props.post;
    const deletePost = this.props.deletePost;
    
    return (
      <Col md={4}>
        <Card className="m-1">
          <Card.Body>
            <Card.Title>{this.truncate(title, 50)}</Card.Title>
            <Card.Text>{this.truncate(body, 200)}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="secondary" onClick={this.viewPost}> View </Button>
          </Card.Footer>
        </Card>
  
        <Modal size="lg" show={this.state.showModal} animation={false} onHide={this.viewPost}>
          <Form onSubmit={this.onSubmit}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              <Form.Group>
                <Form.Control
                  type="text" name="title" placeholder="Post title here..."
                  value={this.state.post.title || ''}
                  onChange={this.onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="textarea" name="body" rows="10" placeholder="Post body here..."
                  value={this.state.post.body || ''}
                  onChange={this.onChange}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.viewPost}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Update
              </Button>
              <Button variant="danger" onClick={deletePost.bind(this.state.id)}>
                Delete
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Col>
    );
  }
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostItem;
