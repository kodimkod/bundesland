import React from 'react';

export const StateHeader = () => 
{
        return (
                <div className="stateHeader">
                <div className="stateHeaderTitle">
                Bundesländer
                </div>
                </div>
                );
    }
    
class State extends React.Component {

    render() {
        return (
             <div className="stateBox" onClick={(e) => this.props.clickedHandler(e, this.props.number, this.props.context)}>
            <div className="containerBox">
            <div className="insideContainer">
            <div className="stateName">{this.props.name}</div>
             <div className="stateSchoolCount">{this.props.schoolCount} Schulen</div>
            </div>
        </div>
        </div>
                
                );
    }
}

export {State};




