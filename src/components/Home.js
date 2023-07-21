import React from 'react'

function Home() {
  return (
    <div>
      <h3 className='text-center mt-5 mb-5' >TEAM SARKAR 11 </h3>
      <div className='container'>
      <div className='row'>
      <div className='col-sm-6'>
       <h4 className='text-center'>Team Stats</h4>
       <table className='table table-bordered text-center'>
        <tr>
          <th colSpan={4}>Matches</th>
        </tr>
        <tr>
          <td>Total</td>
          <td>Win</td>
          <td>Lose</td>
          <td>Drawn</td>
        </tr>
        <tr>
          <td>105</td>
          <td>95</td>
          <td>5</td>
          <td>5</td>
        </tr>
       </table>
      </div>
      <div className='col-sm-6'>
      <h4 className='text-center'>Percentages</h4>
      <table className='table table-bordered text-center'>
      <tr>
        <th colSpan={3}>%</th>
      </tr>
      <tr>
        <td>Win</td>
        <td>Lose</td>
        <td>Drawn</td>
      </tr>
      <tr>
        <td>90.47</td>
        <td>4.76</td>
        <td>4.76</td>
      </tr>
      </table>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Home