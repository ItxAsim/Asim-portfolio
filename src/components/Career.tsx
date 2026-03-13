import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BS in Computer Science</h4>
                <h5>University of Gujrat</h5>
              </div>
              <h3>2020-2024</h3>
            </div>
            <p>
              Completed Bachelor of Science in Computer Science with strong
              foundations in logic building, OOP, data structures, and databases.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer</h4>
                <h5>MetaViz, Lahore</h5>
              </div>
              <h3>SEP 2024 - NOW</h3>
            </div>
            <p>
              Developing cross-platform mobile apps using React Native & Flutter.
              Built custom APIs with Strapi, implemented AI chatbot systems, voice
              interaction, Firebase integration, and real-time features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
