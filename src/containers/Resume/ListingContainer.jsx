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
      question : {
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
      },
      edit: false,

      questionEdit:"",
      priorityEdit: null,
        teaming_stagesEdit: "",
        appearsEdit: "",
        question_typeEdit: "",
        requiredEdit: false,
        conditionsEdit: null,
        frequencyEdit: null,
        role_idEdit: null,
        mapping_idEdit: null,
    }
    this.setRedirect = this.setRedirect.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditSave = this.handleEditSave.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeMappings = this.handleChangeMappings.bind(this)
   
    // this.handleChangeRoles = this.handleChangeRoles.bind(this);
    this.handleChangeRadio = this.handleChangeRadio.bind(this);
    this.handleEdit = this.handleEdit.bind(this)
  }



  async componentDidMount() {
    await this.props.getQuestions();
    await this.props.getRoles();
    await this.props.getMappings();
   //this.handleChangeQuestion(this.props.questiond.question)
  
  }

  UNSAFE_componentWillReceiveProps() {
    this.props.getQuestions();

  }


handleChangeQuestion =(e) =>{
  console.log("value",e)
  this.setState({questionEdit: e.target.value })
  console.log(this.state.questionEdit)
    // ...this.state,
    // question: { ...this.state.question, question: value } })
}

handleChangePriority = (e) =>{

  this.setState({ priorityEdit: e.target.value })
 
}
 

handleChangeTeamingStages = (value) => {
  this.setState({
    ...this.state,
    teaming_stages: { ...this.state, teaming_stages: value } })
}

handleChangeAppears = (e) => {
  this.setState({ appearsEdit: e.target.value })
}

handleChangeQuestionType = (value) => {
  this.setState({
    ...this.state,
    question_type: { ...this.state, question_type: value } })
}


handleChangeRequired = (e) => {
  this.setState({ requiredEdit: e.target.value })
}

handleChangeConditions = (e) => {
  this.setState({ conditionsEdit: e.target.value })
}

handleChangeFrequency = (e) => {
  this.setState({ frequencyEdit: e.target.value })
}

handleChangeRole = (e) => {
  console.log("rolessss===========>",e.target.value)
  this.setState({ role_idEdit: (e.target.value == "both") ? 2 : (e.target.value == "user") ? 1 : (e.target.value == "admin") ? 3 : null })
}


handleChangeMapping = (e) => {
  this.setState({ mappingEdit: e.target.value })
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
    this.setState({open:false})
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


  // handleChangeRoles(value) {
  //   const datas = this.props.roles
  //   const RoleValue = this.props.roles.filter(id => id.name === value)
  //   const SelectedRole = RoleValue.map(r => r.id)
  //   const Id = parseInt(SelectedRole)

  //   this.setState({
  //     ...this.state.question,
  //     question: { ...this.state.question, role_id: Id }
  //   });


  // }

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
        // handleChangeRoles={this.handleChangeRoles} 
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

        questionEdit = {(this.state.questionEdit == "")?this.props.questiond.question:this.state.questionEdit}
        priorityEdit ={(this.state.priorityEdit == null)?this.props.questiond.priority:this.state.priorityEdit}
        teaming_stagesEdit = {(this.state.teaming_stagesEdit == "")?this.props.questiond.teaming_stages:this.state.teaming_stagesEdit}
        appearsEdit = {(this.state.appearsEdit == "")?this.props.questiond.appears:this.state.appearsEdit}
        question_typeEdit = {(this.state.question_typeEdit == "")?this.props.questiond.question_type : this.state.question_typeEdit}
        requiredEdit = {(this.state.requiredEdit == "")?this.props.questiond.required : this.state.requiredEdit}
        conditionsEdit = {(this.state.conditionsEdit == null)?this.props.questiond.conditions : this.state.conditionsEdit}
        frequencyEdit = {(this.state.frequencyEdit == null)?this.props.questiond.frequency: this.state.frequencyEdit}
        role_idEdit = {(this.state.role_idEdit == "")?this.props.questiond.role_id : this.state.role_idEdit}
        mapping_idEdit = {(this.state.mapping_idEdit == "")?this.props.questiond.mapping_id : this.state.mapping_idEdit}
        
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
