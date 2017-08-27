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

		var office =$("#office").is(':checked');
		var building = $("#building").is(':checked');
		var hospital = $("#hospital").is(':checked');
		var tv = $("#tv").is(':checked');
		var laboratory = $("#laboratory").is(':checked');
		var technology = $("#technology").is(':checked');
		var class_room = $("#class_room").is(':checked');
		var art = $("#art").is(':checked');
		var car = $("#car").is(':checked');
		var nature = $("#nature").is(':checked');

		var imgData = {office:office, building:building, hospital:hospital, tv:tv, laboratory:laboratory,
		technology:technology, class_room:class_room,art:art,car:car,nature:nature}
		var cursos_de_interes = $("#cursos").val();
		
		var streaming = $("#streaming").val();
		var buscador = $("#buscador").val();
		var beneficios = $("#beneficios").val();

		var saluciones = {streaming:streaming,buscador:buscador,beneficios:beneficios}

		var whatsapp = $("#whatsapp").val();
		var email = $("#email").val();
	

		var data = {whatsapp:whatsapp,email:email,Quiere_Estudiar:data_studio,cursos_de_interes:cursos_de_interes,carrera_de_Interes:imgData,saluciones:saluciones};

		var name = $("#nameUser").val();
		var database = firebase.database();
		var ref = database.ref("Users").child(name);
		console.log(data);
		ref.set(data);

		$(this).hide();
		$('.success-text').show();
	});
});