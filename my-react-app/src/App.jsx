import Button from "./Button";
import Student from "./Student";

function App() {
  return (
    <>
    <Student name="Spongebob" age={40} isStudent={true} />
    <Student name="Patrick" age={42} isStudent={false} />
    <Student name="Squidward" age={50} isStudent={false} />
    <Student name="Sandy" age={27} isStudent={true} />
    <Student name="larry"/>
    </>
  );
}

export default App;
