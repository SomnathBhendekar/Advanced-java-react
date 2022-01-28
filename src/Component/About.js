import HeaderNavigation from "./HeaderNavigation";
//import homefarm from "../images/homefarm.jpg";
export default function About() {
  return (
    <>
      <HeaderNavigation />
      {/* <h1>About Page</h1> */}
      <div>
        <img src={require("../images/homefarm.jpg")} alt="" />
      </div>
    </>
  );
}
