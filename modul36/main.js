$(window).ready(function(){
    alert('it is working')
})


$('#button').click(function(){
    console.log('the testing has bbeen succesfully')
})


$('button').click(function(){
    $('div').addClass('clicked')
}).find('span').attr('my title','hover over me');