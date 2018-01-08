



// - Prevent a form submission with the ```event.preventDefault()``` function
$(function() {
    

// - Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded
// - Select the appropriate DOM elements with CSS selectors upon a user's click using the ```$.click()``` handler


// - If a user clicks "Read More" on the primary column:


$('.readmore').on('click', function() {
event.preventDefault();

//   - have the text in the ```<p>``` tag slide down along with a "Read Less" link in the blog post using  ```$.slideDown()``` and ```$.show()```
  $('#show-this-on-click').slideDown(); 
  $('.readless').show(); 


//   - hide the "Read More" link using ```$.hide()```

  $('.readmore').hide(); 
});



// - If a user clicks "Read Less" on the primary column:


$('.readless a').on('click', function() {
event.preventDefault();


//   - have the ```<p>``` slide up and hide the "Read Less" link using  ```$.slideUp()``` and ```$.hide()```

  $('#show-this-on-click').slideUp(); 
  $('.readless').hide(); 


//   - show the "Read More" link using ```$.show()```

  
   $('.readmore').show(); 
});


// // - Using the same functions as above, if a user clicks the "Learn More" link in the sidebar, 
// have the ```<span>``` inside that ```<p>``` slide down and hide the "Learn More"
//  link using ```$.slideDown()``` and ```$.hide()```


$('.learnmore').on('click', function() {
event.preventDefault();


  $('#learnmoretext').slideDown(); 
  $('.learnmore').hide(); 

});


});
