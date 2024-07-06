import logoImg from '../assets/logo.jpg';
import NavBar from './UI/NavBar';

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>MasalFood</h1>
      </div>
      <NavBar />
    </header>
  );
}