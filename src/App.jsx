
import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'
import Bowler from './Bowler'

function App() {
  

  function handleClicked() {
    alert(' I am clicked')
  }

  // const handleClicked2 = () => {
  //   alert('Clicked2')
  // }
  const handleClicked3 = (num) => {
    const newNumber = num + 5;
    alert(newNumber)
  }
  return (
    <>
      <h1>Get started</h1>
      <div>
        <button onClick={handleClicked}>Click Me</button>
        <button onClick={() => alert('cliked')}>Click Me</button>
        <button onClick={() => handleClicked3(5)}>Click Me3</button>
      </div>

      <Counter></Counter>
      <Batsman></Batsman>
      <Bowler></Bowler>


    </>
  )
}

export default App
