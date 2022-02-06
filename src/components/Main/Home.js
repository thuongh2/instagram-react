import "../../styles/App.scss";
import Navigation from "./Navigation.js";
import Cards from "./Cards.js";
import Sidebar from "./Sidebar.js";

function Home() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <div className="container">
          <Cards />
          <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default Home;
