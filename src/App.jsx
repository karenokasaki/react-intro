import "./App.css";
import Cards from "./components/Cards/Cards";
import TitleCard from "./components/TitleCard/TitleCard";

function App() {
   const products = [
      {
         id: 1,
         name: "Smartphone",
         brand: "TechBrand",
         price: 700,
         inStock: true,
         category: "Mobile",
         thumbnail: "/mobile.png",
      },
      {
         id: 2,
         name: "Tablet",
         brand: "CompPro",
         price: 400,
         inStock: false,
         category: "Mobile",
         thumbnail: "https://picsum.photos/150/100?random=2",
      },
      {
         id: 3,
         name: "Smartwatch",
         brand: "WristTech",
         price: 250,
         inStock: true,
         category: "Mobile",
         thumbnail: "https://picsum.photos/150/100?random=3",
      },
      {
         id: 4,
         name: "Laptop",
         brand: "CompPro",
         price: 1000,
         inStock: false,
         category: "Computers",
         thumbnail: "https://picsum.photos/150/100?random=4",
      },
      {
         id: 5,
         name: "Desktop PC",
         brand: "TechBrand",
         price: 850,
         inStock: true,
         category: "Computers",
         thumbnail: "https://picsum.photos/150/100?random=5",
      },
      {
         id: 6,
         name: "Gaming Laptop",
         brand: "GameMaster",
         price: 1200,
         inStock: true,
         category: "Computers",
         thumbnail: "https://picsum.photos/150/100?random=6",
      },
   ];

   const tours = [
      {
         id: 1,
         name: "Great Wall of China",
         brand: "Beijing Tours",
         price: 500,
         inStock: true,
         category: "Historical",
         thumbnail: "https://picsum.photos/150/100?random=7",
      },
      {
         id: 2,
         name: "Safari in Serengeti",
         brand: "African Adventures",
         price: 1200,
         inStock: true,
         category: "Nature",
         thumbnail: "https://picsum.photos/150/100?random=8",
      },
      {
         id: 3,
         name: "Machu Picchu",
         brand: "Peru Treks",
         price: 800,
         inStock: false,
         category: "Historical",
         thumbnail: "https://picsum.photos/150/100?random=9",
      },
      {
         id: 4,
         name: "Eiffel Tower Tour",
         brand: "Paris Excursions",
         price: 300,
         inStock: true,
         category: "City",
         thumbnail: "https://picsum.photos/150/100?random=10",
      },
      {
         id: 5,
         name: "Grand Canyon Hiking",
         brand: "USA Hikes",
         price: 600,
         inStock: true,
         category: "Nature",
         thumbnail: "https://picsum.photos/150/100?random=11",
      },
      {
         id: 6,
         name: "Northern Lights Tour",
         brand: "Arctic Wonders",
         price: 1500,
         inStock: true,
         category: "Nature",
         thumbnail: "https://picsum.photos/150/100?random=12",
      },
   ];

   return (
      <>
         <TitleCard name={"Danyela"} age={29} active={false} />
         <TitleCard name={"Karen"} age={31} active={true} />
         <Cards products={products} />
         <Cards products={tours} />
      </>
   );
}

export default App;

