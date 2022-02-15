import React,{useState} from 'react'
import "./modal.css"




function Modal() {
    const [state , setState] = useState({
        showme:true
    })


    const showDeatils =() =>{
        setState({showme:!state.showme})
        console.log(state);
    }


  return (
  <>
<div className='container'>
<div className='header'>
    <h1>ROI CALLCULATOR</h1>
</div>
<div className='header_button'>
<h4>CAKE</h4>
<label class="switch">
  <input type="checkbox" />
  <span class="slider round"></span>
</label>
<h4>USD</h4>
</div>
<div className='header_input'>
    <input type="text" id='name' />
</div>
<div className='input_button'>
 <div className='input_suggest'>
     <h5>$100</h5>
     <h5>$100</h5>
 </div>

</div>
<div className='timeframe'>
    <div className='timeframe_header'>
        <h3>TimeFrame</h3>
    </div>
    <div className='timeframe_btn'>
      <h4>1 Day</h4>
      <h4>7 Day</h4>
      <h4>30 Day</h4>
      <h4>1 Year</h4>
      <h4>5 Year</h4>
      
    </div>
</div>
<div className='encrypt_apy'>
    <div className='apy_text'>
    <h3>Enable Accelerated APY</h3>
    </div>
<div className='apy_toggle'>
<label class="switch">
  <input type="checkbox" />
  <span class="slider round"></span>
</label>
</div>
</div>

<div className='timeframe'>
    <div className='timeframe_header'>
        <h3>Select Tier</h3>
    </div>
    <div className='timeframe_btn'>
      <h4>Tier 1</h4>
      <h4>Tier 2</h4>
      <h4>Tier 3</h4>
      <h4>Tier 4</h4>
      <h4>Tier 5</h4>
      
    </div>
</div>

<div className='header_input'>
    <h5>ROI At Current Rates</h5>
    <input type="text" id='name' />
    <h5>~0.0000 Cake + 0.000 DON</h5>
</div>
<div className='hide'>
    <h5 onClick={()=>(showDeatils())}>Hide Details ^</h5>

</div>

{
state.showme?
<div className='details_section hidden_list'>
    <div className='apy_detail' >
      <h5 >APY</h5>
      <h4>9.0%</h4>
    </div>
    <div className='details_list '>
        <ul>
            <li>Calculate based on current rates </li>
            <li>All Figuress estimated provided for your convinience</li>
        </ul>
    </div>
</div>
:
null
}
</div>
  </>
  )
}

export default Modal