import React from 'react';
 
class PersonIndex extends React.Component {

    render() {
        return (
                <div className='personBox'>
            <div className="personIndexTitle">{this.props.letter}</div>
            </div>
                );
    }
}

export {PersonIndex};




