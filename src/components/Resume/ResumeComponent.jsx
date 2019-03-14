import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './resume.css';
import PropTypes from 'prop-types';


const ResumeComponent = props => (
  <div>
    {console.log(">>>>>",props)}
    <section className="eo-content">

    <div className="left row w-100">
            <div className=" justify-content-center shadow left col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="box left p-2">
            <div className="box-title">
              <h3>Question Answers</h3>
            </div>
            <Form onSubmit={e => props.onSubmit(e)}>
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
                       value={props.question.question}
                       onChange={e =>
                         props.handleChange(e.target.name, e.target.value)
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
                    <select className="options" value={props.question.question_type} onChange={e =>props.handleChange("question_type",e.target.value)}>
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
                    value={props.question.priority}
                       onChange={e =>
                         props.handleChange(e.target.name, e.target.value)
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
                      <select className="options" value={props.question.teaming_stages}  onChange={e =>props.handleChange("teaming_stages",e.target.value)}>
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
                      <input type="text"  className="form-control" name="appears" onChange={e =>props.handleChange("appears",e.target.value)}  />
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
                      onChange={e =>props.handleChange("frequency",e.target.value)}  />
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
                      <select className="options"  value={props.question.roles}
                      onChange={(e)=>
                        props.handleChangeRoles(e.target.value)
                      } >
                      <option >-----</option>
                      {(props.roles).map(e=>
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
                    <div className="form-group" value={props.question.required} onChange={e =>props.handleChangeRadio("required",e.target.value)}>
                      
                        <input type="radio" name="required" value="True" checked />  <span>True</span>
                        <input type="radio" name="required" value="False"  />  <span>False</span>

                      
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
                      <select className="options" value={props.question.conditions}  onChange={(e) =>props.handleChange("conditions",e.target.value)}>
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
                      value={props.question.mappings}
                      onChange={(e)=>
                        props.handleChangeMappings(e.target.value)
                      } >
                      <option >-----</option>
                      {(props.mappings).map(e=>
                        <option >{e.name}</option>)}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary" style={{marginLeft:'50%'}}>Submit</button>
            </Form>
          </div>
        </div>
      </div>
    </section>
    {/* CONTENT END */}
  </div>
);

ResumeComponent.propTypes = {

};

export default ResumeComponent;
