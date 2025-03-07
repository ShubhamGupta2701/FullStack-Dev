import Hello from "./components/Hello"

const App = () => {
  const age = 24
  return (
    <div>
      <p>Learning React</p>
      <Hello name = "Shubham Gupta" age={age}/>
      <Hello name = "Riya Goel" age={age}/>
    </div>
  )
}

export default App