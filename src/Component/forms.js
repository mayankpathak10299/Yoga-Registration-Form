import React from 'react';
import { useState } from 'react';
const Forms=()=>{
const[inputs,setInputs]=useState({
  fname:" ",
  lname:" ",
  email:" ",
  phnno:" ",
  age:" ",
  make:false
});
const[checked,setchecked]=useState({
      check1:"6-7 AM "
});
/*const[payment,setpayment]=useState({
      make:false

})*/


          const makepayment=(e)=> {
            e.preventDefault();
                alert("Your payment has been done successfully!")
          }
          
        
            const inputEvent=(event)=>{
              const value=event.target.value;
              const name=event.target.name;
              setInputs(values=>({...values,[name]:value}))
            }
          const handlecheckbox=(event)=>{
                 const value=event.target.value;
                 const name=event.target.name;
                setchecked((values=>({...values,[name]:value})));

                 }
        /*   const forpayment=(event)=>{
                  const value=event.target.value;
                  const name=event.target.name;

                  setpayment((values=>({...values,[name]:value})))
           }  */    
          const postData=async(e)=>{
                     e.preventDefault();
                     const { fname,lname,email,phnno,age ,make}=inputs;
                      const{check1}=checked;
                     // const{make}=payment;
                     if((fname&&lname&&email&&phnno&&age&&check1&&make)){

                 const response  = await fetch("https://flexmoneyproject-default-rtdb.firebaseio.com/flecmoneyform.json",
                 {method:"POST",
                  headers:{
                    "Content-Type":"application/json",
                  },
                  body:JSON.stringify({
                    fname,
                    lname,
                    email,
                    phnno,
                    age,
                    check1,
                    make
                  
                  }),
                 }
                  );

                  if(response){
                    setInputs({
                      fname:" ",
                      lname:" ",
                      email:" ",
                      phnno:" ",
                      age:" ",
                      make:" "
                    })
                    setchecked({
                      check1:" "
                    })
                    
                    
                    alert("Data stored successfully")
                  }
                }
                else{
                  alert("plz fill all the data");
                }
          };
      
        return(
        <> 
        <form  method="POST">
          <div  className="main-div">
             <div className="intro"> 
             <label htmlFor="fname" >First name:
             <input type="text" required
                 name="fname"
                 value={inputs.fname||""}
                 onChange={inputEvent}
                  autoComplete="off"
               /></label><br/>

             <label htmlFor="lname">Last Name:
             <input type="text" required
             name="lname"
             value={inputs.lname}
             onChange={inputEvent}
              autoComplete="off"
             />
             </label>
             <br/>
             <label htmlFor="email">Enter your E-mail:
             <input type="email" required name="email" value={inputs.email}        
             onChange={inputEvent} autoComplete="off"/>
             </label>
             <br/>
             <label htmlFor="phone">Enter your phone number:
             <input type="tel" required name="phnno" value={inputs.phnno}
             onChange={inputEvent}  autoComplete="off"/>
             </label>
             <br/>
             </div>
             <div className="ageno">
             <h5>Note: Participants age must be lie between in 18-65</h5>
             <label>Enter your age:
             <input 
               type="number" required 
               min="18"
               max="65"
               name="age" 
               value={inputs.age}
               onChange={inputEvent} 
               autoComplete="off"
             />
             </label>  
             </div>
            <div className="payment">
             <input type="checkbox" name="make" value={inputs.make}  onClick={inputEvent}
                  autoComplete="off"/>Payment of ₹ 500-/PM<br/>
            </div>
             
            <div className="choose">  
             <h5>Chosee the batch you are interested in:</h5>
              <input type="radio"  name="check1" value={checked.check1} onRadioChange={handlecheckbox} autoComplete="off"   ></input>6-7AM<br/>
              <input type="radio"  name="check1" onRadioChange={handlecheckbox}  value={checked.check1} autoComplete="off"  ></input>7-8AM<br/>
              <input type="radio" name="check1" onRadioChange={handlecheckbox}  value={checked.check1} autoComplete="off"  ></input>8-9AM<br/>
              <input type="radio"   name="check1" onRadioChange={handlecheckbox} value={checked.check1} autoComplete="off"  ></input>5-6PM<br/>
              <span> <br></br></span>
              <h5>Note:"Participants can shift from one batch to another in different months but in same month they need to be in same batch"</h5>
             </div>

               <button onClick={makepayment}>Payment</button>
               <button onClick={postData}>Submit</button>
               <button type="reset">Reset</button>
               </div>
        
        </form>
        

        </>
      

        )


}
export default Forms