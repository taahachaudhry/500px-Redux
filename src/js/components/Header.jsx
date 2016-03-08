import React        from 'react';
import { Link }     from 'react-router';
import BackIcon     from './BackIcon';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  fetchFeaturedPhotos(feature) {
    const page = 1;
    return () => {
      this.props.actions.fetchActivePhoto(null, null);
      this.props.actions.fetchFeaturedPhotos(feature, page);
    }
  }

  render() {
    return (
      <header className="header">
        <div className="header-content">
          <Link className="back" to="/">
            <BackIcon/>
          </Link>
          <ul className="discover-links">
            <li>
              <Link
                to="/popular"
                onClick={this.fetchFeaturedPhotos('popular')}>
                Popular
              </Link>
            </li>
            <li>
              <Link
                to="/upcoming"
                onClick={this.fetchFeaturedPhotos('upcoming')}>
                Upcoming
              </Link>
            </li>
            <li>
              <Link
                to="/editors"
                onClick={this.fetchFeaturedPhotos('editors')}>
                Editors
              </Link>
            </li>
            <li>
              <Link
                to="/fresh"
                onClick={this.fetchFeaturedPhotos('fresh_today')}>
                Fresh
              </Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

Header.displayName = 'Header'
Header.propTypes = {
  actions: React.PropTypes.object
}

export default Header
