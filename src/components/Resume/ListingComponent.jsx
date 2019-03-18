import React, { Component } from 'react';
import { Jumbotron, Button,Modal } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getQuestions
} from "../../actions/action.user";

class ListComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
            
        }
       
    }
    async componentDidMount() {
      await this.props.getQuestions();
      const questions =this.props.question
    }

    

    render(){
        const { setRedirect,question,handleDelete,handleEdit,edit,id,handleChange,handleChangeRoles,roles,handleChangeRadio,handleChangeMappings,mappings,handleEditSave}=this.props;
   
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
                     
                   </td>{(edit==true && id==e.id )?<td data-head="Defect_Class">
                  <input type="text"  className="form-control" defaultValue={e.question} />
                   </td>:<td data-head="Defect_Class">
                   {e.question}
                   </td>}
                   

                   {(edit==true && id==e.id )?
                   <td data-head="Defect_Class">
                    <input type="number"   className="form-control" defaultValue={e.priority} /></td>:
                   <td data-head="For Product">
                   {e.priority}
                   </td>}

                   {(edit==true && id==e.id )?<td data-head="Defect_Class">
                      <select className="options" value={question.teaming_stages} defaultValue={e.teaming_stages}  onChange={e =>handleChange("teaming_stages",e.target.value)}>
                        <option value="volvo">---</option>
                        <option value="norming">Norming</option>
                        <option value="forming">Forming</option>
                        <option value="performing">Performing</option>
                        <option value="all">All</option>

                      </select>
                    </td>:
                
                   <td data-head="Description">
                     {e.teaming_stages}
                   </td>}


                   {(edit==true && id==e.id )?<td data-head="Defect_Class">
                   
                   <input type="text"  className="form-control" name="appears" defaultValue={e.appears} onChange={e =>handleChange("appears",e.target.value)}  />
                   </td>:
                   <td data-head="Is Acceptable">
                     {e.appears}
                   </td>}


                   {(edit==true && id==e.id )?<td data-head="Defect_Class">
                   <input type="number" className="form-control" defaultValue={e.frequency}
                      name="frequency"
                      onChange={e =>handleChange("frequency",e.target.value)}  />
                   </td>:
                   <td data-head="Is Acceptable">
                     {e.frequency}
                   </td>}

                   {(edit==true && id==e.id )?<td data-head="Defect_Class"><select className="options" value={question.question_type} defaultValue={e.question_type} onChange={e =>handleChange("question_type",e.target.value)}>
                        <option value="volvo">---</option>
                        <option value="Rating Scale">Rating Scale</option>

                      </select></td>:
                   <td data-head="Is Acceptable">
                     {e.question_type}
                   </td>}


                   {(edit==true && id==e.id )?<td data-head="Defect_Class">
                   
                   <select className="options"  defaultValue={e.role_id} value={question.roles}
                      onChange={(e)=>
                        handleChangeRoles(e.target.value)
                      } >
                     
                      {(roles).map(e=>
                        <option >{e.name}</option> 
                        ) }
                      </select>
                    </td>:
                   <td data-head="Is Acceptable">
                     {e.role_id}
                   </td>}

                   {(edit==true && id==e.id )?<td data-head="Defect_Class">
                   <div className="form-group" value={question.required} defaultValue={e.required} onChange={e =>handleChangeRadio("required",e.target.value)}>
                      
                        <input type="radio" name="required" value="True" checked />  <span>True</span>
                        <input type="radio" name="required" value="False"  />  <span>False</span>

                      
                    </div>
                   
                   </td>:
                   <td data-head="Is Acceptable">
                     {e.required}
                   </td>}


                   {(edit==true && id==e.id )?<td data-head="Defect_Class">
                   <select className="options" value={question.conditions} defaultValue={e.conditions}  onChange={(e) =>handleChange("conditions",e.target.value)}>
                      
                      <option>always</option>
                      <option>rare</option>
                      <option>Medium</option>
                        
                        

                      </select>
                   
                   </td>:
                   <td data-head="Is Acceptable">
                     {e.conditions}
                   </td>}



                   {(edit==true && id==e.id )?<td data-head="Defect_Class">
                   
                   <select className="options" 
                      name="mappings"
                      defaultValue = {e.mapping_id}
                      value={question.mappings}
                      onChange={(e)=>
                        handleChangeMappings(e.target.value)
                      } >
                    
                      {(mappings).map(e=>
                        <option >{e.name}</option>)}
                      </select>
                   
                   </td>:
                   <td data-head="Is Acceptable">
                     {e.mapping_id}
                   </td>}

                   
                   <td data-head="Action">
                     <button className="btn btn-theme btn-sm" onClick={()=>handleDelete(e.id)}>DELETE</button>
                     {(edit==true)?<button className="btn btn-theme btn-sm" onClick={()=>handleEditSave(e.id)}>Save</button>:
                     <button className="btn btn-theme btn-sm" onClick={()=>handleEdit(e.id)}>EDIT</button>}
                   </td>
                 </tr>
                )}
                 {/* tr END */}
               </tbody>
             </table>
             {/* Table END */}
           </div>

</div>
</div>
        )
    }
}


const mapStateToProps = state => ({
    
  question:state.user.question  ,

  
  
  });

  const mapDispatchToProps = dispatch => bindActionCreators({
    getQuestions
    
  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListComponent));

