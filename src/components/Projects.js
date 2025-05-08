import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCrd";
import projImg1 from "../assets/weather-app.png";
import projImg2 from "../assets/medical-website.png";
import projImg3 from "../assets/quiz-app.png";

import projImg4 from "../assets/chatgpt-replica.png";
import projImg5 from "../assets/decotechTask.png";
import projImg6 from "../assets/kanbanBoard.png";

import projImg7 from "../assets/todo.png";


import colorSharp2 from "../assets/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Weather app",
      description: "This is my weather app and I include features like speech to text and background automatically change depending on country weather",
      imgUrl: projImg1,
    },
    {
      title: "Medical E-commerce Website",
      description: "This is my medical E-commerce design for my family business",
      imgUrl: projImg2,
    },
    {
      title: "Quiz App",
      description: "This is a simple quiz app where I also include local storage for storing previous answer when we go backward in quiz and I also include timer",
      imgUrl: projImg3,
    },
    {
      title: "Chatgpt Replica design",
      description: "This is my chatgpt replica design where I  store previous chats in sidebar and we have input where we search anything and our all inputs is store and when we click new chat then we go to new chat fresh page",
      imgUrl: projImg4,
    },
    {
      title: "Interview Task",
      description: "This is my interview task where I include sidebar with 3 option like admin dashboard,users crud operation and todo category and when we add or delte user or add tasks so its counts update in admin dashboard page",
      imgUrl: projImg5,
    },
    {
      title: "Kanban Board",
      description: "This is my kanban board where I use filter on task and also include deadline feature and our date show in calendar with dot (react tooltip library) and I also include drag and drop feature",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are my some projects which i worked on and some projects are pending which I push later .</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}