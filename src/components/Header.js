import mestoLogo from './../images/mesto-logo.svg'
function Header() {
  return (
    <header className="header">
    <img src={mestoLogo} alt="МЕСТО Россия" className="header__logo"  />
  </header>
  )
}

export default Header;