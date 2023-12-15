import Header from "../ui/header";
import Nav from "../ui/nav-bar";
import Questions from "../ui/questions";

function App() {
  return (
    <main>
      <Header />
      <Nav />
      <div className=" flex items-center justify-center w-full p-4">
        <Questions />
      </div>
    </main>
  );
}

export default App;
