import Header from "../ui/header";
import Nav from "../ui/nav-bar";
import Questions from "../ui/questions";

function App() {
  return (
    <main>
      <Header />
      <Nav />
      <div className=" relative flex items-center justify-center w-4/5 mx-auto p-4">
        <Questions />
      </div>
    </main>
  );
}

export default App;
