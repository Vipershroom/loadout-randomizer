import "./styles/Nav.scss";
import GitLogo from "../assets/github-mark.svg";

const Nav = () => {
  return (
    <nav className="nav">
      <a
        href="https://github.com/Vipershroom/loadout-randomizer"
        target="_blank"
      >
        <img src={GitLogo} alt="" />
      </a>
    </nav>
  );
};

export default Nav;
