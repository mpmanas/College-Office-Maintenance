/* THIS IS A CUSTOM JAVASCRIPT FILE */



$(document).ready(function(){
	
	
	  	$("#add_by_user").click(function(){
			  
		    var url = "./ajax/add_user_record.php"; // the script where you handle the form input.
		    if(empty($("#fname").val()) || empty($("#lname").val()) || empty($("#gender").val()) || empty($("#theDate").val()) ){
		    	$("#search_alert_2").html("First Name, Last Name, Sex and DOB is mandatory");
		    	$("#search_alert_2").show();
		    	$("#create_r_result").hide();
		    	
		    } else {
		    	var url = "./ajax/add_student_record.php"; // the script where you handle the form input.

			    
		    	//alert("Submitting the form");
			    $.ajax({
		           type: "POST",
		           url: url,
		           data: $("#create_user_form").serialize(), // serializes the form's elements.
		           success: function(data)
		           {
		        	   $("#create_u_result").show();
			    		$("#create_u_result").html(data);
				        $("#search_alert_u").hide();
				        $('#create_user_form').hide();
		           }
		         });
		    }
	  	});	  	
	  	
	  	$("#theDate").datepicker({
	  		changeMonth: true,
	        changeYear: true,
	        yearRange: "-99:+0"
	  	});
});

function empty( val ) {

    // test results
    //---------------
    // []        true, empty array
    // {}        true, empty object
    // null      true
    // undefined true
    // ""        true, empty string
    // ''        true, empty string
    // 0         false, number
    // true      false, boolean
    // false     false, boolean
    // Date      false
    // function  false

        if (val === undefined)
        return true;

    if (typeof (val) == 'function' || typeof (val) == 'number' || typeof (val) == 'boolean' || Object.prototype.toString.call(val) === '[object Date]')
        return false;

    if (val == null || val.length === 0)        // null or 0 length array
        return true;

    if (typeof (val) == "object") {
        // empty object

        var r = true;

        for (var f in val)
            r = false;

        return r;
    }

    return false;
}
