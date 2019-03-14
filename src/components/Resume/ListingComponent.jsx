import React, { Component } from 'react';
import { Jumbotron, Button,Modal } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'

class ListComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
            
        }
       
    }
    

    render(){
        const { onOpenModal,onCloseModal,setRedirect,question,handleDelete}=this.props;
        console.log("----kkkkk",question)
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
                        
                         {}
                       </label>
                     
                   </td>
                   <td data-head="Defect_Class">
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
                     {e.role_id}
                   </td>
                   <td data-head="Is Acceptable">
                     {e.required}
                   </td>
                   <td data-head="Is Acceptable">
                     {e.conditions}
                   </td>
                   <td data-head="Is Acceptable">
                     {e.mapping_id}
                   </td>
                   <td data-head="Action">
                     <button className="btn btn-theme btn-sm" onClick={()=>handleDelete(e.id)}>DELETE</button>
                     <button className="btn btn-theme btn-sm"><i className="icon-trash" />EDIT</button>
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

export default ListComponent