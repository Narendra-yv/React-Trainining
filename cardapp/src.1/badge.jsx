var Badge = React.createClass({

    getInitialState(){
        return {
            count: 0
        }
    },
    incrementCount: function(){
        this.setState({count: this.state.count + 1})
    },

    render: function(){
        return (
            <button onClick={this.incrementCount} type="button" className="btn btn-primary">
                {this.props.caption} <span className="badge badge-light">{this.state.count}</span>
            </button>
        )
    }
})

module.exports = Badge