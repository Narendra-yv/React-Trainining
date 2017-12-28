function sleep(seconds) 
{
  var e = new Date().getTime() + (seconds * 1000);
  while (new Date().getTime() <= e) {}
}
//Async.. 
//Third party code 
// Some functionality using callbacks
function someFnWithCallbacks(callback){
    setTimeout(function(){
        console.log(callback)
        console.log('some functionality');
        sleep(5)
        // return "success"
        callback("success")
    },0)
   
}
// console.log('starting to call some functinality')

// console.log(someFn());
// someFn(function(result){
//     console.log(result);
// })

// console.log('finished....')

// Some functionality using promises
function someFnWithPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            // console.log(callback)
            console.log('some functionality');
            sleep(5)
            if(sucesscondition){
                resolve("success")
            }
            else{
                reject("some condition went wrong")
            }
            
            // return "success"
            // callback("success")
        },0)
    })
}

console.log('starting to call some functinality')

// console.log(someFn());
someFnWithPromise()
.then((result) => result.split(''))
.then((data)=> data.reverse().join(''))
.then ((reversedStr)=> console.log(reversedStr))
.catch((err)=> console.log(err));

console.log('finished....')

