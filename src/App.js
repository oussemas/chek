
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './layout/NavBar';
import Footer from './layout/Form';
import Profile from './layout/Footer';
import img from "./imag.jpg"







export default function App() {
  return (
    <div >
      <NavBar />
      <Footer />
      <img src={img}></img>
      <Profile />
      
      
    </div>
  );
}
