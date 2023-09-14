const name1='Apple';// which will never change,

import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import HomeSection from "../../components/HomeSection";


// const name1;// error: please assign the value

// name1='Mango'// it will give error

// var name1='Apple'
// var name1;
// name1='Mango'// no error

// let name1='Apple'
// let name1;
// name1='Mango'

// // diff: let is block level
// var name2='Apple';
// function ayx(){
//     console.log(name2) // Apple
// }

// function ayx(){
//     let name2='Apple';
// }
// console.log(name2)  // name2 is not defined

// // assignment

// // learn about let,var and const
// learn about functions in javascript
const HomePage = () => {
  return (
    <div>
      <div
        style={{
          height: "47px",
        }}
      >
        <Navbar />
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <SideBar />
        <HomeSection />
      </div>
    </div>
  );
};



export default HomePage;
