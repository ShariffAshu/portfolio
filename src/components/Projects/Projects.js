import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png"; 
import mowa from "../../Assets/Projects/mowa.jpeg"; 
import kritunga from "../../Assets/Projects/kritunga.jpeg" 
import toast  from "../../Assets/Projects/toast.jpeg"  
import greehush from "../../Assets/Projects/greenHush.jpeg"  
import dataquad from "../../Assets/Projects/dataquad.jpeg"  
import sumangali from "../../Assets/Projects/sumangali.jpeg"  
import ghanshyam from "../../Assets/Projects/ghanshyam.jpeg"   
import urbane from "../../Assets/Projects/urbane.jpeg"  
import memes from "../../Assets/Projects/meme.jpeg"  
import influencers from "../../Assets/Projects/Influencers.jpeg" 






function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
        I've successfully overseen social media campaigns for more than 24 clients, orchestrating comprehensive strategies, executing impactful tactics, curating captivating reels and memes, and fostering partnerships with influencers to optimize brand exposure and engagement.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={mowa}  
              isBlog={false}
              title="Mova Energy"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={kritunga}
              isBlog={false}
              title="Kritunga"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={toast}
              isBlog={false}
              title="Toast and Tonic"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={greehush}
              isBlog={false}
              title="Gree hush farms"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={dataquad}
              isBlog={false}
              title="Data quad"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={sumangali}
              isBlog={false}
              title="Sumangali Fabrics"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> 
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={urbane}
              isBlog={false}
              title="Urbane Outdoor"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> 

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={ghanshyam}
              isBlog={false}
              title="Ghanshyam"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row> 

        <h1 className="project-heading">
          Content <strong className="purple">Marketing </strong> 
          
        </h1> 
        <p style={{ color: "white" }}>
        I've facilitated content marketing campaigns by partnering with memers (200 to 500+) and influencers, effectively promoting brands, movies, and personal profiles. These collaborations have amplified brand reach and engagement across social media platforms.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={memes}  
              isBlog={false}
              title="Memers Partnership"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={influencers}
              isBlog={false}
              title="Influencer Collaborationsr"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

        

        
        
        </Row> 
      </Container>
    </Container>
  );
}

export default Projects;
