import React from 'react'
import qrCode from '../assets/icons/qr-code-scanner.png'
import search from '../assets/icons/search.png'

const ViewPatient = () => {
  return (
    <div>

      <div className="flex">
        {/* <aside>
            <div className="aside-top flex al-center sp-between">

                <div>
                    <div>
                        <h3>MedVistat</h3>
                    </div>
                    <div className="mt-4">
                        <h5>Version 1.0.0</h5>
                    </div>
                </div>

                <!-- add prescription -->
                <div id="btn-add-prescription" className="btn-icons">
                    <img className="wp-100 hp-100" src="../static/icons/add-prescription.png" alt="">
                </div>
            </div>

            <!-- basic details -->
            <div className="aside-container">
                <div className="ul-container">

                    <div className="flex gap-28 p-12 wrap">

                        <div id="patient-photo-container">
                            <img src="../static/images/patient-photo.jpg" alt="">

                            <span>Patient name</span>
                        </div>

                        <div>
                            <div className="container sp-between">

                                <div>
                                    <span>Age</span>
                                    <p className="aside-p">420</p>
                                </div>
                                <div>

                                    <span>Gender</span>
                                    <p className="aside-p">Male</p>
                                </div>
                            </div>

                            <div className="mt-15">
                                <span>Aadhar</span>
                                <p className="aside-p">123456789012</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-12 mt-23">
                        <div>
                            <span>Mobile</span>
                            <p className="aside-p">+91 1234567890</p>
                        </div>

                        <div className="mt-23">
                            <span>Address</span>
                            <p className="aside-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
                                quam rerum dolorum excepturi rem et eveniet necessitatibus maiores. Molestias,
                                veritatis.</p>
                        </div>

                    </div>
                </div>
            </div>
        </aside> */}

        {/* disease Description  */}
        <main>

          {/* search patient  */}
          <div className='w-full bg-blue-950 flex justify-between items-center p-2 gap-2'>

            <div className='w-full'>
              <input className='w-full border-2 border-blue-950 rounded-lg p-1 focus:outline-none' type="text" placeholder="Search Patient" />
            </div>

            <div className='flex gap-2'>

              <img className='w-8' src={qrCode}
                alt="QR Code" />

              <img className='w-8' src={search} alt="Search" />
            </div>

          </div>

          {/* patient-description  */}
          <div className="patient-description">
            <div className="patient-container">

              <div className="bar-2 flex sp-between">
                <span>Monday, 01/01/2024</span>
                <span>12:30 PM</span>
              </div>

              {/* hospital and doctor details  */}
              <div className="container hospital-container">

                {/* hospital and doctors */}
                <div className="info fs-20 p-tb-10">

                  <div className="flex al-center">
                    <span>Hospital: </span>
                    <p>AIMS</p>
                  </div>
                  <div className="flex al-center">
                    <span>Address: </span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
                      libero?</p>
                  </div>
                  <div>
                    <div className="flex al-center">
                      <span>Doctor: </span>
                      <p>Saeed Farhani</p>
                    </div>
                  </div>

                </div>
              </div>

              {/*  medicine and disease details  */}
              <div className="column-container medicine-container">

                <div className="disease flex justify al-start">

                  <div>
                    <span>Disease</span>
                    <p>Diabetese</p>
                  </div>

                  {/* buttons for reports  */}
                  <div id="report-btn-container" className="container ">
                    <div className="flex justify-right gap-12">
                      <button className="btn btn-casual">Sonography</button>
                      <button className="btn btn-casual">Lab report</button>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolores cupiditate beatae est! Voluptates nihil voluptate impedit delectus ullam, corrupti voluptatibus odit laudantium architecto vitae illum nobis doloremque facere incidunt!</p>
                </div>

                <div>

                </div>
              </div>
            </div>
          </div>

          {/* patient-description  */}
          <div className="patient-description">
            <div className="patient-container">

              <div className="bar-2 flex sp-between">
                <span>Monday, 01/01/2024</span>
                <span>12:30 PM</span>
              </div>

              {/* hospital and doctor details  */}
              <div className="container hospital-container">

                {/* hospital and doctors */}
                <div className="info fs-20 p-tb-10">

                  <div className="flex al-center">
                    <span>Hospital: </span>
                    <p>AIMS</p>
                  </div>
                  <div className="flex al-center">
                    <span>Address: </span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
                      libero?</p>
                  </div>
                  <div>
                    <div className="flex al-center">
                      <span>Doctor: </span>
                      <p>Saeed Farhani</p>
                    </div>
                  </div>

                </div>
              </div>

              {/*  medicine and disease details  */}
              <div className="column-container medicine-container">

                <div className="disease flex justify al-start">

                  <div>
                    <span>Disease</span>
                    <p>Diabetese</p>
                  </div>

                  {/* buttons for reports  */}
                  <div id="report-btn-container" className="container ">
                    <div className="flex justify-right gap-12">
                      <button className="btn btn-casual">Sonography</button>
                      <button className="btn btn-casual">Lab report</button>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolores cupiditate beatae est! Voluptates nihil voluptate impedit delectus ullam, corrupti voluptatibus odit laudantium architecto vitae illum nobis doloremque facere incidunt!</p>
                </div>

                <div>

                </div>
              </div>
            </div>
          </div>

          {/* patient-description  */}
          <div className="patient-description">
            <div className="patient-container">

              <div className="bar-2 flex sp-between">
                <span>Monday, 01/01/2024</span>
                <span>12:30 PM</span>
              </div>

              {/*  hospital and doctor details  */}
              <div className="container hospital-container">

                {/* hospital and doctors */}
                <div className="info fs-20 p-tb-10">

                  <div className="flex al-center">
                    <span>Hospital: </span>
                    <p>AIMS</p>
                  </div>
                  <div className="flex al-center">
                    <span>Address: </span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
                      libero?</p>
                  </div>
                  <div>
                    <div className="flex al-center">
                      <span>Doctor: </span>
                      <p>Saeed Farhani</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* medicine and disease details  */}
              <div className="column-container medicine-container">

                <div className="disease flex justify al-start">

                  <div>
                    <span>Disease</span>
                    <p>Diabetese</p>
                  </div>

                  {/*  buttons for reports  */}
                  <div id="report-btn-container" className="container ">
                    <div className="flex justify-right gap-12">
                      <button className="btn btn-casual">Sonography</button>
                      <button className="btn btn-casual">Lab report</button>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolores cupiditate beatae est! Voluptates nihil voluptate impedit delectus ullam, corrupti voluptatibus odit laudantium architecto vitae illum nobis doloremque facere incidunt!</p>
                </div>

                <div>

                </div>
              </div>
            </div>
          </div>

        </main>

      </div>
    </div>
  )
}

export default ViewPatient
