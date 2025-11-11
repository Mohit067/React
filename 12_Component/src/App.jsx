import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1>Hello component</h1>

      <div className="divv">
        <Card
          title={"MERN Stack Development"}
          discription={
            "Experienced in building full-stack applications using MongoDB, Express.js, React.js, and Node.js."
          }
        />
        <Card
          title={"C++ & DSA"}
          discription={
            "Strong foundation in Data Structures and Algorithms with problem-solving skills in C++."
          }
        />
        <Card
          title={"JavaScript"}
          discription={
            "Proficient in JavaScript with experience in modern frameworks and libraries."
          }
        />
        <Card
          title={"Artificial Intelligence"}
          discription={
            "Keen interest in AI concepts including Machine Learning and Deep Learning applications."
          }
        />
        <Card
          title={"Team Collaboration"}
          discription={
            "Good at working in teams, sharing ideas, and contributing effectively to group projects."
          }
        />
        <Card
          title={"Continuous Learner"}
          discription={
            "Always eager to explore new technologies and apply knowledge to real-world problems."
          }
        />
      </div>
    </>
  );
}

export default App;
