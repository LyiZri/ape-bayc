import Nav from '@/compontent/nav';
import './index.less'
interface Props {}

const Page: React.FC<Props> = (props) => {
  return (
    <div>
      <Nav navId="6" mayc={true}></Nav>
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
                  src="https://ik.imagekit.io/bayc/assets/mayc-hero.jpg"
                  className="img-fluid px-0"
                  useMap="#mutant"
                />
              </div>
            </div>
          </div>
          <div className="px-4 mt-md-4 container">
            <div className="mb-5  row">
              <div className="mb-5 mb-lg-0 col-lg-7 col-12">
                <h1 className="common-title mb-3">THE MAYC</h1>
                <p className="common-p  text-justify">
                  The MUTANT APE YACHT CLUB is a collection of up to 20,000
                  Mutant Apes that can only be created by exposing an existing
                  Bored Ape to a vial of MUTANT SERUM or by minting a Mutant Ape
                  in the public sale.
                </p>
                <p className="common-p text-justify">
                  The MAYC is a way to reward our ape holders with an entirely
                  new NFT—a “mutant” version of their ape—while also allowing
                  newcomers into the BAYC ecosystem at a lower tier of
                  membership. Mutants represent the final tier of membership;
                  everything going forward occurs with the intention of accruing
                  utility and member’s-only benefits to Bored Apes foremost, but
                  also Mutants, and to a lesser extent, Bored Apes with BAKC
                  companions.{' '}
                </p>
                <p className="common-p text-justify mb-0">
                  <a className="link" href="#/mayc/info">
                    Click here to learn more about our thought process behind
                    the MAYC drop.
                  </a>
                </p>
              </div>
              <div className="my-lg-auto col-lg-4 col-12 offset-lg-1">
                <div className="common-container">
                  <div className="row">
                    <div className="pb-2 pr-2 col-6">
                      <img
                        className="img-fluid"
                        src="https://ik.imagekit.io/bayc/assets/mutant-1.png"
                        alt="mutant-1"
                        aria-label="mutant-1"
                      />
                    </div>
                    <div className="pb-2 pl-2 col-6">
                      <img
                        className="img-fluid"
                        src="https://ik.imagekit.io/bayc/assets/mutant-2.png"
                        alt="mutant-2"
                        aria-label="mutant-2"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="pt-2 pr-2 col-6">
                      <img
                        className="img-fluid"
                        src="https://ik.imagekit.io/bayc/assets/mutant-3.png"
                        alt="mutant-3"
                        aria-label="mutant-3"
                      />
                    </div>
                    <div className="pt-2 pl-2 col-6">
                      <img
                        className="img-fluid"
                        src="https://ik.imagekit.io/bayc/assets/mutant-4.png"
                        aria-label="mutant-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="gray-line mb-5" />
            <div className="mb-5  row">
              <div className="col-12">
                <h1 className="common-title mb-3">
                  SERUMS <span className="bayc-color">(FOR BAYC MEMBERS)</span>
                </h1>
              </div>
              <div className="mb-4 mb-lg-5 col-lg-7 col-12">
                <p className="common-p">
                  One way to create a MUTANT is when a Bored Ape ingests a vial
                  of mutant serum. There are three tiers of mutant serum vials:
                  M1, M2, and Mega Mutant (M3). A snapshot of all Bored Ape
                  token holders was taken at 4pm ET on 8/28/21, and all mutant
                  serums that will exist have been airdropped at a random
                  distribution to corresponding wallets.
                </p>
                <p className="common-p">
                  If a Bored Ape ingests an M1 or M2 serum, the resulting MUTANT
                  will retain traits of the original ape.
                </p>
                <p className="common-p mb-0">
                  If a Bored Ape ingests an M3 serum? Who knows.
                </p>
              </div>
              <div className="mb-5 mb-lg-0 col-lg-4 col-12 offset-lg-1">
                <p className="common-sub-p font-italic mb-0">
                  <span className="bayc-color bold-text">NOTE:</span> Serum
                  vials are burned upon use, and a Bored Ape can only ingest a
                  serum of a given vial-type once. This means that any given
                  Bored Ape can be exposed to an M1, M2, or M3 vial, resulting
                  in three different mutations of that Bored Ape. Vials are
                  nasty stuff however. An ape will never ingest a vial of a
                  given type after it has consumed one before.
                </p>
              </div>
              <div className="col-lg-6 col-12 order-lg-2">
                <div className="row">
                  <div className="col-lg-6 col-6 order-lg-2 offset-lg-0 offset-3">
                    <img
                      className="img-fluid"
                      src="https://ik.imagekit.io/bayc/assets/curtis.png"
                      alt=""
                    />
                    <p className="mt-2 mb-0 text-center">Curtis</p>
                  </div>
                  <div className="my-lg-3 d-lg-flex justify-content-center align-items-center col-lg-3 col-3 offset-lg-0 offset-2">
                    <div className="mb-4 m-lg-4 sw">
                      <span className="m_scroll_arrows_down first mx-auto"></span>
                      <span className="m_scroll_arrows_down second mx-auto"></span>
                      <span className="m_scroll_arrows_down third mx-auto"></span>
                    </div>
                  </div>
                  <div className="my-lg-3 d-lg-flex justify-content-center align-items-center col-lg-3 col-3 order-lg-3 offset-lg-0 offset-2">
                    <div className="mb-4 m-lg-4 se">
                      <span className="m_scroll_arrows_down first mx-auto"></span>
                      <span className="m_scroll_arrows_down second mx-auto"></span>
                      <span className="m_scroll_arrows_down third mx-auto"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 order-lg-1">
                <img
                  className="img-fluid"
                  src="https://ik.imagekit.io/bayc/assets/curtis-m1.png"
                  alt=""
                />
                <p className="mt-2 mb-0 text-center">M1 Curtis</p>
              </div>
              <div className="col-lg-3 col-6 order-lg-3">
                <img
                  className="img-fluid"
                  src="https://ik.imagekit.io/bayc/assets/curtis-m2-new.png"
                  alt=""
                />
                <p className="mt-2 mb-0 text-center">M2 Curtis</p>
              </div>
            </div>
            <hr className="gray-line mb-5" />
            <div className="mb-5  row">
              <div className="mb-5 mb-lg-0 col-lg-7 col-12 order-lg-last">
                <h1 className="common-title mb-3">
                  DISTRIBUTION &amp; PRICING
                </h1>
                <p className="common-p text-justify">
                  A total of 10,000 Mutant Serums have been airdropped to all
                  BAYC token holders.
                </p>
                <p className="common-p text-justify">
                  10,000 Mutant Apes will be available to mint in a public Dutch
                  Auction. The price to mint a Mutant will start 3 ETH, and
                  gradually reduce to .01 ETH over the course of 9 hours. This
                  is to allow the community to set a fair starting price and,
                  hopefully, avoid any gas war.
                </p>
                <p className="common-p text-justify">
                  At the time of minting, Mutant Apes will be unrevealed. Once
                  the public sale has concluded, a randomized starting index
                  will be set and all Mutant Apes will be revealed. This is to
                  prevent anyone, including the founders, from knowing which
                  mutant will be minted during the sale.
                </p>
                <p className="common-p text-justify mb-0">
                  After the starting index is set and the mutants are revealed,
                  BAYC members will be able to begin mutating their apes with
                  serums here on the site.
                </p>
              </div>
              <div className="mb-0 my-lg-auto col-lg-5 col-12 offset-lg-0">
                <img
                  src="https://ik.imagekit.io/bayc/assets/mystery-serums.gif"
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <hr className="gray-line mb-5" />
            <div className="mb-5  row">
              <div className="mb-5 mb-lg-0 col-lg-7 col-12">
                <h1 className="common-title mb-3">
                  MUTATION{' '}
                  <span className="bayc-color">(FOR BAYC MEMBERS)</span>
                </h1>
                <p className="common-p text-justify">
                  BAYC token holders will be able to begin applying their
                  airdropped serums to their Bored Apes upon completion of the
                  public sale. The exact time will be announced on Twitter (
                  <a href="https://twitter.com/BoredApeYC" className="link">
                    @BoredapeYC
                  </a>
                  ) and in our{' '}
                  <a href="https://discord.gg/3P5K3dzgdB" className="link">
                    Discord
                  </a>
                  . Applying a serum to a Bored Ape will burn that serum, and
                  result in a MUTANT NFT which may retain aspects of the
                  original Bored Ape. The Bored Ape NFT will not be harmed.
                </p>
                <p className="common-p bold-text text-justify">
                  THERE IS NO SET TIME LIMIT FOR APPLYING SERUMS.
                </p>
                <p className="common-p text-justify mb-0">
                  Remember, a Bored Ape can only be mutated via a vial of a
                  certain type once. We will introduce a method for checking
                  whether a Bored Ape has been exposed to a given vial type.
                </p>
              </div>
              <div className="my-auto col-lg-5 col-12 offset-lg-0">
                <img
                  src="https://ik.imagekit.io/bayc/assets/serum-machine.gif"
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <hr className="gray-line mb-5" />
            <div className="mb-5  row">
              <div className="col-lg-9 col-12 order-lg-1">
                <h1 className="common-title mb-3">THE MUTANT ARCADE</h1>
                <p className="common-p">
                  The BAYC's founder, Curtis, inherited the land that the club
                  sits on years ago. And when the idea came to him to create a
                  secret club for apes, the little plot in the swamp made sense.
                  On the grounds was a crumbling shed (now repurposed into the
                  outhouse), where some old fishing gear, tools, and mostly junk
                  was stored. But amid all the scrap was something else: THE
                  MUTANT APE. A busted arcade machine.
                </p>
                <p className="common-p">
                  When Curtis plugged it in, the screen just snowed white. But
                  he decided to set it up in the back of the bar anyway, and
                  post an "Out of Order" sign for the moment. He'd get to fixing
                  it.
                </p>
                <p className="common-p">
                  It’s a strange machine, and kind of a piece of shit. Some kind
                  of prototype from an arcade company that went south long ago.
                  Curtis gave up quickly on the idea of trying to source any
                  kind official parts for it, but was able to make some headway
                  by rigging the internals with items from behind the bar.
                  Slowly but surely the fuzz on the screen cleared, and, a
                  tingle ran down Curtis’ spine.
                </p>
                <p className="common-p bold-text font-italic">
                  That looks just like me.
                </p>
                <p className="common-p">
                  Jimmy the Monkey must have been fucking with the machine this
                  whole time. That was the only explanation. The monkey had
                  somehow figured out how to make Curtis into the protagonist of
                  this game taking place in a BAYC-inspired sewer-world. “MAYC”,
                  that’s what the life preserver in this underground bar said.
                  It was like looking into a house of mirrors.
                </p>
                <p className="common-p">
                  You had to hand it to Jimmy. The monkey had a strange way of
                  getting his kicks.
                </p>
                <p className="common-p">
                  Curtis played the game through, of course. It took him twenty
                  fucking tries to just get to the second stage. You had to
                  fight your way to the surface. There’s only one way out of the
                  MAYC, it seemed, and it’s guarded by an ape heavily roided out
                  on toxic waste.
                </p>
                <p className="common-p">
                  After beating The Mutant Ape on the final stage, there was a
                  prompt to input his wallet address. Another fucking POAP.
                </p>
                <p className="common-p">Great. Thanks Jimmy.</p>
                <p className="common-p mb-5">
                  That night, Curtis hardly slept. He'd had a few beers, sure,
                  but he swore he heard something going on in the basement. The
                  clinking of glass and the turning of gears. It was probably
                  just his imagination.
                </p>
                <img
                  src="https://ik.imagekit.io/bayc/assets/mutants-game.gif"
                  className="d-flex img-fluid rounded mx-auto mb-5"
                  width="100%"
                />
                <p className="common-p mb-3 mb-lg-0">
                  You may play the game
                  <a href="https://2dengine.com/mutantarcade" className="link">
                    here
                  </a>
                  .
                </p>
              </div>
            </div>
            <hr className="gray-line mb-5" />
            <div>
              <div
                style={{
                  transition: 'opacity 400ms ease 0s, transform 400ms ease 0s',
                  transform: 'none',
                  opacity: 1,
                }}
              >
                <div className="mb-5  row">
                  <div className="col">
                    <div className="d-flex justify-content-center w-100 col-12">
                      <div
                        className="MuiPaper-root MuiCard-root jss12 MuiPaper-outlined MuiPaper-rounded"
                        style={{
                          opacity: 1,
                          transform: 'none',
                          transition:
                            'opacity 291ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 194ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                        }}
                      >
                        <div className="MuiCardContent-root">
                          <h2 className="d-flex justify-content-center common-sub-title">
                            CONNECT METAMASK
                          </h2>
                          <hr className="white-line" />
                          <div>
                            <p className="common-p">
                              You need to connect your MetaMask wallet before
                              you can mint a token.
                            </p>
                          </div>
                          <div className="d-flex justify-content-center">
                            <button className="bayc-button " type="button">
                              INSTALL METAMASK
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  transition: 'opacity 400ms ease 0s, transform 400ms ease 0s',
                  transform: 'none',
                  opacity: 1,
                }}
              >
                <div className="mb-5  row">
                  <div className="col">
                    <div className="d-flex justify-content-center">
                      <p className="common-p text-center text-break mb-0">
                        <span className="bold-text">
                          VERIFIED SMART CONTRACT ADDRESS:{' '}
                        </span>
                        <a
                          title="0x60e4d786628fea6478f785a6d7e704777c86a7c6"
                          href="https://etherscan.io/address/0x60e4d786628fea6478f785a6d7e704777c86a7c6"
                          className="link"
                        >
                          0x60e4d786628fea6478f785a6d7e704777c86a7c6
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
    </div>
  );
};
export default Page;
