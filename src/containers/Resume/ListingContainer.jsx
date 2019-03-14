import React, { Component } from 'react';
import ListingComponent from '../../components/Resume/ListingComponent';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../scss/main.css';
import {
    getQuestions,deleteQuestions
  } from "../../actions/action.user";

class ListingContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open:false,
            
        }
        this.setRedirect = this.setRedirect.bind(this);
        this.handleDelete = this.handleDelete.bind(this)
    }

    onOpenModal = () => {
        this.setState({ open: true });
      };

      onCloseModal = () => {
        this.setState({ open: false });
      };


     async componentDidMount() {
     await this.props.getQuestions()
       }
      setRedirect = () => {
        this.props.history.push('/')
        
      }

      async handleDelete(id){
       
        console.log("---------------------",id);
        
        await this.props.deleteQuestions(id);
        this.props.getQuestions()
      }




    render(){
        console.log("=====6666666===>",this.props.question)
        const {open,modalType,}=this.state
        return(
            <div>
                <ListingComponent question={this.props.question} open={open} modalType={modalType} onOpenModal={this.onOpenModal} onCloseModal={this.onCloseModal} setRedirect={this.setRedirect} handleDelete={this.handleDelete} />
                
         </div>
        )
    }
}
const mapStateToProps = state => ({
    
  question:state.user.question  ,
  
  
  });

  const mapDispatchToProps = dispatch => bindActionCreators({
    getQuestions,deleteQuestions
    
  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingContainer));
