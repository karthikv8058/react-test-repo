import React, { Component,createRef } from 'react';
import { render } from 'react-dom';
import {withRouter} from 'react-router-dom';
import './style.css';
import { connect } from "react-redux";
import Button from '../../Components/Button'

class Screen3 extends Component {
  constructor() {
    super();
    
    this.nameRef=createRef();

    this.state = {
      imagePreviewUrl:'',
      isFileUpload:false,
      nameSize:0,
      fname:'',
      ageVal:0,
      ageValText:'',
      ageValTextSize:0,
      email:'',
      emailSize:0,
      tel:'',
      telSize:0,
      states:'',
      statesSize:0,
      interests:[],
      interestsLists:'',
      interestsListsSize:0,
      isSubscribe:false,
    };

    

  }

  UNSAFE_componentWillMount(){
      this.setState({
        imagePreviewUrl:this.props.user.imagePreviewUrl,
        fname:this.props.user.fname,
        ageVal:this.props.user.ageVal,
        email:this.props.user.email,
        tel:this.props.user.tel,
        states:this.props.user.states,
        interests:this.props.user.interests,
        isSubscribe:this.props.user.isSubscribe,
      });
      

      if(this.props.user.ageVal>13 && this.props.user.ageVal<=19){
        this.setState({
          ageValText:'above 13 years',
        });
      }else if(this.props.user.ageVal>19 && this.props.user.ageVal<=29){
        this.setState({
          ageValText:'above 20 years',
        });
      }else if(this.props.user.ageVal>29 && this.props.user.ageVal<=45){
        this.setState({
          ageValText:'above 30 years',
        });
      }else {
        this.setState({
          ageValText:'above 45 years',
        });
      }

      if(this.props.user.interests.length>0){
        this.setState({
          interestsLists:this.props.user.interests.toString(),
          interestsListsSize:this.props.user.interests.toString().length,
        })
      }
    }

    handleSubmit = (e) =>{
  
      e.preventDefault();
      this.props.history.push('/Screen2');
  
    }


  render() {

    let {
      imagePreviewUrl,
      isFileUpload,
      fname,
      ageVal,
      ageValText,
      states,
      email,
      tel,
      interestsLists,
      isSubscribe,
        } = this.state;

    let telSize = this.state.tel.length; 
    let nameSize= this.state.fname.length; 
    let emailSize= this.state.email.length; 
    let interestsListsSize= this.state.interestsLists.length;
    let statesSize= this.state.states.length;
    let ageValTextSize=this.state.ageValText.length;
   

    return (
      <div className="container p-5">
        <div className="row text-dark">
          <div className="col-md-4 text-center border-right border-primary">
          <input type="file" hidden ref={this.fileUploadRef} ref={this.nameRef} onChange={this.fileUploadInputChange}/>
            <button style={{backgroundImage:`url(${imagePreviewUrl})`}} onClick={this.fileUploadAction} className="btn btn-primary btn-upload-photo mx-auto">
            </button>
            <div className="">
              <center>
                <button className="btn btn-link text-theme mt-3 d-block">Edit photo</button>
                <button className="btn btn-link text-theme d-block" onClick={(e)=>this.handleSubmit(e)}>Edit profile</button>
              </center>
            </div>
          </div>
          <div className="col-md-8 mt-5 mt-md-0 profile-text">
            <div>
                <p>
                I am <input type="text" size={nameSize} className="text-theme-profile" value={fname} disabled={false}/> and  I am <input size={ageValTextSize} type="text" className="text-theme-profile" value={ageValText} disabled/> and you can send your emails to <input size={emailSize} type="text" className="text-theme-profile" value={email} disabled/>. I lives in the state of <input size={statesSize} type="text" className="text-theme-profile" value={states} disabled/>. I likes to play <input size={interestsListsSize} type="text" className="text-theme-profile" value={interestsLists} disabled/>. {isSubscribe&&' And please send me the news letter.'} Please reach out to me on my phone <input size={telSize} type="text" className="text-theme-profile" value={tel} disabled/>.
                </p>
            </div>
            <center>
            <Button title="Agree" />
            </center>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    user:state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
   
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Screen3);
