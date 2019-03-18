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
          handleChangeRequired,
          handleChangeConditions,
          handleChangeFrequency,
          handleChangeRole,
          handleChangeMapping}=this.props;
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
                     #
                   </th>
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
                     
                   {/* </td>{(edit==true && id==e.id )?<td data-head="Defect_Class">
                  <input type="text"  className="form-control" defaultValue={e.question} />
                   </td>:<td data-head="Defect_Class"> */}
                   {e.question}
                   </td>
                   
{/* 
                   {(edit==true && id == e.id )?
                   <td data-head="Defect_Class">
                    <input type="number"   className="form-control" defaultValue={e.priority} /></td>: */}
                   <td data-head="For Product">
                   {e.priority}
                   </td>
{/* 
                   {(edit==true && id==e.id )?<td data-head="Defect_Class">
                      <select className="options" value={question.teaming_stages} defaultValue={e.teaming_stages}  onChange={e =>handleChange("teaming_stages",e.target.value)}>
                        <option value="volvo">---</option>
                        <option value="norming">Norming</option>
                        <option value="forming">Forming</option>
                        <option value="performing">Performing</option>
                        <option value="all">All</option>

                      </select>
                    </td>: */}
                
                   <td data-head="Description">
                     {e.teaming_stages}
                   </td>


                   {/* {(edit==true && id==e.id )?<td data-head="Defect_Class">
                   
                   <input type="text"  className="form-control" name="appears" defaultValue={e.appears} onChange={e =>handleChange("appears",e.target.value)}  />
                   </td>: */}
                   <td data-head="Is Acceptable">
                     {e.appears}
                   </td>


                   {/* {(edit==true && id==e.id )?<td data-head="Defect_Class">
                   <input type="number" className="form-control" defaultValue={e.frequency}
                      name="frequency"
                      onChange={e =>handleChange("frequency",e.target.value)}  />
                   </td>: */}
                   <td data-head="Is Acceptable">
                     {e.frequency}
                   </td>
{/* 
                   {(edit==true && id==e.id )?<td data-head="Defect_Class"><select className="options" value={question.question_type} defaultValue={e.question_type} onChange={e =>handleChange("question_type",e.target.value)}>
                        <option value="volvo">---</option>
                        <option value="Rating Scale">Rating Scale</option>

                      </select></td>: */}
                   <td data-head="Is Acceptable">
                     {e.question_type}
                   </td>

{/* 
                   {(edit==true && id==e.id )?<td data-head="Defect_Class">
                   
                   <select className="options"  defaultValue={e.role_id} value={question.roles}
                      onChange={(e)=>
                        handleChangeRoles(e.target.value)
                      } >
                     
                      {(roles).map(e=>
                        <option >{e.name}</option> 
                        ) }
                      </select>
                    </td>: */}
                   <td data-head="Is Acceptable">
                     {e.role_id}
                   </td>

                   {/* {(edit==true && id==e.id )?<td data-head="Defect_Class">
                   <div className="form-group" value={question.required} defaultValue={e.required} onChange={e =>handleChangeRadio("required",e.target.value)}>
                      
                        <input type="radio" name="required" value="True" checked />  <span>True</span>
                        <input type="radio" name="required" value="False"  />  <span>False</span>

                      
                    </div>
                   
                   </td>: */}
                   <td data-head="Is Acceptable">
                     {e.required}
                   </td>

{/* 
                   {(edit==true && id==e.id )?<td data-head="Defect_Class">
                   <select className="options" value={question.conditions} defaultValue={e.conditions}  onChange={(e) =>handleChange("conditions",e.target.value)}>
                      
                      <option>always</option>
                      <option>rare</option>
                      <option>Medium</option>
                        
                        

                      </select>
                   
                   </td>: */}
                   <td data-head="Is Acceptable">
                     {e.conditions}
                   </td>


{/* 
                   {(edit == true && id == e.id )?<td data-head="Defect_Class">
                   
                   <select className="options" 
                      name="mappings"
                      defaultValue = {question.mappings}
                      value = {question.mappings}
                      onChange = {(e) =>
                        handleChangeMappings(e.target.value)
                      } >
                    
                      {(mappings).map(e=>
                        <option > {e.name} </option>)}
                      </select>
                   
                   </td>: */}
                   <td data-head="Is Acceptable">
                     {e.mapping_id}
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
   open={open} onClose={this.onCloseModal} >
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
                   value={question.question}
                   onChange={e =>
                     handleChangeQuestion(e.target.name, e.target.value)
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
                <select className="options" value={question.question_type} onChange={e =>handleChangeQuestionType("question_type",e.target.value)}>
                    <option value="volvo">---</option>
                    <option value="Rating Scale">Rating Scale</option>

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
                value={question.priority}
                   onChange={e =>
                     handleChangePriority(e.target.name, e.target.value)
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
                  <select className="options" value={question.teaming_stages}  onChange={e =>handleChangeTeamingStages("teaming_stages",e.target.value)}>
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
                  <input type="text"  className="form-control" name="appears" onChange={e =>handleChangeAppears("appears",e.target.value)}  />
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
                  onChange={e =>handleChangeFrequency("frequency",e.target.value)}  />
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
                  <select className="options"  value={question.roles}
                  onChange={(e)=>
                    handleChangeRoles(e.target.value)
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
                <div className="form-group" onChange={e => handleChangeRequired(e)} >
                  
                    <input type="radio" name="true"   value={true} defaultChecked  />  <span>True</span>
                    <input type="radio" name="false"  value={false}  />  <span>False</span>

                  
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
                  <select className="options" value={question.conditions}  onChange={(e) =>handleChangeConditions("conditions",e.target.value)}>
                  <option >-----</option>
                  <option>always</option>
                  <option>rare</option>
                  <option>Medium</option>
                    
                    

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
                  value={question.mappings}
                  onChange={(e)=>
                    handleChangeMappings(e.target.value)
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
           <button type="button" className="btn btn-info btn-radius-0 shadow min-w"  onClick= {this.props.onCloseModal}>Ok</button>
           <button type="button" className="btn btn-theme btn-radius-0 shadow min-w" onClick={this.props.onCloseModal}>Cancel</button>
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

