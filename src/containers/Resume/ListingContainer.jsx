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
        requiredEdit: true,
        conditionsEdit: null,
        frequencyEdit: null,
        role_idEdit: null,
        mapping_idEdit: null,
    }
    this.setRedirect = this.setRedirect.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditSave = this.handleEditSave.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeRadio = this.handleChangeRadio.bind(this);
    this.handleEdit = this.handleEdit.bind(this)
  }



  async componentDidMount() {
    await this.props.getQuestions();
    await this.props.getRoles();
    await this.props.getMappings();
  
  
  }

  //   componentDidUpdate() {
  //   this.props.getQuestions();

  //  }


handleChangeQuestion =(e) =>{
  
  this.setState({questionEdit: e.target.value })
  console.log(this.state.questionEdit)
   
}

handleChangePriority = (e) =>{

  this.setState({ priorityEdit: e.target.value })
 
}
 

handleChangeTeamingStages = (e) => {
  this.setState({ teaming_stagesEdit: e.target.value })
}

handleChangeAppears = (e) => {
  this.setState({ appearsEdit: e.target.value })
}

handleChangeQuestionType = (e) => {
  this.setState({ question_typeEdit: e.target.value })
}


handleChangeRequiredTrue = (e) => {
  
  this.setState({ requiredEdit: e.currentTarget.value })
 
}
handleChangeRequiredFalse = (e) => {
 
  this.setState({ requiredEdit: !e.currentTarget.value})
  
}
handleChangeConditions = (e) => {
  this.setState({ conditionsEdit: e.target.value })
}

handleChangeFrequency = (e) => {
  this.setState({ frequencyEdit: e.target.value })
}

handleChangeRole = (e) => {

  this.setState({ role_idEdit: (e.target.value == "both") ? 2 : (e.target.value == "user") ? 1 : (e.target.value == "admin") ? 3 : null })
}


handleChangeMapping = (e) => {
 
  this.setState({ mapping_idEdit: (e.target.value == "collaboration")? 1 :(e.target.value == "engagement")?2:(e.target.value == "communication")?3:(e.target.value == "trust")?4:(e.target.value == "resources")?5:(e.target.value == "clarity")?6:(e.target.value == "management")?7:null})
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
    
    var questionprops = this.props.questiond.question;
    var priorityprops = this.props.questiond.priority;
    var teamingProps = this.props.questiond.teaming_stages;
    var appearsprops   = this.props.questiond.appears;
    var conditionsprops =this.props.questiond.conditions;
    
    var frequencyprops = this.props.questiond.frequency;
    var roleprops = this.props.questiond.role_id;
    var mapprops =this.props.questiond.mapping_id;
    var reqprops =this.props.questiond.required;



       var question = {
        "required":(this.state.requiredEdit == null)?reqprops:this.state.requiredEdit, 
        "question":(this.state.questionEdit == "")?questionprops:this.state.questionEdit,
       "priority": (this.state.priorityEdit == null)?priorityprops:this.state.priorityEdit,
       "teaming_stages": (this.state.teaming_stagesEdit == ""||null)?teamingProps:this.state.teaming_stagesEdit,
       "appears":  (this.state.appearsEdit == null)?appearsprops:this.state.appearsEdit,
       "question_type": "Rating Scale",
       "conditions": (this.state.conditionsEdit == "" || null)?conditionsprops:this.state.conditionsEdit,
       "frequency": (this.state.frequencyEdit == null)?frequencyprops:this.state.frequencyEdit,
       "role_id": (this.state.role_idEdit == null)? roleprops:this.state.role_idEdit,
       "mapping_id": (this.state.mapping_idEdit == null)?mapprops:this.state.mapping_idEdit,
       }
    var questions = {
        question
    }
    
    await this.props.editQuestions( questions,id);
    this.setState({ open: false, });

  }


  

  handleChangeRadio(value) {

    this.state.required == true

    this.setState({
      ...this.state.question,
      question: { ...this.state.question }
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
        handleChangeRequiredTrue  = {this.handleChangeRequiredTrue } 
        handleChangeRequiredFalse  = {this.handleChangeRequiredFalse } 
        handleChangeConditions = {this.handleChangeConditions}
        handleChangeFrequency = {this.handleChangeFrequency}
        handleChangeRole ={this.handleChangeRole}
        handleChangeMapping ={this.handleChangeMapping}

        questionEdit = {(this.state.questionEdit == "")?this.props.questiond.question:this.state.questionEdit}
        priorityEdit ={(this.state.priorityEdit == null)?this.props.questiond.priority:this.state.priorityEdit}
        teaming_stagesEdit = {(this.state.teaming_stagesEdit == "")?this.props.questiond.teaming_stages:this.state.teaming_stagesEdit}
        appearsEdit = {(this.state.appearsEdit == "")?this.props.questiond.appears:this.state.appearsEdit}
        question_typeEdit = {(this.state.question_typeEdit == "")?this.props.questiond.question_type : this.state.question_typeEdit}
        requiredEdit = {this.state.requiredEdit}
        conditionsEdit = {(this.state.conditionsEdit == null)?this.props.questiond.conditions : this.state.conditionsEdit}
        frequencyEdit = {(this.state.frequencyEdit == null)?this.props.questiond.frequency: this.state.frequencyEdit}
        role_idEdit = {(this.state.role_idEdit == null)?this.props.questiond.role_id : this.state.role_idEdit}
        mapping_idEdit = {(this.state.mapping_idEdit == null)?this.props.questiond.mapping_id : this.state.mapping_idEdit}
        
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
