import React, { Component } from 'react';
import Swal from 'sweetalert2'
import {Form,FormGroup,Label,Input,Col,Button} from 'reactstrap'
class Contact extends Component  {

constructor(props){
 super(props);
 this.state={
  firstName:"",
  lastName:"",
  TelNum:"",
  Email:"",
  agree:'false',
  contactType:'Tel',
  message:""

 }
 this.handelInput = this.handelInput.bind(this);
 this.handelSubmit = this.handelSubmit.bind(this);

}
handelInput=(event)=>{
 const name=event.target.name;
 const value=event.target.value;
 this.setState({
  [name]:value
 })

}

handelSubmit=(event)=>{
 event.preventDefault()
 console.log(this.state)
 document.getElementById('former_id').reset();

}

submitForm=()=>{
  let name=document.getElementById('firstName').value;
let lname=document.getElementById('lastName').value;
let email=document.getElementById('TelNum').value;

if (name === ""  || lname === '' || email === ''){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Select Form Fields!',
    footer: '<a href="">Why do I have this issue?</a>'
  })

}
else{
  Swal.fire({
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })

}

}
 


 render(){
  return (
   <div className="container">
    <div className="row row-content">
     <div className="col-12">
      <h1>Send Us Your FeedBack</h1>

     </div>
     <div className="col-12 col-md-7">
     <Form onClick={this.handelSubmit} id="former_id">
      
     <FormGroup row>
        <Label htmlFor="firstname" md={2}>First Name</Label>
        <Col md={10}>
         <Input type="text" name="firstName"
         id="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={this.handelInput} />
        </Col>
       </FormGroup>

       <FormGroup row>
        <Label htmlFor="lastName" md={2}>Last Name</Label>
        <Col md={10}>
         <Input type="tesxt" name="lastName" 
         id="lastName"
         placeholder="Last Name"
          value={this.state.lastName}
         onChange={this.handelInput} />
        </Col>
       </FormGroup>

       <FormGroup row>
        <Label htmlFor="TelNum" md={2}>TelNum</Label>
        <Col md={10}>
         <Input type="text" name="TelNum" 
         id="TelNum"
         value={this.state.TelNum}
         onChange={this.handelInput}
         placeholder="TelNumber" />

        </Col>
       </FormGroup>

       <FormGroup row>
        <Label htmlFor="Email" md={2}>Email</Label>
        <Col md={10}>
         <Input type="text" name="Email" 
         id="Email"
         value={this.state.Email}
         onChange={this.handelInput}
         placeholder="Email" />
        </Col>
       </FormGroup>

       <FormGroup row>
        <Col md={{size:6,offset:2}}>
         <FormGroup check>
          <Label check>
           <Input type="checkbox" name='agree'
           checked={this.state.agree}
           onChange={this.handelInput}/>
           <strong>May We Contact You</strong>

          </Label>
         </FormGroup>
        </Col>
        <Col md={{size:3,offset:1}}>
         <Input type="select" name="contactType"
         value={this.state.contactType}
         onChange={this.handelInput}>
         <option>Tel.</option>
         <option>Email</option>
         </Input>
        </Col>
       </FormGroup>

      <FormGroup row>
       <Label htmlFor="message" md={2}> Message</Label>
       <Col md={10}>
        <Input type="textarea" name="message"
        value={this.state.message}
        onChange={this.handelInput} rows="5"/>
       </Col>
      </FormGroup>

      <FormGroup>
       <Col md={10}>
        <Button type="submit" color="primary" onClick={this.submitForm} >Send FeedBack</Button>
       </Col>
      </FormGroup>





      </Form>

     </div>

    </div>
    
 
   </div>
  );
 }
 
}

export default Contact;