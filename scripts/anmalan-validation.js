// function validate(form)
// Used for AG-2016

function validate(form) {
	var returnValue = true;
	var txtMnr = frmLogin.txtMnr.value;
	var pwdPwd = frmLogin.pwdPwd.value;
	
	if ((txtMnr[0] == 'S') && (txtMnr[1] == 'E')){
		if (txtMnr.length < 7) {
			returnValue = false;
			alert("Medlemsnumret måste vara minst 5 siffror (efter SE)");
			document.frmLogin.txtMnr.focus();
			return(returnValue);
		}
		if (txtMnr.length > 10) {
			returnValue = false;
			alert("Medlemsnumret får vara högst 8 siffror (efter SE)");
			document.frmLogin.txtMnr.focus();
			return(returnValue);
		}
	}
	else {
		if (txtMnr.length < 5) {
			returnValue = false;
			alert("Medlemsnumret måste vara minst 5 siffror");
			document.frmLogin.txtMnr.focus();
			return(returnValue);
		}
		if (txtMnr.length > 8) {
			returnValue = false;
			alert("Medlemsnumret får vara högst 8 siffror");
			document.frmLogin.txtMnr.focus();
			return(returnValue);
		}
	}
	
	if (pwdPwd.length == 0) {
		returnValue = false;
		alert("Du måste fylla i ett lösenord");
		document.frmLogin.pwdPwd.focus();
		return(returnValue);
	}

	alert("Välkommen till anmälan!");
	
	return(returnValue);
}