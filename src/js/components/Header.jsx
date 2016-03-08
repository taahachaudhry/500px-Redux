import React        from 'react';
import { Link }     from 'react-router';
import BackIcon     from './BackIcon';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <div className="header-content">
          <Link className="back" to="/">
            <BackIcon/>
          </Link>
          <ul>
            <li>
            </li>
            <li>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

Header.displayName = 'Header'

export default Header
