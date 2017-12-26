var CardList = require('./card-list')

// 2. Create an object of the class
var obj = React.createElement(CardList, {})

// 3. Render it to the dom
ReactDOM.render(obj, document.getElementById('mount-point'))