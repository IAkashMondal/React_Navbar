
import './App.css';
import Styles from "./App.module.css"
import Logo from "./Components/Logo";
import NavButton from "./Components/NavButton";
import NavLinks from "./Components/NavButton"

function App() {
  let arr=["Services","Projects","About"]

  return (
   
    <div>
    <div className={Styles.navbar}>
      <div style={{color:"#fff"}}>
        <Logo></Logo>
      </div>
      <div style={{display:"flex",gap:"15px",color:"#fff"}}>
       {arr.map((el)=>(
          <NavLinks name={el}/>
       ))}
      </div>

      <div >
          <NavButton ></NavButton>
      </div>
    </div> 
    
  </div>

  )
}

export default App;
