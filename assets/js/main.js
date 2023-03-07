// About Me content is the one by default shown
$('#educationContent').hide();
$('#portfolioContent').hide();
/* Template
$('#nameContent').hide();
*/

$(document).ready(function(){

	// Handle 'About Me' content
	$('#aboutme').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			loadlang();
			activateDiv('#aboutmeContent');
		}

	});

	// Handle 'Education' content
	$('#education').click(function(e) {
		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();
			
			// Show current content
			loadlang();
			activateDiv('#educationContent');
		}
	});

	// Handle 'Publications' content
	$('#portfolio').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#portfolioContent');
			loadlang();
		}
	});

	/*
	// Handle 'Template' content
	$('#name').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#nameContent');
		}
	});
	*/
});

function clearActiveLinks() {
	$('#navbarList .nav-item .nav-link').each(function() {
		$(this).removeClass('active');
	});
}

function clearActiveDivs() {
	$('.container .content .active').each(function() {
		$(this).removeClass('active');
		$(this).hide();
	});
}

function activateLink(e) {
	$(e.target).addClass('active');
}

function activateDiv(divId) {
	$(divId).addClass('active');
	$(divId).show();

	// Scrolls to the content
	scrollToContent(divId);
}

function scrollToContent(divId) {
	if ($(window).width() < 751) {
		$('html, body').animate({
			scrollTop: $(divId).offset().top
		}, 1);
	}
}

function loadEn() {
	$('#aboutme').text("About Me");
	$('#education').text("Education & Experience");
	$('#portfolio').text("Portfolio");

	// ABOUT ME

	$('#littledesc').text("Computer Science senior student at the Polytechnic Superior School (UAM)");
	$('#city').html("Madrid <br/>Madrid, Spain");
	$('#link-cv').text("CV [Updated 02/2023]");
	$('#largedesc').html(`
		I'm a <b>senior student in Computer Engineering</b> based in Madrid (Spain), currently studying at the Polythecnic Superior School, or <a href="https://www.uam.es/ss/Satellite/EscuelaPolitecnica/es/home.htm" target="_blank">EPS-UAM</a> for short.
		<br><br>
		Of course, I do many other things apart from studying, like working on my personal projects. Although I focus on data science & machine learning at a professional level, I also enjoy classic low-level programming as a hobby quite a lot!
		<br><br>
		There's also my passion for learning foreign languages, drawing and writing. But above all, I consider myself an avid reader and a learning enthusiast, ready to take the difficult path if the need arises (that's also why I am proud to say I went through the <a href="https://www.ibo.org" target="_blank">International Baccalaureate</a> diploma!)
	`);
	$('#researchinterestsH4').text("Research Interests");
	$('#researchinterests').text(`I am deeply interested in Machine Learning with state-of-the-art methods such as Deep Neural Networks, CNNs and genetic algorithms. I also have expertise working with bias mitigation.`);
	$('#honors-and-awards').text("Honors and Awards");
	$('#colab-scholarship').html(`
		<strong>Collaboration Scholarship</strong> for final year's thesis
		[<a href="https://www.educacionyfp.gob.es/servicios-al-ciudadano/catalogo/estudiantes/becas-ayudas/para-estudiar/universidad/grado/becas-colaboracion.html" class="link-dark" target="_blank">Ministry of Education</a>] 
		- Nov, 2022
	`);
	$('#madrid-scholarship').html(`
		<strong>Excelency Award</strong> for university students
		[<a href="https://www.comunidad.madrid/servicios/educacion/becas-excelencia-universitarios" class="link-dark" target="_blank">Community of Madrid (Spain)</a>] 
		- Jun, 2022
	`);
	$('#honorgrades').html(`
		<strong>Grades with Honors</strong> in 8 out of 32 courses
		[Computer Science Degree] 
		Sep, 2019 - Jun, 2023
	`);

	// EDUCATION

	$('#workexpH2').text("Work Experience");
	$('#internshipIIC').html(`
		<h3><i>Internship, Machine Learning</i></h3>
		<div class="trnsf-thin">(Knowledge Engineering Institute - IIC, 2023-Present)</div>

		<p class="mt-1 justify">
			<i>Currently in progress</i>
		</p>
	`);
	$('#fuam-realup').html(`
		<h3><i>Software Developer</i> [part-time]</h3>
		<div class="trnsf-thin">(FUAM, 2022-2023)</div>

		<p class="mt-1 justify">
			Development of a web-based application for user labeling of dense Machine Learning datasets constisting of tweets. In cooperation with the Spanish Observatory for Racism and Xenophoby and the <a href="https://real-up.eu/" target="_blank">Real-UP European Union project</a>.
		</p>
	`);
	$('#educationH2').text("Education");
	$('#compscidegree').html(`
		<h3><i>Degree in Computer Science</i></h3>
		<div class="trnsf-thin">(UAM, 2019-2023) 8,82 / 10</div>

		<p class="mt-1 justify">
			Studying solutions based on AI, computer security, systems administration and Big Data. Awarded with highest grade (Honors) in 8 out of 32 courses. Final thesis on research about convolutional deep learning methods and biases (<i>work in progress</i></i>).
		</p>
	`);
	$('#ibo').html(`
		<h3><i>International Baccalaureate Diploma</i></h3>
		<div class="trnsf-thin">(IES Rosa Chacel (Colmenar Viejo), 2017-2019) 38 / 45</div>

		<p class="mt-1 justify">
			IB Extended Essay awarded with grade A. Did Research Essays in courses such as Chemistry, Mathematics, Physics, Literature and History.
		</p>
	`);


	// PORTFOLIO
	$('#publicationsH2').text("Publications");
	$('#mapacheProj').html(`
		<div class="row mt-2">
			<div class="thumbnail col-md-3">
				<img class="rounded mx-auto d-block img-fluid" src="/assets/img/mapache.png" alt="Mapache">
			</div>
			<div class="col-md-9 pub-block">
				<div class="trnsf-italic h5">Mapache Server</div>
				<div class="pub-authors mt-1">Fully functional HTTP Web Server</div>
				<div class="pub-congress">Full support of HTTP & HTTPS protocols. Generation of directory listings. Admits custom configuration files that let the user tweak the server to its needs.</div>
				<div class="pub-link mt-1"><i class="fab fa-github"></i> <a href="https://github.com/danibt656/Mapache" target="_blank" class="link-dark">GitHub</a></div>
				<div class="d-none"></div>
			</div>
		</div>
	`);
	$('#heraProj').html(`
		<div class="row mt-2">
			<div class="thumbnail col-md-3">
				<img class="rounded mx-auto d-block img-fluid" src="/assets/img/hera.jpg" alt="Hera">
			</div>
			<div class="col-md-9 pub-block">
				<div class="trnsf-italic h5">Hera</div>
				<div class="pub-authors mt-1">A simple, voice-directed virtual assistant</div>
				<div class="pub-congress">Homemade domestic assistant based on Alexa/Siri. Custom TCP Client-Server protocol, in order to have it functioning for all devices in a private LAN. Connected with external API for retrieving the weather in any given city of the globe.</div>
				<div class="pub-link mt-1"><i class="fab fa-github"></i> <a href="https://github.com/danibt656/Hera" target="_blank" class="link-dark">GitHub</a></div>
				<div class="d-none"></div>
			</div>
		</div>
	`);

}

function loadEs() {
	$('#aboutme').text("Sobre mí");
	$('#education').text("Educación y experiencia");
	$('#portfolio').text("Portfolio");
	
	// ABOUT ME

	$('#littledesc').text("Estudiante de último curso de Ingeniería Informática en la Escuela Politécnica Superior (UAM)");
	$('#city').html("Madrid <br/>Madrid, España");
	$('#link-cv').text("CV [Actualizado en 02/2023]");
	$('#largedesc').html(`
		Soy un <b>estudiante de último curso de Ingeniería Informática</b> en Madrid (España), estudiando en la Escuela Politécnica Superior, o <a href="https://www.uam.es/ss/Satellite/EscuelaPolitecnica/es/home.htm" target="_blank">EPS-UAM</a> para abreviar.
		<br><br>
		Por supuesto, hago muchas otras cosas aparte de estudiar, como trabajar en mis proyectos personales. Aunque me centro en la ciencia de datos y el aprendizaje automático a nivel profesional, también disfruto mucho de la programación de bajo nivel!
		<br><br>
		También está mi pasión por aprender idiomas extranjeros, que se remonta a mis años del colegio. Pero sobre todo, me considero un lector ávido y un entusiasta del aprendizaje, listo para tomar el camino difícil si surge la necesidad (también es por esto por lo que estoy orgulloso de haber participado en el programa del diploma del <a href="https://www.ibo.org" target="_blank">Bachillerato Internacional</a>!)
	`);
	$('#researchinterestsH4').text("Intereses de investigación");
	$('#researchinterests').text(`Estoy profundamente interesado en el aprendizaje automático, trabajando con métodos del estado-del-arte como son las Redes Neuronales Profundas, redes Convolucionales, y algoritmos genéticos. También dispongo de experiencia en el campo de la mitigación de sesgo.`);
	$('#honors-and-awards').text("Premios y becas");
	$('#colab-scholarship').html(`
		<strong>Beca de Colaboración</strong> para el trabajo fin de grado
		[<a href="https://www.educacionyfp.gob.es/servicios-al-ciudadano/catalogo/estudiantes/becas-ayudas/para-estudiar/universidad/grado/becas-colaboracion.html" class="link-dark" target="_blank">Ministerio de Educación</a>] 
		- Nov, 2022
	`);
	$('#madrid-scholarship').html(`
		<strong>Beca de Excelencia</strong> para estudiantes universitarios
		[<a href="https://www.comunidad.madrid/servicios/educacion/becas-excelencia-universitarios" class="link-dark" target="_blank">Comunidad de Madrid</a>] 
		- Jun, 2022
	`);
	$('#honorgrades').html(`
		<strong>Matrícula de Honor</strong> en 8 de 32 asignaturas
		[Grado en Ingeniería Informática] 
		Sep, 2019 - Jun, 2023
	`);

	// EDUCATION

	$('#workexpH2').text("Experiencia Laboral");
	$('#internshipIIC').html(`
		<h3><i>Prácticas en empresa, Aprendizaje Automático</i></h3>
		<div class="trnsf-thin">(Instituto de Ingeniería del Conocimiento - IIC, 2023-Presente)</div>

		<p class="mt-1 justify">
			<i>En progreso</i>
		</p>
	`);
	$('#fuam-realup').html(`
		<h3><i>Desarrollo de Software</i> [tiempo parcial]</h3>
		<div class="trnsf-thin">(FUAM, 2022-2023)</div>

		<p class="mt-1 justify">
			Desarrollo de una aplicación web para el etiquetaje de grandes datasets de Aprendizaje Automático compuestos de tweets. En colaboración con el Observatorio Español del Racismo y la Xenofobia y el <a href="https://real-up.eu/" target="_blank">proyecto Real-UP de la Unión Europea</a>.
		</p>
	`);
	$('#educationH2').text("Educación");
	$('#compscidegree').html(`
		<h3><i>Grado en Ingeniería Informática</i></h3>
		<div class="trnsf-thin">(UAM, 2019-2023) 8,82 / 10</div>

		<p class="mt-1 justify">
			Estudié soluciones basadas en IA, seguridad informática, administración de sistemas y Big Data. Galardonado con la máxima calificación (Matrícula de Honor) en 8 de los 32 cursos. Trabajo fin de grado en investigación sobre métodos y sesgos del aprendizaje profundo convolucional (<i>work in progress</i></i>).
		</p>
	`);
	$('#ibo').html(`
		<h3><i>Diploma del Bachillerato Internacional</i></h3>
		<div class="trnsf-thin">(IES Rosa Chacel (Colmenar Viejo), 2017-2019) 38 / 45</div>

		<p class="mt-1 justify">
			Monografía del IB calificada con nota máxima (A). Realicé ensayos de Investigación en cursos como Química, Matemáticas, Física, Literatura e Historia.
		</p>
	`);


	// PORTFOLIO
	$('#publicationsH2').text("Publications");
	$('#mapacheProj').html(`
		<div class="row mt-2">
			<div class="thumbnail col-md-3">
				<img class="rounded mx-auto d-block img-fluid" src="/assets/img/mapache.png" alt="Mapache">
			</div>
			<div class="col-md-9 pub-block">
				<div class="trnsf-italic h5">Mapache Server</div>
				<div class="pub-authors mt-1">Servidor web HTTP completamente funcional</div>
				<div class="pub-congress">Soporte completo de los protocolos HTTP & HTTPS. Generación de listados de directorios. Admite ficheros de configuración que permiten al usuario adaptar el servidor a sus necesidades.</div>
				<div class="pub-link mt-1"><i class="fab fa-github"></i> <a href="https://github.com/danibt656/Mapache" target="_blank" class="link-dark">GitHub</a></div>
				<div class="d-none"></div>
			</div>
		</div>
	`);
	$('#heraProj').html(`
		<div class="row mt-2">
			<div class="thumbnail col-md-3">
				<img class="rounded mx-auto d-block img-fluid" src="/assets/img/hera.jpg" alt="Hera">
			</div>
			<div class="col-md-9 pub-block">
				<div class="trnsf-italic h5">Hera</div>
				<div class="pub-authors mt-1">Asistente de voz doméstico simple</div>
				<div class="pub-congress">Asistente doméstico casero basado en Alexa/Siri. Protocolo cliente-servidor TCP personalizado, para que funcione para todos los dispositivos de una LAN privada. Conectado con API externa para recuperar el tiempo en cualquier ciudad del globo.</div>
				<div class="pub-link mt-1"><i class="fab fa-github"></i> <a href="https://github.com/danibt656/Hera" target="_blank" class="link-dark">GitHub</a></div>
				<div class="d-none"></div>
			</div>
		</div>
	`);
}

function loadFr() {
	$('#aboutme').text("Sur moi");
	$('#education').text("Éducation & Expérience");
	$('#portfolio').text("Portfolio");
	
	// ABOUT ME

	$('#littledesc').text("Étudiant en dernière année d'ingénierie informatique à l'École Polytechnique Supérieure (UAM).");
	$('#city').html("Madrid <br/>Madrid, Espagne");
	$('#link-cv').text("CV [Mise à jour le 02/2023]");
	$('#largedesc').html(`
		Je suis <b>étudiant en dernière année d'Ingénierie Informatique</b> à Madrid (Espagne), à l'École Polytechnique Supérieure, ou <a href="https://www.uam.es/ss/Satellite/EscuelaPolitecnica/es/home.htm" target="_blank">EPS-UAM</a> en abrégé.
		<br><br>
		Bien sûr, je fais beaucoup d'autres choses en dehors des études, comme travailler sur mes projets personnels. Bien que je me concentre sur la science des données et l'apprentissage automatique à un niveau professionnel, j'aime aussi beaucoup la programmation de bas niveau!
		<br><br>
		Il y a aussi ma passion pour l'apprentissage des langues étrangères, qui remonte à mes années d'école. Mais par-dessus tout, je me considère comme un lecteur avid et un passionné de l'apprentissage, prêt à prendre le chemin le plus difficile si le besoin s'en fait sentir (c'est aussi pourquoi je suis fière d'avoir participé au programme du <a href="https://www.ibo.org" target="_blank">diplôme du Baccalauréat International</a>!)
	`);
	$('#researchinterestsH4').text("Intérêts de recherche");
	$('#researchinterests').text(`Je suis profondément intéressé par l'apprentissage automatique et je travaille avec des méthodes de pointe telles que les réseaux neuronaux profonds, les réseaux convolutifs et les algorithmes génétiques. J'ai également de l'expérience dans le domaine de l'atténuation des biais.`);
	$('#honors-and-awards').text("Prix et bourses d'études");
	$('#colab-scholarship').html(`
		<strong>Bourse de Collaboration</strong> pour les travaux de fin d'études
		[<a href="https://www.educacionyfp.gob.es/servicios-al-ciudadano/catalogo/estudiantes/becas-ayudas/para-estudiar/universidad/grado/becas-colaboracion.html" class="link-dark" target="_blank">Ministère de l'Éducation</a>] 
		- Nov, 2022
	`);
	$('#madrid-scholarship').html(`
		<strong>Bourse d'excellence</strong> pour les étudiants universitaires
		[<a href="https://www.comunidad.madrid/servicios/educacion/becas-excelencia-universitarios" class="link-dark" target="_blank">Communauté de Madrid (Espagne)</a>] 
		- Jun, 2022
	`);
	$('#honorgrades').html(`
		<strong>Notes avec mention d'honours</strong> dans 8 des 32 matières
		[Diplôme d'Ingénierie Informatique] 
		Sep, 2019 - Jun, 2023
	`);

	// EDUCATION

	$('#workexpH2').text("Work Experience");
	$('#internshipIIC').html(`
		<h3><i>Stage, apprentissage automatique</i></h3>
		<div class="trnsf-thin">(Institut d'Ingénierie de la Connaissance - IIC, 2023-Présent)</div>

		<p class="mt-1 justify">
			<i>Actuellement en cours</i>
		</p>
	`);
	$('#fuam-realup').html(`
		<h3><i>Développeur Informatique</i> [part-time]</h3>
		<div class="trnsf-thin">(FUAM, 2022-2023)</div>

		<p class="mt-1 justify">
			Développement d'une application web pour l'étiquetage par les utilisateurs d'ensembles de données denses d'apprentissage automatique constitués de tweets. En coopération avec l'Observatoire Espagnol du Racisme et de la Xénophobie et le <a href="https://real-up.eu/" target="_blank">Projet de l'Union Européenne Real-UP</a>.
		</p>
	`);
	$('#educationH2').text("Éducation");
	$('#compscidegree').html(`
		<h3><i>Diplôme d'Ingénierie Informatique</i></h3>
		<div class="trnsf-thin">(UAM, 2019-2023) 8,82 / 10</div>

		<p class="mt-1 justify">
			Étudier les solutions basées sur l'IA, la sécurité informatique, l'administration des systèmes et le Big Data. A obtenu la meilleure note (Honors) dans 8 des 32 matières. Thèse de fin d'études sur la recherche des méthodes d'apprentissage profond convolutif et les biais (<i>travail en cours</i></i>).
		</p>
	`);
	$('#ibo').html(`
		<h3><i>Diplôme du Baccalauréat International</i></h3>
		<div class="trnsf-thin">(IES Rosa Chacel (Colmenar Viejo), 2017-2019) 38 / 45</div>

		<p class="mt-1 justify">
			Mon IB Extended Essay a obtenu la note A. A fait des essais de recherche dans des cours tels que la chimie, les mathématiques, la physique, la littérature et l'histoire.
		</p>
	`);


	// PORTFOLIO
	$('#publicationsH2').text("Publications");
	$('#mapacheProj').html(`
		<div class="row mt-2">
			<div class="thumbnail col-md-3">
				<img class="rounded mx-auto d-block img-fluid" src="/assets/img/mapache.png" alt="Mapache">
			</div>
			<div class="col-md-9 pub-block">
				<div class="trnsf-italic h5">Mapache Server</div>
				<div class="pub-authors mt-1">Serveur web HTTP entièrement fonctionnel</div>
				<div class="pub-congress">Prise en charge complète des protocoles HTTP & HTTPS. Génération de listes d'répertoires. Prend en charge les fichiers de configuration qui permettent à l'utilisateur d'adapter le serveur à ses besoins.</div>
				<div class="pub-link mt-1"><i class="fab fa-github"></i> <a href="https://github.com/danibt656/Mapache" target="_blank" class="link-dark">GitHub</a></div>
				<div class="d-none"></div>
			</div>
		</div>
	`);
	$('#heraProj').html(`
		<div class="row mt-2">
			<div class="thumbnail col-md-3">
				<img class="rounded mx-auto d-block img-fluid" src="/assets/img/hera.jpg" alt="Hera">
			</div>
			<div class="col-md-9 pub-block">
				<div class="trnsf-italic h5">Hera</div>
				<div class="pub-authors mt-1">Une assistant vocal domestique simple</div>
				<div class="pub-congress">Assistant domestique basé sur Alexa/Siri. Protocole client-serveur TCP personnalisé pour fonctionner pour tous les appareils sur un réseau local privé. Connecté à une API externe pour récupérer l'heure dans n'importe quelle ville du globe.</div>
				<div class="pub-link mt-1"><i class="fab fa-github"></i> <a href="https://github.com/danibt656/Hera" target="_blank" class="link-dark">GitHub</a></div>
				<div class="d-none"></div>
			</div>
		</div>
	`);
}

function loadlang() {
	const lng = document.getElementById("langselector").value;
	switch (lng) {
		case "en":
			loadEn();
			break;
		case "es":
			loadEs();
			break;
		case "fr":
			loadFr();
			break;
    }
}
