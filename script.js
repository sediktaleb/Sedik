
function Send(){
	var Person = document.getElementById("Names").value;
	var Message = document.getElementById("Message").value;
	if(Person == "Sedik"){
		sendEmail("sedikalgriadz@gmail.com",Message)

	}
	if(Person == "Sirine"){
		sendEmail("ararsirine2007@gmail.com",Message)

	}
	if(Person == "Fwaz"){
		sendEmail("zdiclassg@gmail.com",Message)

	}
	if(Person == "AbdJalil"){
		alert("لم يتم التحصل على الايميل")
	}
	if(Person == "Iyad"){
		sendEmail("khemissigracha@gmail.com",Message)
	
	}
	if(Person == "Aryam"){
		alert("لم يتم التحصل على الايميل")
	}
	if(Person == "Douaa"){
		alert("لم يتم التحصل على الايميل")
	}
	if(Person == "Malak"){
		sendEmail("dk.karima.2020@gmail.com",Message)
	}
}

function sendEmail(email,meesage){
    var parmas = {
        message : meesage,
        Email : email,


    };
    const serviceID = "service_fsioy4u";
    const templateID = "template_ppseq1b";
    emailjs.send(serviceID,templateID,parmas).then(function(red){

        alert("الرسالة وصـلت");

    }
            
      
    
)};
