import React from 'react';
import FormInstance from './FormInstance';
import {Modal, Button } from 'react-bootstrap';

class ContactFormModal extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      return (
<<<<<<< HEAD:client/src/Components/ContactFormModal.js
        
        <div>
=======
        <div style={{display:'inline'}}>
>>>>>>> 6b5b0af72dae110f20c948ed661da501cafd82cf:src/Components/ContactFormModal.js
          <Button bsStyle="primary" bsSize="medium" onClick={this.handleShow}>
            Contact {this.props.name}
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Codi Cycle 2</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h1>Contact {this.props.name}</h1>
              <FormInstance />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
        
      );
    }
  }

  export default ContactFormModal;