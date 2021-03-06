import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../../actions';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    handleChange = e => {
        let value = e.target.name === "age" ? parseInt(e.target.value, 10) : e.target.value;
        this.setState({
            [e.target.name]: value
        });
    }

    submit = e => {
        e.preventDefault();
        this.props.addSmurf(this.state);
        this.setState({ name: '', age: '', height: '' });
    }

    render() {
        return (
            <form
                onSubmit={this.submit}
            >
                <input
                    name="name"
                    onChange={this.handleChange}
                    placeholder="name"
                    value={this.state.name}
                />
                <input
                    name="age"
                    onChange={this.handleChange}
                    placeholder="age"
                    type="number"
                    value={this.state.age}
                />
                <input
                    name="height"
                    onChange={this.handleChange}
                    placeholder="height"
                    value={this.state.height}
                />
                <button>Submit</button>
            </form>
        )
    }
} 

export default connect(null, { addSmurf })(Form);