import React, {Component} from 'react';

export default class Counter extends Component {
    state = {
        count: 1,
        imageUrl: 'https://picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
      fontSize: 30,
      fontWeight: 'bold'
    };

    /*What is the difference between getBaddgeClasses and  handleIncrement
    * when using this.state
    * */
    getBaddgeClasses () {
        let classes = 'badge m-2 badge-';
        console.log('badge class: ', this.state);
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    };

    handleIncrement = ()=> {
        console.log('increment', this);
    };

    formatCount(){
        let {count} = this.state;
        return count === 0 ? 'zero' : count;
    }

    renderTags(){
        if (this.state.tags.length === 0){
            return <h1>There are no tags</h1>
        }else{
            return (
                <ul>
                    {this.state.tags.map(tag => <li key={tag}> {tag} </li>)}
                </ul>
            );
        }
    }

    render() {
        return (
            <React.Fragment>
                <span className={this.getBaddgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm">
                    Increment
                </button>
                <ul>{this.state.tags.map(tag => <li key={tag}> {tag} </li>)}</ul>
                <hr/>
                {this.renderTags()}
            </React.Fragment>
        );
    }

}

