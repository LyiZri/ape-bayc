import './index.less';
import apeValue from '../gallery/apeValue.json';
import Nav from '@/compontent/nav';
interface Props {}
const Page: React.FC<Props> = (props) => {
  console.log(apeValue);

  return (
    <div
      style={{
        transition: 'opacity 400ms ease 0s, transform 400ms ease 0s',
        transform: 'none',
        opacity: 1,
      }}
    >
      <Nav navId="5" />
      <div className="common-container">
        <div className="container">
          <div className="row">
            <div className="col-10 col">
              <h1 className="common-title">
                BORED APE YACHT CLUB PROVENANCE RECORD
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col">
              <p className="prov-base-text">
                This page presents the provenance record of each Bored Ape that
                will ever exist. Each Bored Ape image is firstly hashed using
                SHA-256 algorithm. A combined string is obtained by
                concatenating SHA-256 of each Bored Ape image in the specific
                order as listed below. The final proof is obtained by SHA-256
                hashing this combined string. This is the final provenance
                record stored on the smart contract.
              </p>
              <hr className="gray-line" />
              <h2 className="prov-sub-title">IMPORTANT INFORMATION</h2>
              <br />
              <p className="prov-base-text">
                Each Bored Ape token ID is assigned to an artwork image from the
                initial sequence with this formula:
                <br />
                <br />
                <div className="prov-formula">
                  (tokenId + startingIndex) % 10000 → Initial Sequence Index
                </div>
                <br />
                <br />
                Here's the relevant information:
                <br />
                <br />
                <table className="prov-important-info-table">
                  <tr>
                    <td className="prov-key">FINALIZED STARTING INDEX</td>
                    <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                    <td>8853</td>
                  </tr>
                  <tr>
                    <td className="prov-key">
                      BORED APE YACHT CLUB CONTRACT ADDRESS
                    </td>
                    <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                    <td>
                      <a
                        className="link"
                        href="https://etherscan.io/address/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
                      >
                        0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="prov-key">FINAL PROOF HASH</td>
                    <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                    <td>
                      <a
                        className="link"
                        href="https://ipfs.io/ipfs/Qme57kZ2VuVzcj5sC3tVHFgyyEgBTmAnyTK45YVNxKf6hi"
                      >
                        cc354b3fcacee8844dcc9861004da081f71df9567775b3f3a43412752752c0bf
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="prov-key">ARWEAVE PERMAWEB URIS</td>
                    <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                    <td>
                      <a
                        className="link"
                        href="https://ipfs.io/ipfs/QmUE2HrYFxMbrwrQeiXj7B8C7voUN9zE8C7yAkYD2Sw7eQ"
                      >
                        List of Arweave URIs
                      </a>
                    </td>
                  </tr>
                </table>
              </p>
              <hr className="gray-line" />
              <h2 className="prov-sub-title">CONCATENATED HASH STRING</h2>
              <br />
              <p className="prov-base-text">
                <div className="prov-hash-string">
                  aa7958aa9ebfeefe771c844f691ecd106281ea77eafc43b2ffa7cb8daff340847b09464fc228d7fe65c0302eec85b89b60c4f987c4ca3210c9fceffa2035e4e06c72b3daf2d002e4c12436dd647229d249b51c51a63bf88bb990f47ff9025c9fd338db79245fdeb8bead27d03215dfd2b6636476981f78034b7d44d45e9edc654e93b4c73011da3ce098d16d61587ceaa1c4fe5067b6d0351
                </div>
              </p>
              <hr className="gray-line" />
              <h2 className="prov-sub-title">PROVENANCE RECORD</h2>
              <br />
              <p className="prov-base-text">
                <i className="p-0">
                  The table below lists the original index, assigned BAYC Token
                  ID, SHA256 Hash output and IPFS link of each Bored Ape image.
                </i>
                <br />
                <br />
                <table className="prov-table">
                  <tr>
                    <th>INITIAL SEQUENCE INDEX</th>
                    <th>&nbsp;&nbsp;|&nbsp;&nbsp;</th>
                    <th>ASSIGNED BAYC TOKEN ID</th>
                    <th>&nbsp;&nbsp;|&nbsp;&nbsp;</th>
                    <th>SHA-256 HASH</th>
                    <th>&nbsp;&nbsp;|&nbsp;&nbsp;</th>
                    <th>IPFS HASH</th>
                  </tr>
                </table>
                <table className="prov-table">
                  {apeValue.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                        <td>{item.tokenId}</td>
                        <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                        <td>{item.imageHash}</td>
                        <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                        <td>
                          <a className="link" href={item.image}>
                            {item.image}
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
