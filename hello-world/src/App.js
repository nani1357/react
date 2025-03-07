// import logo from './logo.svg';
import './App.css';
// import Msg from './Components/Message'
// import Greet from './Components/Greet';
// import ClassComp from './Components/Welcome';
// import {Greetf} from './Components/Greet';
// import Def from './Components/Hello';
// import Ctr from './Components/Counter'
// import Fclick from './Components/FunctionClick'
// import Cclick from './Components/ClassClick'
// import Ebind from './Components/EventBind'
// import ParentComponent from './Components/ParentComponent';
// import UserGreeting from './Components/UserGreeting';
// import NameList from './Components/NameList';
import LinkedList from './Components/LinkedList';
import Inline from './Components/Inline';
import './Components/appStyles.css'
import styles from './Components/appStyles.module.css'
import Form from './Components/Form'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello World!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function App() {
  return (
    <div className="App"> 
     {/* <Greetf/>
     <ClassComp/>
     <Greet name="Manoj"/>
     <Greet name="Click Me">
      <button>Action</button>
     </Greet>
     <ClassComp/>
     <Def/> */}
     {/* <Msg /> */}
     {/* <Ctr/> */}
     {/* <Fclick/>
     <Cclick/>
     <Ebind/>
     <ParentComponent/> */}
     {/* <UserGreeting/> */}
     {/* <NameList/> */}
     <LinkedList/>
     <Form/>
     <h1 className='error'>Error</h1>
     <h1 className={styles.success}>Success</h1>
     <Inline/>
    </div>
  );
}

export default App;
