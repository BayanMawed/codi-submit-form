// eslint-disable-next-line
import React, { Component, Children } from 'react';
import { Button, Grid, Row } from 'react-bootstrap';
import Student from './Student';
import StudentSelected from './StudentSelected';
import students from './Components/CreateStudent';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FilterSection from './Components/FilterSection';


students.map(
  (student) => {
    const { name, city, availability, skills, gender } = student
    const key = [ name, city, availability, gender, skills.join(' ') ].join(' ')
    student.key = key;
    student.id = key;
    return student
  }
)

const FilterSelected = ({children}) => {
  return (
    <h3 className="filterSelected">{children}</h3>
  )
}

export default class StudentTalent extends Component {
  state = {
    isFilterSelected:false,
    cityFilter: "",
    skillFilter:"",
    availableFilter:"",
    genderFilter:'',
    search:'',
    two:false,
    userSelectedList:[],
    show_selected_students:false
  }

  onChange = (evt) => {
    this.setState({search:evt.target.value})
  }
  filterStudents(){
    const search = this.state.search.trim();
    if(!search){ return students }
    const regex = new RegExp(search,'i');
    return students.filter(student => regex.test(student.key) )
  }

  
  randomStudentList = (a) => { // Fisher-Yates shuffle, no side effects
    var i = a.length, t, j;
    a = a.slice()
    if(i===0){return []}
    while (--i){
      t = a[i]
      a[i] = a[j = ~~(Math.random() * (i + 1))]
      a[j] = t
    }
    return a
  }
  renderFilteredStudents() {
    const students = this.filterStudents()
    const city = this.state.cityFilter;
    const skill = this.state.skillFilter;
    const available = this.state.availableFilter;
    const gender = this.state.genderFilter
    const two = this.state.two;
    const filteredStudents = students.filter( student => {
      if(city){
        if(student.city !== city){return false}
      }
      if(gender){
        if(student.gender !== gender){return false}
      }
      if(skill){
        const student_has_skill = student.skills.some(student_skill=>student_skill===skill)
        console.log(student.skills,skill,student_has_skill)
        if(student_has_skill === false){
          return false
        }
      }
      if(available){
        if(student.availability !== available){ return false}
      }
      return true
    })
    const studentList = this.randomStudentList(filteredStudents)
    const finalStudentList = two ? studentList.slice(0,2) : studentList
    const reactStudents = finalStudentList.map(
      (student) => <Student  OnClickAdd={() => this.AddStudentToList(student)}  image={'/images/'+student.imagename+'.jpeg'} {...student} key={student.name}/> 
    )
    return reactStudents;
 }
 
   setCityFilter = (cityFilter) => {
     this.setState({ cityFilter ,two:'', show_selected_students:false,isFilterSelected:true, search:''  })
    };
   removeCityFilter = () => {
    // const cityFilter = this.state.cityFilter
     this.setState({ cityFilter:'' ,two:'', show_selected_students:false,search:'' })
    };
   setSkillFilter = (skillFilter) => {
     this.setState({ skillFilter, two:'', show_selected_students:false,isFilterSelected:true,search:'' })
    };
   removeSkillFilter = () => {
     this.setState({ skillFilter:'' ,two:'', show_selected_students:false,search:'' })
    };
   setAvailabileFilter = (availableFilter) => {
     this.setState({ availableFilter, two:'', show_selected_students:false,isFilterSelected:true,search:'' })
    };
   removeAvailabileFilter = () => {
     this.setState({ availableFilter:'' ,two:'', show_selected_students:false,search:'' })
    };
   setgenderFilter = (genderFilter) => {
     this.setState({ genderFilter, two:'', show_selected_students:false,isFilterSelected:true,search:'' })
    };
   removegenderFilter = () => {
     this.setState({ genderFilter:'' ,two:'', show_selected_students:false,search:'' })
    };
   showAll = () => {
     this.setState({ cityFilter:'', skillFilter:'',availableFilter:'',genderFilter:'',two:'', show_selected_students:false,search:'' })
   };
   showTwo = () => {
     this.setState({ two:true, cityFilter:'', skillFilter:'',availableFilter:'', show_selected_students:false,search:'' })
   };
   
  showSelected = () => {
    this.setState({ show_selected_students:true,search:'' })
   };

  AddStudentToList = (student) => {
     const userSelectedList = this.state.userSelectedList.slice()
     userSelectedList.push(student);
     alert("Student has been added successfully")
     this.setState({userSelectedList})
   };
   OnClickRemove = (student) => {
      const index = this.state.userSelectedList.indexOf(student)
      if (index < 0) {
      return;
      }
      const selected = this.state.userSelectedList.slice();
      selected.splice(index, 1);
      this.setState({ userSelectedList:selected });
  } 

  // showAddToList =() => {
  //    let userList = []
  //    let element = create_student('mohammad', '1', 'DRUPAL', 'Walking', 'yes'  ,'tyre')
  //   //  console.log(userList)
  //   userList = this.state.userList.slice()
  //   userList.push(element)
  //   this.setState({ userList:userList,studentAdded:true,two:false ,all:false, cityFilter:'', skillFilter:'',availableFilter:'' })
  //  };

  renderSelectedStudents(){
    return this.state.userSelectedList.map(
        (student) => <StudentSelected  OnClickRemove={() => this.OnClickRemove(student)} OnClickAdd={() => this.AddStudentToList(student)}   image={'/images/'+student.name+'.jpeg'} {...student} key={student.name}/> 
      )
   }

  renderStudents(){
    if(this.state.show_selected_students){
      return this.renderSelectedStudents()
    }else{
      return this.renderFilteredStudents() 
    }
  }

  render() {
    const students_list = this.renderStudents()
    
    return (
    <div>
       

      {/* Filter Section contains all the html and buttons begins here */}
      <div className="filter" style={{width:'100%'}}>
          
          <FilterSection 
          setCityFilter={this.setCityFilter} 
          setSkillFilter={this.setSkillFilter}
          setAvailabileFilter={this.setAvailabileFilter} 
          setgenderFilter={this.setgenderFilter} 
          showAll={this.showAll} 
          showSelected={this.showSelected} 
          showTwo={this.showTwo}
          searchValue={this.state.search} 
          onSearchChange={this.onChange}
          />
      </div>
      <div class="multipleFilters" class='text-center'>
          { ( this.state.cityFilter || this.state.skillFilter || this.state.availableFilter|| this.state.genderFilter?
               null : <FilterSelected >
               No Filter Selected
            </FilterSelected>  ) 
          }
       
          { ( this.state.cityFilter? <div className="block city-block">
          
          {this.state.cityFilter}
           <Button bsStyle="danger" onClick = { this.removeCityFilter}>X</Button>
           </div> : null ) 
          }
          { ( this.state.skillFilter? <div className="block skill-block">{this.state.skillFilter}
          <Button bsStyle="danger" onClick = { this.removeSkillFilter}>X</Button>
          </div> : null ) 
          }
          { ( this.state.availableFilter? <div className="block available-block">{this.state.availableFilter}
          <Button bsStyle="danger" onClick = { this.removeAvailabileFilter}>X</Button>
          </div> : null ) 
          }
          { ( this.state.genderFilter? <div className="block available-block">{this.state.genderFilter}
          <Button bsStyle="danger" onClick = { this.removegenderFilter}>X</Button>
          </div> : null ) 
          }
      </div>
      {/* Ends here.... */}


   <div className="student">
   <Grid>
      <Row>
        <ReactCSSTransitionGroup style={{display: 'flex', flexFlow: 'row wrap',justifyContent: 'center'}} transitionName={"student"} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          { students_list.length ? students_list : <div class="noResult">
          <h1>no results...</h1>
          <Button onClick={() => this.showAll()} >
            Show All Students
          </Button>
          </div> 
        }
        </ReactCSSTransitionGroup>
        

      </Row>
    </Grid>
    </div>  
  </div>
)}
}
  



