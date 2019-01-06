import React, { Component } from "react";

class Course extends Component {

    state ={
        courses:[]
    }

  componentDidMount (){
      console.log(this.props)
      const query = new URLSearchParams(this.props.location.search);
      for (let param of query.entries()) {
          const updateCourses = {
              id: this.props.match.params.id,
              title: param
          }
          this.setState({ courses: updateCourses });
      }
  }

  render() {
    return (
      <div>
        <h1>{this.state.courses.title}</h1>
        <p>You selected the Course with ID: {this.state.courses.id}</p>
      </div>
    );
  }
}

export default Course;
