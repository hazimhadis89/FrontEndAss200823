import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export class CreatePost extends Component {
  resetPost = {
    title: '',
    body: ''
  };
  
  state = this.resetPost;
  
  onChange = (e) => this.setState({[e.target.name]: e.target.value});
  
  onSubmit = (e) => {
    e.preventDefault();
    this.props.createPost(this.state);
    this.setState(this.resetPost);
  };
  
  render() {
    return (
        <Col md={12}>
          <Card className="m-1">
            <Card.Body>
              <Form onSubmit={this.onSubmit}>
                <Form.Group>
                  <Form.Control
                    type="text" name="title" placeholder="Post title here..."
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    as="textarea" name="body" rows="6" placeholder="Post body here..."
                    value={this.state.body}
                    onChange={this.onChange}
                  />
                </Form.Group>
        
                <Button variant="primary" type="submit"> Create </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
    );
  }
}

export default CreatePost;
