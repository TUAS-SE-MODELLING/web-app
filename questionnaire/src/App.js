import Header from './components/Header'
import Info from './components/Info'
import Options from './components/Options'

const App = () => {
  return (
    <div className='container'>
      <Info />
      <Header number={1} text="Are you feeling exhausted" /> 
      <Options />
    </div>
    // I used props now at the header but it needs other solution
    // when button pressed it need to change
  );
}

export default App;
