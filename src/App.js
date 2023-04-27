import { useState } from 'react';
import './App.css';
import { TextField,Button,Stack } from '@mui/material';


function App() {


  // state

const [principal,setprincipal]=useState(0)
const [intrest,setintrest]=useState(0)
const [year,setyear]=useState(0)
const [result,setresult] = useState(0)

  // 
  const handlesubmit=(e)=>{
    // to prevent reloading webpatge
    e.preventDefault()

    if(principal==='' || intrest==='' || year===''){
      alert('please input a valid input')

    }
    else{
      console.log(principal);
      console.log(intrest);
      console.log(year);
      let output=principal*intrest*year/100  
      setresult(output)

    }
  
  
  }
  const handleReset= ()=>{
    setresult(0)
    setprincipal('')
    setintrest('')
    setyear('')

  }
  return (
    <div className="app">
      <div className="container">
        <div className="heading-text">
          <h1 className="headingone">Simple Intrest  </h1>
            <p className="headingtwo">
calculate your simplpe intrest easily
            </p>
        
        </div>
        <div className="totalamount">
          <div className="cardtext">
            <h3 className="total-amount">₹ {result}</h3>
            <p className="total_amount_para">Total simple intrst</p>
          </div>
        </div>
        <form onSubmit={handlesubmit}>

<div className="inputs">

  <div className="input_fields">
  <TextField className="outlined-basic" value={principal || ''} type='number' label="Principal Amount" variant="outlined" onChange={e=>setprincipal(e.target.value)} />
  </div>
  <div className="input_fields">
  <TextField className="outlined-basic" value={intrest || ''} type='number' label=" ₹ Rate of intrest (p.a)%" variant="outlined" onChange={e=>setintrest(e.target.value)} />
  </div>
  <div className="input_fields">
  <TextField className="outlined-basic" value={year || ''} type='number' label=" Time period (yr)" variant="outlined" onChange={e=>setyear(e.target.value)} />
  </div>

</div>

<div className="buttons">
<Stack
  direction="row"
  spacing={2}>
<Button type='submit' className='btn' variant="contained" style={{backgroundColor:'black'}}>Calculate</Button>
<Button onClick={handleReset} className='btn' variant="outlined">Reset</Button>
</Stack>

</div>




        </form>
      </div>
     
    </div>
  );
}

export default App;
