import './App.css';
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import katiezaferes from './katiezaferes.png'
import weddingimage from './wedding-image.png'
import star from './star.png'

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Card 
          image = {katiezaferes} 
          star= {star} 
          rating = "5.0"
          amount = "(6)"
          dot = "•"
          country = "USA"
          title = "Life Lessons with Katie Zaferes"
          money = "From $136"
      />


    </div>
  );
}

export default App;
