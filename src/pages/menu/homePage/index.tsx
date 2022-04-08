import styles from './index.less';
import { connect } from 'dva';
import { useEffect } from 'react';
import { history } from 'umi';
interface Props {}

const Home: React.FC<Props> = (props) => {
  useEffect(() => {}, []);
  return (
    <div className={styles.Intro}>
      <div className={styles.commonContainer}>
        <div className="container">
          <div className="mb-5 mb-lg-0 row">
            <div className="col-lg-4 col-12 offset-lg-4">
              <img
                className="img-fluid d-block mx-auto custom-logo pt-4"
                src="https://ik.imagekit.io/bayc/assets/bayc-logo.png"
                alt="bayc header logo"
                width="300px"
                height="300px"
              />
            </div>
            <div className="d-none d-lg-flex justify-content-end social-icons col-lg-4">
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
            <div className="px-0 col-12">
              <div className="mb-4 mb-lg-5 container">
                <div className="row">
                  <div className="px-0 col-12">
                    <video className="mx-auto w-100" autoPlay id="myVideo">
                      <source
                        src="https://ik.imagekit.io/bayc/assets/club-landing.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="welcome pt-lg-4 row">
                <div className="border-bottom px-0 ml-3 ml-lg-0 col-9">
                  <h1 className="common-title mb-3">
                    WELCOME TO
                    <br />
                    THE BORED APE
                    <br />
                    YACHT CLUB
                  </h1>
                  <button
                    className="bayc-button mb-4 w-100"
                    onClick={() => {
                      history.push('home');
                    }}
                    type="button"
                  >
                    ENTER
                  </button>
                </div>
                <div className="scroll m-auto pr-0 col-2">
                  <div className="rotate my-auto">← SCROLL DOWN</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5 row">
            <div className="col-lg-8 col-12">
              <p className="common-p">
                A limited NFT collection where the token itself doubles as your
                membership to a swamp club for apes. The club is open! Ape in
                with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state: any) {
  const { token } = state.globalTop;
  return {
    token,
  };
}

let connectName = connect(mapStateToProps)(Home);
// connectName.wrappers = ['@/auth/login'];

export default connectName;
