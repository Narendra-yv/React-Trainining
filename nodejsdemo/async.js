function sleep(seconds) 
{
  var e = new Date().getTime() + (seconds * 1000);
  while (new Date().getTime() <= e) {}
}

function someFn(callback){
    setTimeout(function(){
        console.log('some functionality');
        sleep(5)
        callback("success")
    },0)
   
}

console.log('starting to call some functinality')

// console.log(someFn());
someFn(function(result){
    console.log(result);
})

console.log('finished....')