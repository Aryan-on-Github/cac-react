import MyFunc from "./Aryan";


function App() {
  return (
    <>
    <h1>this is react basic</h1>
    <MyFunc />
    </>
  );
}
// in order to use multiple tags, place them inside empty tag called fragment, which allows us to use multiple tags inside component
// btw, component allows only one tag to return, thats why we return fragment which contain various html elements

export default App;
