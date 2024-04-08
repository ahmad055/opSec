import React, { useState } from "react";
import { FaList } from "react-icons/fa6";
import "./AudioGeneration.css";
import a from "../../Media/dalle.avif";
import { IoIosArrowDown } from "react-icons/io";


const AudioGeneration = () => {
  const [active_div, setActive_div] = useState(true);
  const [dropActive, setDropActive] = useState(false);
  const [dropTwoActive, setDropTwoActive] = useState(false);
  const toggle = () => {
    setActive_div(!active_div);
    console.log("Toggling active");
  };
  const dropdown = () => {
    setDropActive(!dropActive);
  };
  return (
    <div className="col-lg-9 home-h order-lg-3 mt-5">
      <div className="mt-5 bg-black">
        <div className="row">
          <div className={` order-lg-1 order-2 col-lg-${active_div ? "9" : "12"}`}>
            <div className="d-flex pt-3 justify-content-between px-5">
              <h3>Audio Generation</h3>
              <div className="img-container-div-w">
                This will Use four tokens per generated image.
                <button
                  onClick={toggle}
                  className=" ms-2 img-container-div-icon"
                >
                  <FaList />
                </button>
              </div>
            </div>
            <div className="px-4">
            <input class=" image-c-i mt-3 px-3" type="search" placeholder="Prompt" aria-label="Search"/>
            {/* <input class=" image-c-i mt-3" type="search" placeholder=" Negative Prompt" aria-label="Search"/> */}
            <div className="mt-3 d-flex justify-content-end">
             <button className="generate-bnt">
              Generate
             </button>

            </div>
            </div>
          </div>
          <div
            className={` px-2 order-lg-2 order-1 img-container-right-div col-lg-${
              active_div ? "3 d-block" : "3 d-none"
            }`}
          >
            <div className="Main-div position-relative p-2">
              <div className="dropdown-head d-flex justify-content-between ">
                <div className="d-flex">
                  <div>
                    <img src={a} alt="a" className="dropdown-icon-img" />
                  </div>
                  <div className=" px-2 d-flex flex-column">
                    <span className="light-p">Model</span>
                    <span> DALL.E 3</span>
                  </div>
                </div>
                <div>
                  <button onClick={dropdown} className="arrow-icon-btn">
                    <IoIosArrowDown />
                  </button>
                </div>
              </div>
              {dropActive && (
                <div className="dropdown-content d-flex flex-column ">
                  <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                    Abcdeireonoienvei
                  </butotn>
                  <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                    Abcdeireonoienvei
                  </butotn>
                  <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                    Abcdeireonoienvei
                  </butotn>
                  <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                    Abcdeireonoienvei
                  </butotn>
                  <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                    Abcdeireonoienvei
                  </butotn>
                  <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                    Abcdeireonoienvei
                  </butotn>

                  <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                    Abcdeireonoienvei
                  </butotn>
                  <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                    Abcdeireonoienvei
                  </butotn>
                  <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                    Abcdeireonoienvei
                  </butotn>
                </div>
              )}
            </div>
           
            <div className="px-2 mt-3">
              history_prompt
              <div className="dimension-dropdown-h mt-1 px-2 d-flex justify-content-between align-items-center ">
                <p className="mt-3">announcer</p>
                <button onClick={()=>{setDropTwoActive(!dropTwoActive)}} className="arrow-icon-btn">
                  <IoIosArrowDown />
                </button>
              </div>
              {
                dropTwoActive &&
                <div className="dropdown-content d-flex flex-column ">
                  <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                  1024 x 1792px
                  </butotn>
                  <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                  1024 x 1792px
                  </butotn><butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                  1792 x 1024px 
                  </butotn>

                  
                 
                </div>
              }
            </div>
            <div className="px-2 mt-5">
              <span>custom_history_prompt</span>
              <div>
                <button className="upload-btn">Upload</button>
              </div>
            </div>
            <div className="px-2 mt-3">
              text_temp
              <div>
                <input className="n-input mt-2" type="number" />
              </div>
            </div>
            <div className="px-2 mt-3">
              waveform_temp
              <div>
                <input className="n-input mt-2" type="number" />
              </div>
            </div>
            <div className="px-2 mt-5">
              output_full
              <div class="form-check form-switch mt-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  checked
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AudioGeneration