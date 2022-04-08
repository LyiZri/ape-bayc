import { history } from 'umi';
import './index.less';
import { useState } from 'react';
interface Props {
  navId: string;
  mayc?: boolean;
}
const Nav: React.FC<Props> = (props) => {
  const [isClickMembers, setIsClickMembers] = useState(false);
  const scrollToAnchor = (anchorName: string) => {
    if (history.location.pathname != '/menu/home') {
      history.push('home');
    }
    if (anchorName) {
      const tabBar = document.getElementById('nav')?.offsetHeight;
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav id="nav" className="navbar navbar-expand-md navbar-light sticky-top">
      <a
        onClick={() => {
          history.push('homePage');
        }}
        id="bayc-brand"
        className="navbar-brand"
      >
        <img
          src={
            props.mayc
              ? 'https://ik.imagekit.io/bayc/assets/mayc-logo-z.png'
              : 'https://ik.imagekit.io/bayc/assets/bayc-logo-z.png'
          }
          className="d-inline-block align-top"
          alt="bored ape logo"
          height="75px"
          width="auto"
        />
      </a>
      <button
        aria-controls="responsive-navbar-nav"
        id="nav-toggle"
        type="button"
        aria-label="Toggle navigation"
        className="navbar-dark navbar-toggler collapsed"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse">
        <div className="navbar-nav" id="nav-bar">
          <a
            id="nav-link"
            title="BUY AN APE"
            onClick={() => {
              scrollToAnchor('buy-an-ape');
            }}
            className="nav-link"
          >
            BUY AN APE
          </a>
          <a
            id="nav-link"
            title="ROADMAP"
            onClick={() => {
              scrollToAnchor('roadmap');
            }}
            className="nav-link"
          >
            ROADMAP
          </a>
          <a
            id="nav-link"
            title="TEAM"
            onClick={() => {
              scrollToAnchor('team');
            }}
            className="nav-link"
          >
            TEAM
          </a>
          <a
            id="nav-link"
            title="GALLERY"
            data-rb-event-key="/gallery"
            className="nav-link active"
            style={props.navId == '4' ? { color: '#bfc500' } : {}}
            onClick={() => {
              history.push('gallery');
            }}
          >
            GALLERY
          </a>
          <a
            id="nav-link"
            title="PROVENANCE"
            onClick={() => {
              history.push('provenance');
            }}
            style={props.navId == '5' ? { color: '#bfc500' } : {}}
            data-rb-event-key="/provenance"
            className="nav-link"
          >
            PROVENANCE
          </a>
          <div
            className={`nav-item dropdown  ${isClickMembers ? 'show' : ''}`}
            onMouseLeave={() => {
              setIsClickMembers(false);
            }}
          >
            <a
              aria-haspopup="true"
              aria-expanded={isClickMembers}
              id="nav-dropdown"
              className="dropdown-toggle nav-link"
              role="button"
              onClick={() => {
                setIsClickMembers(!isClickMembers);
              }}
              onClickCapture={() => {
                setIsClickMembers(false);
              }}
            >
              MEMBERS
            </a>
            <div
              aria-labelledby="nav-dropdown"
              className={`dropdown-menu ${isClickMembers ? 'show' : ''}`}
              style={{ margin: '0px' }}
            >
              <a
                id="nav-link"
                title="MAYC"
                className="dropdown-item"
                style={props.navId == '6' ? { color: '#bfc500' } : {}}
                onClick={() => {
                  history.push('mayc');
                }}
              >
                MAYC
              </a>
              <a
                id="nav-link"
                title="KENNEL CLUB"
                className="dropdown-item"
                style={props.navId == '7' ? { color: '#bfc500' } : {}}
                onClick={() => {
                  history.push('kennelClub');
                }}
              >
                KENNEL CLUB
              </a>
              <a
                id="nav-link"
                title="MERCH"
                href="#/merch"
                className="dropdown-item"
              >
                MERCH
              </a>
              <a
                id="nav-link"
                title="BATHROOM"
                href="#/bathroom"
                className="dropdown-item"
              >
                BATHROOM
              </a>
            </div>
          </div>
        </div>
        <div className="navbar-nav" id="nav-social">
          <a href="https://www.youtube.com/channel/UCB6R9NAjkgxQi_QEkc4O25Q">
            <i className="fa fa-youtube-play social-icon pr-lg-0"></i>
          </a>
          <a href="https://www.instagram.com/boredapeyachtclub">
            <i className="fa fa-instagram social-icon pr-lg-0"></i>
          </a>
          <a href="https://discord.gg/3P5K3dzgdB">
            <i className="fa fa-discord-alt social-icon pr-lg-0"></i>
          </a>
          <a href="https://twitter.com/BoredApeYC">
            <i className="fa fa-twitter social-icon pr-lg-0"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
