import React from 'react'

const flight = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        {/* Left Col */}
        <div className='col-md-4 border p-2'>
          {/* 1st Row Buttons */}
          <div className='d-flex justify-content-center gap-2'>
            <button style={{ backgroundColor: "#0d1973" }} type="button" class="btn px-3 btn-sm text-white">Submit</button>
            <button style={{ backgroundColor: "#bd1136" }} type="button" class="btn px-3 btn-sm text-white">Today</button>
            <button style={{ backgroundColor: "#c29802" }} type="button" class="btn px-3 btn-sm text-white">Refresh</button>
          </div>
          {/* 2nd Row Buttons */}
          <div className='mt-2 d-flex flex-wrap gap-2 justify-content-center justify-content-md-between'>
            <button style={{ backgroundColor: "#bdbcb9" }} type="button" class="btn px-3 btn-primary btn-sm border-0 text-dark fw-bolder ">Arrival</button>
            <button style={{ backgroundColor: "#bdbcb9" }} type="button" class="btn px-3 btn-primary btn-sm border-0  text-dark fw-bolder">Departure</button>
            <button style={{ backgroundColor: "#bdbcb9" }} type="button" class="btn px-3 btn-primary btn-sm border-0  text-dark fw-bolder">All</button>
            <button style={{ backgroundColor: "#bdbcb9" }} type="button" class="btn px-3 btn-primary btn-sm border-0  text-dark fw-bolder">Cancelled</button>
            <button style={{ backgroundColor: "#bdbcb9" }} type="button" class="btn px-3 btn-primary btn-sm border-0  text-dark fw-bolder">Flight watch</button>
          </div>
          {/* Search input */}
          <nav class="navbar">
            <form class="w-100">
              <div class="input-group ">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input className='w-100' type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
            </form>
          </nav>
          <div className='border'>
            <div style={{ backgroundColor: "#e3e2de" }} className='p-2 d-flex gap-5 justify-content-arround'>
              <h6 className='fw-bolder'>Flight target </h6>
              <h6> <span style={{ color: "#de214a" }} className='fw-bolder'> Friday , 26 march 2023  </span> </h6>
            </div>
            <div style={{ backgroundColor: "#faefaa" }} className='d-flex flex-column justify-content-center align-self-center mt-1'>
              <div className='d-flex  justify-content-around align-items-center mb-0 pb-0'>
                <img style={{ width: "100px", margin: "0", height: "50px" }} src='https://www.hhtourandtravel.com/wp-content/uploads/2021/09/Etihad.png ' />
                <p style={{ fontSize: "16px", marginBottom: "0px", margin: "0px" }}>E1393</p>|
                <p style={{ fontSize: "16px", marginBottom: "0px", margin: "0px", padding: "0px" }}>HAM-DUM</p>|
                <p style={{ fontSize: "12px", marginBottom: "0px" }}>A320</p>|
                <p style={{ fontSize: "12px", marginBottom: "0px" }}>EICVA</p>
              </div>
              <div className='d-flex justify-content-around align-items-center'>
                <div className='d-flex gap-2'>
                  <p style={{ backgroundColor: "#080a80" }} className='gap-2 text-white rounded'> ATD</p>
                  <p className='gap-2'>  9:00 Am </p>
                </div>
                <div className='d-flex gap-2'>
                  <p style={{ backgroundColor: "#080a80" }} className='gap-2 text-white rounded'> ATD</p>
                  <p className='gap-2'>  8609 </p>
                </div>
                <p className='text-danger'>dl/0909Red</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#faefaa" }} className='d-flex flex-column justify-content-center align-self-center mt-1 '>
              <div className='d-flex  justify-content-around align-items-center mb-0 pb-0'>
                <img style={{ width: "100px", margin: "0", height: "50px" }} src='https://www.persopolistravel.ro/wp-content/uploads/2016/05/qatar-1.png' />
                <p style={{ fontSize: "16px", marginBottom: "0px", margin: "0px" }}>E1393</p>|
                <p style={{ fontSize: "16px", marginBottom: "0px", margin: "0px", padding: "0px" }}>HAM-DUM</p>|
                <p style={{ fontSize: "12px", marginBottom: "0px" }}>A320</p>|
                <p style={{ fontSize: "12px", marginBottom: "0px" }}>EICVA</p>
              </div>
              <div className='d-flex justify-content-around align-items-center'>
                <div className='d-flex gap-2'>
                  <p style={{ backgroundColor: "#080a80" }} className='gap-2 text-white rounded'> ATD</p>
                  <p className='gap-2'>  9:00 Am </p>
                </div>
                <div className='d-flex gap-2'>
                  <p style={{ backgroundColor: "#080a80" }} className='gap-2 text-white rounded'> ATD</p>
                  <p className='gap-2'>  8609 </p>
                </div>
                <p className='text-danger'>dl/0909Red</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#f5f4ed" }} className='d-flex flex-column justify-content-center align-self-center mt-1'>
              <div className='d-flex  justify-content-around align-items-center mb-0 pb-0'>
                <img style={{ width: "100px", margin: "0", height: "50px" }} src='https://www.hhtourandtravel.com/wp-content/uploads/2021/09/Etihad.png ' />
                <p style={{ fontSize: "16px", marginBottom: "0px", margin: "0px" }}>E1393</p>|
                <p style={{ fontSize: "16px", marginBottom: "0px", margin: "0px", padding: "0px" }}>HAM-DUM</p>|
                <p style={{ fontSize: "12px", marginBottom: "0px" }}>A320</p>|
                <p style={{ fontSize: "12px", marginBottom: "0px" }}>EICVA</p>
              </div>
              <div className='d-flex justify-content-around align-items-center'>
                <div className='d-flex gap-2'>
                  <p style={{ backgroundColor: "#080a80" }} className='gap-2 text-white rounded'> ATD</p>
                  <p className='gap-2'>  9:00 Am </p>
                </div>
                <div className='d-flex gap-2'>
                  <p style={{ backgroundColor: "#080a80" }} className='gap-2 text-white rounded'> ATD</p>
                  <p className='gap-2'>  8609 </p>
                </div>
                <p className='text-danger'>dl/0909Red</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#fce3fc" }} className='d-flex flex-column justify-content-center align-self-center mt-1 '>
              <div className='d-flex  justify-content-around align-items-center mb-0 pb-0'>
                <img style={{ width: "100px", margin: "0", height: "50px" }} src='https://www.persopolistravel.ro/wp-content/uploads/2016/05/qatar-1.png' />
                <p style={{ fontSize: "16px", marginBottom: "0px", margin: "0px" }}>E1393</p>|
                <p style={{ fontSize: "16px", marginBottom: "0px", margin: "0px", padding: "0px" }}>HAM-DUM</p>|
                <p style={{ fontSize: "12px", marginBottom: "0px" }}>A320</p>|
                <p style={{ fontSize: "12px", marginBottom: "0px" }}>EICVA</p>
              </div>
              <div className='d-flex justify-content-around align-items-center'>
                <div className='d-flex gap-2'>
                  <p style={{ backgroundColor: "#080a80" }} className='gap-2 text-white rounded'> ATD</p>
                  <p className='gap-2'>  9:00 Am </p>
                </div>
                <div className='d-flex gap-2'>
                  <p style={{ backgroundColor: "#080a80" }} className='gap-2 text-white rounded'> ATD</p>
                  <p className='gap-2'>  8609 </p>
                </div>
                <p className='text-danger'>dl/0909Red</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#faefaa" }} className='d-flex flex-column justify-content-center align-self-center mt-1 '>
              <div className='d-flex  justify-content-around align-items-center mb-0 pb-0'>
                <img style={{ width: "100px", margin: "0", height: "50px" }} src='https://www.hhtourandtravel.com/wp-content/uploads/2021/09/Etihad.png ' />
                <p style={{ fontSize: "16px", marginBottom: "0px", margin: "0px" }}>E1393</p>|
                <p style={{ fontSize: "16px", marginBottom: "0px", margin: "0px", padding: "0px" }}>HAM-DUM</p>|
                <p style={{ fontSize: "12px", marginBottom: "0px" }}>A320</p>|
                <p style={{ fontSize: "12px", marginBottom: "0px" }}>EICVA</p>
              </div>
              <div className='d-flex justify-content-around align-items-center'>
                <div className='d-flex gap-2'>
                  <p style={{ backgroundColor: "#080a80" }} className='gap-2 text-white rounded'> ATD</p>
                  <p className='gap-2'>  9:00 Am </p>
                </div>
                <div className='d-flex gap-2'>
                  <p style={{ backgroundColor: "#080a80" }} className='gap-2 text-white rounded'> ATD</p>
                  <p className='gap-2'>  8609 </p>
                </div>
                <p className='text-danger'>dl/0909Red</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#faefaa" }} className='d-flex flex-column justify-content-center align-self-center mt-1'>
              <div className='d-flex  justify-content-around align-items-center mb-0 pb-0'>
                <img style={{ width: "100px", margin: "0", height: "50px" }} src='https://www.persopolistravel.ro/wp-content/uploads/2016/05/qatar-1.png' />
                <p style={{ fontSize: "16px", marginBottom: "0px", margin: "0px" }}>E1393</p>|
                <p style={{ fontSize: "16px", marginBottom: "0px", margin: "0px", padding: "0px" }}>HAM-DUM</p>|
                <p style={{ fontSize: "12px", marginBottom: "0px" }}>A320</p>|
                <p style={{ fontSize: "12px", marginBottom: "0px" }}>EICVA</p>
              </div>
              <div className='d-flex justify-content-around align-items-center'>
                <div className='d-flex gap-2'>
                  <p style={{ backgroundColor: "#080a80" }} className='gap-2 text-white rounded'> ATD</p>
                  <p className='gap-2'>  9:00 Am </p>
                </div>
                <div className='d-flex gap-2'>
                  <p style={{ backgroundColor: "#080a80" }} className='gap-2 text-white rounded'> ATD</p>
                  <p className='gap-2'>  8609 </p>
                </div>
                <p className='text-danger'>dl/0909Red</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col */}
        <div className='col-md-8'>
          <div className='d-flex flex-wrap justify-content-center justify-content-md-between align-items-center py-2 gap-3'>
            <div className='d-flex justify-content-center align-items-center gap-3'>
              <h2 className='font_head'>E1605</h2>
              <h5 className='font_head1'> E1-Des (Ae320) E1des</h5>
              <h5 className='font_head1 d-flex justify-content-start gap-1'><span className='fs-6 text-primary'>Gate:</span>Do5</h5>
              <h5 className='font_head1 d-flex justify-content-start gap-1'><span className='fs-6 text-primary'>Pos:</span>105</h5>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
              <button type="button" class="btn btn-sm btn-danger text-white">INBOUND FLIGHT</button>
            </div>
          </div>
          <section className="border">
            <div className="container py-3">
              <div className="row">
                <ul className="list-unstyled text-white">
                  <li className="d-flex mb-3">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar" className="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60" />
                    <div className="card mask-custom w-50">
                      <div className="card-header d-flex justify-content-between p-3" style={{ borderBottom: "1px solid rgba(255,255,255,.3)" }}>
                        <p className="fw-bold mb-0 text-primary">Brad Pitt</p>
                      </div>
                      <div className="card-body  ">
                        <p className="mb-0 text-dark ">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>
                      <p className=" small mb-0 text-primary"><i className="far fa-clock"></i> 12 mins ago</p>

                    </div>
                  </li>
                  <li className="d-flex  justify-content-end  mb-4">
                    <div className="card mask-custom w-50 ">
                      <div className="card-header d-flex justify-content-between p-3" style={{ borderBottom: "1px solid rgba(255,255,255,.3)" }}>
                        <p className="fw-bold mb-0 text-primary ">Lara Croft</p>
                      </div>
                      <div className="card-body ">
                        <p className="mb-0 text-dark">
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                        </p>
                      </div>
                      <p className=" small mb-0 text-primary"><i className="far fa-clock"></i> 13 mins ago</p>

                    </div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar" className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong" width="60" />
                  </li>
                </ul>
                <div className='row mt-2'>
                  <div className='col gap-2 d-flex flex-wrap justify-content-center align-items-end'>
                    <div className='d-flex align-items-end gap-1'>
                      <button style={{ backgroundColor: "#31367a" }} type="button" className="btn btn-light btn-md btn-rounded text-white">Update Info</button>
                      <button type="button" className="btn btn-dark btn-md rounded-circle text-white">A</button>
                    </div>
                    <textarea
                      style={{ width: "70%" }}
                      placeholder='Type your message here' className="form-control" id="exampleFormControlTextarea1" rows="3" />
                    <button style={{ backgroundColor: "#31367a" }} type="button" className="btn btn-light btn-md btn-rounded text-white">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className='row py-3'>
            <div className='col d-flex flex-wrap justify-content-center justify-content-md-between gap-2'>
              <div className='d-flex justify-content-center flex-wrap gap-1'>
                {["TRC", "CHECK IN", "SSR", "ARR", "PTS", "FHR", "STAFF", "OCC"].map((e, i) => (
                  <button key={i} type="button" className="btn btn-light btn-sm px-3"
                    style={{
                      borderTopLeftRadius: ".75rem",
                      backgroundColor: "lightgray"
                    }}
                  >{e}</button>
                ))}
              </div>
              <button type="button" className="btn btn-success btn-md btn-rounded text-white px-5">Save Changes</button>
            </div>
          </div>

          <div className='dropdowns mt-2 d-flex gap-3 justify-content-center'>
            <div class="form-group dropdown-inp  ">
              <label for="exampleDropdown ">Airline Operator</label>
              <select class=" dropdown-inp shadow-none  form-select dropdown-inp form-select-sm border-0 bg-light" id="exampleDropdown">
                <option value="option1"></option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleDropdown">A/C type</label>
              <select class="form-select shadow-none  form-select-sm border-0 bg-light" id="exampleDropdown">
                <option ></option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>

            <div class="form-group">
              <label for="exampleDropdown">A/c Regn</label>
              <select class="form-select shadow-none  form-select-sm border-0 bg-light" id="exampleDropdown">
                <option value="option1"></option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>

            <div class="form-group">
              <label for="exampleDropdown">Flight No</label>
              <select class="form-select shadow-none  form-select-sm border-0 bg-light" id="exampleDropdown">
                <option value="option1"></option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleDropdown">Date</label>
              <select class=" dropdown-inp shadow-none  form-select form-select-sm border-0 bg-light" id="exampleDropdown">
                <option value="option1"></option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>

            <div class="form-group">
              <label for="exampleDropdown">A/C Call Sign</label>
              <select class="form-select shadow-none  form-select-sm border-0 bg-light" id="exampleDropdown">
                <option value="option1"></option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleDropdown">Gate</label>
              <select class="form-select shadow-none  form-select-sm border-0 bg-light" id="exampleDropdown">
                <option value="option1"></option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleDropdown">Pos</label>
              <select class="form-select shadow-none  form-select-sm border-0 bg-light" id="exampleDropdown">
                <option value="option1"></option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>

          <div style={{ backgroundColor: "#faefaa" }} className='p-4 mt-4'>
            <div className='row justify-content-center align-items-center '>
              <div className='inp_gap col-md-6 d-flex justify-content-center gap-2 '>
                <label>Ckin Open</label>
                <input style={{ backgroundColor: "#f2eeed" }} className='border-0' type='name ' />

              </div>
              <div className='inp_gap  col-md-6 d-flex justify-content-center gap-2 '>
                <label>Ckin Open</label>
                <input style={{ backgroundColor: "#f2eeed" }} className='border-0' type='name ' />

              </div>


            </div>
            <div className='row d-flex mt-2 justify-content-between align-items-center '>
              <div className='ckin_inp d-flex flex-wrap justify-content-between gap-2'>
                <div className='d-flex gap-1'>
                  <label>Ckin </label>
                  <input style={{ width: "70px", backgroundColor: "#f2eeed" }} className='border-0' type='name ' />
                </div>
                <div className='d-flex gap-1'>
                  <label>Ckin </label>
                  <input style={{ width: "70px", backgroundColor: "#f2eeed" }} className='border-0' type='name ' />
                </div>
                <div className='d-flex gap-1'>
                  <label>Ckin </label>
                  <input style={{ width: "70px", backgroundColor: "#f2eeed" }} className='border-0' type='name ' />
                </div>
                <div className='d-flex gap-1'>
                  <label>Ckin </label>
                  <input style={{ width: "70px", backgroundColor: "#f2eeed" }} className='border-0' type='name ' />
                </div>
                <div className='d-flex gap-1'>
                  <label>Ckin </label>
                  <input style={{ width: "70px", backgroundColor: "#f2eeed" }} className='border-0' type='name ' />
                </div>
                <div className='d-flex gap-1'>
                  <label>Ckin </label>
                  <input style={{ width: "70px", backgroundColor: "#f2eeed" }} className='border-0' type='name ' />
                </div>
              </div>
            </div>
            <div className='row justify-content-center mt-2'>
              <div className='col-md-6'>
                <div className=' inp_gap  d-flex gap-1'>
                  <label>Ckin </label>
                  <input style={{ backgroundColor: "#f2eeed" }} className='form-control border-0' type='name ' />
                </div>
              </div>
              <div className='col'>
                <div className=' inp_gap d-flex gap-1 '>
                  <label>Ckin </label>
                  <input style={{ backgroundColor: "#f2eeed" }} className='form-control border-0' type='name ' />
                </div>
              </div>
            </div>
            <div className='row justify-content-center mt-2'>
              <div className='col-md-6'>
                <div className=' inp_gap  d-flex gap-1'>
                  <label>Ckin </label>
                  <input style={{ backgroundColor: "#f2eeed" }} className='form-control border-0' type='name ' />
                </div>
              </div>
              <div className='col'>
                <div className='inp_gap  d-flex gap-1 '>
                  <label>Ckin </label>
                  <input style={{ backgroundColor: "#f2eeed" }} className='form-control border-0' type='name ' />
                </div>
              </div>
            </div>
          </div>

          <div className='row mt-5'>
            <div className='col-md-4'>
              <div className='d-flex flex-row bd-highlight mb-3 ' style={{ borderBottom: "1px solid black" }}>
                <h5 class="mb-0 mx-2 fw-bolder
  ">Booked Pack</h5>
              </div>

              <table class="table table-borderless p-2  ">
                <thead>
                  <tr className='mt-3'>
                    <th scope="col"></th>
                    <th className='mt-2' scope="col">GCM</th>
                    <th className='mt-2' scope="col">GCM</th>
                    <th scope="col">GCM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='mt-5'>
                    <th scope="row mt-4 ">1</th>
                    <td className='bg-warning'>50</td>
                    <td className=''>50</td>
                    <td className='bg-warning'>50</td>
                  </tr>
                  <tr>
                    <th scope="row mt-2 p-2">2</th>
                    <td className=''>50</td>
                    <td className='bg-warning'>50</td>
                    <td className=''>50</td>
                  </tr>
                  <tr>
                    <th scope="row mt-4 p-3">3</th>
                    <td className='bg-warning'>50</td>
                    <td className=''> 50</td>
                    <td className='bg-warning'>50</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='col-md-4'>
              <div className='d-flex flex-row bd-highlight mb-3 ' style={{ borderBottom: "1px solid black" }}>
                <h5 class="mb-0  mx-2 fw-bolder
  ">Actual pax</h5>
              </div>

              <table class="table table-borderless p-2  ">
                <thead>
                  <tr className='mt-3'>
                    <th scope="col"></th>
                    <th scope="col">GCM</th>
                    <th scope="col">GCM</th>
                    <th scope="col">GCM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='mt-5'>
                    <th scope="row mt-4 ">1</th>
                    <td className='bg-danger'>50</td>
                    <td className=''>50</td>
                    <td className='bg-danger'>50</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td className=''>50</td>
                    <td className='bg-danger'>50</td>
                    <td className=''>50</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td className='bg-danger'>50</td>
                    <td className=''> 50</td>
                    <td className='bg-danger'>50</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='col-md-4'>
              <div className='d-flex flex-row bd-highlight mb-3 ' style={{ borderBottom: "1px solid black" }}>
                <h5 class="mb-0 mx-2 fw-bolder
  ">Catering</h5>
              </div>

              <table class="table table-borderless p-2  ">
                <thead>
                  <tr className='mt-3'>
                    <th scope="col"></th>
                    <th scope="col">GCM</th>
                    <th scope="col">GCM</th>
                    <th scope="col">GCM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='mt-5'>
                    <th scope="row mt-4 ">1</th>
                    <td className='bg-success'>50</td>
                    <td className=''>50</td>
                    <td className='bg-success'>50</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td className=''>50</td>
                    <td className='bg-success'>50</td>
                    <td className=''>50</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td className='bg-success'>50</td>
                    <td className=''> 50</td>
                    <td className='bg-success'>50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className='py-4 px-3'>
            <div>
              <p className='m-0 mb-1 text-start fs-6 fw-bold'>Flight Briefing</p>
              <div style={{ width: '30%', borderBottom: '1px solid lightgray' }} />
            </div>

            <div className='mt-3 px-3 py-2 rounded d-flex flex-column gap-1' style={{ backgroundColor: 'lightgreen' }}>
              <p className='text-start m-0 fw-bold' style={{ fontSize: '12px' }}>SPECIALS:</p>
              <p className='text-start m-0 fw-bold' style={{ fontSize: '12px' }}>BOOKING STATUS:</p>
              <p className='text-start m-0 fw-bold' style={{ fontSize: '12px' }}>SCHEDULE INFO:</p>
              <p className='text-start m-0 fw-bold' style={{ fontSize: '12px' }}>DOCS CHECK:</p>
              <p className='text-start m-0 fw-bold' style={{ fontSize: '12px' }}>RAMP (SPECIAL):</p>
              <p className='text-start m-0 fw-bold' style={{ fontSize: '12px' }}>OTHERS:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default flight