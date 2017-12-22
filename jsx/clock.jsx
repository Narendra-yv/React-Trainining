// Step 1. Create a class
var Clock = React.createClass({
   
    render: function(){
        var now = new Date();
        return (
            <div>
                <h2>Current time </h2>
                <p>{now.getHours()} : {now.getMinutes()} : {now.getSeconds()}</p>
            </div>
        )
    }
})

setInterval(function(){
    // Step 2. Create an object from the class
    var obj = React.createElement(Clock, {});

    // Step 3. Render the object on the dom
    ReactDOM.render(obj, document.getElementById('time'))
}, 1000)
