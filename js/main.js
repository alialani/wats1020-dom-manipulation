//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };

	// Function to listen for clicks on the "login" button.
	// When a user clicks the "login" button, 
   	$('.login-btn').on('click', function(event){
		var targetElement = event.target;
		var container = targetElement.parentElement;
	// Hide the login form elements on the page.
		$(container).fadeOut(); 
	// Fill the user's first and last name into `div.user-info`.
		$('.user-fullname').innerText = userInfo.firstName + " " + userInfo.lastName;
	}); 
    
	
    // When user clicks a "view details" button, find the parent of that element.
	$('.view-details').on('click', function(event){
		var targetElement = event.target;
	   // Within that parent, all the elements that have the class `details`.
		var container = targetElement.parentElement.parentElement;
		
		$(container).find('.details').each(function(index, el){
		    // Toggle visibility of all the elements within that parent with the class `details`.
			// Change the text of the "view details" button to read "hide details" so the user
  		    // understands they can hide the text again.
			if($(el).is(':visible')) {
			   $(el).fadeOut();
			   targetElement.innerText = 'show details';
			} else {
			   $(el).fadeIn();
			   targetElement.innerText = 'hide details';
			}
		});
	});
 
	
	// function that listens for clicks on the voting buttons and looks at the `data-vote` 
	// attribute on each button to see what was voted for, then determines the updated vote
	// breakdown to adjust the progress bars.
	$('.vote').on('click', function(event){
		  //  When a button is clicked, look at the `data-vote` attribute to determine
    	  // what the user is voting for ("great" or "greatest").
			var voteAtt = $(this).attr("data-vote"); 
		// Since we are incrementing 1% each time buttons are clicked as it mentioned in the requiremnts
		// by (1 0f 100), I think there is a better way to do it
			if (voteAtt == "great") {
				$('.great-progress').css( "width", '+=' + ( 0.01 * $('.progress').width() ) );		
			} else if (voteAtt == "greatest") {
				$('.greatest-progress').css( "width", '+=' + ( 0.01 * $('.progress').width() ) );		
			} 

	});

});
