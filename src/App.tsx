import Component from './starter/02-props'
function App() {
  return (
    <main>
      <Component name= 'bishop' id= {123} />
      <Component name= 'fuck' id= {263}>
        <h1>hello world</h1>
      </Component>
    </main>
  );
}

export default App;
