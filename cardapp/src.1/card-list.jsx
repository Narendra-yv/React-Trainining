// 1. Create the class
var Card = require('./card')
var CardList = React.createClass({
    getInitialState(){
        return {
            courses: ["Angular", "React", "Ember", "JS"]
        }
    },

    render: function(){
       var courseList =  this.state.courses.map(function(course, i){
            console.log(course);
            return <Card key={i} title={course}/>
        })

        return(
            <div>
                {courseList}
            </div>
        ) 
    }
})

module.exports = CardList

