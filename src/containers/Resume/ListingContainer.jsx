import React, { Component } from 'react';
import ListingComponent from '../../components/Resume/ListingComponent';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../scss/main.css';
import {
  getQuestions, deleteQuestions, getRoles, getMappings, postQuestions, editQuestions
} from "../../actions/action.user";

class ListingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      DeleteOpen:false,
        question: "",
        priority: null,
        teaming_stages: "",
        appears: "",
        question_type: "",
        required: false,
        conditions: null,
        frequency: null,
        role_id: null,
        mapping_id: null,

      edit: false,

    }
    this.setRedirect = this.setRedirect.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditSave = this.handleEditSave.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeMappings = this.handleChangeMappings.bind(this)
   
    this.handleChangeRoles = this.handleChangeRoles.bind(this);
    this.handleChangeRadio = this.handleChangeRadio.bind(this);
    this.handleEdit = this.handleEdit.bind(this)
  }



  async componentDidMount() {
    await this.props.getQuestions();
    await this.props.getRoles();
    await this.props.getMappings();
   this.handleChangeQuestion(this.props.questiond.question)
  
  }

  UNSAFE_componentWillReceiveProps() {
    this.props.getQuestions();

  }


handleChangeQuestion =(value) =>{
  this.setState({
    ...this.state,
    question: { ...this.state.question, question: value } })
}

handleChangePriority = (value) =>{
  this.setState({
    ...this.state,
    priority: { ...this.state, question: value } })
}
 

handleChangeTeamingStages = (value) => {
  this.setState({
    ...this.state,
    teaming_stages: { ...this.state, teaming_stages: value } })
}

handleChangeAppears = (value) => {
  this.setState({
    ...this.state,
    appears: { ...this.state, appears: value } })
}

handleChangeQuestionType = (value) => {
  this.setState({
    ...this.state,
    appears: { ...this.state, question_type: value } })
}


handleChangeRequired = (value) => {
  this.setState({
    ...this.state,
    appears: { ...this.state, required: value } })
}

handleChangeConditions = (value) => {
  this.setState({
    ...this.state,
    conditions: { ...this.state, conditions: value } })
}

handleChangeFrequency = (value) => {
  this.setState({
    ...this.state,
    frequency: { ...this.state, frequency: value } })
}

handleChangeRole = (value) => {
  this.setState({
    ...this.state,
    role_id: { ...this.state, role_id: value } })
}


handleChangeMapping = (value) => {
  this.setState({
    ...this.state,
    mapping_id: { ...this.state, mapping_id: value } })
}






  setRedirect = () => {
    this.props.history.push('/')

  }

  async handleDelete(id) {

    await this.props.deleteQuestions(id);
  }


  async  handleEdit(id, value) {
    this.setState({ edit: true, id });
  }


 

  handleChange(key, value) {
    this.setState({
      ...this.state,
      question: { ...this.state.question, [key]: value }
    });

  }


  async  handleEditSave(id) {

    const { question } = this.state;
    var questions = {
      question: {
        question
      }
    }
    await this.props.editQuestions( questions,id);


  }


  handleChangeMappings(value) {
    const Maps = this.props.mappings;
    const retId = this.props.mappings.filter(id => id.name === value)
    const SelectionId = retId.map(mapp => mapp.id)
    const Id = parseInt(SelectionId);

    this.setState({
      ...this.state.question,
      question: { ...this.state.question, mapping_id: Id }
    });

  }

  handleChangeRadio(value) {

    this.state.required == true

    this.setState({
      ...this.state.question,
      question: { ...this.state.question }
    });
  }


  handleChangeRoles(value) {
    const datas = this.props.roles
    const RoleValue = this.props.roles.filter(id => id.name === value)
    const SelectedRole = RoleValue.map(r => r.id)
    const Id = parseInt(SelectedRole)

    this.setState({
      ...this.state.question,
      question: { ...this.state.question, role_id: Id }
    });


  }

  handleChangeOption(e) {
    this.setState({ value: e.target.value });

  }



  onOpenModal = () => {
    this.setState({ open: true });
    };
    
    onCloseModal = () => {
    this.setState({ open: false});
    };

  render() {

    const { question, value, edit, id,open } = this.state


    return (
      <div>



        <ListingComponent id={id} open={open} questions={this.props.question} question={question} roles={this.props.roles} mappings={this.props.mappings} handleChange={this.handleChange} 
        handleChangeMappings={this.handleChangeMappings} 
        onSubmit={this.onSubmit} 
        handleChangeRoles={this.handleChangeRoles} 
        handleChangeRadio={this.handleChangeRadio} 
        setRedirect={this.setRedirect} 
        handleDelete={this.handleDelete} 
        handleEdit={this.handleEdit} 
        edit={edit} 
        handleEditSave={this.handleEditSave} 
        onOpenModal ={this.onOpenModal}
        onCloseModal= {this.onCloseModal}
        handleChangeQuestion = {this.handleChangeQuestion} 
        handleChangePriority ={this.handleChangePriority}
        handleChangeTeamingStages ={this.handleChangeTeamingStages}
        handleChangeAppears = {this.handleChangeAppears}
        handleChangeQuestionType = {this.handleChangeQuestionType} 
        handleChangeRequired  = {this.handleChangeRequired } 
        handleChangeConditions = {this.handleChangeConditions}
        handleChangeFrequency = {this.handleChangeFrequency}
        handleChangeRole ={this.handleChangeRole}
        handleChangeMapping ={this.handleChangeMapping}

          />
      </div>
    )
  }
}
const mapStateToProps = state => ({

  question: state.user.question,
  roles: state.user.roles,
  mappings: state.user.mappings,
  questiond: state.user.questiond,

});

const mapDispatchToProps = dispatch => bindActionCreators({
  getQuestions, deleteQuestions, getRoles, getMappings, postQuestions, editQuestions

}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingContainer));
