import React, { Component } from 'react';
import {Form, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getQuestions,getIndQuestions
} from "../../actions/action.user";
import Modal from 'react-responsive-modal';


class ListComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
          open: false,  
            
        }
       
    }

    async onOpenModal(){
      await this.props.getIndQuestions();
      this.setState({ open: true });
    
    };

    onCloseModal = () => {
      this.setState({ open: false });
    };

    async componentDidMount() {
      await this.props.getQuestions();
   
    }

    

    render(){
        const { setRedirect,question,handleDelete,handleEdit,edit,id,handleChange,handleChangeRoles,roles,handleChangeRadio,handleChangeMappings,mappings,handleEditSave,
          onCloseModal, handleChangeQuestion,
          handleChangePriority,
          handleChangeTeamingStages,
          handleChangeAppears,
          handleChangeQuestionType ,
          handleChangeRequiredTrue,
          handleChangeRequiredFalse,
          handleChangeConditions,
          handleChangeFrequency,
          handleChangeRole,
          handleChangeMapping,
          teaming_stagesEdit,
          appearsEdit,
          question_typeEdit,
          requiredEdit,
          conditionsEdit,
          frequencyEdit,
          role_idEdit,
          mapping_idEdit,
          questionEdit ,
          priorityEdit 
        
        }=this.props;
        const { open } = this.state;
        return(
            <div > 
                
                <h6 className="main-title text-uppercase">Question List</h6>
                <Button type="warning" className="btn btn-red float-right" onClick={setRedirect}  >+Create</Button>
                <div className="card-box">
               <div className="form-group mb-0">
               <div className="checkbx-custom filter-inline p-3">
                
               </div>
               
             {/* Table */}
             <table className="table table-mob-res">
               <thead>
                 <tr>
                   <th>
                   Question:
                   </th>
                   <th>
                   Priority:
                   </th>
                   <th>
                   Teaming-Stages:
                   </th>
                   <th>
                   Appear:
                   </th>
                   <th>
                   Frequency:
                   </th>
                   <th>
                   Type:
                   </th>
                   <th>
                   Role:
                   </th>
                   <th>
                   Required:
                   </th>
                   <th>
                   Conditions:
                   </th>
                   <th>
                   Mapping:
                   </th>
                 </tr>
               </thead>
               <tbody>
                 {question.map(e=>
                 <tr>
                   <td data-head="Slno">
                     
                       <label className="mb-0">
                        
                         {e.index}
                       </label>
                     
                 
                   {e.question}
                   </td>
                   
                   <td data-head="For Product">
                   {e.priority}
                   </td>

                
                   <td data-head="Description">
                     {e.teaming_stages}
                   </td>


                   <td data-head="Is Acceptable">
                     {e.appears}
                   </td>

                   <td data-head="Is Acceptable">
                     {e.frequency}
                   </td>

                   <td data-head="Is Acceptable">
                     {e.question_type}
                   </td>


                   <td data-head="Is Acceptable">
                     {(e.role_id==3)?"admin":(e.role_id==1)?"user":(e.role_id==2)?"both":null}
                   </td>

                
                   <td data-head="required">
                     {e.required}
                   </td>


                   <td data-head="conditions">
                     {e.conditions}
                   </td>


                   <td data-head="mapping">
                   
                     {(e.mapping_id ==1)? "collaboration":(e.mapping_id == 2) ? "engagement":(e.mapping_id == 3) ? "communication":(e.mapping_id == 4)?"trust":(e.mapping_id == 5)?"resources":(e.mapping_id == 6)?"clarity":null}
                   </td>

                   
                   <td data-head="Action">
                     <button className="btn btn-theme btn-sm" onClick={()=>handleDelete(e.id)}>DELETE</button>
                     {(edit == true)?<button className="btn btn-theme btn-sm" >Save</button>:
                     <button className="btn btn-theme btn-sm" onClick={()=>{this.onOpenModal() ,localStorage.setItem ("id",e.id)}}>EDIT</button>
                  
                     
                     }
                   </td>
                 </tr>
                )}
                 {/* tr END */}
               </tbody>
             </table>
             {/* Table END */}
           </div>

</div>

<Modal 
   open={open} onClose={this.onCloseModal}
    >
  <section className="eo-content m-content" style={{Padding:"0px"}}>

<div className=" row ">
        <div className=" ">
          <div className="box left p-2">
        <div className="box-title">
          <h3>Edit</h3>
        </div>
        <Form >
          <div className="box-row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 left">
              <span>Question:</span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 left text-right">

              <div className="right">
                <div className="form-group">
                  <input type="text"
                   className="form-control" 
                   name="question"
                   value={questionEdit}
                   onChange={(e) =>
                     handleChangeQuestion(e)
                   }
                    />
                </div>
              </div>
            </div>
          </div>


          <div className="box-row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 left">
              <span>Question Type:</span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 left text-right">

              <div className="right">
                <div className="form-group">
                <select className="options" value={question_typeEdit} onChange={e =>handleChangeQuestionType(e.target.value)}>
                    <option value="volvo">---</option>
                    <option value={question_typeEdit}>{question_typeEdit}</option>

                  </select>
                </div>
              </div>
            </div>
          </div>



          <div className="box-row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 left">
              <span>Priority:</span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 left text-right">

              <div className="right">
                <div className="form-group">
                <input type="number" className="form-control" 
                name="priority" 
                value={priorityEdit}
                   onChange={e =>
                     handleChangePriority( e)
                   }
                id="ques" />
                </div>
              </div>
            </div>
          </div>


          <div className="box-row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 left">
              <span>Teaming-Stages:</span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 left text-right">

              <div className="right">
                <div className="form-group">
                  <select className="options" value={teaming_stagesEdit}  onChange={e =>handleChangeTeamingStages(e)}>
                    <option value="volvo">---</option>
                    <option value="norming">Norming</option>
                    <option value="forming">Forming</option>
                    <option value="performing">Performing</option>
                    <option value="all">All</option>

                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="box-row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 left">
              <span>Appear:</span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 left text-right">

              <div className="right">
                <div className="form-group">
                  <input type="text"  className="form-control" value={appearsEdit} name="appears" onChange={e =>handleChangeAppears(e)}  />
                </div>
              </div>
            </div>
          </div>

          <div className="box-row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 left">
              <span>Frequency:</span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 left text-right">

              <div className="right">
                <div className="form-group">
                  <input type="number" className="form-control" 
                  name="frequency"
                  value={frequencyEdit}
                  onChange={e =>handleChangeFrequency(e)}  />
                </div>
              </div>
            </div>
          </div>

          <div className="box-row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 left">
              <span>Role:</span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 left text-right">

              <div className="right">
                <div className="form-group">
                  <select className="options"  value={(role_idEdit==2)?"both":(role_idEdit==1)?"user":(role_idEdit == 3)?"admin":null}
                  onChange={(e)=>
                    handleChangeRole(e)
                  } >
                  <option >-----</option>
                  {(roles).map(e=>
                    <option >{e.name}</option> 
                    ) }
                  </select>
                 
                </div>
              </div>
            </div>
          </div>



          <div className="box-row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 left">
              <span>Required:</span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 left text-right">

              <div className="right">
                <div className="form-group"   >
                  
                    <input type="radio" name="true"    value = {requiredEdit} checked = {requiredEdit} onChange={handleChangeRequiredTrue} />  <span>True</span>
                    <input type="radio" name="false"  value =  {!requiredEdit} checked = {!requiredEdit}  onChange={handleChangeRequiredFalse}  />  <span>False</span>

                  
                </div>
              </div>
            </div>
          </div>


          <div className="box-row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 left">
              <span>Conditions:</span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 left text-right">

              <div className="right">
                <div className="form-group">
                  <select className="options" value={conditionsEdit}  onChange={(e) =>handleChangeConditions(e)}>
                  <option value="-----">-----</option>
                  <option value="always">always</option>
                  <option value="rare">rare</option>
                  <option value="medium">Medium</option>
                    
                  </select>
                </div>
              </div>
            </div>
          </div>


          <div className="box-row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 left">
              <span>Mapping:</span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 left text-right">

              <div className="right">
                <div className="form-group">
                <select className="options" 
                  name="mappings"
                  value={(mapping_idEdit == 1) ? "collaboration":(mapping_idEdit == 2) ? "engagement":(mapping_idEdit == 3) ? "communication":(mapping_idEdit == 4)?"trust":(mapping_idEdit == 5)?"resources":(mapping_idEdit == 6)?"clarity":(mapping_idEdit == 7)?"management":null}
                  onChange={(e)=>
                    handleChangeMapping(e)
                  } >
                  <option >-----</option>
                  {(mappings).map(e=>
                    <option >{e.name}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</section>
        
         <div className="modal-footer text-center justify-content-center">
           <button type="button" className="btn btn-info btn-radius-0 shadow min-w"  onClick={()=>{
             handleEditSave();
             this.onCloseModal()}} >Ok</button>
           <button type="button" className="btn btn-theme btn-radius-0 shadow min-w" onClick={this.onCloseModal}>Cancel</button>
         </div>
         </Modal>

</div>
        );
    }
}


const mapStateToProps = state => ({
  questiond: state.user.questiond,
  question:state.user.question  ,
  onCloseModal: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,

  
  
  });
 

  const mapDispatchToProps = dispatch => bindActionCreators({
    getQuestions,getIndQuestions
    
  }, dispatch);

    ListComponent.propTypes = { 
    onCloseModal: PropTypes.func.isRequired,
    onOpenModal: PropTypes.func.isRequired,
    }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListComponent));

