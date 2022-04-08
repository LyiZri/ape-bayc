import Nav from '@/compontent/nav';
import { Carousel } from 'antd';
import { useState } from 'react';
import './index.less';
interface Props {}
const Page: React.FC<Props> = (props) => {
  const [faqindex, setFaqindex] = useState(-1);
  return (
    <div className="kennelClub">
      <Nav navId="7"></Nav>
      <div>
        <div
          style={{
            transition: 'opacity 400ms ease 0s, transform 400ms ease 0s',
            transform: 'none',
            opacity: 1,
          }}
        >
          <div className="common-container">
            <div className="mb-4 mb-lg-5 container">
              <div className="row">
                <div className="px-0 col-12">
                  <img
                    src="https://ik.imagekit.io/bayc/assets/pets-welcome.png"
                    className="img-fluid d-flex w-50 mx-auto my-5"
                    useMap="#mutant"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 container">
              <div className="mb-5 row">
                <div className="mb-4 mb-lg-0 col-lg-7 col-12">
                  <h1 className="common-title mb-3">
                    BORED APE KENNEL
                    <br />
                    CLUB ADOPTION DRIVE
                  </h1>
                  <p className="common-p">
                    It gets lonely in the swamp sometimes. That's why every ape
                    should have a four-legged companion. To curl up at your
                    feet. To bring you a beer. To fire a missile launcher at
                    that fucking monkey Jimmy.
                  </p>
                  <p className="common-p mb-0">
                    That's why we've started the Bored Ape Kennel Club, and why
                    we're offering up a dog for adoption to every single member
                    of the BAYC – for free (you only pay gas).
                  </p>
                </div>
                <div className="col-lg-5 col-12">
                  <img
                    src="https://ik.imagekit.io/bayc/assets/shibatron.jpg"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
              <div className="mb-5 row">
                <div className="mb-4 mb-lg-0 col-lg-7 col-12">
                  <h2 className="d-flex common-sub-title font-italic mb-2 bayc-color">
                    LIMITED-TIME ONLY
                  </h2>
                  <p className="common-p">
                    For one week, each and every club member will be able to
                    adopt a Club Dog NFT from the Bored Ape Kennel Club.
                    Claiming the token is free; you'll only have to pay gas.
                  </p>
                  <p className="common-p">
                    These pups are not for sale. The only way to adopt one is to
                    claim it by having a Bored Ape in your wallet. You can claim
                    one random Club Dog for each Bored Ape you own. Once a dog
                    has been claimed by a Bored Ape, that token cannot be used
                    to claim another canine again.
                  </p>
                  <p className="common-p">
                    At the time of minting, the dogs will be unrevealed. After
                    one week, at 6pm EST on June 25th, the adoption drive will
                    come to a close. A randomized starting index will be set,
                    and everyone will be able to meet their companion.
                  </p>
                  <p className="common-p mb-0">
                    The unclaimed dogs? They'll be released into the swamp,
                    never to be seen again.
                  </p>
                </div>
                <div className="my-auto my-lg-0 col-lg-5 col-12 order-lg-first">
                  <Carousel autoplay>
                    <div className="slide">
                      <img
                        src="https://ik.imagekit.io/bayc/assets/shiba5.jpg"
                        className="img-fluid"
                      />
                    </div>
                    <div className="slide">
                      <img
                        src="https://ik.imagekit.io/bayc/assets/shiba1.jpg"
                        className="img-fluid"
                      />
                    </div>
                    <li className="slide selected">
                      <img
                        src="https://ik.imagekit.io/bayc/assets/shiba2.jpg"
                        className="img-fluid"
                      />
                    </li>
                    <div className="slide">
                      <img
                        src="https://ik.imagekit.io/bayc/assets/shiba3.jpg"
                        className="img-fluid"
                      />
                    </div>
                    <div className="slide">
                      <img
                        src="https://ik.imagekit.io/bayc/assets/shiba4.jpg"
                        className="img-fluid"
                      />
                    </div>
                    <div className="slide">
                      <img
                        src="https://ik.imagekit.io/bayc/assets/shiba5.jpg"
                        className="img-fluid"
                      />
                    </div>
                    <div className="slide">
                      <img
                        src="https://ik.imagekit.io/bayc/assets/shiba1.jpg"
                        className="img-fluid"
                      />
                    </div>
                  </Carousel>
                </div>
              </div>
              <div className="mb-5 row">
                <div className="mb-4 mb-lg-0 col-lg-7 col-12">
                  <div className="mb-5">
                    <h2 className="d-flex common-sub-title font-italic mb-2 bayc-color">
                      CHARITABLE CONTRIBUTIONS
                    </h2>
                    <p className="common-p">
                      The BAKC collection will have a 2.5% royalty fee
                      associated with secondary sales on OpenSea. All proceeds
                      we generate from this fee will be donated to charity.
                      We're looking at several no-kill animal shelters to donate
                      to, and intend to donate via{' '}
                      <a
                        href="https://www.thegivingblock.com/donate/Wright-Way-Rescue"
                        className="link"
                      >
                        The Giving Block
                      </a>
                      . The first donation would be to{' '}
                      <a href="https://wright-wayrescue.org/" className="link">
                        Wright-Way Rescue
                      </a>
                      . After six weeks, we'll remove the 2.5% fee from OpenSea
                      entirely.
                    </p>
                    <p className="common-p mb-0">
                      Let's rescue some pooches, apes.
                    </p>
                  </div>
                  <div className="mb-0">
                    <h2 className="d-flex common-sub-title font-italic mb-2 bayc-color">
                      SPECS
                    </h2>
                    <p className="common-p mb-0">
                      There are 10,000 total Bored Ape Kennel Club NFTs. Each
                      BAKC dog is stored as an ERC-721 token on the Ethereum
                      blockchain and hosted on IPFS. Every dog in the kennel
                      club is unique and programmatically-generated from over
                      170 possible traits. Some traits are rarer than others.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 col-12">
                  <img
                    src="https://ik.imagekit.io/bayc/assets/mystery-shiba.gif"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
              <hr className="gray-line mb-5" />
              <div className="mb-5 row">
                <div className="col-12">
                  <div className="d-flex justify-content-center col">
                    <div
                      className="MuiPaper-root MuiCard-root jss13 MuiPaper-outlined MuiPaper-rounded"
                      style={{
                        opacity: 1,
                        transform: 'none',
                        transition:
                          'opacity 304ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 202ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                      }}
                    >
                      <div className="MuiCardContent-root">
                        <h2 className="d-flex justify-content-center common-sub-title">
                          JOIN THE CLUB
                        </h2>
                        <hr className="white-line" />
                        <div>
                          <p className="common-p text-break mb-3">
                            The adoption drive has come to a close. To get your
                            Club Dog, check out the collection on OpenSea.
                          </p>
                        </div>
                        <div className="d-flex justify-content-center">
                          <a href="https://opensea.io/collection/bored-ape-kennel-club">
                            <button className="bayc-button " type="button">
                              BUY A DOG ON OPENSEA
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="gray-line mb-5" />
              <div className="mb-5 row">
                <div className="col-12">
                  <h1 className="common-title mb-3">FAQ</h1>
                  <div className="MuiPaper-root MuiAccordion-root MuiAccordion-rounded MuiPaper-elevation1 MuiPaper-rounded">
                    <div
                      className="MuiButtonBase-root MuiAccordionSummary-root"
                      tabIndex={0}
                      role="button"
                      aria-disabled="false"
                      aria-expanded="false"
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className="MuiAccordionSummary-content">
                        <p className="common-p bold-text mb-0">
                          What was the inspiration behind the Bored Ape Kennel
                          Club?
                        </p>
                      </div>
                      <div
                        className="MuiButtonBase-root MuiIconButton-root MuiAccordionSummary-expandIcon MuiIconButton-edgeEnd"
                        aria-disabled="false"
                        aria-hidden="true"
                        onClick={() => {
                          if (faqindex == 0) {
                            setFaqindex(-1);
                          } else {
                            setFaqindex(0);
                          }
                        }}
                      >
                        <span className="MuiIconButton-label">
                          <svg
                            className="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                          </svg>
                        </span>
                        <span className="MuiTouchRipple-root"></span>
                      </div>
                    </div>
                    <div
                      className={`MuiCollapse-container ${
                        faqindex == 0
                          ? 'MuiCollapse-entered'
                          : 'MuiCollapse-hidden'
                      }`}
                      style={{
                        minHeight: '0px',
                        height: faqindex == 0 ? 'auto' : '0px',
                        transitionDuration: '245ms',
                      }}
                    >
                      <div className="MuiCollapse-wrapper">
                        <div className="MuiCollapse-wrapperInner">
                          <div
                            aria-labelledby="panel1a-header"
                            id="panel1a-content"
                            role="region"
                          >
                            <div className="MuiAccordionDetails-root">
                              <p className="common-p font-italic bayc-color">
                                We wanted to give our members something fun and
                                unexpected while we work on the treasure hunt
                                and mutant-breeding.
                              </p>
                              <p className="common-p mb-0 font-italic bayc-color">
                                Plus, we just love dogs.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="MuiPaper-root MuiAccordion-root MuiAccordion-rounded MuiPaper-elevation1 MuiPaper-rounded">
                    <div
                      className="MuiButtonBase-root MuiAccordionSummary-root"
                      tabIndex={0}
                      role="button"
                      aria-disabled="false"
                      aria-expanded="false"
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className="MuiAccordionSummary-content">
                        <p className="common-p bold-text mb-0">
                          Will you be releasing more dogs after this?
                        </p>
                      </div>
                      <div
                        className="MuiButtonBase-root MuiIconButton-root MuiAccordionSummary-expandIcon MuiIconButton-edgeEnd"
                        aria-disabled="false"
                        aria-hidden="true"
                        onClick={() => {
                          if (faqindex == 1) {
                            setFaqindex(-1);
                          } else {
                            setFaqindex(1);
                          }
                        }}
                      >
                        <span className="MuiIconButton-label">
                          <svg
                            className="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                          </svg>
                        </span>
                        <span className="MuiTouchRipple-root"></span>
                      </div>
                    </div>
                    <div
                      className={`MuiCollapse-container ${
                        faqindex == 1
                          ? 'MuiCollapse-entered'
                          : 'MuiCollapse-hidden'
                      }`}
                      style={{
                        minHeight: '0px',
                        height: faqindex == 1 ? 'auto' : '0px',
                        transitionDuration: '245ms',
                      }}
                    >
                      <div className="MuiCollapse-wrapper">
                        <div className="MuiCollapse-wrapperInner">
                          <div
                            aria-labelledby="panel1a-header"
                            id="panel1a-content"
                            role="region"
                          >
                            <div className="MuiAccordionDetails-root">
                              <p className="common-p mb-0 font-italic bayc-color">
                                No, there will be no future Club Dog drops.
                                These are the only BAKC dogs that will ever
                                exist, and once the adoption drive has ended, it
                                will no longer be possible to claim one.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="MuiPaper-root MuiAccordion-root MuiAccordion-rounded MuiPaper-elevation1 MuiPaper-rounded">
                    <div
                      className="MuiButtonBase-root MuiAccordionSummary-root"
                      tabIndex={0}
                      role="button"
                      aria-disabled="false"
                      aria-expanded="false"
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className="MuiAccordionSummary-content">
                        <p className="common-p bold-text mb-0">
                          Why didn't you make these profile pictures?
                        </p>
                      </div>
                      <div
                        className="MuiButtonBase-root MuiIconButton-root MuiAccordionSummary-expandIcon MuiIconButton-edgeEnd"
                        aria-disabled="false"
                        aria-hidden="true"
                        onClick={() => {
                          if (faqindex == 2) {
                            setFaqindex(-1);
                          } else {
                            setFaqindex(2);
                          }
                        }}
                      >
                        <span className="MuiIconButton-label">
                          <svg
                            className="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                          </svg>
                        </span>
                        <span className="MuiTouchRipple-root"></span>
                      </div>
                    </div>
                    <div
                      className={`MuiCollapse-container ${
                        faqindex == 2
                          ? 'MuiCollapse-entered'
                          : 'MuiCollapse-hidden'
                      }`}
                      style={{
                        minHeight: '0px',
                        height: faqindex == 2 ? 'auto' : '0px',
                        transitionDuration: '245ms',
                      }}
                    >
                      <div className="MuiCollapse-wrapper">
                        <div className="MuiCollapse-wrapperInner">
                          <div
                            aria-labelledby="panel1a-header"
                            id="panel1a-content"
                            role="region"
                          >
                            <div className="MuiAccordionDetails-root">
                              <p className="common-p mb-0 font-italic bayc-color">
                                We wanted to keep a separation between the
                                profile picture avatar of the Bored Ape and
                                anything else we make. Your Bored Ape is your
                                BAYC club membership and can serve as your
                                digital identity; these dogs are companions.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 row">
                <div className="col-12">
                  <div className="d-flex justify-content-center">
                    <p className="common-p text-center text-break mb-0">
                      <span className="bold-text">
                        VERIFIED SMART CONTRACT ADDRESS:{' '}
                      </span>
                      <a
                        title="0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623"
                        href="https://etherscan.io/address/0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623"
                        className="link"
                      >
                        0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
