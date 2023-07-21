import React from 'react'

function Form() {
  return (
    <div className='container text-center  '>
        <div className='row justify-content-center'>
        <div className='col-8 p-5 mt-5 table-bordered shadow d-none d-lg-block'>
            <form className='form-group'>
            <h2>Enter Your TEAM</h2>
                <label>Team Name</label>
                <input type="text" className='form-control text-center' placeholder='Lahore Qalandars' />
                <label>Total Matches</label>
                <input type="text" className='form-control text-center' placeholder='100' />
                <label>Matches Win</label>
                <input type="text" className='form-control text-center' placeholder='55' />
                <label>Matches Lose</label>
                <input type="text" className='form-control text-center' placeholder='35' />
                <label>Matches Drawn</label>
                <input type="text" className='form-control text-center' placeholder='0' />
                <label>Matches With No Result</label>
                <input type="text" className='form-control text-center' placeholder='10' />
                <br />
                <button className='btn btn-primary'>Add Data</button>
            </form>
        </div>

        <div className='col-12 p-5 mt-5 table-bordered shadow d-block d-sm-block d-md-block d-lg-none'>
            <form className='form-group'>
            <h2>Enter Your Team</h2>
                <label>Team Name</label>
                <input type="text" className='form-control text-center' placeholder='Lahore Qalandars' />
                <label>Total Matches</label>
                <input type="text" className='form-control text-center' placeholder='100' />
                <label>Matches Win</label>
                <input type="text" className='form-control text-center' placeholder='55' />
                <label>Matches Lose</label>
                <input type="text" className='form-control text-center' placeholder='35' />
                <label>Matches Drawn</label>
                <input type="text" className='form-control text-center' placeholder='0' />
                <label>Matches With No Result</label>
                <input type="text" className='form-control text-center' placeholder='10' />
                <br />
                <button className='btn btn-primary'>Add Data</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Form