import { useEffect } from 'react';
import { history } from 'umi';
import LastLine from '@/compontent/lastLine';
import './index.less';
interface Props {}

const Footer: React.FC<Props> = (props) => {
  useEffect(() => {}, []);
  return (
    <footer className="footer">
      <div className="container-fluid footer-line">
        <hr className="p-0 line" />
        <div className="row mx-0 footer-padding">
          <div className="col-12 col-lg-4 order-lg-first my-lg-auto">
            <div className="email-container">
              <span className="email-label">GET ON THE LIST</span>
              <br />
              <div className="d-flex email-flex">
                <br />
                <form
                  id="email-submit"
                  method="post"
                  name="mc-embedded-subscribe-form"
                  target="_blank"
                  className="email-form"
                >
                  <input
                    id="email-address"
                    className="m-0 email-input-text"
                    type="email"
                    placeholder="Email Address"
                    name="EMAIL"
                    value=""
                  />
                  <div
                    aria-hidden="true"
                    style={{ position: 'absolute', left: '-5000px' }}
                  >
                    <input
                      type="text"
                      name="b_c979ffabc41007fd79ffe121b_b785550a9e"
                      value=""
                    />
                  </div>
                  <button
                    name="subscribe"
                    className="email-submit"
                    type="submit"
                  >
                    →
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 order-first">
            <img
              className="img-fluid footer-logo"
              src="https://ik.imagekit.io/bayc/assets/bayc-footer.png"
              alt="logo"
            />
          </div>
          <div className="order-last my-auto text-center col-lg-4 col-sm-12 col-12">
            <div className="row">
              <div className="text-lg-right col-sm-12 col-12">
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
              <div className="col-lg-12 col-sm-6 col-6">
                <p className="copyright text-right">
                  <span className="copy-left">© 2021 Yuga Labs LLC</span>
                </p>
              </div>
              <div className="col-lg-12 col-sm-6 col-6">
                <p id="terms" className="copyright text-right">
                  <a className="link" href="#/terms">
                    BAYC Terms &amp; Conditions
                  </a>
                  <br />
                  <a className="link" href="#/mayc/terms">
                    MAYC Terms &amp; Conditions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LastLine />
    </footer>
  );
};

export default Footer;
