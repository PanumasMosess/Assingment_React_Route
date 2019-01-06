import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Courses.css";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" }
    ]
  };

  courseSelectedHandler = id => {
    // this.props.history.push({ pathname: "/posts/" + id });
    this.props.history.push("/course/" + id);
  };

  render() {
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">
          {this.state.courses.map(course => {
            return (
              <Link
                to={{
                    pathname: "/course/" + course.id,
                    search:  course.title
                }}
                key={course.id}
              >
                <article
                  className="Course"
                  key={course.id}
                  onClick={course.clicked}
                >
                  {course.title}
                </article>
              </Link>
            );
          })}
        </section>
      </div>
    );
  }
}

export default Courses;
