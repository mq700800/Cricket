import React from 'react'

function SuccessRate() {
    var highest,your_score,your_highest,successbat,notout,below8,successcurrentmatchbat,successeverbat;

    function SuccessRatioBat()
    { 
       highest = Number(document.getElementById('highest').value);
       your_score = Number(document.getElementById('yourscore').value);
       your_highest = Number(document.getElementById('yourhighest').value);
       notout = document.getElementById('notout').value;
       below8 = document.getElementById('below8').value;
       successcurrentmatchbat = (your_score/highest)*100;
       successeverbat = (your_score/your_highest)*100;
    

       if(notout === 'Yes')
       {
        successcurrentmatchbat = successcurrentmatchbat + 10;
       }
       if(below8 === 'Yes')
       {
        successcurrentmatchbat = successcurrentmatchbat + 10;
       }
    

       successbat = ((successcurrentmatchbat + successeverbat)/200)*100;


       document.getElementById('successrate').innerHTML = successbat;
       console.log(successbat);
    }

    function SuccessRatioBatMbl()
    {
       highest = Number(document.getElementById('mblhighest').value);
       your_score = Number(document.getElementById('mblyourscore').value);
       your_highest = Number(document.getElementById('mblyourhighest').value);
       notout = document.getElementById('mblnotout').value;
       below8 = document.getElementById('mblbelow8').value;
       successcurrentmatchbat = (your_score/highest)*100;
       successeverbat = (your_score/your_highest)*100;
    

       if(notout === 'Yes')
       {
        successcurrentmatchbat = successcurrentmatchbat + 10;
       }
       if(below8 === 'Yes')
       {
        successcurrentmatchbat = successcurrentmatchbat + 10;
       }
    

       successbat = ((successcurrentmatchbat + successeverbat)/200)*100;
       

       document.getElementById('mblsuccessrate').innerHTML = successbat;
       console.log(successbat);
    }

    // ---------------------------------------------------------------------------------------------


    var highestwicket,your_wicket,your_highest_wicket,successball,economy,dots;
    function SuccessRatioBall()
    {
       highestwicket = Number(document.getElementById('highestwicket').value);
       your_wicket = Number(document.getElementById('yourwicket').value);
       your_highest_wicket = Number(document.getElementById('yourhighestwicket').value);
       economy = Number(document.getElementById('economy').value);
       dots = Number(document.getElementById('dots').value);

       successball = ((your_wicket/highestwicket)*100)+((your_wicket/your_highest_wicket)*100);
       if(economy === 'Yes')
       {
        successball =  successball + 10;
       }
       if(dots === 'Yes')
       {
        successball = successball + 10;
       }
       document.getElementById('successbowl').innerHTML = successball;
       console.log(successball);
    }

    function SuccessRatioBallMbl()
    {
       highestwicket = Number(document.getElementById('mblhighestwicket').value);
       your_wicket = Number(document.getElementById('mblyourwicket').value);
       your_highest_wicket = Number(document.getElementById('mblyourhighestwicket').value);
       economy = Number(document.getElementById('mbleconomy').value);
       dots = Number(document.getElementById('mbldots').value);

       successball = ((your_wicket/highestwicket)*100)+((your_wicket/your_highest_wicket)*100);
       if(economy === 'Yes')
       {
        successball =  successball + 10;
       }
       if(dots === 'Yes')
       {
        successball = successball + 10;
       }
       document.getElementById('mblsuccessbowl').innerHTML = successball;
       console.log(successball);
    }

  return (
    <div className='container text-center  '>
        <div className='row justify-content-center'>
        <div className='col-8 p-5 mt-5 table-bordered shadow d-none d-lg-block'>
            <h2>Batting </h2>
            <br/>
            <br/>
            <form className='form-group' onSubmit={(e)=>{
                e.preventDefault()
                }}>
                <label>Highest Score in Today's Match</label>
                <input type="text" className='form-control text-center' placeholder='Score' id='highest'/>
                <label>Your Score</label>
                <input type="text" className='form-control text-center' placeholder='Score' id='yourscore' />
                <label>Your Highest Score Ever</label>
                <input type="text" className='form-control text-center' placeholder='Score'id='yourhighest' />
                <label>Are you Notout today</label>

                <select className='form-control text-center' id='notout'>
                    <option value='No'>No</option>
                    <option value='Yes'>Yes</option>
                </select>

                <label>Do you Played at Number 8 or Below</label>

                <select className='form-control text-center' id='below8'>
                    <option value='No'>No</option>
                    <option value='Yes'>Yes</option>
                </select>
                <br />
                <button className='btn btn-primary' onClick={()=>SuccessRatioBat()}>Add Data</button>
                <br/>
                <div>
                <br/>
                <h4 id='successrate'></h4>
                </div>
            </form>
        </div>

        <div className='col-12 p-5 mt-5 table-bordered shadow d-block d-sm-block d-md-block d-lg-none'>
        <h2>Batting</h2>
        <br/>
        <br/>
        <form className='form-group' onSubmit={(e)=>{
            e.preventDefault()
            }}>
               <label>Highest Score in Today's Match</label>
                <input type="text" className='form-control text-center' placeholder='Score' id='mblhighest'/>
                <label>Your Score</label>
                <input type="text" className='form-control text-center' placeholder='Score' id='mblyourscore' />
                <label>Your Highest Score Ever</label>
                <input type="text" className='form-control text-center' placeholder='Score'id='mblyourhighest' />

                <label>Are you Notout today</label>

                <select className='form-control text-center' id='mblnotout'>
                    <option value='No'>No</option>
                    <option value='Yes'>Yes</option>
                </select>

                <label>Do you Played at Number 8 or Below</label>

                <select className='form-control text-center' id='mblbelow8'>
                    <option value='No'>No</option>
                    <option value='Yes'>Yes</option>
                </select>
                <br />
                <button className='btn btn-primary' onClick={()=>SuccessRatioBatMbl()} >Add Data</button>
                <br/>
                <div>
                <br/>
                <h4 id='mblsuccessrate'></h4>
                </div>
            </form>
        </div>
        </div>



{/* ---------------------------------------------------------------------------------------- */}


        <div className='row justify-content-center'>
        <div className='col-8 p-5 mt-5 table-bordered shadow d-none d-lg-block'>
            <h2>Bowling</h2>
            <br/>
            <br/>
            <form className='form-group' onSubmit={(e)=>{
                e.preventDefault()
                }}>
                <label>Highest Wickets in Today's Match</label>
                <input type="text" className='form-control text-center' placeholder='highest wickets in today Match' id='highestwicket'/>
                <label>Your Wickets in Today's Match</label>
                <input type="text" className='form-control text-center' placeholder='your wickets today' id='yourwicket' />
                <label>Your Highest Wickets Ever</label>
                <input type="text" className='form-control text-center' placeholder='your highest wickets' id='yourhighestwicket' />
                <label>Top 2 Economical Spell today</label>

                <select className='form-control text-center' id='economy'>
                    <option value='No'>No</option>
                    <option value='Yes'>Yes</option>
                </select>

                <label>Top 2 most Dots Balls Bowled</label>

                <select className='form-control text-center' id='dots'>
                    <option value='No'>No</option>
                    <option value='Yes'>Yes</option>
                </select>
                <br />
                <button className='btn btn-primary' onClick={()=>SuccessRatioBall()}>Add Data</button>
                <br/>
                <div>
                <br/>
                <h4 id='successbowl'></h4>
                </div>
            </form>
        </div>

        <div className='col-12 p-5 mt-5 table-bordered shadow d-block d-sm-block d-md-block d-lg-none'>
        <h2>Bowling</h2>
        <br/>
        <br/>
        <form className='form-group' onSubmit={(e)=>{
                e.preventDefault()
                }}>
                <label>Highest Wickets in Today's Match</label>
                <input type="text" className='form-control text-center' placeholder='highest wickets today' id='mblhighestwicket'/>
                <label>Your Wickets</label>
                <input type="text" className='form-control text-center' placeholder='your wickets today' id='mblyourwicket' />
                <label>Your Highest Wickets Ever</label>
                <input type="text" className='form-control text-center' placeholder='your highest wickets' id='mblyourhighestwicket' />
                <label>Top 2 Economical Spell today</label>

                <select className='form-control text-center' id='mbleconomy'>
                    <option value='No'>No</option>
                    <option value='Yes'>Yes</option>
                </select>

                <label>Top 2 most Dots Balls Bowled</label>

                <select className='form-control text-center' id='mbldots'>
                    <option value='No'>No</option>
                    <option value='Yes'>Yes</option>
                </select>
                <br />
                <button className='btn btn-primary' onClick={()=>SuccessRatioBallMbl()}>Add Data</button>
                <br/>
                <div>
                <br/>
                <h4 id='mblsuccessbowl'></h4>
                </div>
            </form>
        </div>
        </div>


    </div>
  )
}

export default SuccessRate