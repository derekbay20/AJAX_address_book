$(document).ready(function(){
	//show loader image
	$('#loaderImage').show();

	//Show contacts on page load
	showContacts();

	//Add contact
	$(document).on('submit', '#addContact', function(){
		//Show the loader image
		$('#loaderImage').show();

		//Post data from from
		$.post("add_contact.php", $(this).serialize())
			.done(function(data){
				console.log(data);
				$('#addModal').foundation('reveal', 'close');
				showContacts();
			});
			return false; 	
	});

	//Edit Contact
	$(document).on('submit', '#editContact', function(){
		//Show the loader image
		$('#loaderImage').show();

		//Post data from from
		$.post("edit_contact.php", $(this).serialize())
			.done(function(data){
				console.log(data);
				$('.editModal').foundation('reveal', 'close');
				showContacts();
			});
			return false; 	
	});

	//Delete Contact
	$(document).on('submit', '#deleteContact', function(){
		//Show the loader image
		$('#loaderImage').show();

		//Post data from from
		$.post("delete_contact.php", $(this).serialize())
			.done(function(data){
				console.log(data);
				showContacts();
			});
			return false; 	
	});

});

//Show contacts
function showContacts(){
	console.log('showing Contacts...');
	setTimeout("$('#pageContent').load('contacts.php', function(){$('loaderImage').hide();} )",1000);
}

//close Model
$(document).on('click', '.close-reveal-modal', function(){
	$('.reveal-modal').foundation('reveal', 'close'); 
})

