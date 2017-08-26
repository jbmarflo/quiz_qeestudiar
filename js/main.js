$(document).ready(function() {

	 // Initialize Firebase
	 var config = {
		apiKey: "AIzaSyCZj_nx4hSzsggtKnSD1o7V4PMBJRzm1XA",
		authDomain: "queestudiar-bb4cc.firebaseapp.com",
		databaseURL: "https://queestudiar-bb4cc.firebaseio.com",
		projectId: "queestudiar-bb4cc",
		storageBucket: "queestudiar-bb4cc.appspot.com",
		messagingSenderId: "44910618993"
	    };
	    firebase.initializeApp(config);
	 
	    var carrera_estudiar; 	

	$('input[name="group1"]').on('change', function(){
		var value = $(this).val();
		if (value == 1) {
		$('.description_what_study').removeClass('hide');
		carrera_estudiar = "si";
		} else {
            $('.description_what_study').addClass('hide');
		carrera_estudiar = "no";
		}
	});

	$('form#form').on('submit', function(e){
		e.preventDefault();
		var carrera = $("#carrera").val(); 
		var data_studio = {sabe_que_estudiar:carrera_estudiar,carrera:carrera};
		var cursos_de_interes = $("#cursos").val();
		var whatsapp = $("#whatsapp").val();
		var email = $("#email").val();
		
		var data = {whatsapp:whatsapp,email:email,Quiere_Estudiar:data_studio,cursos_de_interes:cursos_de_interes};	
		
		var name = $("#nameUser").val();		
		var database = firebase.database();
		var ref = database.ref("Users").child(name);
		console.log(data);
		ref.set(data);
	});
});