
import './App.css';
const employee={
  "name":"Tom",
  "location":"New York",
  "bloodgroup":"B+",
  "age":"26",
  "profileImg":'https://www.w3schools.com/howto/img_avatar.png'


}
function App() {
  return (
    <div className="card">
      <img src={employee.profileImg} alt="profileImg"></img>
      <div className="name">{employee.name}</div>
      <div className="label">Location</div>
      <div className="data">{employee.location}</div>
      <div className="label">Blood group</div>
      <div className="data">{employee.bloodgroup}</div>
      <div className="label">Age</div>
      <div className="data">{employee.age}</div>
    </div>
  );
}

export default App;
