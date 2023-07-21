// import { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import "./styles.css";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// const content = [
//   [
//     "React is extremely popular",
//     "It makes building complex, interactive UIs a breeze",
//     "It's powerful & flexible",
//     "It has a very active and versatile ecosystem"
//   ],
//   [
//     "Components, JSX & Props",
//     "State",
//     "Hooks (e.g., useEffect())",
//     "Dynamic rendering"
//   ],
//   [
//     "Official web page (react.dev)",
//     "Next.js (Fullstack framework)",
//     "React Native (build native mobile apps with React)"
//   ],
//   [
//     "Vanilla JavaScript requires imperative programming",
//     "Imperative Programming: You define all the steps needed to achieve a result",
//     "React on the other hand embraces declarative programming",
//     "With React, you define the goal and React figures out how to get there"
//   ]
// ];

// export default function App() {
//   const [activeContentIndex, setActiveContentIndex] = useState(0);

//   return (
//     <div>
//       <header>
//         <img src="react-logo-xs.png" alt="React logo" />
//         <div>
//           <h1>React.js</h1>
//           <p>i.e., using the React library for rendering the UI</p>
//         </div>
//       </header>

//       <div id="tabs">
//         <menu>
//           <button
//             className={activeContentIndex === 0 ? "active" : ""}
//             onClick={() => setActiveContentIndex(0)}
//           >
//             Why React?
//           </button>
//           <button
//             className={activeContentIndex === 1 ? "active" : ""}
//             onClick={() => setActiveContentIndex(1)}
//           >
//             Core Features
//           </button>
//           <button
//             className={activeContentIndex === 2 ? "active" : ""}
//             onClick={() => setActiveContentIndex(2)}
//           >
//             Related Resources
//           </button>
//           <button
//             className={activeContentIndex === 3 ? "active" : ""}
//             onClick={() => setActiveContentIndex(3)}
//           >
//             React vs JS
//           </button>
//         </menu>
//         <div id="tab-content">
//           <ul>
//             {content[activeContentIndex].map((item) => (
//               <li key={item}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
