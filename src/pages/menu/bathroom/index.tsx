import Nav from '@/compontent/nav';
interface Props {}
const Page: React.FC<Props> = (props) => {
  return (
    <div>
      <Nav navId="8"></Nav>
      <div>
        <div
          style={{
            transition: 'opacity 400ms ease 0s, transform 400ms ease 0s',
            transform: 'none',
            opacity: 1,
          }}
        >
          <div className="d-flex my-5 justify-content-center container">
            <div className="row">
              <div className="col-12">
                <button className="bayc-button " type="button">
                  INSTALL METAMASK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
