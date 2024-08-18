import styles from "./TitleCard.module.css";

export default function TitleCard({ name, age, active }) {
   const cardTitle = {
      title: "Title Card",
      subTitle: "Subtitle Card",
   };

   function displayMyName() {
      return "My name is Danyela";
   }

   function handleClick() {
      alert("Clicked");
   }

   function handleMouseEnter() {
      console.log("Mouse Enter");
   }

   function handleMouseLeave() {
      console.log("Mouse Leave");
   }

   return (
      <div
         className={styles.container}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
      >
         <h1
            onClick={handleClick}
            className={active ? styles.online : styles.offline}
         >
            {name}
         </h1>
         <p>{cardTitle.subTitle}</p>
         <p>{`It also can be done wit template string: ${cardTitle.title} - ${cardTitle.subTitle}`}</p>
         <p>{displayMyName()}</p>
         <p>{age > 30 ? "You are older than 30" : "You are younger than 30"}</p>

         {active && <p>I'm Active</p>}
      </div>
   );
}

/* 
rendering arrays - map()

create a component named Cards and invoke it in the App component. The Cards component should receive an array of objects as a prop. Each object should have a title and a description. The Cards component should render a list of cards with the title and description of each object.

*/
