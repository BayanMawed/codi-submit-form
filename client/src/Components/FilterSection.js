import React from 'react';

import { Nav, NavDropdown,MenuItem ,ButtonGroup,NavItem, Row, Tab, Button, Col } from 'react-bootstrap';


const FilterSection = ({setCityFilter,setAvailabileFilter,setgenderFilter,setSkillFilter,showAll,showSelected,showTwo,searchValue,onSearchChange}) => (

  <div class="filter">
          
          <div className="searchBar" style={{float:'right' , width:'20%' }}> 
              <input  type="text" placeholder="Search" onChange={onSearchChange} value={searchValue} />
          </div>

    <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
      <Row className="clearfix"  >
       <Col sm={8}>
          <Nav justified='true' >
            <NavDropdown eventKey={3} title="Places" id="basic-nav-dropdown">
              <ButtonGroup vertical block>
                <Button onClick={() => setCityFilter("beirut")}><h4>Beirut</h4></Button>
                <Button onClick={() => setCityFilter("saida")}><h4>Saida</h4></Button>
                <Button onClick={() => setCityFilter("tripoli")}><h4>Tripoli</h4></Button>
                <Button onClick={() => setCityFilter("jounyeh")}><h4>Jounyeh</h4></Button>
                <Button onClick={() => setCityFilter("jbeil")}><h4>Jbiel</h4></Button>
                <Button onClick={() => setCityFilter("tyre")}><h4>Tyre</h4></Button>
                <Button onClick={() => setCityFilter("sarafand")}><h4>Sarafand</h4></Button>
                <Button onClick={() => setCityFilter("alay")}><h4>Alay</h4></Button>
              </ButtonGroup>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Skilles" id="basic-nav-dropdown">
                <ButtonGroup vertical block>
                  <Button onClick={() => setSkillFilter("php")}>PHP</Button>
                  <Button onClick={() => setSkillFilter("react")}>REACT</Button>
                  <Button onClick={() => setSkillFilter("wordpress")}>WORDPRESS</Button>
                  <Button onClick={() => setSkillFilter("drupal")}>DRUPAL</Button>
                  <Button onClick={() => setSkillFilter("laravel")}>LARAVEL</Button>
                  <Button onClick={() => setSkillFilter("node")}>NODE JS</Button>
                  <Button onClick={() => setSkillFilter("javascript")}>JAVASCRIPT</Button>
                  <Button onClick={() => setSkillFilter("meator")}>MEATOR</Button>
                  <Button onClick={() => setSkillFilter("sql")}>SQL</Button>
                  {/* <Button onClick={() => setSkillFilter("video edior")}>VIDEO EDITOR</Button> */}
                  <Button onClick={() => setSkillFilter("bootsrap")}>BOOTSRAP</Button>
                  <Button onClick={() => setSkillFilter("ios")}>IOS</Button>
                  <Button onClick={() => setSkillFilter("angular")}>ANGULAR</Button>
                  <Button onClick={() => setSkillFilter("photoshop")}>PHOTOSHOP</Button>
                  <Button onClick={() => setSkillFilter("illustrator")}>ILLUSTRATOR</Button>
                  <Button onClick={() => setSkillFilter("adobe premiere")}>ADOBE PREMIERE</Button>
                  <Button onClick={() => setSkillFilter("video editor")}>VIDEO EDITOR</Button>
          
                </ButtonGroup>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Availability" id="basic-nav-dropdown">
                <ButtonGroup vertical block>
                  <Button onClick={() => setAvailabileFilter("available")}>Available</Button>
                  <Button onClick={() => setAvailabileFilter("in less than 1 month")}>In less than 1 month</Button>
                  <Button onClick={() => setAvailabileFilter("in less than 2 months")}>In less than 2 month</Button>
                  <Button onClick={() => setAvailabileFilter("3 months or more")}>3months or more</Button>
                  <Button onClick={() => setAvailabileFilter("not available")}>NOT AVAILABLE</Button>
                </ButtonGroup>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Show Students" id="basic-nav-dropdown">
                  <Button onClick={showAll} vertical block>
                    Show All
                  </Button>
                  <Button onClick={showTwo} vertical block>
                    Show Two
                  </Button>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Gender" id="basic-nav-dropdown">
                  <Button onClick={() => setgenderFilter("m")} vertical block>
                    Male
                  </Button>
                  <Button onClick={() => setgenderFilter("f")} vertical block>
                    Female
                  </Button>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Show List" id="basic-nav-dropdown">
                  <Button onClick={showSelected} vertical block>
                    Show Your List
                  </Button>
            </NavDropdown>
        </Nav>
        </Col>
        <Col sm={8}>
          <Tab.Content animation>
            <Tab.Pane eventKey="first">
                
            </Tab.Pane>
            <Tab.Pane eventKey="second">
                <ButtonGroup vertical block>
                    
                    
                </ButtonGroup>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
                
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              
            </Tab.Pane>
            <Tab.Pane eventKey="fifth">
              
            </Tab.Pane>
    
            <Tab.Pane eventKey="sixth">
              
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
  </Tab.Container>
  </div>
)


export default FilterSection;