"use strict"

// Check if password exists
try  {
if(!password) throw error("Password cannot be empty"); // Check if password is atleast 8 characters long
    	if(password.length < 8) throw new SyntaxError1("Password should be at least 8 character long");    	// Check if at least one lowercase letter exists
	    	if(password.match(/[a-z]/ig) == null) throw new SyntaxError2("Pasword should at least have one lowercase");    	// Check if at least one uppercase letter exists
    			if(password.match(/[A-Z]/ig) == null) throw new SyntaxError3("Pasword should at least have one uppercase");    	// Check if at least one number exists
				if(password.match(/^(?=.*\d)/ig) == null) throw new SyntaxError5("Password shold at least have one number");		// Check if at least one special character exists
					if(password.match(/[{(%$&*\/#@!)}]/ig) == null) throw new SyntaxError5("Password should at least on special character, eg. { % & * ', etc");    	return password;
    }

catch(error, SyntaxError1, SyntaxError2, SyntaxError3, SyntaxError3, SyntaxError4, SyntaxError5) {
    	return error.message, SyntaxError1.message, SyntaxError2.message, SyntaxError3.message,SyntaxError4.message,SyntaxError5.message;
} 

