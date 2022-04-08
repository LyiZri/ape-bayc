interface Props {}
import apeValue from './apeValue.json';
import filterValue from './filter.json';
import { useState } from 'react';
import Nav from '@/compontent/nav';
import './index.less';
const Gallery: React.FC<Props> = (props) => {
  console.log(apeValue);
  const [galSelect, setGalSelect] = useState(-1);
  return (
    <div
      style={{
        transition: ' opacity 400ms ease 0s, transform 400ms ease 0s',
        transform: 'none',
        opacity: 1,
      }}
    >
      <Nav navId='4'/>
      <div className="common-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="common-title mb-3">GALLERY</h1>
            </div>
            <div className="gal-form col-lg-3 col-12">
              {filterValue.map((item, index) => {
                return (
                  <div className="row" key={index}>
                    <div className="col-lg-10 col-12">
                      <div className="gal-select-wrapper">
                        <div
                          className={`gal-select ${
                            galSelect == index ? 'open' : ''
                          }`}
                        >
                          <div
                            className="gal-select__trigger"
                            onClick={() => {
                                if(galSelect == index){
                                    setGalSelect(-1)
                                }else{
                                    setGalSelect(index);
                                }
                            }}
                          >
                            <span className="bayc-color">{item.name}</span>
                            <div className="gal-arrow"></div>
                          </div>
                          <div
                            className="gal-options"
                            onMouseLeave={() => {
                              setGalSelect(-1);
                            }}
                          >
                            {item.children.map((item1, index1) => {
                              return (
                                <span
                                  className="gal-option "
                                  key={item1.id}
                                  data-value={item1.value}
                                >
                                  {item1.name}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
            })}
            <input placeholder="BY ID" className="gal-input" min="0" max="9999"></input>
            <button className="bayc-button gal-reset" type="button">RESET FILTERS</button>
            </div>

            <div className="col-lg-9 col-12">
              <div className="infinite-scroll-component__outerdiv">
                <div
                  className="infinite-scroll-component "
                  style={{ height: 'auto', overflow: 'clip auto' }}
                >
                  <div>
                    <div className="row">
                      {apeValue.map((item, index) => {
                        return (
                          <div className="col-lg-4 col-md-6 col-12" key={index}>
                            <div>
                              <div
                                style={{
                                  transition:
                                    'opacity 400ms ease 0s, transform 400ms ease 0s',
                                  transform: 'none',
                                  opacity: 1,
                                }}
                              >
                                <div>
                                  <a >
                                    <img
                                      className="gal-image"
                                      src={item.image}
                                    />
                                  </a>
                                  <p>BORED APE #{index + 1}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
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
export default Gallery;
