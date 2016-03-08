import React        from 'react';
import { Link }     from 'react-router';
import classnames   from 'classnames'
import BackIcon     from './BackIcon';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feature: false
    }
  }

  fetchFeaturedPhotos(feature) {
    const page = 1;
    return () => {
      this.setState({feature: feature})
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
                onClick={this.fetchFeaturedPhotos('popular')}
                className={classnames({
                  'current': 'popular' === this.state.feature
                })}>
                Popular
              </Link>
            </li>
            <li>
              <Link
                to="/upcoming"
                onClick={this.fetchFeaturedPhotos('upcoming')}
                className={classnames({
                  'current': 'upcoming' === this.state.feature
                })}>
                Upcoming
              </Link>
            </li>
            <li>
              <Link
                to="/editors"
                onClick={this.fetchFeaturedPhotos('editors')}
                className={classnames({
                  'current': 'editors' === this.state.feature
                })}>
                Editors
              </Link>
            </li>
            <li>
              <Link
                to="/fresh"
                onClick={this.fetchFeaturedPhotos('fresh_today')}
                className={classnames({
                  'current': 'fresh_today' === this.state.feature
                })}>
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
  actions: React.PropTypes.object,
  photos: React.PropTypes.object
}

export default Header
