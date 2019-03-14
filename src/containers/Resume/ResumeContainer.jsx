import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResumeComponent from '../../components/Resume/ResumeComponent';
import {
  getRoles,getMappings,postQuestions
} from '../../actions/action.user';
import 'react-telephone-input/lib/withStyles';
import './resume.css';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import 'react-image-crop-component/style.css';


class ResumeContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      question:{
          question:"",
          priority:null,
          teaming_stages:"",
          appears:"",
          question_type:"",
          required:false,
          conditions:null,
          frequency:null,
          role_id:null,
          mapping_id:null,

      },
      
      value :"",
      teaming_stages:""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeMappings = this.handleChangeMappings.bind(this)
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChangeRoles =  this.handleChangeRoles.bind(this);
    this.handleChangeRadio = this.handleChangeRadio.bind(this)
  }

  handleChange(key, value) {
    this.setState({
      ...this.state,
      question: { ...this.state.question, [key]: value }
    });
     
  }

  async onSubmit(e) {
    e.preventDefault();
    const { question } = this.state;
    var questions = {
      question: {
        question
      }
    }
    await this.props.postQuestions(questions);
    this.props.history.push('/view');
  }


handleChangeMappings(value){
  const Maps = this.props.mappings;
  const retId = this.props.mappings.filter(id=>id.name === value)
  const SelectionId = retId.map(mapp=>mapp.id)
  const Id = parseInt(SelectionId);
  console.log("mapping",Id);
  this.setState({
    ...this.state.question,
    question: { ...this.state.question, mapping_id: Id }
  });

}

handleChangeRadio(value){

  this.state.required== true

  this.setState({
    ...this.state.question,
    question: { ...this.state.question }
  });
}


handleChangeRoles(value){
 const datas = this.props.roles
 const RoleValue = this.props.roles.filter(id=>id.name === value)
 const SelectedRole = RoleValue.map(r=>r.id)
 const Id =parseInt(SelectedRole)
 console.log("====>",SelectedRole);
 this.setState({
  ...this.state.question,
  question: { ...this.state.question, role_id: Id }
});


}

handleChangeOption(e){
  this.setState({value: e.target.value});

}


  async componentDidMount() {
    await this.props.getRoles()
    await this.props.getMappings()
      }

  render() {
    const {question,value}=this.state
    console.log("value",value)
    return (
      <ResumeComponent value={value} question={question} roles={this.props.roles} mappings= {this.props.mappings} handleChange={this.handleChange} handleChangeMappings={this.handleChangeMappings} onSubmit={this.onSubmit} handleChangeRoles={this.handleChangeRoles} handleChangeRadio = {this.handleChangeRadio}
      />
    )
  }
}

const mapStateToProps = state => ({
  roles:state.user.roles ,
  mappings:state.user.mappings ,
  

});

const mapDispatchToProps = dispatch => bindActionCreators({
 getRoles ,getMappings,postQuestions
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResumeContainer));

