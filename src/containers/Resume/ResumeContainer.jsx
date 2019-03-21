import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResumeComponent from '../../components/Resume/ResumeComponent';
import {
  getRoles, getMappings, postQuestions
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
      question: {
        question: "",
        priority: null,
        teaming_stages: "",
        appears: "",
        question_type: "",
        required: true,
        conditions: null,
        frequency: null,
        role_id: null,
        mapping_id: null,

      },
      radio1:false,
      radio2:false,

      value: "",
      teaming_stages: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeMappings = this.handleChangeMappings.bind(this)
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChangeRoles = this.handleChangeRoles.bind(this);
    this.handleChangeRadio = this.handleChangeRadio.bind(this);
     this.handleChangeTrue = this.handleChangeTrue.bind(this);
     this.handleChangeFalse =  this.handleChangeFalse.bind(this);
    //this.handleRadioButton = this.handleRadioButton.bind(this);
  }



 

  handleChange(key, value) {
    this.setState({
      ...this.state,
      question: { ...this.state.question, [key]: value }
    });

  }


handleChangeTrue(e){
  console.log("e",e.currentTarget.value)
  console.log("required",...this.state.question,this.state.required)
  this.setState({
    ...this.state.question,
      question: { ...this.state.question, required: e.currentTarget.value }
  })
}

handleChangeFalse(e){
  console.log("e",e.currentTarget.value)
  console.log("required",...this.state.question,!this.state.required)
  this.setState({
    ...this.state.question,
      question: { ...this.state.question, required: !e.currentTarget.value }
  })
  
}

  
  async onSubmit(e) {
    e.preventDefault();
    const { question } = this.state;
    var questions = {
      question
    }
    await this.props.postQuestions(questions);
    this.props.history.push('/');
  }


  handleChangeMappings(value) {
    const Maps = this.props.mappings;
    const retId = this.props.mappings.filter(id => id.name === value)
    const SelectionId = retId.map(mapp => mapp.id)
    const Id = parseInt(SelectionId);
console.log("---->",this.props)
    this.setState({
      ...this.state.question,
      question: { ...this.state.question, mapping_id: Id }
    });

  }

  handleChangeRadio(key, value) {



    this.setState({
      ...this.state,
      question: { ...this.state.question, [key]: value }
    });
  }


  handleChangeRoles(value) {
    const datas = this.props.roles
    const RoleValue = this.props.roles.filter(id => id.name === value)
    const SelectedRole = RoleValue.map(r => r.id)
    const Id = parseInt(SelectedRole)
console.log("->--", Id )
    this.setState({
      ...this.state.question,
      question: { ...this.state.question, role_id: Id }
    });


  }

  handleChangeOption(e) {
    this.setState({ value: e.target.value });

  }


  async componentDidMount() {
    await this.props.getRoles()
    await this.props.getMappings()
  }

  render() {
    const { question, value, required,radio1,radio2 } = this.state
    
    return (
      <ResumeComponent required={required} value={value} question={question} roles={this.props.roles} mappings={this.props.mappings} handleChange={this.handleChange} handleChangeMappings={this.handleChangeMappings} onSubmit={this.onSubmit} 
      handleChangeRoles={this.handleChangeRoles}
       handleChangeRadio={this.handleChangeRadio}
        handleChangeTrue = {this.handleChangeTrue}
        handleChangeFalse = {this.handleChangeFalse}
       //handleRadioButton = {this.handleRadioButton}
       radio1={radio1}
       radio2 = {radio2}
      />
    )
  }
}

const mapStateToProps = state => ({
  roles: state.user.roles,
  mappings: state.user.mappings,


});

const mapDispatchToProps = dispatch => bindActionCreators({
  getRoles, getMappings, postQuestions
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResumeContainer));

