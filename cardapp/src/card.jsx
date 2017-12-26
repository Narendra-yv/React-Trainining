// 1. Create the class

var Card = React.createClass({
    render: function(){
        return (
            <div>
             <h2>Card Component - Some changes</h2>
             <Badge caption="Votes" />   
            </div>
        )
    }
})

// 2. Create an object of the class
var obj = React.createElement(Card, {})

// 3. Render it to the dom
ReactDOM.render(obj, document.getElementById('mount-point'))