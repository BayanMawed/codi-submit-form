import React from 'react';
import ContactFormModal from './Components/ContactFormModal';
import { Button, Thumbnail, Col } from 'react-bootstrap';

const Student = ({gender,name,availability,skills,city,OnClickAdd,image}) => (
    <Col xs={6} md={4} style={{minWidth:300}}>
      <Thumbnail >
        <img src={image} width="150px" height="150px" circle />
        <div className='student-image' style={{ backgroundImage: `url(${image})` }} > </div>
        <div className='student-info'>
          <h2 className="student-name">{name}</h2>
          <h3 className="student-city">City: </h3>
          <p>{city}</p>
          <h3 className='student-availability'>Availability: </h3>
          <p>{availability}</p>
          <h3 className='student-skills'>Skills: </h3>
          <div className="skills">
            <p>#{skills.join(' #')}</p>
          </div>
        </div>
        <hr />
        <div>
          {/* <Button bsStyle="primary">See More</Button>&nbsp; */}
        
            <ContactFormModal name={name} />
            <Button bsStyle="success" onClick={OnClickAdd} style={{float:'right'}}>Add to list</Button>
        </div>
      </Thumbnail>
    </Col>
  );

  export default Student;