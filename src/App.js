import './App.css';
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
//import katiezaferes from './katiezaferes.png'
//import weddingimage from './wedding-image.png'
import star from './star.png'
import data from './data.js'

console.log(data)

function App() {
  
  const cards = data.map(item => {
    return (
        <Card 
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
        />
    )
}) 

  return (
    <div>
      <NavBar />
      <Hero />
      {cards}


    </div>
  );
}

export default App;
