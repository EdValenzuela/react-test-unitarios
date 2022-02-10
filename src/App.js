import Counter from "./components/Counter";

export const Title = () => (
  <h1>Introducción a unit testing con Jest - Cypress y Enzyme</h1>
)

const App = () => {
  return (
    <div>
      <Title />
      <div className="container">
        <span num={3} active={false}>Primero</span>
        <span num='3' active='false'>Segundo</span>
      </div>
      <input type='text' />
      <Counter />
    </div>
  );
}

export default App;
