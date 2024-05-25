document.getElementById("loader").style.display="none";
document.getElementById("loader1").style.display="none";

function Send(){
	var Person = document.getElementById("Names").value;
	var Message = document.getElementById("Message").value;
	document.getElementById("loader").style.display="inline";
	if(Person == "Sedik"){
		sendEmail("sedikalgriadz@gmail.com",Message)

	}
	if(Person == "Sirine"){
		sendEmail("ararsirine2007@gmail.com",Message)

	}
	if(Person == "Charaf"){
		sendEmail("bousbaamin8@gmail.com",Message)

	}
	if(Person == "Fwaz"){
		sendEmail("zdiclassg@gmail.com",Message)

	}
	if(Person == "AbdJalil"){
		sendEmail("sajalil217@gmail.com",Message)


	}
	if(Person == "Iyad"){
		sendEmail("khemissigracha@gmail.com",Message)
	
	}
	if(Person == "Aryam"){
		alert("لم يتم التحصل على الايميل")
	}
	if(Person == "Douaa"){
		sendEmail("Dodosinyorita3@gmail.com",Message)
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
		document.getElementById("loader").style.display="none";
		document.getElementById("loader1").style.display="none";

    }
            
      
    
)};

function SendRandom(){
	var Random = Math.floor(Math.random() * 4)
	var Message = document.getElementById("MessageRandom").value;
	document.getElementById("loader1").style.display="block";

	if(Random == 0){
		sendEmail("sedikalgriadz@gmail.com",Message)
	}
	if(Random == 1){
		sendEmail("zdiclassg@gmail.com",Message)

	}
	if(Random == 2){
		sendEmail("ararsirine2007@gmail.com",Message)

	}
	if(Random ==3){
		sendEmail("Dodosinyorita3@gmail.com",Message)

	}
};
