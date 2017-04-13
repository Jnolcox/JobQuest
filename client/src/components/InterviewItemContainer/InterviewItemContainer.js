import { Link, IndexLink } from 'react-router';
import React, { Component } from 'react';
import ThreadItem from '../ThreadItem/ThreadItem';
import InterviewItem from '../InterviewItem/InterviewItem'
import axios from 'axios';
import update from 'immutability-helper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import {purple500, blue500, grey50} from 'material-ui/styles/colors';


class InterviewItemContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
      threads: []
    };
}

  componentDidMount() {
    // const url = 'http://rest.learncode.academy/api/am/friends'; 

    const url = '/interviewQuestions/'; 
    axios.get(url)
      .then(res => {
        console.log(res.data);
        console.log(res.data[0]._id);
        this.setState({threads: res.data})
      });
  }


  render(){

    const styleCard = {
      left: {
        marginUp: '50px',
        marginLeft: '50px',
        marginRight: '50px'
      },

      right: {
        marginUp: '50px',
        marginRight: '50px',
        marginBottom: '50px' 
      },
    }

    const styleFont = {
      left: {
        fontSize: '40px',
        fontWeight: 'bold', 
        color: 'purple',
        marginLeft: '15px'
      },

      description: {
        fontSize: '25px'
      },

      contributor: {
        fontSize: '15px'
      }

    }

    const styleLabel = {
      fontSize: '25px', 
      fontFamily:'<Sans-serif></Sans-serif>',
      color: grey50
    }



    return (
        <GridList cols={12}>
          <GridTile cols={8} rows={'auto'}>
            {/*Threads*/}
            <Card zDepth={2} style={styleCard.left}>
              <CardHeader title="Interview Questions" titleStyle={styleFont.left}/>
              <CardText style={styleFont.description}>
                {this.state.threads ? this.state.threads.map((thread, idx) => {
                                return <InterviewItem key={idx} data={thread}/>
                              })
                              : null}
              </CardText>
            </Card>
          </GridTile>

          <GridTile cols={4} rows={'auto'}>

            {/*Button and Description*/}
            <Card zDepth={2} style={styleCard.right}>
              <Link to='/postNewInterview'>
                <RaisedButton backgroundColor={purple500} labelStyle={styleLabel} label="Submit a New Question" fullWidth={true}/>
              </Link>
              <CardText 
                style={styleFont.description}>
                <b>Welcome, one and all, to Interview Questions!</b>
                <br />
                <br />
                Here we discuss interview questions in Computer Science, Computer Engineering, Software Engineering, 
                and related fields. Please keep the conversation professional.
                <br />
                </CardText>
            </Card>

            {/*High score*/}
            <Card zDepth={2} style={styleCard.right}>
              <CardText style={styleFont.contributor}>
                <h2>Top Contributors</h2>
                <h3>1. Joseph Park</h3>
                <h3>2. Joseph Park</h3>
                <h3>3. Joseph Park</h3>
                <br />
                <h2>Recent Contributors</h2>
                <h3>1. Joseph Park</h3>
                <h3>2. Joseph Park</h3>
                <h3>3. Joseph Park</h3>
                <br />
                </CardText>
            </Card>
          </GridTile>
        </GridList> 

    );
  }

}

InterviewItemContainer.PropTypes = {
  items: React.PropTypes.array.isRequired
  // add two funcs, TODO
};

export default InterviewItemContainer;