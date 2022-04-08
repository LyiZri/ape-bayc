import './index.less';
import Nav from '@/compontent/nav';
interface Props {}
const Home: React.FC<Props> = (props) => {
  return (
    <div className="home">
      <Nav navId="1" />
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
                    src="https://ik.imagekit.io/bayc/assets/bayc-mutant-hero.jpg"
                    className="img-fluid px-0"
                    useMap="#mutant"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 mt-md-4 container">
              <div className="mb-5 row">
                <div className="col">
                  <div className="mb-4 row">
                    <div className="mb-4 col-lg-7 col-12">
                      <h1 className="d-flex font-italic welcome-title mb-3">
                        WELCOME TO THE
                        <br />
                        BORED APE YACHT CLUB
                      </h1>
                      <p className="common-p mb-0">
                        BAYC is a collection of 10,000 Bored Ape NFTs—unique
                        digital collectibles living on the Ethereum blockchain.
                        Your Bored Ape doubles as your Yacht Club membership
                        card, and grants access to members-only benefits, the
                        first of which is access to THE BATHROOM, a
                        collaborative graffiti board. Future areas and perks can
                        be unlocked by the community through roadmap activation.
                      </p>
                    </div>
                    <div className="my-lg-auto col-lg-4 col-12 offset-lg-1">
                      <div className="common-container">
                        <div className="row">
                          <div className="pb-2 pr-2 col-6">
                            <img
                              className="img-fluid"
                              src="https://ik.imagekit.io/bayc/assets/ape1.png"
                              alt="ape1"
                              aria-label="ape1"
                            />
                          </div>
                          <div className="pb-2 pl-2 col-6">
                            <img
                              className="img-fluid"
                              src="https://ik.imagekit.io/bayc/assets/ape2.png"
                              alt="ape2"
                              aria-label="ape2"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="pt-2 pr-2 col-6">
                            <img
                              className="img-fluid"
                              src="https://ik.imagekit.io/bayc/assets/ape3.png"
                              alt="ape3"
                              aria-label="ape3"
                            />
                          </div>
                          <div className="pt-2 pl-2 col-6">
                            <img
                              className="img-fluid"
                              src="https://ik.imagekit.io/bayc/assets/ape4.png"
                              aria-label="ape4"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-3 col-12">
                      <h3 className="fair-title">FAIR DISTRIBUTION</h3>
                      <h4 className="ponzi">(BONDING CURVES ARE A PONZI)</h4>
                    </div>
                    <div className="mb-2 mb-lg-0 col-lg-7 col-12">
                      <p className="common-p mb-lg-0">
                        There are no bonding curves here. Buying a Bored Ape
                        costs 0.08 ETH. There are no price tiers; BAYC
                        membership costs the same for everyone.
                      </p>
                    </div>
                    <div className="col-lg-4 col-12 offset-lg-1">
                      <p className="note text-justify mb-0">
                        Note: Thirty apes are being withheld from the sale.
                        These will be used for giveaways, puzzle rewards—and for
                        the creators' BAYC memberships.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 row">
                <div className="col">
                  <div id="buy-an-ape" className="buy-token-container">
                    <div className="bayc-bg p-4 m-auto row">
                      <div className="m-auto col-lg-3 col-12">
                        <h3 className="buy-ape-title">BUY AN APE</h3>
                      </div>
                      <div className="m-auto col-lg-4 col-12 offset-lg-1">
                        <p className="common-p mb-lg-0">
                          The initial sale has sold out. To get your Bored Ape,
                          check out the collection on OpenSea.
                        </p>
                      </div>
                      <div className="m-auto col-lg-3 col-12 offset-lg-1">
                        <a href="https://opensea.io/collection/boredapeyachtclub">
                          <button className="bayc-button-mint" type="button">
                            BUY AN APE ON OPENSEA
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="gray-line mb-5" />
              <div className="mb-5 row">
                <div className="col">
                  <div className="common-container">
                    <div className="row">
                      <div className="mb-3 col-lg-7 col-12">
                        <h2 className="common-title mb-3">THE SPECS</h2>
                        <p className="common-p">
                          Each Bored Ape is unique and programmatically
                          generated from over 170 possible traits, including
                          expression, headwear, clothing, and more. All apes are
                          dope, but some are rarer than others.
                          <br />
                          <br />
                          The apes are stored as ERC-721 tokens on the Ethereum
                          blockchain and hosted on IPFS. (
                          <a className="link" href="#/provenance">
                            See Record and Proof.
                          </a>
                          ) Purchasing an ape costs 0.08 ETH.
                          <br />
                          <br />
                          To access members-only areas such as&nbsp;
                          <a className="link" href="#/bathroom">
                            THE BATHROOM
                          </a>
                          , Apeholders will need to be signed into their
                          Metamask Wallet.
                        </p>
                      </div>
                      <div className="my-auto col-lg-4 col-12 offset-lg-1">
                        <img
                          className="img-fluid w-100"
                          src="https://ik.imagekit.io/bayc/assets/mystery-ape.gif"
                          alt="mystery token"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="gray-line mb-5" />
              <div className="mb-5 row">
                <div className="col">
                  <div className="row">
                    <div className="mb-3 col-lg-9 col-12">
                      <h2 className="common-title mb-3">WELCOME TO THE CLUB</h2>
                      <p className="common-p">
                        When you buy a Bored Ape, you’re not simply buying an
                        avatar or a provably-rare piece of art. You are gaining
                        membership access to a club whose benefits and offerings
                        will increase over time. Your Bored Ape can serve as
                        your digital identity, and open digital doors for you.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="mx-auto col-md-2 col-12">
                      <div className="mb-4 mb-md-0 row">
                        <div className="d-flex m-auto align-items-md-center icon-container col-md-12 col-3">
                          <img
                            className="img-fluid m-auto"
                            src="https://ik.imagekit.io/bayc/assets/icon1.png"
                            alt="petrified monkey paw"
                            width="100px"
                          />
                        </div>
                        <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
                          <p className="mb-0 common-sub-p text-md-center">
                            10,000 Provably-rare Bored Ape tokens
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mx-auto col-md-2 col-12">
                      <div className="mb-4 mb-md-0 row">
                        <div className="d-flex m-auto align-items-md-center icon-container col-md-12 col-3">
                          <img
                            className="img-fluid m-auto"
                            src="https://ik.imagekit.io/bayc/assets/icon2.png"
                            alt="tiki monkey"
                            width="100px"
                          />
                        </div>
                        <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
                          <p className="mb-0 common-sub-p text-md-center">
                            Fair Launch, fair distribution: All apes cost 0.08
                            ETH
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mx-auto col-md-2 col-12">
                      <div className="mb-4 mb-md-0 row">
                        <div className="d-flex m-auto align-items-md-center icon-container col-md-12 col-3">
                          <img
                            className="img-fluid m-auto"
                            src="https://ik.imagekit.io/bayc/assets/icon3.png"
                            alt="captain monkey"
                            width="100px"
                          />
                        </div>
                        <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
                          <p className="mb-0 common-sub-p text-md-center">
                            Ownership and commercial usage rights given to the
                            consumer over their NFT
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mx-auto col-md-2 col-12">
                      <div className="mb-4 mb-md-0 row">
                        <div className="d-flex m-auto align-items-md-center icon-container col-md-12 col-3">
                          <img
                            className="img-fluid m-auto"
                            src="https://ik.imagekit.io/bayc/assets/icon4.png"
                            alt="beer bottles"
                            width="100px"
                          />
                        </div>
                        <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
                          <p className="mb-0 common-sub-p text-md-center">
                            The Bathroom: A member's-only graffiti board
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mx-auto col-md-2 col-12">
                      <div className=" mb-md-0 row">
                        <div className="d-flex m-auto align-items-md-center icon-container col-md-12 col-3">
                          <img
                            className="img-fluid m-auto"
                            src="https://ik.imagekit.io/bayc/assets/icon5.png"
                            alt="mermonkey"
                            width="100px"
                          />
                        </div>
                        <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
                          <p className="mb-0 common-sub-p text-md-center">
                            Gain additional benefits through roadmap activations
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="gray-line mb-5" />
              <div className="mb-5 row">
                <div className="col">
                  <div className="common-container">
                    <div className="row">
                      <div className="mb-5 mb-lg-0 col-lg-9 col-12">
                        <h2 className="common-title mb-3">THE BATHROOM</h2>
                        <p className="common-p">
                          The BAYC Bathroom will become operational once the
                          presale period is over. It contains a canvas
                          accessible only to wallets containing at least one
                          ape. Like any good dive bar bathroom, this is the
                          place to draw, scrawl, or write expletives.
                        </p>
                        <p className="common-p">
                          Each ape-holder will be able to paint a pixel on the
                          bathroom wall every fifteen minutes. Think of it as a
                          collaborative art experiment for the cryptosphere. A
                          members-only canvas for the discerning minds of crypto
                          twitter.
                        </p>
                        <p className="common-p mb-0">
                          We're pretty sure it's going to be full of dicks.
                        </p>
                      </div>
                      <div className="d-flex col-lg-3 col-12">
                        <img
                          className="toilet m-auto"
                          src="https://ik.imagekit.io/bayc/assets/toilet.png"
                          alt="bayc toilet"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="gray-line mb-5" />
              <div className="mb-5 row">
                <div className="col">
                  <div id="roadmap" className="common-container">
                    <div className="row">
                      <div className="mb-3 col-lg-9 col-12">
                        <h2 className="common-title mb-3">
                          ROADMAP ACTIVATIONS
                        </h2>
                        <p className="common-p">
                          We’re in this for the long haul.
                        </p>
                        <p className="common-p">
                          We’ve set up some goalposts for ourselves. Once we hit
                          a target sell through percentage, we will begin to
                          work on realizing the stated goal.
                        </p>
                      </div>
                      <div className="mb-3 mb-md-0 col-lg-8 col-12">
                        <div className="mb-3 mb-lg-1 row">
                          <div className="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                            <p className="goal">10%</p>
                          </div>
                          <div className="m-auto col-lg-10 col-9">
                            <p className="text-decoration-line-through common-sub-p">
                              We pay back our moms.
                            </p>
                          </div>
                        </div>
                        <div className="mb-3 mb-lg-1 row">
                          <div className="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                            <p className="goal">20%</p>
                          </div>
                          <div className="m-auto col-lg-10 col-9">
                            <p className="text-decoration-line-through common-sub-p">
                              We release the Caged Apes. 5 Caged Apes (tokens
                              held back from the sale) are airdropped to random
                              Apeholders.
                            </p>
                          </div>
                        </div>
                        <div className="mb-3 mb-lg-1 row">
                          <div className="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                            <p className="goal">40%</p>
                          </div>
                          <div className="m-auto col-lg-10 col-9">
                            <p className="text-decoration-line-through common-sub-p">
                              BAYC gets its own YouTube channel, BAYC LoFi Radio
                              - Beats to Ape into Shitcoins To.
                            </p>
                          </div>
                        </div>
                        <div className="mb-3 mb-lg-1 row">
                          <div className="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                            <p className="goal">60%</p>
                          </div>
                          <div className="m-auto col-lg-10 col-9">
                            <p className="text-decoration-line-through common-sub-p">
                              Member-Exclusive BAYC Merch Store gets unlocked,
                              featuring Limited Edition tees, hoodies, and other
                              goodies.
                            </p>
                          </div>
                        </div>
                        <div className="mb-3 mb-lg-1 row">
                          <div className="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                            <p className="goal">80%</p>
                          </div>
                          <div className="m-auto col-lg-10 col-9">
                            <p className="text-decoration-line-through common-sub-p">
                              The clubhouse image becomes interactive and the
                              Mysterious Note becomes legible, beginning a
                              treasure hunt. The first to solve the mystery will
                              be rewarded 5 ETH and a Bored Ape.
                            </p>
                          </div>
                        </div>
                        <div className="mb-3 mb-lg-1 row">
                          <div className="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                            <p className="goal">90%</p>
                          </div>
                          <div className="m-auto col-lg-10 col-9">
                            <p className="text-decoration-line-through common-sub-p">
                              The Bored Ape liquidity pool is initiated.
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                            <p className="goal">100%</p>
                          </div>
                          <div className="m-auto col-lg-10 col-9">
                            <p className="text-decoration-line-through common-sub-p">
                              The Mutant Ape (NFT Breeding) Arcade Machine gets
                              ﬁxed. And we cook up new ways to ape with our
                              friends.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="shirt-container mx-auto mb-5 my-lg-auto col-lg-3 col-12 offset-lg-1">
                        <img
                          className="shirt-mask"
                          src="https://ik.imagekit.io/bayc/assets/shirt.png"
                          alt="shirt"
                        />
                        <img
                          className="shirt"
                          src="https://ik.imagekit.io/bayc/assets/shirt.png"
                          alt="shirt"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="gray-line mb-5" />
              <div className="mb-5 row">
                <div className="col">
                  <div className="row">
                    <div className="mb-4 mb-lg-0 col-lg-8 col-12">
                      <h2 className="common-title mb-3">COMMUNITY TOOLS</h2>
                      <p className="common-p mb-0">
                        Here are some helpful tools created by the Bored Ape
                        Yacht Club community. Please note that these are
                        unofficial in nature. Every assignment of an ape's
                        overall value or rarity is inherently subjective.
                      </p>
                    </div>
                    <div className="m-lg-auto col-lg-3 col-12 offset-lg-1">
                      <div className="d-flex row">
                        <div className="mb-3 mx-auto col-lg-12 col-md-6 col-sm-12">
                          <a href="https://nftexp.io/explore/bored-ape-yacht-club">
                            <button className="bayc-button w-100" type="button">
                              NFTEXP.IO
                            </button>
                          </a>
                        </div>
                        <div className="mx-auto col-lg-12 col-md-6 col-sm-12">
                          <a href="https://rarity.tools/boredapeyachtclub">
                            <button className="bayc-button w-100" type="button">
                              RARITY.TOOLS
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
                <div className="col">
                  <div id="team" className="common-container">
                    <div className="row">
                      <div className="mb-3 col-lg-7 col-12">
                        <h2 className="common-title mb-3">THE TEAM</h2>
                        <p className="common-p">
                          BAYC was created by four friends who set out to make
                          some dope apes, test our skills, and try to build
                          something (ridiculous).
                        </p>
                        <p className="common-p">
                          <span className="bayc-color bold-text">
                            GARGAMEL.
                          </span>{' '}
                          <span className="font-italic">
                            STARCRAFT OBSESSED. EATS SMURFS.
                          </span>
                        </p>
                        <p className="common-p">
                          <span className="bayc-color bold-text">
                            GORDON GONER.
                          </span>{' '}
                          <span className="font-italic">
                            REFORMED LEVERAGE ADDICT.
                          </span>
                        </p>
                        <p className="common-p">
                          <span className="bayc-color bold-text">
                            EMPEROR TOMATO KETCHUP.
                          </span>{' '}
                          <span className="font-italic">
                            SPENT ALL THEIR MONEY ON FIRST PRESSES AND PET-NAT.
                          </span>
                        </p>
                        <p className="common-p">
                          <span className="bayc-color bold-text">NO SASS.</span>{' '}
                          <span className="font-italic">
                            {' '}
                            HERE FOR THE APES. NOT FOR THE SASS.
                          </span>
                        </p>
                      </div>
                      <div className="col-lg-4 col-12 offset-lg-1">
                        <div className="common-container">
                          <div className="row">
                            <div className="pb-2 pr-2 col-6">
                              <img
                                className="img-fluid"
                                src="https://ik.imagekit.io/bayc/assets/garga.png"
                                alt="garga"
                                aria-label="garga"
                              />
                            </div>
                            <div className="pb-2 pl-2 col-6">
                              <img
                                className="img-fluid"
                                src="https://ik.imagekit.io/bayc/assets/gordy.png"
                                alt="gordy"
                                aria-label="gordy"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="pt-2 pr-2 col-6">
                              <img
                                className="img-fluid"
                                src="https://ik.imagekit.io/bayc/assets/tomato.png"
                                alt="tomato"
                                aria-label="tomato"
                              />
                            </div>
                            <div className="pt-2 pl-2 col-6">
                              <img
                                className="img-fluid"
                                src="https://ik.imagekit.io/bayc/assets/sass.png"
                                aria-label="sass"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 row">
                <div className="col">
                  <div className="d-flex justify-content-center">
                    <p className="common-p text-center text-break mb-0">
                      <span className="bold-text">
                        VERIFIED SMART CONTRACT ADDRESS:{' '}
                      </span>
                      <a
                        title="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
                        href="https://etherscan.io/address/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
                        className="link"
                      >
                        0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D
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
export default Home;
