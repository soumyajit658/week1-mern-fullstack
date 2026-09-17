import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";

import "./App.css";

function App() {
  const handleClick = () => {
    alert("Button clicked successfully!");
  };

  const skills = [
    {
      title: "HTML",
      description: "Build the structure of modern websites.",
      icon: "🌐",
    },
    {
      title: "CSS",
      description: "Create attractive and responsive designs.",
      icon: "🎨",
    },
    {
      title: "JavaScript",
      description: "Add interactivity and dynamic behavior.",
      icon: "⚡",
    },
    {
      title: "React",
      description: "Build reusable and interactive components.",
      icon: "⚛️",
    },
  ];

  return (
    <div>
      <Header />

      <main>
        <section id="home" className="hero">
          <h1>React Components Showcase</h1>

          <p>
            A simple React project demonstrating reusable components,
            props, state, events, and dynamic rendering.
          </p>

          <Button text="Click Me" onClick={handleClick} />
        </section>

        <section id="components" className="components-section">
          <h2>Reusable Components</h2>

          <div className="card-container">
            {skills.map((skill, index) => (
              <Card
                key={index}
                title={skill.title}
                description={skill.description}
                icon={skill.icon}
              />
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <Form />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;