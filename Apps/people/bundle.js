(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var glue = require('../../../libs/spotify-glue-cat');
glue.gridOverlay.listen();

// Set up body scroll bar
var scrollbarEvents = require('../../../libs/spotify-events/scrollbar');
scrollbarEvents.attach();
scrollbarEvents.update();

var Navigator = require('../../../libs/spotify-navigation/navigator');
var AppState = require('../../../libs/spotify-navigation/app-state');

var nav = new Navigator();

var people = require('./people');
var peopleArea = document.getElementById('people');
var peopleList = document.createElement('ul');
var peopleTemp = document.createDocumentFragment();
var userLinkPrefix = 'spotify:user:';
var person;

for (var i = 0, item; i < people.length; i++) {
  item = document.createElement('li');

  if (people[i].uid) {
    person = document.createElement('a');
    person.className = 'text-secondary';
    person.href = userLinkPrefix + people[i].uid;
  } else {
    person = document.createElement('span');
  }

  person.innerHTML = people[i].name;
  item.appendChild(person);
  if (i !== people.length - 1) {
    item.innerHTML += '<br/>\n';
  }
  peopleTemp.appendChild(item);
}
peopleList.appendChild(peopleTemp);
peopleArea.appendChild(peopleList);

peopleList.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();

  if (e.target.href) {
    nav.requestOpenState(new AppState(e.target.href));
  }
}, false);

require('../../../libs/spotify-expose-dev-mode-debug-globals/bridge').init();
require('../../../libs/spotify-expose-dev-mode-debug-globals/cosmos').init();

},{"../../../libs/spotify-events/scrollbar":10,"../../../libs/spotify-expose-dev-mode-debug-globals/bridge":13,"../../../libs/spotify-expose-dev-mode-debug-globals/cosmos":14,"../../../libs/spotify-glue-cat":16,"../../../libs/spotify-navigation/app-state":19,"../../../libs/spotify-navigation/navigator":20,"./people":2}],2:[function(require,module,exports){
'use strict';

var people = [{ name: 'Magnus Melander', uid: '' }, { name: 'Alexey Lapitsky', uid: '' }, { name: 'Mehrdad Hassan Abadi', uid: 'mehrdad_64' }, { name: 'Michelle Ackerman', uid: 'namrekcam' }, { name: 'Alberto Núñez Acosta', uid: 'nuak' }, { name: 'Ross Adams', uid: '' }, { name: 'Patricia Adamsson', uid: 'adamsdotter' }, { name: 'Kristofer Agermark', uid: 'djtotte' }, { name: 'Ankit Aggarwal', uid: 'ankitaggarwal' }, { name: 'Rohan Agrawal', uid: '1245176965' }, { name: 'Tobias Ahlin', uid: 'pannpann' }, { name: 'Oskar Werkelin Ahlin', uid: 'osk' }, { name: 'Samuel Ahlqvist', uid: '' }, { name: 'Mattias Ahlström', uid: 'ahlstrominfo' }, { name: 'Mattias Ahnberg', uid: 'ahnberg' }, { name: 'Johanna "Hannis" Albinsson', uid: 'hannis' }, { name: 'Michelle Alexander', uid: 'mymichellle' }, { name: 'Jouhaine Aljobair', uid: '' }, { name: 'Vince Allen', uid: '1221165923' }, { name: 'Lise Alm', uid: '' }, { name: 'Daniel Prata Almeida', uid: '1221910392' }, { name: 'Rafael Oleza Alomar', uid: 'rafeca' }, { name: 'Ramon van Alteren', uid: '' }, { name: 'Vincent Ambo', uid: 'tazjin' }, { name: 'Alexander Andelkovic', uid: 'aandelkovic' }, { name: 'Jim Anderson', uid: 'jimcto' }, { name: 'Daniel Andersson', uid: '' }, { name: 'Mark Andrews', uid: 'onamali' }, { name: 'Chris Angove', uid: '1223860812' }, { name: 'Danel Arismendez', uid: '' }, { name: 'Sebastiano Armeli', uid: 'seb_armeli' }, { name: 'Mattias Arrelid', uid: 'mattias' }, { name: 'Oskar Arvidsson', uid: 'irock' }, { name: 'Johan Avoine', uid: 'biozer' }, { name: 'Cecilia Axelsson', uid: '' }, { name: 'Emil Axelsson', uid: 'emiax' }, { name: 'Josh Baer', uid: '$jb;' }, { name: 'Uldis Barbans', uid: '114541900' }, { name: 'Philip von Bargen', uid: 'philipvonbargen' }, { name: 'Nick Barkas', uid: 'nbarkas' }, { name: 'Pablo Barrera', uid: 'akjin' }, { name: 'Elissa Barrett', uid: 'elissaeb' }, { name: 'Katherine Bednarczyck', uid: '' }, { name: 'Marc Beitchman', uid: 'marcb' }, { name: 'Sophia Bendz', uid: '' }, { name: 'Fredrik Bengtsson', uid: 'eldloppa' }, { name: 'Joachim Bengtsson', uid: 'devnevyn' }, { name: 'Krystle Bennett', uid: 'bennett_k' }, { name: 'Trevor Bentley', uid: 'mrmekon' }, { name: 'Kristofer Berg', uid: 'k.berg' }, { name: 'Mikael Berggren', uid: 'miken' }, { name: 'Loke Berne', uid: 'tehhobbit' }, { name: 'Erik Bernhardsson', uid: 'erikbern' }, { name: 'Matteo Bertozzi', uid: '1116817471' }, { name: 'Marcus Better', uid: 'mbetter' }, { name: 'Wouter de Bie', uid: 'utrecht2009' }, { name: 'Bérangère Biencourt', uid: '' }, { name: 'Martin Birkeldh', uid: 'vajpero' }, { name: 'Niklas Bivald', uid: '' }, { name: 'Alessandro Bizzarri', uid: '' }, { name: 'Johan Björk', uid: 'svamp' }, { name: 'Karin Björkén', uid: 'karinbjorken' }, { name: 'Emily french Blake', uid: '' }, { name: 'Andreas Blixt', uid: 'andreas.blixt' }, { name: 'Dylan Bochman', uid: '' }, { name: 'Pär Bohrarper', uid: 'parbo' }, { name: 'Gabriel Bonander', uid: 'gabbon' }, { name: 'Anders Bond', uid: 'andersbond' }, { name: 'Tim Botterill', uid: 'michaeldouglasboy' }, { name: 'Felix Bouleau', uid: 'flakespancakes' }, { name: 'Reynaldo Boulogne', uid: 'reynaldo.boulogne' }, { name: 'Rachel Branden', uid: '' }, { name: 'John Brophy', uid: 'brophenator' }, { name: 'Johan Brorson', uid: 'jbrorson' }, { name: 'Matt Brown', uid: 'mattnworb' }, { name: 'Paul Brown', uid: '' }, { name: 'Jan Brucek', uid: 'honzab' }, { name: 'Marc Bruggmann', uid: '1120288666' }, { name: 'Felix Bruns', uid: 'fxbhh' }, { name: 'Viktor Brännfors', uid: '' }, { name: 'Jim Butcher', uid: '' }, { name: 'Johan Böhlin', uid: 'johboh' }, { name: 'Amanda Bulger', uid: '' }, { name: 'Umberto Di Candia', uid: 'spoty1970' }, { name: 'Joakim Carlsson', uid: 'tensh' }, { name: 'Oscar Carlsson', uid: 'oscarlsson' }, { name: 'Peter Carlsten', uid: 'peter.carlsten' }, { name: 'Bo Carper', uid: 'bcarper' }, { name: 'Pierre Carrier', uid: 'gcarrier' }, { name: 'Ruairi Carroll', uid: 'rucarrol' }, { name: 'Florent Castelli', uid: 'orphis' }, { name: 'Aron Cedercrantz', uid: 'rastersize' }, { name: 'Viktor Cessan', uid: 'viktorcessan' }, { name: 'Arnaud Champetier', uid: '' }, { name: 'Ed Chen', uid: 'yokuyuki' }, { name: 'Oscar Vestlie', uid: 'exstac' }, { name: 'Kenneth Chen', uid: 'kennethchen' }, { name: 'Lee Cherry', uid: 'lee' }, { name: 'Sigfrido Chirinos', uid: 'siggy2-us' }, { name: 'Sung-Kyu Choi', uid: '' }, { name: 'Brian Christensen', uid: 'brichri' }, { name: 'John Cieslik-Bridgen', uid: 'jcb1973' }, { name: 'Ed Cipriano', uid: '124785919' }, { name: 'Martin Clemmensen', uid: '115185075' }, { name: 'Nathaniel Cochrane', uid: '' }, { name: 'Matthew Cohen', uid: '126452812' }, { name: 'Nicole Colabella', uid: 'koley74' }, { name: 'Coby Coll', uid: 'myusername1234' }, { name: 'Quenton Cook', uid: 'qcook2000' }, { name: 'Richard Cook', uid: 'richardcook2' }, { name: 'David Cooper', uid: '' }, { name: 'Nic Cope', uid: 'internegz' }, { name: 'Jonathan Coveney', uid: 'thejco' }, { name: 'Ryan Covill', uid: 'ryancovill' }, { name: 'Diego Cristina', uid: 'republicanito' }, { name: 'Ryan Culbertson', uid: 'rculbertson' }, { name: 'Samuel Cyprian', uid: 'samcyp' }, { name: 'Stine Bauer Dahlberg', uid: '' }, { name: 'Aaron Daubman', uid: 'daubman' }, { name: 'Uwe Dauernheim', uid: 'kreisquadratur' }, { name: 'Rouzbeh Delavari', uid: '' }, { name: 'Doug DeMarco', uid: 'drdemarc' }, { name: 'Nicolas Deom', uid: 'nico' }, { name: 'Jacob Deshayes', uid: '677736575' }, { name: 'Alexandra Dinsdale', uid: 'jadrax' }, { name: 'Lars Djerf', uid: '_lars' }, { name: 'Henrik Österdahl Djurfelter', uid: 'gurrahenka' }, { name: 'Daniel Drayne', uid: 'ddrayne' }, { name: 'Olivier Dubigeon', uid: '' }, { name: 'Evan Dudla', uid: '1259857418' }, { name: 'James Duffett-Smith', uid: '' }, { name: 'Nick Durbin', uid: 'ndurbin' }, { name: 'Dariusz Dziuk', uid: '126711017' }, { name: 'Samwoo E', uid: 'iconsam' }, { name: 'Edward Eaton', uid: 'eddroard' }, { name: 'Per Eckerdal', uid: 'per.eckerdal' }, { name: 'Göran Edling', uid: 'gregerg' }, { name: 'Johan Edlund', uid: 'jocklas' }, { name: 'Björn Edström', uid: 'bjorn.edstrom' }, { name: 'Tobias Edström', uid: '' }, { name: 'Greg Edwards', uid: '1115436326' }, { name: 'Daniel Ek', uid: '' }, { name: 'Joel Ek', uid: 'genomelak' }, { name: 'Niklas Ek', uid: 'eshu' }, { name: 'Daniel Ekberger', uid: '' }, { name: 'Dag von Schéele Ekengren', uid: 'dagobert' }, { name: 'Jeff Eklund', uid: 'jeekl' }, { name: 'Richard Eklund', uid: 'erebore' }, { name: 'Joel Ekstrand', uid: 'joellernej' }, { name: 'Anders Elfving', uid: '' }, { name: 'Lutz Emmerich', uid: '' }, { name: 'Eyal Erez', uid: 'irself' }, { name: 'Mikael Ericsson', uid: 'diripio' }, { name: 'Emil Eriksson', uid: 'shadewind' }, { name: 'Anders Eurenius', uid: '' }, { name: 'Per Fagrell', uid: '' }, { name: 'Judy Faktorovich', uid: 'judyfaktor' }, { name: 'Jose Falcon', uid: 'konbanwani' }, { name: 'Nathan Ferch', uid: 'foop42' }, { name: 'Martina Iglesias Fernández', uid: 'ireth1' }, { name: 'Jose Ferrandiz', uid: 'yolapongo' }, { name: 'Jonathan Forster', uid: '' }, { name: 'Gösta Forsum', uid: 'forsum' }, { name: 'Russell Fowles', uid: '1242605583' }, { name: 'Emil Fredriksson', uid: 'emil' }, { name: 'Marcus Fredriksson', uid: 'drmegahertz' }, { name: 'Elias Freider', uid: 'fishmoose' }, { name: 'Marcus Frödin', uid: 'marcusf' }, { name: 'Faisal Galaria', uid: '' }, { name: 'Tommie Gannert', uid: '' }, { name: 'David Poblador i Garcia', uid: 'nirvanis' }, { name: 'Carla Garrido-Lestache', uid: '' }, { name: 'Javier Gayoso', uid: '' }, { name: 'Peng Ge', uid: '' }, { name: 'Zia George', uid: '' }, { name: 'Dan Gerhardsson', uid: '' }, { name: 'Chris Ghanem', uid: 'cghanem' }, { name: 'Kiran Gandhi', uid: 'kirangandhi21' }, { name: 'Bogo Giertler', uid: 'bogo.giertler' }, { name: 'Mikael Goldmann', uid: '' }, { name: 'Viktor Granholm', uid: 'viktorg' }, { name: 'Marshall Greenblatt', uid: '' }, { name: 'Oskar Grenholm', uid: 'bobcat_zed' }, { name: 'Mark Grey', uid: '1263529175' }, { name: 'Fredrik Gustafsson', uid: 'jagheterfredrik' }, { name: 'Niklas Gustavsson', uid: 'protocol7' }, { name: 'Johan Gärderud', uid: 'garberus' }, { name: 'Miguel Gómez', uid: 'overmik' }, { name: 'Maria Göthlin', uid: '' }, { name: 'Johan Haals', uid: 'johan.haals' }, { name: 'Erik Hammar', uid: 'hammond' }, { name: 'Erik Hansson', uid: 'elipsion' }, { name: 'Petra Hansson', uid: '' }, { name: 'Nicholas Harteau', uid: 'nrh3k' }, { name: 'Erik Hartwig', uid: 'fnork' }, { name: 'Benjamin Hasselgren', uid: 'benis' }, { name: 'Chris Hawley', uid: '1212077216' }, { name: 'Marc Hazan', uid: '' }, { name: 'Cliff Hazell', uid: 'cliff.hazell' }, { name: 'Ben Hecht', uid: '' }, { name: 'Anna Hedlund', uid: 'deleterious' }, { name: 'Johan Hedren', uid: '' }, { name: 'Nikhil Helferty', uid: 'hardcorebabbler' }, { name: 'Charlie Hellman', uid: 'chellmania' }, { name: 'Jenny Hermanson', uid: '' }, { name: 'Gandalf Hernandez', uid: 'gandalf.hernandez' }, { name: 'Santeri Hernejärvi', uid: 'santeri' }, { name: 'Daniel Herzog', uid: 'danfooo' }, { name: 'Emil Hesslow', uid: '' }, { name: 'Simon Hofverberg', uid: 'hofverbergs' }, { name: 'Robert Nissa Holmgren', uid: 'nabb' }, { name: 'Ludwig Holmström', uid: 'holmstrom88' }, { name: 'Rebecca Horvath', uid: '' }, { name: 'Magnus Hult', uid: '' }, { name: 'Jeremy Huntwork', uid: 'jhuntwork' }, { name: 'Jack Hurst', uid: 'jackdangerhurst' }, { name: 'Daniel Häggström', uid: 'lyssnare' }, { name: 'Linea Högberg', uid: 'signelinea' }, { name: 'Sofia Höglund', uid: 'tuesdaymorning' }, { name: 'Olga Hörding', uid: '' }, { name: 'Holger Ihrig', uid: '' }, { name: 'Seven Ilyas', uid: 'so7' }, { name: 'Marcus Isaksson', uid: 'maris382' }, { name: 'Anders Ivarsson', uid: 'anders.ivarsson' }, { name: 'Niklas Ivarsson', uid: '' }, { name: 'Mattias Jansson', uid: 'fimblo' }, { name: 'Bartek Jarocki', uid: 'bartekj' }, { name: 'Greg Jarvis', uid: '' }, { name: 'Mario Bob Jelica', uid: 'b0bben' }, { name: 'Per-Olov Jernberg', uid: 'possan' }, { name: 'Andy Jillings', uid: 'cheeseman1976' }, { name: 'Miguel Jiménez', uid: 'mjesun' }, { name: 'Patricia Jiménez', uid: '114121496' }, { name: 'Calvin Joce', uid: 'greendog' }, { name: 'Erik Johansson', uid: 'tozz' }, { name: 'Mattias Petter Johansson', uid: 'mattiasjfy' }, { name: 'Peter Johansson', uid: 'evaeri81' }, { name: 'Pontus Johansson', uid: 'ponjoh' }, { name: 'Pär Johansson', uid: 'sigge_stardust' }, { name: 'Maria Johnsson', uid: '' }, { name: 'Aggie Jones', uid: '' }, { name: 'Rorey Jones', uid: 'roreyjones' }, { name: 'Tomas Jonsson', uid: 'zooper' }, { name: 'Rikard Jönsson', uid: 'yanquiuxo' }, { name: 'Erik Junberger', uid: 'erik' }, { name: 'Horia Jurcut', uid: '119372340' }, { name: 'Michelle Kadir', uid: 'michellekadir' }, { name: 'Mārtiņš Kalvāns', uid: '1180161792' }, { name: 'Kristofer Karlsson', uid: 'krka' }, { name: 'Julian Kennedy', uid: '' }, { name: 'Daniel Kennett', uid: 'iKenndac' }, { name: 'Olof Kihlberg', uid: 'killberg' }, { name: 'Daniel Kim', uid: '' }, { name: 'Jamie Kirkpatrick', uid: 'gringostarr' }, { name: 'Justin Knowles', uid: 'jayceekay' }, { name: 'Johannes Koggdal', uid: 'johannes.koggdal' }, { name: 'Nicholas Konstantinidis', uid: '' }, { name: 'Georgy Korev', uid: '1187915617' }, { name: 'Kay Korper', uid: 'pakdd' }, { name: 'Mikael Krantz', uid: '' }, { name: 'Alexander Krasnukhin', uid: 'the.malkolm' }, { name: 'John "Jak" Kreitlow', uid: 'radiumv' }, { name: 'Gunnar Kreitz', uid: 'gkreitz' }, { name: 'Peter Kullman', uid: '' }, { name: 'Esh Kumar', uid: 'eshvk' }, { name: 'Chiel Kunkels', uid: 'chielkunkels' }, { name: 'Johannes Kählare', uid: 'joynes' }, { name: 'Daniel Källbom', uid: 'danielolof' }, { name: 'Jason LaCarrubba', uid: 'jayubba' }, { name: 'Alexander Lagerström', uid: 'a.lagerstrom' }, { name: 'Patrick Lambert', uid: 'sad_otter' }, { name: 'Maja Landar', uid: '' }, { name: 'Henrik Landgren', uid: 'hlandgren' }, { name: 'Tyler Langan', uid: 'squarewings' }, { name: 'Carl-Axel Larsen', uid: '' }, { name: 'Jens Larsson', uid: 'thejens' }, { name: 'Mattias Larsson', uid: 'mglarsson' }, { name: 'Anton Lazarev', uid: '1158212995' }, { name: 'Thomas de Lazzari', uid: 'tdelazzari' }, { name: 'Brian Lee', uid: '1116887711' }, { name: 'DJ Lee', uid: '123093810' }, { name: 'Johan Leijonhufvud', uid: '' }, { name: 'Erwan Lemonnier', uid: 'erwan.lemonnier' }, { name: 'Aron Levin', uid: 'allacentrum' }, { name: 'Neville Li', uid: 'sinisa_lyh' }, { name: 'Andreas Liffgarden', uid: 'liffgarden' }, { name: 'Brice Lin', uid: 'bricelinfree' }, { name: 'Mats Linander', uid: 'mtsl' }, { name: 'Kristofer Lindberg', uid: 'k.lindberg' }, { name: 'Erik Lindblad', uid: 'one-man-bucket' }, { name: 'Stefan Lindblom', uid: 'stefanlindblom' }, { name: 'Mats Lindelöf', uid: 'matslindelof' }, { name: 'Gustav Lindqvist', uid: '' }, { name: 'Per Lindstrand', uid: 'fryingpanjoe' }, { name: 'Henrik Lindström', uid: 'henok80' }, { name: 'Johan Lindström', uid: 'erik.johan.lindstrom' }, { name: 'Love Lindström', uid: 'laero' }, { name: 'Jonatan Littke', uid: 'littke' }, { name: 'Michael Liou', uid: 'chunghanliou' }, { name: 'William Liu', uid: '1249549022' }, { name: 'Smith Louis', uid: '1228292077' }, { name: 'Chinmay Lonkar', uid: '5lives' }, { name: 'João Lopes', uid: 'zunbid' }, { name: 'Martin Lorentzon', uid: '' }, { name: 'Ned Jackson Lovely', uid: 'nedjl' }, { name: 'Gabriel Lundberg', uid: 'snaily' }, { name: 'Martin Lundberg', uid: 'knutsune' }, { name: 'Niklas Lundberg', uid: '' }, { name: 'Olle Lundberg', uid: 'olle.lundberg' }, { name: 'Wilhelm Lundborg', uid: 'lundborg' }, { name: 'Daniel Lundin', uid: 'unempty' }, { name: 'Johan Lundström', uid: 'lundstrj' }, { name: 'Henrik Löf', uid: 'henlof' }, { name: 'Alejandro Machado', uid: 'alemacgo' }, { name: 'Richard Mahlberg', uid: '' }, { name: 'Sriram Malladi', uid: 'srirampmalladi' }, { name: 'Per Malm', uid: 'per' }, { name: 'Ariel Marcus', uid: 'littlemerman' }, { name: 'Gustavo Marin', uid: '' }, { name: 'Brendan Marsh', uid: '1263130477' }, { name: 'David Martin', uid: 'beefjago' }, { name: 'German Martinez', uid: '' }, { name: 'Marco de Masi', uid: '1222925678' }, { name: 'Andreas Mattsson', uid: 'andreas' }, { name: 'Alexis McCabe', uid: '' }, { name: 'Hunter McCurry', uid: 'huntermccurry' }, { name: 'George McMonigle', uid: 'gmcmonigle' }, { name: 'Abeyu Mengistu', uid: '1217339526' }, { name: 'Drew Michel', uid: 'afdrew11' }, { name: 'Matthieu Minaud', uid: '' }, { name: 'Kinshuk Mishra', uid: 'kinshuk' }, { name: 'Jon Mitchell', uid: '' }, { name: 'Emiel Mols', uid: 'emielm' }, { name: 'Chris Monk', uid: 'monkstasy' }, { name: 'Matt Montag', uid: 'ivionday' }, { name: 'Javier Moscardó', uid: 'jmosca' }, { name: 'Jose M Mucientes', uid: 'josemariamf' }, { name: 'Pascal de Mul', uid: 'pdemul' }, { name: 'Jimmy Mårdell', uid: 'yarin' }, { name: 'Philip Möjbro', uid: '' }, { name: 'Johan Nehlin', uid: 'johannehlin' }, { name: 'Jillian Nichols', uid: 'jilliannichols' }, { name: 'Fredrik Niemelä', uid: '' }, { name: 'Olof Nilsson', uid: 'olof.nilsson.' }, { name: 'Oscar Nilsson', uid: 'oemt' }, { name: 'Tom Noble', uid: '' }, { name: 'Daniel Norberg', uid: 'danieln' }, { name: 'Sarah Nordenås', uid: 'psynisk' }, { name: 'Henrik Nordin', uid: 'dzhambulat' }, { name: 'Alex Norström', uid: 'alegaa' }, { name: 'Fredrik Norén', uid: '' }, { name: 'John Novatnack', uid: '' }, { name: 'Lydia Oates', uid: '' }, { name: 'Mark "Keeto" Obcena', uid: 'imk2' }, { name: 'Mikael Ohlson', uid: 'atexit' }, { name: 'Olof Ol-Mårs', uid: 'olofom' }, { name: 'Magnus Olausson', uid: '' }, { name: 'Mikael Olenfalk', uid: 'mikael.olenfalk' }, { name: 'Alex Olshansky', uid: 'alexolshansky' }, { name: 'Sthephany van Oordt', uid: 'sthephanyvanoordt' }, { name: 'Jason Palmer', uid: 'palmerj3' }, { name: 'Stefan Palmquist', uid: '' }, { name: 'Ken Parks', uid: '' }, { name: 'John Pavley', uid: 'jpavley' }, { name: 'Beth Perrett', uid: '' }, { name: 'Daniel Persson', uid: 'mejslo' }, { name: 'Johan Persson', uid: '' }, { name: 'Kalle Persson', uid: 'kalleperson' }, { name: 'Örjan Persson', uid: 'o.p' }, { name: 'Brett Peters', uid: 'deauxgemonts' }, { name: 'Drew Petersen', uid: 'kirbysayshi' }, { name: 'Jonathan Pettersson', uid: 'jonathananderspettersson' }, { name: 'Agnes Petäjävaara', uid: 'petäjävaara' }, { name: 'Daisy Pilbrow', uid: 'hyzenthlay78' }, { name: 'Jessica Pitt', uid: '' }, { name: 'Lukáš Poláček', uid: 'lukipuki' }, { name: 'Ronald Pompa', uid: 'wizzler' }, { name: 'Henrik Preifors', uid: 'preifors' }, { name: 'Jyrki Pulliainen', uid: 'nailor' }, { name: 'Mikko Puustinen', uid: 'lapilli' }, { name: 'José M. Pérez', uid: 'jmperezperez' }, { name: 'Tomás Pérez', uid: 'tomasperezv' }, { name: 'Ahmad Qamar', uid: '1218023175' }, { name: 'Elias Raam', uid: '' }, { name: 'Aleksandar Radulovic', uid: '1114613903' }, { name: 'Ram Ramakrishnan', uid: 'ramwilco' }, { name: 'Sriram Raman', uid: 'sriramkraman' }, { name: 'Emanuel Ramsell', uid: 'spotifyerl3' }, { name: 'Diego Planas Rego', uid: 'somediego' }, { name: 'Nik Reiman', uid: 'sqook' }, { name: 'Noa Resare', uid: 'noa' }, { name: 'Jose Reyes', uid: '1242613310' }, { name: 'Felipe Ribeiro', uid: 'felipernb' }, { name: 'Eleanor Richardson', uid: '' }, { name: 'Jason Richman', uid: 'jayrichman234' }, { name: 'Ian Robbins', uid: 'irobbin2' }, { name: 'Molly Ronan', uid: '1213045689' }, { name: 'Lynn Root', uid: 'econchick' }, { name: 'Andrea Rosengren', uid: 'andypantz' }, { name: 'Iraklis Rossis', uid: '' }, { name: 'Ida Rosén', uid: '' }, { name: 'Björn Roth', uid: 'bjorot' }, { name: 'Fredrika Rothman', uid: 'fredrikarothman' }, { name: 'Stefan Rungardt', uid: 'sterun' }, { name: 'Johannes Fabian Rußek', uid: 'jorussek' }, { name: 'Johan Rydberg', uid: 'jrydberg' }, { name: 'Magnus Röös', uid: 'mla' }, { name: 'Johan Sahlén', uid: '' }, { name: 'Axel Samuelsson', uid: 'limbero' }, { name: 'Victor Sanchez', uid: '' }, { name: 'Martin Sandberg', uid: 'martin121' }, { name: 'Göran Sander', uid: '' }, { name: 'Matthew Santiago', uid: 'matthewsantiago' }, { name: 'Ricardo Santos', uid: 'ricardovice' }, { name: 'Alana Sargent', uid: '' }, { name: 'Alex Sarkesian', uid: '1217930496' }, { name: 'Dogan Saygin', uid: 'dogan' }, { name: 'Roger Schildmeijer', uid: 'schildmeijer' }, { name: 'Andreas Schuldei', uid: 'stockholm' }, { name: 'Jason Schwartz', uid: 'jschwa' }, { name: 'Philip Schweiger', uid: 'pschwei1' }, { name: 'Christian Schweitz', uid: 'christianschweitz' }, { name: 'Mikhail Sedov', uid: 'sedov.mikhail' }, { name: 'Andres Sehr', uid: '' }, { name: 'Oskar Serrander', uid: '' }, { name: 'Juan Manuel Serruya', uid: 'shuank' }, { name: 'Steve Shirley', uid: 'steveshirley' }, { name: 'Ulysses Lei Shi', uid: 'ulyssestone' }, { name: 'Andrew Shum', uid: 'shumbody' }, { name: 'Andrey Sibiryov', uid: 'kobolog' }, { name: 'Marco Siebecke', uid: 'gentoomaniac' }, { name: 'Karl Sigfrids', uid: 'ghastlyghost' }, { name: 'Rohan Singh', uid: 'rohanrsingh' }, { name: 'Petter Skidén', uid: 'peppelin' }, { name: 'Amy Skinner', uid: 'descent3me' }, { name: 'Magnus Sköld', uid: 'mask' }, { name: 'Daniele Sluijters', uid: 'daenney' }, { name: 'Andy Smith', uid: 'andysmith' }, { name: 'David Sohn', uid: 'djsohn10' }, { name: 'James Solomon', uid: 'solomonjames' }, { name: 'Natasa Soltic', uid: 'nsoltic' }, { name: 'Tim Sparks', uid: '' }, { name: 'Mattias Springare', uid: 'mattiasspringare' }, { name: 'Brian Springer', uid: 'brainsprain' }, { name: 'Anand Srinivasan', uid: 'bhagwaan' }, { name: 'Susanne Stage', uid: 'susannestage' }, { name: 'Marcus Forsell Stahre', uid: 'togi' }, { name: 'Alexandra Stanova', uid: 'hoppipolla.' }, { name: 'Mats Stenberg', uid: 'larspaul' }, { name: 'Lars-Erik Stenholm', uid: 'mumin' }, { name: 'Phoebe Stierhoff', uid: '1253828905' }, { name: 'Carl Stjärnlöv', uid: 'karlashnikov' }, { name: 'Nenad Stojanovski', uid: '1222099441' }, { name: 'Rickard Strand', uid: 'vacuumchild' }, { name: 'Ludvig Strigeus', uid: '' }, { name: 'Marianne Strömstedt', uid: '' }, { name: 'Mark Stoughton', uid: 'markstoughton' }, { name: 'Neil Stubbings', uid: '' }, { name: 'John Stäck', uid: 'ionn' }, { name: 'Oskar Stål', uid: '' }, { name: 'Joakim Sundén', uid: 'xxx' }, { name: 'Donovan Sung', uid: 'donovansung' }, { name: 'Arvind Suresh', uid: 'arvindsuresh' }, { name: 'Ula Suwada', uid: 'ossoa' }, { name: 'Olof Svedström', uid: 'user03800' }, { name: 'Anders Svensson', uid: '' }, { name: 'Annina Svensson', uid: '' }, { name: 'Nicklas Söderlind', uid: 'n2k' }, { name: 'Gustav Söderström', uid: '' }, { name: 'Eric Swenson', uid: 'enswenson' }, { name: 'John-John Tedro', uid: 'udoprog' }, { name: 'Yann Thebault', uid: '' }, { name: 'Lowe Thiderman', uid: '1165497318' }, { name: 'Sam Thomas', uid: 'samthomas1000' }, { name: 'Max Thoursie', uid: 'max' }, { name: 'Shane Tobin', uid: 'groovyshoe' }, { name: 'Henrik Torstensson', uid: '' }, { name: 'Patrik Torstensson', uid: 'totte' }, { name: 'Nick Toumpelis', uid: '1226836970' }, { name: 'Joakim Troëng', uid: 'jokkon' }, { name: 'Thodoris Tsiridis', uid: '72lions' }, { name: 'Péter Tóth', uid: '' }, { name: 'Thomas Tönnfält', uid: 'thoton' }, { name: 'Deniz Türkoglu', uid: '' }, { name: 'Javier Ubillos', uid: 'jav' }, { name: 'Javier Uruen Val', uid: 'javiu' }, { name: 'Alick Varma', uid: '' }, { name: 'Isabel Varón', uid: '' }, { name: 'Jacob Vesterlund', uid: '1153058546' }, { name: 'Marcus Vesterlund', uid: 'mzeo' }, { name: 'Cecilia Vigil', uid: 'unitard' }, { name: 'Christian Vikström', uid: '' }, { name: 'Daniel Vázquez', uid: 'pucelazo' }, { name: 'Rick Wacey', uid: 'mugis' }, { name: 'Jacob Waller', uid: 'litenjacob' }, { name: 'Johan Walles', uid: '1115553781' }, { name: 'Johan Wallin', uid: 'wln' }, { name: 'Kajsa Lisa Wallin', uid: '' }, { name: 'Martin Wasielewski', uid: 'marwas' }, { name: 'Kurt Wasserman', uid: 'kurtwasserman' }, { name: 'Andrew Watson', uid: '' }, { name: 'Angela Watts', uid: '' }, { name: 'Joseph Werle', uid: 'josephwerle' }, { name: 'Jóna Westerlund', uid: 'nlogax' }, { name: 'Sebastian Widlund', uid: 'mewppis' }, { name: 'Andy Wiggan', uid: '' }, { name: 'Carina Wigh', uid: '' }, { name: 'Martin Wijk', uid: 'tassmjau' }, { name: 'Kristin Wiktorson', uid: '' }, { name: 'Reid Wilbur', uid: 'wilb0t' }, { name: 'Annabel Wilcken', uid: '' }, { name: 'Adam Williams', uid: '' }, { name: 'Bo Williams', uid: 'bowilliams' }, { name: 'Geoff Wilson', uid: 'gmwils' }, { name: 'Christian Wilsson', uid: 'kribba' }, { name: 'Rolf Wilteus', uid: 'rolwi' }, { name: 'Twan Wolthof', uid: 'xeago' }, { name: 'Alan Wright', uid: 'alanw123' }, { name: 'David Xia', uid: 'davidxia' }, { name: 'Jeffrey Yang', uid: '124985548' }, { name: 'Ernie Yu', uid: '' }, { name: 'Francesc Zacarias', uid: '' }, { name: 'Mattias de Zalenski', uid: 'z' }, { name: 'Hector Zarate', uid: '1138405697' }, { name: 'Pär von Zweigbergk', uid: 'pazw' }, { name: 'Jonas Åman', uid: 'sportkork' }, { name: 'Jon Åslund', uid: 'jon' }, { name: 'Anders Åstrand', uid: 'aastrand' }, { name: 'Robin Öhlin', uid: 'derelict' }, { name: 'Luca Öhman', uid: 'luvs' }, { name: 'Markus Öhrn', uid: 'fisktest' }, { name: 'Andreas Öman', uid: 'andoma' }, { name: 'Joakim Önnerdal', uid: 'jockelhof' }, { name: 'Magnus Österlind', uid: 'mrdooz' }, { name: 'Nils Österling', uid: 'nilleratus' }, { name: 'Joel Östlund', uid: '' }, { name: 'Yasa Akbulut', uid: '11100029276' }, { name: 'Per Bonomi', uid: '112778881' }, { name: 'Meredith Humphrey', uid: 'merehumphrey' }, { name: 'Martin Vacher', uid: 'martinvacher' }, { name: 'Razan Sadeq', uid: 'razsadeq' }, { name: 'Pontus Persson', uid: 'pomle' }];

module.exports = people.sort(function (personA, personB) {
  var lastNameA = personA.name.split(' ').pop();
  var lastNameB = personB.name.split(' ').pop();
  if (lastNameA === lastNameB) {
    // If the lastname is the same, compare the whole string
    return personA.name > personB.name ? 1 : -1;
  }
  return lastNameA > lastNameB ? 1 : -1;
});

},{}],3:[function(require,module,exports){
'use strict';

// Base function that doesn't have any dependencies on it's own. Expects to get
// state (a plain, empty object) injected in addition to a bridge request
// function.
function cosmosRequest(state, bridge, opts, callback) {

  if (typeof opts.uri !== 'string') throw new Error('Expected uri to be string.');

  if (COSMOS_VERBS.indexOf(opts.method) === -1) throw new Error('Method must match valid verb in uppercase (GET, POST etc)');

  if (opts.body && typeof opts.body !== 'string') throw new Error('If body is provided it should be a string.');

  if (opts.headers && Object.prototype.toString.call(opts.headers) !== '[object Object]') throw new Error('Expected headers be a plain object.');

  var cosmosOptions = {
    action: opts.method,
    uri: opts.uri
  };
  if (opts.body) cosmosOptions.body = opts.body;
  if (opts.headers) cosmosOptions.headers = opts.headers;

  /* Cosmos requires each request to have a unique ID. Ideally, this would be
  uuids, but unfortunately, it is integers. This means that in apps that for
  some reason need to use spotify-cosmos-api, there would between the two
  counters if cosmosRequest started from 0. To make it safe for the two
  implemenations to co-exist if needed, we begin counting at
  significantly higher number: */
  state.requestIDCounter = state.requestIDCounter || TEN_PER_SECOND_FOR_A_YEAR;
  state.requestIDCounter++;

  var requestArguments = [state.requestIDCounter, cosmosOptions];

  var isCanceled = false;
  var stateRequestIDCounter = state.requestIDCounter;

  function cancelFunction() {
    isCanceled = true;
    bridge('cosmos_request_cancel', [stateRequestIDCounter]);
  }

  // run is a recursive function that does a bridge request and then keeps
  // pulling values after every response in the case of a subscription. In
  // case we are not subscribing, or the cancelFunction has been called,
  // run sends cosmos_request_cancel and terminates.
  function run(isFirst, requestIDCounter) {
    var messageName = isFirst ? 'cosmos_request_create' : 'cosmos_request_pull';
    bridge(messageName, requestArguments, function (error, responseString) {
      // The request to cancel may not have gotten to the bridge
      // before the original request got resolved,
      // so make sure not to continue if we detect it's been canceled.
      if (isCanceled) {
        return;
      }
      try {
        if (callback) {
          if (error) {
            callback(error);
          } else {
            callback(null, responseString);
          }
        }
      } finally {
        if (opts.method !== 'SUB') {
          // If the request was a non-SUB, tell core to clean up the request.
          // NOTE: Not sure if this is strictly necessary,
          // have not been to investigate in C++-land, so for now
          // we are just mimicing the behavior of spotify-cosmos-api.
          bridge('cosmos_request_cancel', [requestIDCounter]);
        } else if (!isCanceled) {
          // maybe canceled in above callback
          run(false, requestIDCounter);
        }
      }
    });
  }

  run(true, stateRequestIDCounter);

  return cancelFunction;
}

var TEN_PER_SECOND_FOR_A_YEAR = 10 * 60 * 60 * 24 * 365;

var COSMOS_VERBS = ['GET', 'HEAD', 'POST', 'PUT', 'SUB', 'PATCH', 'DELETE'];

module.exports = cosmosRequest;

},{}],4:[function(require,module,exports){
(function (global){
'use strict';

var debug = require('debug')('spotify-bridge-request');
var defer = require('spotify-deferred');

var cosmosBaseFunction = require('./cosmos');

// NOTE: Implicit global state.
var scheduledCoreFlush = false;
var cosmosState = null;

exports.cosmos = cosmos;
exports.cosmosJSON = cosmosJSON;
exports.request = request;
exports._request = _request;

function cosmos() {
  if (!cosmosState) cosmosState = {};

  var baseArguments = [cosmosState, request];
  var cancelFunction = cosmosBaseFunction.apply(null, baseArguments.concat(Array.prototype.slice.call(arguments)));
  return cancelFunction;
}

function _createCallbackWrapper(callback) {
  return function callbackWrapper(err, response) {
    if (!err) {
      var parsedResponse;
      try {
        parsedResponse = JSON.parse(response.body);
      } catch (e) {
        e.message = 'Failed to parse cosmos response: ' + e.message;
        callback(e);
        return;
      }
      callback(null, parsedResponse);
    } else {
      callback(err, response);
    }
  };
}

function cosmosJSON(opts, callback) {
  if (opts.body) {
    opts.body = JSON.stringify(opts.body);
  }
  var callbackWrapper = callback ? _createCallbackWrapper(callback) : null;
  var cancelFunction = cosmos(opts, callbackWrapper);
  return cancelFunction;
}

function request(name, opt_args, opt_callback) {
  var args = opt_args || [];
  var callback = getCallback(name, args, opt_callback);

  debug('req:' + name, args);

  exports._request(name, args, callback);

  if (name !== 'core_flush' && !scheduledCoreFlush) {
    scheduledCoreFlush = true;
    defer(flushCore);
  }

  return exports;
}

function _request(name, args, callback) {
  if (global && typeof global._getSpotifyModule === 'function') {
    global._getSpotifyModule('bridge').executeRequest(JSON.stringify({
      name: name,
      args: args
    }), {
      onSuccess: getSuccessHandler(callback),
      onFailure: getFailureHandler(callback, name, args)
    });
  }
}

function getCallback(name, args, opt_userCallback) {
  var userCallback = opt_userCallback || function () {};

  return function (error, data) {
    if (error) {
      if (error.name === 'timeout') {
        // Set the delay between 300ms and 400ms
        var delay = 300 + Math.floor(Math.random() * 100);

        debug('timeout', error.message);

        // Retry the request
        setTimeout(function () {
          request(name, args, userCallback);
        }, delay);
        return;
      }
    }

    debug('res:' + name, args, data);

    userCallback(error, data);
  };
}

function getSuccessHandler(requestCallback) {
  return function (data) {
    var parsed;

    debug('success', data);

    try {
      parsed = JSON.parse(data);
    } catch (error) {
      requestCallback(error);
    }

    if (parsed) {
      requestCallback(null, parsed);
    }
  };
}

function getFailureHandler(requestCallback, name, args) {
  return function (data) {
    var parsed;

    debug('failure', data);

    try {
      parsed = JSON.parse(data);
    } catch (error) {
      requestCallback(error);
    }

    if (parsed) {
      requestCallback(createError(name, args, parsed));
    }
  };
}

function createError(name, args, response) {
  var argsString = JSON.stringify(args);
  var debug = ' (bridge message: \'' + name + '\', args: ' + argsString + ')';
  var msg = response.message + debug;
  var error = new Error(msg);
  error.name = response.error;

  return error;
}

function flushCore() {
  scheduledCoreFlush = false;
  request('core_flush');
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./cosmos":3,"debug":27,"spotify-deferred":51}],5:[function(require,module,exports){
/*
Event Center
*/'use strict';

var Emitter = require('prime/emitter');

module.exports = new Emitter();

},{"prime/emitter":40}],6:[function(require,module,exports){
'use strict';

/**
 * Module for handling clicks on the scroll bar track to scroll pages.
 *
 * @private
 */

var BezierEasing = require('bezier-easing');

var config = require('./config');

module.exports = {

  // Called from outside
  setHandler: function setHandler(eventName, scroller, handler) {
    if (eventName === 'clickEnd') {
      scroller._clickEndHandler = handler;
    }
  },

  scrollTo: function scrollTo(scroller, newPosition, useEasing, callback) {
    var startPosition = scroller.view.scrollTop;
    var positionDiff = newPosition - startPosition;

    var startTimestamp = Date.now();
    var totalTime = config.scrollToTransitionMs;

    if (!useEasing) {
      totalTime = config.scrollToLinearTransitionMs;
    }

    // Ease in/out quadratic
    var easing = new BezierEasing(0.455, 0.03, 0.515, 0.955);

    var tick = function tick() {
      var elapsedTime = Date.now() - startTimestamp;
      var totalPercentage = elapsedTime / totalTime;

      var currentPercentage = useEasing ? easing.get(totalPercentage) : totalPercentage;

      scroller.view.scrollTop = startPosition + positionDiff * currentPercentage;

      if (totalPercentage < 1) {
        // Must use setTimeout to not make it flicker. Setting scrollTop in
        // requestAnimationFrame will make it scroll and in the next frame allow
        // the scroll handlers to move elements, making it look very flickery.
        setTimeout(tick, config.frameMs);
      } else {
        scroller.view.scrollTop = startPosition + positionDiff;
        scroller.isClickScrollAnimating = false;
        if (callback) {
          callback();
        }
      }
    };

    scroller.isClickScrollAnimating = true;
    setTimeout(tick, config.frameMs);
  },

  holdClick: function holdClick(scroller) {
    var targetThumbEdge = scroller.clickTargetThumbTop;
    var newPosition = this.getNextScrollValue(scroller);
    var newThumbTop = newPosition / scroller.viewScrollHeight * scroller.viewHeight;
    var newThumbBottom = newThumbTop + scroller.thumbHeight;
    var direction = scroller.clickTargetDirection;

    var isValid = false;
    if (direction === 'up' && newThumbBottom > targetThumbEdge) {
      isValid = true;
    } else if (direction === 'down' && newThumbTop < targetThumbEdge) {
      isValid = true;
    }

    if (isValid) {
      var useEasing = false;

      this.scrollTo(scroller, newPosition, useEasing, function () {
        if (scroller.isClickScrolling) {
          this.holdClick(scroller);
        }
      }.bind(this));
    }
  },

  getNextScrollValue: function getNextScrollValue(scroller) {
    var change = scroller.viewHeight * config.clickScrollDistanceFactor;

    if (scroller.clickTargetDirection === 'up') {
      return scroller.view.scrollTop - change;
    }

    return scroller.view.scrollTop + change;
  },

  setMovementData: function setMovementData(scroller, clientY) {
    var trackTop = scroller.scrollBarTrack.getBoundingClientRect().top;
    var targetThumbEdge = clientY - trackTop;
    var direction = targetThumbEdge < scroller.thumbTop ? 'up' : 'down';

    scroller.clickTargetDirection = direction;
    scroller.clickTargetThumbTop = targetThumbEdge;
  },

  onClickHold: function onClickHold(scroller) {
    scroller.isClickScrolling = true;

    this.holdClick(scroller);
  },

  onMouseMove: function onMouseMove(scroller, event) {
    if (scroller.isMouseOver && event.target === scroller.scrollBarTrack) {
      this.setMovementData(scroller, event.clientY);

      if (scroller.isClickScrolling && !scroller.isClickScrollAnimating) {
        this.holdClick(scroller);
      }
    }
  },

  onMouseUp: function onMouseUp(scroller) {
    scroller.isClickScrolling = false;

    clearTimeout(scroller.clickHoldTimer);

    this.removeHandlers(scroller);

    if (scroller._clickEndHandler) {
      scroller._clickEndHandler();
    }
  },

  onTrackMouseDown: function onTrackMouseDown(scroller, event) {
    var isVisible = scroller.isVisible;
    var isPrimaryButton = event.button === 0;
    var isTargetTrack = event.target === scroller.scrollBarTrack;

    if (isVisible && isPrimaryButton && isTargetTrack) {
      var navigator = window.navigator;
      var isMac = navigator && navigator.userAgent.indexOf('Mac') > -1;
      var isWindows = navigator && navigator.userAgent.indexOf('Windows') > -1;

      if (isMac && event.altKey || isWindows && event.shiftKey) {
        var trackTop = scroller.scrollBarTrack.getBoundingClientRect().top;
        var targetThumbCenter = event.clientY - trackTop;
        var targetThumbTop = Math.max(0, Math.min(scroller.viewHeight - scroller.thumbHeight, targetThumbCenter - scroller.thumbHeight / 2));

        scroller.view.scrollTop = targetThumbTop / (scroller.viewHeight - scroller.thumbHeight) * (scroller.viewScrollHeight - scroller.viewHeight);
      } else {
        this.setMovementData(scroller, event.clientY);

        var targetPosition = this.getNextScrollValue(scroller);
        var useEasing = true;

        this.scrollTo(scroller, targetPosition, useEasing);

        this.addHandlers(scroller);

        scroller.clickHoldTimer = setTimeout(this.onClickHold.bind(this, scroller), config.scrollToTransitionMs + config.clickHoldDelayMs);
      }
    }
  },

  addHandlers: function addHandlers(scroller) {
    scroller._click_onMouseUp = this.onMouseUp.bind(this, scroller);
    scroller._click_onMouseMove = this.onMouseMove.bind(this, scroller);

    document.addEventListener('mouseup', scroller._click_onMouseUp, false);
    document.addEventListener('mousemove', scroller._click_onMouseMove, false);
  },

  removeHandlers: function removeHandlers(scroller) {
    document.removeEventListener('mouseup', scroller._click_onMouseUp, false);
    document.removeEventListener('mousemove', scroller._click_onMouseMove, false);
  },

  attach: function attach(scroller) {
    var onTrackMouseDown = this.onTrackMouseDown.bind(this, scroller);

    scroller.scrollBarTrack.addEventListener('mousedown', onTrackMouseDown, false);

    return function () {
      scroller.scrollBarTrack.removeEventListener('mousedown', onTrackMouseDown, false);
    };
  }

};

},{"./config":7,"bezier-easing":21}],7:[function(require,module,exports){
"use strict";

/**
 * Config with all timer values etc. Easy to have them all in one place, and it
 * also helps for testing, since the config can be used from there too.
 *
 * @private
 */

module.exports = {
  hideAfterMs: 750,
  showAfterMs: 500,

  // Sync with CSS transition duration
  hideTransitionMs: 500,

  expandDelayMs: 150,

  frameMs: 16,
  scrollToTransitionMs: 200,
  scrollToLinearTransitionMs: 120,
  clickHoldDelayMs: 500,
  clickScrollDistanceFactor: 0.95
};

},{}],8:[function(require,module,exports){
'use strict';

/**
 * Module for handling dragging the scroll bar thumb to scroll.
 *
 * @private
 */

module.exports = {

  // Called from outside
  setHandler: function setHandler(eventName, scroller, handler) {
    if (eventName === 'dragStart') {
      scroller._dragStartHandler = handler;
    } else if (eventName === 'dragEnd') {
      scroller._dragEndHandler = handler;
    }
  },

  onThumbMouseDown: function onThumbMouseDown(scroller, event) {
    if (event.button === 0 && scroller.isVisible) {
      scroller.isDragging = true;
      scroller.startDragMouseY = event.clientY;
      scroller.startDragThumbTop = scroller.thumbTop;

      this.addDragHandlers(scroller);

      if (scroller._dragStartHandler) {
        scroller._dragStartHandler();
      }
    }
  },

  onMouseUp: function onMouseUp(scroller, event) {
    if (scroller.isDragging) {
      scroller.isDragging = false;

      this.removeDragHandlers(scroller);

      if (scroller._dragEndHandler) {
        scroller._dragEndHandler();
      }
    }
  },

  onMouseMove: function onMouseMove(scroller, event) {
    var y = event.clientY;
    var startY = scroller.startDragMouseY;

    scroller.thumbTop = Math.max(0, Math.min(scroller.viewHeight - scroller.thumbHeight, scroller.startDragThumbTop + y - startY));

    scroller.view.scrollTop = scroller.thumbTop / (scroller.viewHeight - scroller.thumbHeight) * (scroller.viewScrollHeight - scroller.viewHeight);
  },

  addDragHandlers: function addDragHandlers(scroller) {
    scroller._drag_onMouseMove = this.onMouseMove.bind(this, scroller);
    scroller._drag_onMouseUp = this.onMouseUp.bind(this, scroller);

    document.addEventListener('mousemove', scroller._drag_onMouseMove, false);
    document.addEventListener('mouseup', scroller._drag_onMouseUp, false);
  },

  removeDragHandlers: function removeDragHandlers(scroller) {
    document.removeEventListener('mousemove', scroller._drag_onMouseMove, false);
    document.removeEventListener('mouseup', scroller._drag_onMouseUp, false);
  },

  attach: function attach(scroller) {
    var onThumbMouseDown = this.onThumbMouseDown.bind(this, scroller);

    scroller.scrollBarThumb.addEventListener('mousedown', onThumbMouseDown, false);

    return function () {
      scroller.scrollBarThumb.removeEventListener('mousedown', onThumbMouseDown, false);
    };
  }

};

},{}],9:[function(require,module,exports){
'use strict';

/**
 * Module for handling expanding the scroll bar width on hover.
 *
 * @private
 */

var config = require('./config');

module.exports = {

  expand: function expand(scroller) {
    clearTimeout(scroller.resetExpandedTimer);
    scroller.scrollBarTrack.classList.add('expanded');
  },

  collapse: function collapse(scroller) {
    scroller.scrollBarTrack.classList.remove('expanded');
  },

  // Called from outside
  onHide: function onHide(scroller) {
    if (!scroller.alwaysVisible) {
      clearTimeout(scroller.expandTimer);
      clearTimeout(scroller.resetExpandedTimer);

      scroller.resetExpandedTimer = setTimeout(this.collapse.bind(this, scroller), config.hideTransitionMs);
    }
  },

  onTrackMouseEnter: function onTrackMouseEnter(scroller, event) {
    if (event.target === scroller.scrollBarTrack) {
      if (scroller.isVisible) {
        clearTimeout(scroller.expandTimer);
        clearTimeout(scroller.resetExpandedTimer);
        scroller.expandTimer = setTimeout(function () {
          this.expand(scroller);
        }.bind(this), config.expandDelayMs);
      } else {
        this.expand(scroller);
      }
    }
  },

  onTrackMouseLeave: function onTrackMouseLeave(scroller, event) {
    if (event.target === scroller.scrollBarTrack) {
      if (scroller.isVisible) {
        clearTimeout(scroller.expandTimer);
      } else {
        this.collapse(scroller);
      }
    }
  },

  attach: function attach(scroller) {
    if (scroller.alwaysVisible) {
      this.expand(scroller);

      return function () {};
    } else {
      this.collapse(scroller);

      var onTrackMouseEnter = this.onTrackMouseEnter.bind(this, scroller);
      var onTrackMouseLeave = this.onTrackMouseLeave.bind(this, scroller);

      scroller.scrollBarTrack.addEventListener('mouseenter', onTrackMouseEnter, false);
      scroller.scrollBarTrack.addEventListener('mouseleave', onTrackMouseLeave, false);

      return function () {
        scroller.scrollBarTrack.removeEventListener('mouseenter', onTrackMouseEnter, false);
        scroller.scrollBarTrack.removeEventListener('mouseleave', onTrackMouseLeave, false);
      };
    }
  }

};

},{"./config":7}],10:[function(require,module,exports){
'use strict';

var glue = require('../../spotify-glue-cat');
var cosmos = require('spotify-cosmos-api');

var center = require('../center');
var drag = require('./drag');
var visibility = require('./visibility');
var position = require('./position');
var expansion = require('./expansion');
var click = require('./click');

var scrollers = [];
var scrollerStyle = null;

function Scroller(scrollView) {
  this.view = scrollView;
  this.setInitialState();
  this.addScrollBar();
  this.refresh();

  this.view.setAttribute('data-scroll-area-initialized', '');

  this._onResize = function () {
    this.refresh();
  }.bind(this);
  this._onScroll = function () {
    this.refreshScrollBar();
  }.bind(this);
  this._onThumbDragStart = function (event) {
    event.preventDefault();
    event.stopPropagation();
  };

  // Listen for the scroll event to update view size etc on scroll
  var scrollObject = this.isBody ? window : this.view;
  scrollObject.addEventListener('scroll', this._onScroll, false);

  // Listen for the window resize event, even for scroll areas that are not the
  // body scroll. Since we can't listen for resize events when elements resize,
  // we do a best effort of at least updating when the window resizes (which
  // might affect the size of the scroll area).
  window.addEventListener('resize', this._onResize, false);

  // Prevent dragndrop handling from spotify-events (it will be triggered
  // otherwise since we have to set the draggable attribute to not trigger
  // focus events).
  this.scrollBarThumb.addEventListener('dragstart', this._onThumbDragStart, true);

  this._detachVisibility = visibility.attach(this);
  this._detachPosition = position.attach(this);
  this._detachDrag = drag.attach(this);
  this._detachClick = click.attach(this);
  this._detachExpansion = expansion.attach(this);

  visibility.setHandler('show', this, function () {
    this.refresh();
  }.bind(this));

  visibility.setHandler('hide', this, function () {
    expansion.onHide(this);
  }.bind(this));

  // Events are sent when dragging to allow some use cases where you need to do
  // something while dragging. For example, when dragging the scroll bar in the
  // app sidebar and hovering over the main view, it will not trigger mousemove
  // events since the main view is an iframe. To counter that, zlink is
  // listening to these events and sets pointer-events on the content area.
  drag.setHandler('dragStart', this, function () {
    center.emit('scroll-thumb-drag-start', { id: this.viewId });
  }.bind(this));
  drag.setHandler('dragEnd', this, function () {
    visibility.onDragEnd(this);
    center.emit('scroll-thumb-drag-end', { id: this.viewId });
  }.bind(this));

  click.setHandler('clickEnd', this, function () {
    visibility.onClickEnd(this);
  }.bind(this));
}

Scroller.prototype.setInitialState = function () {
  var scrollerStyleToUse = scrollerStyle || window.__spotify.scroller_style;
  this.alwaysVisible = scrollerStyleToUse === 'always';

  this.scrollBarTrack = null;
  this.scrollBarThumb = null;

  this.isBody = this.view === document.body;
  this.viewId = this.view.getAttribute('data-scroll-area');
  this.viewHeight = 0;
  this.viewScrollHeight = 0;

  this.isVisible = false;
  this.isDragging = false;
  this.isMouseOver = false;
  this.isClickScrolling = false;
  this.isClickScrollAnimating = false;

  this.thumbTop = 0;
  this.thumbHeight = 0;

  this.clickTargetDirection = 'down';
  this.clickTargetThumbTop = 0;

  this.startDragMouseY = 0;
  this.startDragThumbTop = 0;

  this.hideTimer = 0;
  this.mouseOverShowTimer = 0;
};

Scroller.prototype.addScrollBar = function () {
  var track = document.createElement('div');
  var thumb = document.createElement('div');

  track.className = 'scrollbar-track';
  thumb.className = 'scrollbar-thumb';

  if (this.alwaysVisible) {
    track.className += ' always-visible';
  }

  // If the thumb is not set to draggable it will trigger focus events on
  // elements being dragged over. For example, dragging the thumb up to the
  // search input puts focus in the search input, which opens the suggest box.
  // Since we will find this element from the dragndrop module, we also need to
  // prevent any drag handling (find the drag listener further down).
  thumb.setAttribute('draggable', 'true');

  track.appendChild(thumb);
  this.view.appendChild(track);

  this.scrollBarTrack = track;
  this.scrollBarThumb = thumb;
};

Scroller.prototype.setViewSize = function () {
  // Hide the scroll bar while calculating sizes, so the scroll bar doesn't
  // interfere. This can happen if scrolled to the bottom of the scroll view and
  // the scroll height changes to be smaller. If the scroll bar is not hidden
  // while calculating the values here, the scrollHeight will not change, since
  // the scroll bar is taking up space.
  this.scrollBarTrack.style.display = 'none';

  if (this.isBody) {
    this.viewHeight = window.innerHeight || Infinity;
  } else {
    this.viewHeight = this.view.clientHeight || Infinity;
  }

  this.viewScrollHeight = this.view.scrollHeight;

  this.scrollBarTrack.style.display = 'block';
};

Scroller.prototype.setThumbSize = function () {
  var percentage = this.viewHeight / this.viewScrollHeight;
  this.thumbHeight = Math.max(40, this.viewHeight * percentage);
  this.scrollBarThumb.style.height = this.thumbHeight + 'px';
};

Scroller.prototype.setTrackPosition = function () {
  this.scrollBarTrack.style.transform = 'translate3d(0, ' + (this.view.scrollTop + 'px') + ', 0)';
};

Scroller.prototype.refresh = function () {
  this.refreshView();
  this.refreshScrollBar();
};

Scroller.prototype.refreshView = function () {
  this.setViewSize();
};

Scroller.prototype.refreshScrollBar = function () {
  this.setThumbSize();

  if (!this.isBody) {
    this.setTrackPosition();
  }
};

Scroller.prototype.update = function () {
  var oldViewHeight = this.viewHeight;
  var oldScrollHeight = this.viewScrollHeight;

  this.refresh();

  visibility.update(this);

  var newViewHeight = this.viewHeight;
  var newScrollHeight = this.viewScrollHeight;

  if (newViewHeight !== oldViewHeight || newScrollHeight !== oldScrollHeight) {
    visibility.highlight(this);
  }
};

Scroller.prototype.setScrollBarMode = function (mode) {
  this.alwaysVisible = mode === 'always';

  if (this.alwaysVisible) {
    this.scrollBarTrack.classList.add('always-visible');
  } else {
    this.scrollBarTrack.classList.remove('always-visible');
  }

  this._detachVisibility();
  this._detachPosition();
  this._detachDrag();
  this._detachClick();
  this._detachExpansion();

  this._detachVisibility = visibility.attach(this);
  this._detachPosition = position.attach(this);
  this._detachDrag = drag.attach(this);
  this._detachClick = click.attach(this);
  this._detachExpansion = expansion.attach(this);
};

Scroller.prototype.isInDOM = function () {
  var currentNode = this.view.parentNode;
  while (currentNode && currentNode !== document.documentElement) {
    currentNode = currentNode.parentNode;
  }

  // If we still have a current node after the loop, we found the document
  // element, which means it's in DOM.
  return !!currentNode;
};

Scroller.prototype.destroy = function () {
  var scrollObject = this.isBody ? window : this.view;

  scrollObject.removeEventListener('scroll', this._onScroll, false);

  window.removeEventListener('resize', this._onResize, false);

  this.scrollBarThumb.removeEventListener('dragstart', this._onThumbDragStart, true);

  this.view.removeAttribute('data-scroll-area-initialized', '');
  this.view.removeChild(this.scrollBarTrack);

  this._detachVisibility();
  this._detachPosition();
  this._detachDrag();
  this._detachClick();
  this._detachExpansion();
};

var isAttached = false;
var controlMessageSubscription;

exports.update = function (node) {
  if (!isAttached) {
    return;
  }

  // Clean up scrollers that are not in DOM anymore.
  scrollers = scrollers.filter(function (scroller) {
    if (!scroller.isInDOM()) {
      scroller.destroy();
      return false;
    }
    return true;
  });

  // Update all active scrollers
  for (var i = 0, l = scrollers.length; i < l; i++) {
    scrollers[i].update();
  }

  var selector = '[data-scroll-area]';
  var scrollViews = (node || document).querySelectorAll(selector);

  for (var i = 0, l = scrollViews.length; i < l; i++) {
    if (!scrollViews[i].hasAttribute('data-scroll-area-initialized')) {
      var scrollView = scrollViews[i];
      var isBody = scrollView === document.body;

      if (isBody && glue.getVersion() !== 2) {
        continue;
      }

      scrollers.push(new Scroller(scrollView));
    }
  }
};

exports.attach = function () {
  if (isAttached) return;
  isAttached = true;

  var setScrollBarMode = function setScrollBarMode(mode) {
    scrollerStyle = mode;

    for (var i = 0, l = scrollers.length; i < l; i++) {
      scrollers[i].setScrollBarMode(mode);
    }
  };

  controlMessageSubscription = cosmos.resolver.subscribe({
    url: 'sp://messages/v1/container/control'
  }, function (error, response) {
    if (!error) {
      var data = response.getJSONBody();
      if (data) {
        var styleWasChanged = true;
        switch (data.type) {
          case 'set_scroller_style_always_visible':
            setScrollBarMode('always');
            break;
          case 'set_scroller_style_overlay':
            setScrollBarMode('overlay');
            break;
          default:
            styleWasChanged = false;
        }

        // Fix a rendering bug in Chromium. When scroller style changes in the
        // system (changing system preference, connecting/disconnecting a mouse
        // etc), Chromium will render a white area where the scroll bar is
        // supposed to be. By adding and removing a class name we're triggering
        // a re-render and it will look good.
        //
        // https://jira.spotify.net/browse/KM-8285
        // http://crbug.com/538579
        if (styleWasChanged) {
          var performFix = function performFix() {
            var nodes = scrollers.map(function (scroller) {
              return scroller.view;
            });

            // Always include body to fix the main scroll, even if it doesn't
            // have a custom scroll bar.
            if (nodes.indexOf(document.body) === -1) {
              nodes.push(document.body);
            }

            for (var i = 0, l = nodes.length; i < l; i++) {
              nodes[i].classList.add('jmeBDLRW3CRWW3kZZaZ');
              nodes[i].classList.remove('jmeBDLRW3CRWW3kZZaZ');
            }
          };

          // Perform the fix twice (once with a delay), since it sometimes might
          // be slow and won't apply the fix on the first try.
          performFix();
          setTimeout(performFix, 1000);
        }
      }
    } else {
      controlMessageSubscription.cancel();
    }
  });
};

exports.detach = function () {
  if (!isAttached) return;
  isAttached = false;

  for (var i = 0, l = scrollers.length; i < l; i++) {
    scrollers[i].destroy();
  }
  scrollers.length = 0;

  scrollerStyle = null;

  if (controlMessageSubscription) {
    controlMessageSubscription.cancel();
    controlMessageSubscription = null;
  }
};

},{"../../spotify-glue-cat":16,"../center":5,"./click":6,"./drag":8,"./expansion":9,"./position":11,"./visibility":12,"spotify-cosmos-api":48}],11:[function(require,module,exports){
'use strict';

/**
 * Module for handling updating the scroll bar thumb position when scroll
 * position changes.
 *
 * @private
 */

module.exports = {

  setThumbPosition: function setThumbPosition(scroller) {
    if (scroller.viewScrollHeight === scroller.viewHeight) {
      scroller.thumbTop = 0;
    } else {
      scroller.thumbTop = scroller.view.scrollTop / (scroller.viewScrollHeight - scroller.viewHeight) * (scroller.viewHeight - scroller.thumbHeight);
    }

    scroller.scrollBarThumb.style.transform = 'translate3d(0, ' + (scroller.thumbTop + 'px') + ', 0)';
  },

  onScroll: function onScroll(scroller) {
    this.setThumbPosition(scroller);
  },

  attach: function attach(scroller) {
    var onScroll = this.onScroll.bind(this, scroller);

    var scrollObject = scroller.isBody ? window : scroller.view;
    scrollObject.addEventListener('scroll', onScroll, false);

    this.setThumbPosition(scroller);

    return function () {
      scrollObject.removeEventListener('scroll', onScroll, false);
    };
  }

};

},{}],12:[function(require,module,exports){
'use strict';

/**
 * Module for handling the visibility of the scroll bar, based on mouse position
 * and scroll events.
 *
 * @private
 */

var config = require('./config');

module.exports = {

  // Called from outside
  setHandler: function setHandler(eventName, scroller, handler) {
    if (eventName === 'show') {
      scroller._showHandler = handler;
    } else if (eventName === 'hide') {
      scroller._hideHandler = handler;
    }
  },

  refresh: function refresh(scroller) {
    if (scroller.viewScrollHeight > scroller.viewHeight) {
      this.showScrollBar(scroller);
    } else {
      this.hideScrollBar(scroller);
    }
  },

  showScrollBar: function showScrollBar(scroller) {
    if (scroller.isVisible) {
      return;
    }

    if (scroller.viewScrollHeight > scroller.viewHeight) {
      scroller.scrollBarTrack.classList.add('visible');
      scroller.isVisible = true;

      if (scroller._showHandler) {
        scroller._showHandler();
      }
    }
  },

  hideScrollBar: function hideScrollBar(scroller) {
    if (!scroller.isVisible || scroller.isDragging) {
      return;
    }

    scroller.scrollBarTrack.classList.remove('visible');
    scroller.isVisible = false;

    if (scroller._hideHandler) {
      scroller._hideHandler();
    }
  },

  startHideTimer: function startHideTimer(scroller) {
    this.stopHideTimer(scroller);
    scroller.hideTimer = setTimeout(this.hideScrollBar.bind(this, scroller), config.hideAfterMs);
  },

  stopHideTimer: function stopHideTimer(scroller) {
    clearTimeout(scroller.hideTimer);
  },

  // Called from outside
  onDragEnd: function onDragEnd(scroller) {
    if (!scroller.alwaysVisible && !scroller.isMouseOver) {
      this.startHideTimer(scroller);
    }
  },

  // Called from outside
  onClickEnd: function onClickEnd(scroller) {
    if (!scroller.alwaysVisible && !scroller.isMouseOver) {
      this.startHideTimer(scroller);
    }
  },

  onScroll: function onScroll(scroller) {
    if (!scroller.isVisible) {
      this.showScrollBar(scroller);
    }

    if (!scroller.isDragging && !scroller.isClickScrolling && !scroller.isMouseOver) {
      this.startHideTimer(scroller);
    }
  },

  onTrackMouseEnter: function onTrackMouseEnter(scroller, event) {
    if (event.target === scroller.scrollBarTrack) {
      scroller.isMouseOver = true;

      this.stopHideTimer(scroller);

      if (!scroller.isVisible) {
        scroller.mouseOverShowTimer = setTimeout(this.showScrollBar.bind(this, scroller), config.showAfterMs);
      }
    }
  },

  onTrackMouseLeave: function onTrackMouseLeave(scroller, event) {
    if (event.target === scroller.scrollBarTrack) {
      scroller.isMouseOver = false;

      if (!scroller.isDragging && !scroller.isClickScrolling) {
        clearTimeout(scroller.mouseOverShowTimer);

        if (scroller.isVisible) {
          this.startHideTimer(scroller);
        }
      }
    }
  },

  attach: function attach(scroller) {
    if (scroller.alwaysVisible) {
      this.refresh(scroller);

      return function () {};
    } else {
      this.hideScrollBar(scroller);

      var onScroll = this.onScroll.bind(this, scroller);
      var onTrackMouseEnter = this.onTrackMouseEnter.bind(this, scroller);
      var onTrackMouseLeave = this.onTrackMouseLeave.bind(this, scroller);

      var scrollObject = scroller.isBody ? window : scroller.view;
      scrollObject.addEventListener('scroll', onScroll, false);

      scroller.scrollBarTrack.addEventListener('mouseenter', onTrackMouseEnter, false);
      scroller.scrollBarTrack.addEventListener('mouseleave', onTrackMouseLeave, false);

      return function () {
        scrollObject.removeEventListener('scroll', onScroll, false);

        scroller.scrollBarTrack.removeEventListener('mouseenter', onTrackMouseEnter, false);
        scroller.scrollBarTrack.removeEventListener('mouseleave', onTrackMouseLeave, false);
      };
    }
  },

  update: function update(scroller) {
    if (scroller.alwaysVisible) {
      this.refresh(scroller);
    }
  },

  highlight: function highlight(scroller) {
    if (!scroller.alwaysVisible && !scroller.isVisible) {
      this.showScrollBar(scroller);
      this.startHideTimer(scroller);
    }
  }

};

},{"./config":7}],13:[function(require,module,exports){
(function (global){
'use strict';

exports.init = function () {
  require('./expose-debug-global').expose(global, 'bridge', require('../spotify-bridge-request'));
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../spotify-bridge-request":4,"./expose-debug-global":15}],14:[function(require,module,exports){
(function (global){
'use strict';

exports.init = function () {
  require('./expose-debug-global').expose(global, 'cosmos', require('spotify-cosmos-api'));
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./expose-debug-global":15,"spotify-cosmos-api":48}],15:[function(require,module,exports){
'use strict';

exports.expose = function (global, name, object) {
  if (global.__spotify && global.__spotify.developer_mode) {
    Object.defineProperty(global, name, {
      get: function get() {
        try {
          throw new Error();
        } catch (error) {
          if (!/injectedscript/i.test(error.stack)) {
            throw new Error('window.' + name + ' should only be accessed from the console');
          }
        }
        return object;
      },
      enumerable: true,
      configurable: true
    });
  }
};

},{}],16:[function(require,module,exports){
'use strict';

exports.getVersion = require('./src/version').getVersion;
exports.gridOverlay = require('./src/gridOverlay');

},{"./src/gridOverlay":17,"./src/version":18}],17:[function(require,module,exports){
(function (global){
'use strict';

var cosmos = require('spotify-cosmos-api');

var DEFAULT_GRID_COLOR = 'rgba(251, 74, 131, 0.22)';
var DEFAULT_GRID_COLOR_HIGHLIGHT = 'rgba(251, 74, 131, 0.8)';
var GRID_BASELINE = 8;

var overlayElement = null;
var baselineHighlightElement = null;
var gridColor = '';
var highlightGridColor = '';
var gridModes = ['off', 'column', 'baseline'];
var currentModeIndex = 0;

/**
 * Listen for control messages to toggle the grid when a menu item is clicked
 * or a keyboard shortcut is pressed. This only happens if the user is a global
 * app developer.
 */
function listen() {
  var spotify = global.__spotify;
  var productState = spotify && spotify.product_state;
  var appDeveloperFlag = productState && productState['app-developer'];

  if (appDeveloperFlag === '3' || appDeveloperFlag === '7') {
    cosmos.resolver.subscribe({
      url: 'sp://messages/v1/container/control'
    }, function (error, response) {
      if (error) return;
      var data = response.getJSONBody();
      if (data && data.type === 'toggle_grid') {
        toggle();
      }
    });
  }
}

/**
 * Toggle the grid overlay.
 */
function toggle() {
  var newIndex = currentModeIndex + 1;
  if (newIndex > gridModes.length - 1) {
    newIndex = 0;
  }

  var mode = gridModes[newIndex];

  if (mode === 'off') {
    disable();
  } else {
    enable(mode);
  }
}

/**
 * Enable the grid overlay.
 *
 * @param {string} mode The grid mode to enable, 'column' or 'baseline'.
 */
function enable(mode) {
  if (!mode) {
    return;
  }

  if (gridModes[currentModeIndex] === mode) {
    return;
  }

  currentModeIndex = gridModes.indexOf(mode);

  if (overlayElement && overlayElement.parentNode) {
    overlayElement.parentNode.removeChild(overlayElement);
  }

  if (mode === 'baseline') {
    document.addEventListener('mousemove', onMouseMove, false);
  }

  overlayElement = createOverlayElement();

  document.body.appendChild(overlayElement);
}

/**
 * Disable the grid overlay.
 */
function disable() {
  if (gridModes[currentModeIndex] === 'off') {
    return;
  }

  if (overlayElement && overlayElement.parentNode) {
    overlayElement.parentNode.removeChild(overlayElement);
  }

  currentModeIndex = gridModes.indexOf('off');
  overlayElement = null;
  baselineHighlightElement = null;

  document.removeEventListener('mousemove', onMouseMove, false);
}

/**
 * Set the color used for each grid column or baseline line.
 *
 * @param {string} color Any valid CSS color.
 * @param {string=} highlightColor Any valid CSS color. Can be omitted for
 *     column grid.
 */
function setColor(color, highlightColor) {
  gridColor = color;
  highlightGridColor = highlightColor;
}

/**
 * Reset all state in this module.
 */
function reset() {
  overlayElement = null;
  baselineHighlightElement = null;
  gridColor = '';
  highlightGridColor = '';
  currentModeIndex = 0;
}

/**
 * Mouse move handler that highlights the hovered baseline line.
 *
 * @param {Event} event A mousemove event object.
 *
 * @private
 */
function onMouseMove(event) {
  if (!baselineHighlightElement) {
    baselineHighlightElement = document.createElement('div');
    baselineHighlightElement.className = 'grid-overlay-baseline-highlight';
    baselineHighlightElement.style.backgroundColor = highlightGridColor || DEFAULT_GRID_COLOR_HIGHLIGHT;
    overlayElement.appendChild(baselineHighlightElement);
  }

  // Calculate the Y position for the baseline line closest to the pointer
  var pointerPos = event.clientY + window.scrollY;
  var yLineAbove = Math.floor(pointerPos / GRID_BASELINE) * GRID_BASELINE;
  var y = yLineAbove + (pointerPos % GRID_BASELINE > 4 ? GRID_BASELINE : 0);

  baselineHighlightElement.style.top = y - 1 + 'px';
}

/**
 * Create the DOM nodes needed for the overlay, with the correct class names
 * and styles.
 *
 * @return {HTMLElement} The container element for the overlay.
 *
 * @private
 */
function createOverlayElement() {
  var color = gridColor || DEFAULT_GRID_COLOR;

  var container = document.createElement('div');
  container.className = 'grid-overlay container';

  if (gridModes[currentModeIndex] === 'column') {
    var row = document.createElement('div');
    row.className = 'grid-overlay-row row';
    container.appendChild(row);

    var sizeLabel = createSizeLabel();
    container.appendChild(sizeLabel);

    var columnClassNames = 'col-xs-1 col-sm-1 col-md-1 col-lg-1';

    for (var i = 0; i < 12; i++) {
      var column = document.createElement('div');
      column.className = 'grid-overlay-col-' + (i + 1) + ' ' + columnClassNames;

      column.style.backgroundColor = color;

      row.appendChild(column);
    }
  } else if (gridModes[currentModeIndex] === 'baseline') {
    container.classList.add('grid-overlay-baseline');

    var baselinePercentage = (GRID_BASELINE - 1) / GRID_BASELINE * 100 + '%';

    var backgroundImage = ['linear-gradient(', 'to bottom, ', 'transparent, ', 'transparent ' + baselinePercentage + ', ', color + ' ' + baselinePercentage, ')'].join('');

    container.style.backgroundImage = backgroundImage;

    // Because JSDOM is using the package 'cssstyle', which is stupid and
    // doesn't support gradients as values...
    container.style._backgroundImage = backgroundImage;
  }

  return container;
}

/**
 * Create the DOM nodes needed for the grid size label.
 *
 * @return {HTMLElement} A DOM node.
 *
 * @private
 */
function createSizeLabel() {
  var sizes = [{ name: 'Extra Small', id: 'xs' }, { name: 'Small', id: 'sm' }, { name: 'Medium', id: 'md' }, { name: 'Large', id: 'lg' }];

  var labelContainer = document.createElement('div');
  labelContainer.className = 'grid-overlay-label';

  sizes.forEach(function (size) {
    var label = document.createElement('span');
    label.className = 'visible-' + size.id;
    label.textContent = size.name;
    labelContainer.appendChild(label);
  });

  return labelContainer;
}

exports.listen = listen;
exports.toggle = toggle;
exports.enable = enable;
exports.disable = disable;
exports.setColor = setColor;
exports.reset = reset;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"spotify-cosmos-api":48}],18:[function(require,module,exports){
'use strict';

// This should be removed later when nothing is calling this method

exports.getVersion = function () {
  return 1;
};

},{}],19:[function(require,module,exports){
'use strict';

/**
 * Object representing state of an app.
 *
 * @param {String} uri Spotify URI of app.
 * @constructor
 */

function AppState(uri) {
  /**
   * Spotify URI.
   *
   * @type {String}
   */
  this._uri = undefined;

  if (uri !== undefined) {
    this.setURI(uri);
  }
}

/**
 * Create new instance of AppState based on JSON string.
 *
 * @param {String} json Serialized representation of AppState object.
 * @return {AppState} Instance of AppState.
 */
AppState.unserialize = function (json) {
  var s = JSON.parse(json);
  var a = new AppState();
  a.setURI(s.uri);
  return a;
};

/**
 * Test if another object is considered equal to this.
 *
 * @param {AppState} state AppState instance to compare.
 */
AppState.prototype.equals = function (state) {
  return typeof this._uri === 'string' && state instanceof AppState && this._uri === state._uri;
};

/**
 * Get App identifier.
 *
 * @return {String} Id of app contained in URI.
 */
AppState.prototype.getAppId = function () {
  var uri = this.getURI();
  var parts = uri.split(':');
  if (parts.length < 3) {
    return undefined;
  }
  if (parts[1] !== 'app') {
    return undefined;
  }
  if (parts[2] === '') {
    return undefined;
  }
  return parts[2];
};

/**
 * Get URI value.
 *
 * @return {String} URI as string.
 */
AppState.prototype.getURI = function () {
  if (this._uri === undefined) {
    throw new Error('URI not set');
  }
  return this._uri;
};

/**
 * Create serialized representation of this instance.
 *
 * @return {String} Serialized representation of AppState object.
 */
AppState.prototype.serialize = function () {
  return JSON.stringify({
    uri: this.getURI()
  });
};

/**
 * Set URI value.
 *
 * @param {String} uri Spotify URI for app.
 */
AppState.prototype.setURI = function (uri) {
  if (typeof uri !== 'string') {
    throw new TypeError('URI must be string');
  }
  this._uri = uri;
};

module.exports = AppState;

},{}],20:[function(require,module,exports){
(function (global){
'use strict';

var inherit = require('spotify-inheritance/inherit');
var EventEmitter = require('spotify-eventemitter');
var AppState = require('./app-state');
var _global = global.top || global;

/**
 * Class containing methods for navigating.
 *
 * @constructor
 */
function Navigator() {
  EventEmitter.call(this);

  /**
   * Locally bound handler function for message event on global.
   *
   * @type {Function}
   */
  this._messageHandler = this._messageHandler.bind(this);
}

inherit(Navigator, EventEmitter);

/**
 * Maps constants to string values of known events.
 */
Navigator.EVENTS = {
  OPEN_STATE: 'navigation_open_state'
};

/**
 * Identify posted message and trigger relevant callbacks
 * based on the message contents.
 *
 * @param {Object} message Message object caused by postMessage.
 */
Navigator.prototype._messageHandler = function (message) {
  if (!message.data.type) {
    return;
  }
  var name = message.data.type;
  if (name === Navigator.EVENTS.OPEN_STATE) {
    var appState = AppState.unserialize(message.data.state);
    this.emitSync(name, { state: appState });
  }
};

/**
 * Start listening to messages.
 */
Navigator.prototype.attachListener = function () {
  _global.addEventListener('message', this._messageHandler);
};

/**
 * Stop listening to messages.
 */
Navigator.prototype.detachListener = function () {
  _global.removeEventListener('message', this._messageHandler);
};

/**
 * Send an open request message.
 *
 * @param {AppState} state AppState instance to base open action on.
 */
Navigator.prototype.requestOpenState = function (state) {
  _global.postMessage({
    type: Navigator.EVENTS.OPEN_STATE,
    state: state.serialize()
  }, '*');
};

module.exports = Navigator;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./app-state":19,"spotify-eventemitter":52,"spotify-inheritance/inherit":55}],21:[function(require,module,exports){
/**
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 *
 * Credits: is based on Firefox's nsSMILKeySpline.cpp
 * Usage:
 * var spline = BezierEasing([ 0.25, 0.1, 0.25, 1.0 ])
 * spline.get(x) => returns the easing value | x must be in [0, 1] range
 *
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === "function";

function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier (aT, aA1, aA2) {
  return ((A(aA1, aA2)*aT + B(aA1, aA2))*aT + C(aA1))*aT;
}

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope (aT, aA1, aA2) {
  return 3.0 * A(aA1, aA2)*aT*aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
}

function binarySubdivide (aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
  for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
    var currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0.0) return aGuessT;
    var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}

/**
 * points is an array of [ mX1, mY1, mX2, mY2 ]
 */
function BezierEasing (points, b, c, d) {
  if (arguments.length === 4) {
    return new BezierEasing([ points, b, c, d ]);
  }
  if (!(this instanceof BezierEasing)) return new BezierEasing(points);

  if (!points || points.length !== 4) {
    throw new Error("BezierEasing: points must contains 4 values");
  }
  for (var i=0; i<4; ++i) {
    if (typeof points[i] !== "number" || isNaN(points[i]) || !isFinite(points[i])) {
      throw new Error("BezierEasing: points should be integers.");
    }
  }
  if (points[0] < 0 || points[0] > 1 || points[2] < 0 || points[2] > 1) {
    throw new Error("BezierEasing x values must be in [0, 1] range.");
  }

  this._str = "BezierEasing("+points+")";
  this._css = "cubic-bezier("+points+")";
  this._p = points;
  this._mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  this._precomputed = false;

  this.get = this.get.bind(this);
}

BezierEasing.prototype = {

  get: function (x) {
    var mX1 = this._p[0],
      mY1 = this._p[1],
      mX2 = this._p[2],
      mY2 = this._p[3];
    if (!this._precomputed) this._precompute();
    if (mX1 === mY1 && mX2 === mY2) return x; // linear
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) return 0;
    if (x === 1) return 1;
    return calcBezier(this._getTForX(x), mY1, mY2);
  },

  getPoints: function() {
    return this._p;
  },

  toString: function () {
    return this._str;
  },

  toCSS: function () {
    return this._css;
  },

  // Private part

  _precompute: function () {
    var mX1 = this._p[0],
      mY1 = this._p[1],
      mX2 = this._p[2],
      mY2 = this._p[3];
    this._precomputed = true;
    if (mX1 !== mY1 || mX2 !== mY2)
      this._calcSampleValues();
  },

  _calcSampleValues: function () {
    var mX1 = this._p[0],
      mX2 = this._p[2];
    for (var i = 0; i < kSplineTableSize; ++i) {
      this._mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
  },

  /**
   * getTForX chose the fastest heuristic to determine the percentage value precisely from a given X projection.
   */
  _getTForX: function (aX) {
    var mX1 = this._p[0],
      mX2 = this._p[2],
      mSampleValues = this._mSampleValues;

    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample+1] - mSampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }
};

// CSS mapping
BezierEasing.css = {
  "ease":        BezierEasing.ease      = BezierEasing(0.25, 0.1, 0.25, 1.0),
  "linear":      BezierEasing.linear    = BezierEasing(0.00, 0.0, 1.00, 1.0),
  "ease-in":     BezierEasing.easeIn    = BezierEasing(0.42, 0.0, 1.00, 1.0),
  "ease-out":    BezierEasing.easeOut   = BezierEasing(0.00, 0.0, 0.58, 1.0),
  "ease-in-out": BezierEasing.easeInOut = BezierEasing(0.42, 0.0, 0.58, 1.0)
};

module.exports = BezierEasing;

},{}],22:[function(require,module,exports){
'use strict';

exports.message = require('./src/message');
exports.request = require('./src/request');
exports.response = require('./src/response');
exports.playerstate = require('./src/player_state');

},{"./src/message":23,"./src/player_state":24,"./src/request":25,"./src/response":26}],23:[function(require,module,exports){
/**
 * A set of Message headers.
 *
 * @name exports.Headers
 * @typedef {Object.<string, string>}
 */
exports.Headers;

/**
 * A body of a Request-Response.
 *
 * @name exports.Body
 * @typedef {*}
 */
exports.Body;

/**
 * A serialized Message object.
 *
 * @name Spotify.Cosmos.SerializedMessage
 * @typedef {{
 *   uri: Spotify.Cosmos.URI,
 *   headers: Spotify.Cosmos.Headers,
 *   body: Spotify.Cosmos.Body
 * }}
 */
exports.SerializedMessage;

/**
 * Encapsulates a message.
 *
 * A message is an entity that has a URI, headers and a body.
 *
 * @constructs Spotify.Cosmos.Message
 * @param {Spotify.Cosmos.URI} uri The URI of the message
 * @param {Spotify.Cosmos.Headers=} opt_headers The optional headers of the
 *     message.
 * @param {Spotify.Cosmos.Body=} opt_body The optional body of the message.
 */
function Message(uri, opt_headers, opt_body) {
  if (uri == null)
    throw new TypeError('Invalid `uri` argument for Message.');

  /**
   * The URI of the Message.
   *
   * @type {Spotify.Cosmos.URI}
   * @protected
   */
  this._uri = uri;

  /**
   * The headers of the Message.
   *
   * @type {Spotify.Cosmos.Headers}
   * @protected
   */
  this._headers = {};

  /**
   * The body of the Message.
   *
   * @type {Spotify.Cosmos.Body}
   * @protected
   */
  this._body = this._encodeBody(opt_body || '');

  if (opt_headers) this._setHeaders(opt_headers);
}
exports.Message = Message;

/**
 * Creates a new Message from a SerializedMessage object.
 *
 * @param {Spotify.Cosmos.SerializedMessage} object The serialized request.
 * @return {Spotify.Cosmos.Message|null} The new Message object or null.
 */
Message.fromObject = function(object) {
  return (object && object.uri) ?
    new Message(
        object.uri,
        object.headers,
        object.body
    ) : null;
};

/**
 * Encodes a message body to a string.
 *
 * @param {*} body The value for the body.
 * @return {string} The body encoded as a string.
 */
Message.prototype._encodeBody = function(body) {
  if (typeof body != 'string') {
    body = JSON.stringify(body);
  }
  return body;
};

/**
 * Returns the URI of the message.
 *
 * @return {Spotify.Cosmos.URI} The URI of the message.
 */
Message.prototype.getURI = function() {
  return this._uri;
};

/**
 * Returns the mimetype of the message.
 *
 * @return {Spotify.Cosmos.MimeType} The mimetype of the message.
 */
Message.prototype.getMimeType = function() {
  return this._headers['accept'];
};

/**
 * Returns the value of a message's headers.
 *
 * @param {string} name The name of the header.
 * @return {string|null} The header value or null if the header wasn't set.
 */
Message.prototype.getHeader = function(name) {
  return this._headers[name.toLowerCase()] || null;
};

/**
 * Returns the headers of the message.
 *
 * @return {Spotify.Cosmos.Headers} The headers of the message.
 */
Message.prototype.getHeaders = function() {
  var _headers = this._headers;
  var headers = {};
  for (var name in _headers) {
    if (!_headers.hasOwnProperty(name)) continue;
    headers[name] = _headers[name];
  }
  return headers;
};

/**
 * Sets a bunch of headers to the message's headers.
 *
 * @param {Spotify.Cosmos.Headers} headers The headers to set to the message.
 * @protected
 */
Message.prototype._setHeaders = function(headers) {
  var _headers = this._headers;
  for (var name in headers) {
    if (!headers.hasOwnProperty(name)) continue;
    _headers[name.toLowerCase()] = headers[name];
  }
  return this;
};

/**
 * Returns the body of the message.
 *
 * @return {Spotify.Cosmos.Body} The body of the message.
 */
Message.prototype.getBody = function() {
  return this._body;
};

/**
 * Returns the body as a JSON object.
 *
 * @return {Object|null} The body of the message parsed as a JSON value. Can
 *     be null if the body is not a proper JSON string.
 */
Message.prototype.getJSONBody = function() {
  try {
    return JSON.parse(this._body);
  } catch(e) {
    return null;
  }
};

/**
 * Creates a new Message instance with data copied from the current instance.
 *
 * @param {Spotify.Cosmos.Headers=} opt_headers The optional headers of the
 *     message.
 * @param {Spotify.Cosmos.Body=} opt_body The optional body of the message.
 */
Message.prototype.copy = function(opt_headers, opt_body) {
  return new Message(
      this._uri,
      this._copyHeaders(opt_headers),
      typeof opt_body != 'undefined' ? opt_body : this._body
  );
};

/**
 * Copies the headers of the message.
 *
 * @param {Spotify.Cosmos.Headers=} opt_headers The optional headers of the
 *     message.
 * @return {Spotify.Cosmos.Headers} The headers of the message.
 */
Message.prototype._copyHeaders = function(opt_headers) {
  var headers;
  if (opt_headers) {
    var _headers = this._headers;
    var name;
    headers = {};
    for (name in _headers) {
      if (!_headers.hasOwnProperty(name)) continue;
      headers[name] = _headers[name];
    }
    for (name in opt_headers) {
      if (!opt_headers.hasOwnProperty(name)) continue;
      headers[name.toLowerCase()] = opt_headers[name];
    }
  } else {
    headers = this._headers;
  }
  return headers;
};

/**
 * Serializes the message into a plain object.
 *
 * @return {Spotify.Cosmos.SerializedMessage} The serialized object.
 */
Message.prototype.serialize = function() {
  return this.toJSON();
};

/**
 * Returns a JSON-object representation of the message.
 *
 * @return {Object} The JSON representation of the message.
 */
Message.prototype.toJSON = function() {
  return {
    uri: this._uri,
    headers: this._headers,
    body: this._body
  };
};

},{}],24:[function(require,module,exports){
var inherit = require('spotify-inheritance').inherit;

/**
 * PlayerState is used for two distinct purposes: Pushing new state to the
 * player (this is done when you request to play a completely new context with
 * 'play' method) and retrieving player state updates.
 *
 * Changing properties on PlayerState objects will not change the state of
 * the player unless you pass it to the 'play' method.
 *
 * @param {Object} stateData the data for the playerState.
 */
function PlayerState(stateData) {
  Serializable.call(this, [
    'action',
    'context',
    'tracks',
    'index',
    'playing',
    'loading',
    'track',
    'position',
    'duration',
    'volume',
    'options',
    'play_origin',
    'next_page_url',
    'prev_page_url'
  ]);

  stateData = stateData || {};
  /**
   * What kind of the action player should perform.
   * It's set directly before sending the request.
   * @type {String}
   */
  this.action = stateData.action;

  /**
   * Spotify uri describing the context that
   * will be played e.g playlist, album or artist.
   * Example: spotify:artist:4XaUmUGjidSklcDHxv3XWf,
   * spotify:user:daftpunkofficial:playlist:5nrg0D90OlFyveVfrQD0zE,
   * spotify:album:2nXJkqkS1tIKIyhBcFMmwz
   *
   * @type {String}
   */
  this.context = stateData.context;

  /**
   * The list of tracks uris to play in the given context.
   * Example: [
   *    spotify:track:0bXpmJyHHYPk6QBFj25bYF,
   *    spotify:track:6DXFVsLcEvOTSrkG9G1Cb1,
   *    spotify:track:6rxEjkoar48SssZePbtb2x
   * ]
   *
   * @type {Array.<String>}
   */
  this.tracks = stateData.tracks;

  /**
   * Which element on the this.tracks list should
   * be played.
   *
   * @type {Number}
   */
  this.index = stateData.index;

  /**
   * Is the player currently playing
   */
  this.playing = stateData.playing;
  this.loading = stateData.loading;

  /**
   * Current track URI
   * @type {String}
   */
  this.track = stateData.track;


  this.position = stateData.position;

  this.volume = stateData.volume;

  /**
   * Current track duration in miliseconds?
   * @type {Number}
   */
  this.duration = stateData.duration;

  /**
   * See PlayOptions description
   * @type {cosmos-bindings-js/scripts/player_state~PlayOptions}
   */
  this.options = new PlayOptions(stateData.options);

  /**
   * See PlayOrigin description
   * @type {cosmos-bindings-js/scripts/player_state~PlayOrigin}
   */
  this.play_origin = new PlayOrigin(stateData.play_origin);

  /**
   * Before the list of tracks that are to be played ends, a request will be sent
   * to this URL, which is supposed to return a list of tracks. That list of
   * tracks will then be appended to the list of tracks in the context.
   *
   * The response payload of the next_page_url should look like this:
   *
   * {
   *   "tracks": [
   *     { "track": "spotify:track:$TRACK-ID1", "context": "spotify:album:$ALBUM-ID1" },
   *     { "track": "spotify:track:$TRACK-ID2", "context": "spotify:album:$ALBUM-ID1" },
   *     { "track": "spotify:track:$TRACK-ID3", "context": "spotify:album:$ALBUM-ID1" },
   *   ],
   *   "next_page_url": "...", // Optional
   *   "prev_page_url": "..." // Optional
   * }
   *
   * May be null, which is the same as a URL that would return an empty list
   * of tracks (but with null, no network request is made).
   */
  this.next_page_url = stateData.next_page_url;

  /**
   * Like `next_page_url`, but for going backwards in the context.
   */
  this.prev_page_url = stateData.prev_page_url;
}
inherit(PlayerState, Serializable);

/**
 * Ovverides prototype method.
 * Converts play options and origin to
 * serializable to make sure only correct data
 * is returned.
 * @return {Object} Data associated with player state.
 */
PlayerState.prototype.serialize = function() {
  if (this.options && !(this.options instanceof PlayOptions)) {
    this.options = new PlayOptions(this.options);
  }

  if (this.play_origin && !(this.play_origin instanceof PlayOrigin)) {
    this.play_origin = new PlayOrigin(this.play_origin);
  }

  return this.constructor.prototype.serialize.call(this);
};

/**
 * Possible player actions.
 */
PlayerState.ACTIONS = {
  UNKNOWN: 'unknown',
  PLAY: 'play',
  UPDATE: 'update',
  STOP: 'stop',
  RESUME: 'resume',
  PAUSE: 'pause',
  SKIP_PREV: 'skip_prev',
  SKIP_NEXT: 'skip_next'
};

function PlayOrigin(data) {
  Serializable.call(this, [
    'source',
    'source_context',
    'reason',
    'referrer',
    'referrer_version',
    'referrer_vendor'
  ]);

  data = data || {};

  /**
   * What kind of playlist did we play from?
   *
   * The default value of this property is "unknown". Must have a value.
   *
   * Valid values include 'album', 'artist', 'extlink', 'playlist', 'playqueue',
   * 'radio', 'search', 'unknown'.
   *
   * For an up to date list of valid values, see `PLAY_SOURCES` in
   * https://git.spotify.net/cgit.cgi/log-parser.git/tree/spotify/log_parser/messages_specs.py
   */
  this.source = data.source || 'unknown';

  /**
   * The uri of the view that initiated the playback.
   */
  this.source_context = data.source_context || 'unknown';

  /**
   * Why was the song started?
   *
   * The default value of this property is "unknown". Must have a value.
   *
   * A list of valid values that might be used by features:
   *
   * unknown    = Client doesn't know
   * clickrow   = A row in the song list was clicked/opened
   * playbtn    = The play button was pressed
   * urlopen    = A Url was opened
   *
   * For a complete and up to date list of valid values, see `PLAY_REASONS` in
   * https://git.spotify.net/cgit.cgi/log-parser.git/tree/spotify/log_parser/messages_specs.py
   */
  this.reason = data.reason || 'unknown';

  /**
   * Either a remote site or a spotify app which initiated the request.
   *
   * NOTE: This normally should be a readonly property and not be set
   * explicitly in the PlayerState as the Player will overwrite it when sending the request.
   */
  this.referrer = data.referrer || 'unknown';

  /**
   * The version of the referrer, where applicable. It usually makes sense to
   * set this value to the version of the JS app version, for instance "0.7.5".
   *
   * NOTE: This normally should be a readonly property and not be set
   * explicitly in the PlayerState as the Player will overwrite it when sending the request.
   */
  this.referrer_version = data.referrer_version || 'unknown';

  /**
   * The vendor of the referrer, where applicable.
   * For example com.soundrop, com.spotify.
   *
   * NOTE: This normally should be a readonly property and not be set
   * explicitly in the PlayerState as the Player will overwrite it when sending the request.
   */
  this.referrer_vendor = data.referrer_vendor || 'unknown';
}
inherit(PlayOrigin, Serializable);

/**
 * What kind of options user has
 * with the player. By default
 * all 'can_*' properties are set to true.
 * You might want to restrict some of them
 * in the special cases like ads (no skipping)
 * or radio no skipping prev.
 * @constructor
 * @param {Object} options The options data.
 */
function PlayOptions(options) {
  Serializable.call(this, [
    'repeat',
    'shuffle',
    'can_repeat',
    'can_shuffle',
    'can_skip_prev',
    'can_skip_next',
    'can_seek',
    'use_dmca_rules'
  ]);
  options = options || {};

  /**
   * True if repeat (repeat all, not single track repeat) is (or is to be) enabled.
   *
   * Default value is false
   */
  this.repeat = options.repeat !== undefined ? options.repeat : false;

  /**
   * True if shuffle is (or is to be) enabled.
   *
   * Default value is false
   */
  this.shuffle = options.shuffle !== undefined ? options.shuffle : false;

  /**
   * True if this context can be repeated. This would be false for instance in the
   * case of radio.
   *
   * Default value is true.
   */
  this.can_repeat = options.can_repeat !== undefined ? options.can_repeat : true;

  /**
   * True if this context can be shuffled. This would be false for instance in the
   * case of radio.
   *
   * Default value is true.
   */
  this.can_shuffle = options.can_shuffle !== undefined ? options.can_shuffle : true;

  /**
   * True if the user is (or should be) allowed to skip to the previous track.
   *
   * Default value is true.
   */
  this.can_skip_prev = options.can_skip_prev !== undefined ? options.can_skip_prev : true;

  /**
   * True if the user is (or should be) allowed to skip to the next track.
   *
   * Default value is true.
   */
  this.can_skip_next = options.can_skip_next !== undefined ? options.can_skip_next : true;

  /**
   * True if the user is (or should be) allowed to seek to a certain time in the
   * currently playing track.
   *
   * Default value is true.
   */
  this.can_seek = options.can_seek !== undefined ? options.can_seek : true;

  /**
   * True if the track player should automatically apply DMCA rules when playing.
   * DMCA rules should be enabled for users that have free radio in the US, and
   * controls how many tracks the user are allowed to skip etc.
   *
   * Default value is false.
   */
  this.use_dmca_rules = options.use_dmca_rules !== undefined ? options.use_dmca_rules : false;
}
inherit(PlayOptions, Serializable);

/**
 * The object accepting only defined properties.
 * To make sure only valid properties are passed
 * always use 'serialize()' when object value needed.
 * @constructor
 * @param {Array.<string>} allowedProps The list of the properties
 * that are supported for the object.
 */
function Serializable(allowedProps) {
  this._props = allowedProps || [];
}

/**
 * The JSON representation of the object.
 * @return {Object} Data associated with current player state.
 */
Serializable.prototype.serialize = function() {
  var data = {};
  var prop;

  for (var i = 0, l = this._props.length; i < l; i++) {
    prop = this._props[i];
    if (this[prop] !== undefined) {
      if (this[prop] instanceof Serializable) {
        data[prop] = this[prop].serialize();
      } else {
        data[prop] = this[prop];
      }
    }
  }

  return data;
};

exports.PlayerState = PlayerState;

},{"spotify-inheritance":54}],25:[function(require,module,exports){
var inherit = require('spotify-inheritance').inherit;

var Message = require('./message').Message;

/**
 * Request actions.
 *
 * @name exports.Action
 * @enum {string}
 */
exports.Action = {
  DELETE: 'DELETE',
  GET: 'GET',
  HEAD: 'HEAD',
  POST: 'POST',
  PUT: 'PUT',
  SUB: 'SUB',
  PATCH: 'PATCH'
};

/**
 * A serialized Request object.
 *
 * @name Spotify.Cosmos.SerializedRequest
 * @typedef {{
 *   uri: Spotify.Cosmos.URI,
 *   headers: Spotify.Cosmos.Headers,
 *   body: Spotify.Cosmos.Body
 * }}
 */
exports.SerializedRequest;

/**
 * Encapsulates a request to the handlers.
 *
 * Instances of this class are "immutable" and should not be changed.
 *
 * @constructs Spotify.Cosmos.Request
 * @extends Spotify.Cosmos.Message
 * @param {Spotify.Cosmos.Action} action The action of the request.
 * @param {Spotify.Cosmos.URI} uri The URI of the request
 * @param {Spotify.Cosmos.Headers=} opt_headers The optional headers of the
 *     request.
 * @param {Spotify.Cosmos.Body=} opt_body The optional body of the request.
 */
function Request(action, uri, opt_headers, opt_body) {
  if (!(this instanceof Request))
    return new Request(action, uri, opt_headers, opt_body);
  if (!action)
    throw new TypeError('Invalid `action` argument for Request.');
  Message.call(this, uri, opt_headers, opt_body);

  /**
   * The action of the request.
   *
   * @type {Spotify.Cosmos.Action}
   * @protected
   */
  this._action = action;
}
inherit(Request, Message);
exports.Request = Request;

/**
 * Creates a new Request from a SerializedRequest object.
 *
 * @param {Spotify.Cosmos.SerializedRequest} object The serialized request.
 * @return {Spotify.Cosmos.Request|null} The new Request object or null.
 */
Request.fromObject = function(object) {
  return (object && object.action && object.uri) ?
    new Request(
        object.action,
        object.uri,
        object.headers,
        object.body
    ) : null;
};

/**
 * Returns the action of the request.
 *
 * @return {Spotify.Cosmos.Action} The action of the request.
 */
Request.prototype.getAction = function() {
  return this._action;
};

/**
 * @inheritDoc
 */
Request.prototype.copy = function(opt_headers, opt_body) {
  return new Request(
      this._action,
      this._uri,
      this._copyHeaders(opt_headers),
      typeof opt_body != 'undefined' ? opt_body : this._body
  );
};

/**
 * @inheritDoc
 */
Request.prototype.toJSON = function() {
  return {
    action: this._action,
    uri: this._uri,
    headers: this._headers,
    body: this._body
  };
};



},{"./message":23,"spotify-inheritance":54}],26:[function(require,module,exports){
var inherit = require('spotify-inheritance').inherit;

var Message = require('./message').Message;

/**
 * Statuscode.
 * The statuses with negative numbers are reserved for
 * errors that originate within the cosmos library.
 *
 * @name exports.StatusCode
 * @enum {number}
 */
exports.StatusCode = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  TIMED_OUT: 408,
  CONFLICT: 409,
  GONE: 410,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,

  /** Something went wrong, but the exact reason is not known. */
  ERROR_UNKNOWN: -100,

  /** A resource allocation required to complete the request failed. */
  ERROR_ALLOCATION_FAILED: -101,

  /** The body could not be decoded because it does
   not conform to the encoding header field. */
  ERROR_INVALID_ENCODING: -102,

  /** The router detected an infinite loop while processing the request. */
  ERROR_INFINITE_LOOP: -103,

  /** No endpoint resolver that could handle the request was found. */
  ERROR_RESOLVER_NOT_FOUND: -104
};

/**
 * A serialized Response object.
 *
 * @name Spotify.Cosmos.SerializedResponse
 * @typedef {{
 *   uri: Spotify.Cosmos.URI,
 *   status: Spotify.Cosmos.StatusCode,
 *   headers: Spotify.Cosmos.Headers,
 *   body: Spotify.Cosmos.Body
 * }}
 */
exports.SerializedResponse;

/**
 * Encapsulates a response from the handlers.
 *
 * @constructs Spotify.Cosmos.Response
 * @extends Spotify.Cosmos.Message
 * @param {Spotify.Cosmos.URI} uri The URI of the response
 * @param {Spotify.Cosmos.StatusCode} status The status of the response.
 * @param {Spotify.Cosmos.Headers=} opt_headers The optional headers of the
 *     response.
 * @param {Spotify.Cosmos.Body=} opt_body The optional body of the response.
 */
function Response(uri, status, opt_headers, opt_body) {
  if (!(this instanceof Response))
    return new Response(uri, status, opt_headers, opt_body, opt_requestURI);
  if (typeof status == 'undefined' || status == null)
    throw new TypeError('Invalid `status` argument for Response.');

  Message.call(this, uri, opt_headers, opt_body);

  /**
   * The Status of the Response.
   *
   * @type {Spotify.Cosmos.StatusCode}
   * @protected
   */
  this._status = status;
}
inherit(Response, Message);
exports.Response = Response;

/**
 * Creates a new Response from a SerializedResponse object.
 *
 * @param {Spotify.Cosmos.SerializedResponse} object The serialized response.
 * @return {Spotify.Cosmos.Response|null} The new Response object or null.
 */
Response.fromObject = function(object) {
  return (object && object.uri && object.status) ?
    new Response(
        object.uri,
        object.status,
        object.headers,
        object.body
    ) : null;
};

/**
 * @inheritDoc
 */
Response.prototype.getMimeType = function() {
  return this._headers['content-type'];
};

/**
 * Returns the status code of the Response.
 *
 * @return {Spotify.Cosmos.StatusCode} The status code of the response.
 */
Response.prototype.getStatusCode = function() {
  return this._status;
};

/**
 * @inheritDoc
 */
Response.prototype.copy = function(opt_headers, opt_body) {
  return new Response(
      this._uri,
      this._status,
      this._copyHeaders(opt_headers),
      typeof opt_body != 'undefined' ? opt_body : this._body
  );
};

/**
 * @inheritDoc
 */
Response.prototype.toJSON = function() {
  return {
    uri: this._uri,
    status: this._status,
    headers: this._headers,
    body: this._body
  };
};


},{"./message":23,"spotify-inheritance":54}],27:[function(require,module,exports){

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = require('./debug');
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // is webkit? http://stackoverflow.com/a/16459606/376773
  return ('WebkitAppearance' in document.documentElement.style) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (window.console && (console.firebug || (console.exception && console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  return JSON.stringify(v);
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs() {
  var args = arguments;
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return args;

  var c = 'color: ' + this.color;
  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
  return args;
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}
  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage(){
  try {
    return window.localStorage;
  } catch (e) {}
}

},{"./debug":28}],28:[function(require,module,exports){

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = debug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = require('ms');

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lowercased letter, i.e. "n".
 */

exports.formatters = {};

/**
 * Previously assigned color.
 */

var prevColor = 0;

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 *
 * @return {Number}
 * @api private
 */

function selectColor() {
  return exports.colors[prevColor++ % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function debug(namespace) {

  // define the `disabled` version
  function disabled() {
  }
  disabled.enabled = false;

  // define the `enabled` version
  function enabled() {

    var self = enabled;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // add the `color` if not set
    if (null == self.useColors) self.useColors = exports.useColors();
    if (null == self.color && self.useColors) self.color = selectColor();

    var args = Array.prototype.slice.call(arguments);

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %o
      args = ['%o'].concat(args);
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    if ('function' === typeof exports.formatArgs) {
      args = exports.formatArgs.apply(self, args);
    }
    var logFn = enabled.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }
  enabled.enabled = true;

  var fn = exports.enabled(namespace) ? enabled : disabled;

  fn.namespace = namespace;

  return fn;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  var split = (namespaces || '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

},{"ms":38}],29:[function(require,module,exports){


    /**
     * Array forEach
     */
    function forEach(arr, callback, thisObj) {
        if (arr == null) {
            return;
        }
        var i = -1,
            len = arr.length;
        while (++i < len) {
            // we iterate over sparse items since there is no way to make it
            // work properly on IE 7-8. see #64
            if ( callback.call(thisObj, arr[i], i, arr) === false ) {
                break;
            }
        }
    }

    module.exports = forEach;



},{}],30:[function(require,module,exports){


    /**
     * Array.indexOf
     */
    function indexOf(arr, item, fromIndex) {
        fromIndex = fromIndex || 0;
        if (arr == null) {
            return -1;
        }

        var len = arr.length,
            i = fromIndex < 0 ? len + fromIndex : fromIndex;
        while (i < len) {
            // we iterate over sparse items since there is no way to make it
            // work properly on IE 7-8. see #64
            if (arr[i] === item) {
                return i;
            }

            i++;
        }

        return -1;
    }

    module.exports = indexOf;


},{}],31:[function(require,module,exports){
var mixIn = require('../object/mixIn');

    /**
     * Create Object using prototypal inheritance and setting custom properties.
     * - Mix between Douglas Crockford Prototypal Inheritance <http://javascript.crockford.com/prototypal.html> and the EcmaScript 5 `Object.create()` method.
     * @param {object} parent    Parent Object.
     * @param {object} [props] Object properties.
     * @return {object} Created object.
     */
    function createObject(parent, props){
        function F(){}
        F.prototype = parent;
        return mixIn(new F(), props);

    }
    module.exports = createObject;



},{"../object/mixIn":36}],32:[function(require,module,exports){


    var _rKind = /^\[object (.*)\]$/,
        _toString = Object.prototype.toString,
        UNDEF;

    /**
     * Gets the "kind" of value. (e.g. "String", "Number", etc)
     */
    function kindOf(val) {
        if (val === null) {
            return 'Null';
        } else if (val === UNDEF) {
            return 'Undefined';
        } else {
            return _rKind.exec( _toString.call(val) )[1];
        }
    }
    module.exports = kindOf;


},{}],33:[function(require,module,exports){
var hasOwn = require('./hasOwn');

    var _hasDontEnumBug,
        _dontEnums;

    function checkDontEnum(){
        _dontEnums = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor'
            ];

        _hasDontEnumBug = true;

        for (var key in {'toString': null}) {
            _hasDontEnumBug = false;
        }
    }

    /**
     * Similar to Array/forEach but works over object properties and fixes Don't
     * Enum bug on IE.
     * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
     */
    function forIn(obj, fn, thisObj){
        var key, i = 0;
        // no need to check if argument is a real object that way we can use
        // it for arrays, functions, date, etc.

        //post-pone check till needed
        if (_hasDontEnumBug == null) checkDontEnum();

        for (key in obj) {
            if (exec(fn, obj, key, thisObj) === false) {
                break;
            }
        }


        if (_hasDontEnumBug) {
            var ctor = obj.constructor,
                isProto = !!ctor && obj === ctor.prototype;

            while (key = _dontEnums[i++]) {
                // For constructor, if it is a prototype object the constructor
                // is always non-enumerable unless defined otherwise (and
                // enumerated above).  For non-prototype objects, it will have
                // to be defined on this object, since it cannot be defined on
                // any prototype objects.
                //
                // For other [[DontEnum]] properties, check if the value is
                // different than Object prototype value.
                if (
                    (key !== 'constructor' ||
                        (!isProto && hasOwn(obj, key))) &&
                    obj[key] !== Object.prototype[key]
                ) {
                    if (exec(fn, obj, key, thisObj) === false) {
                        break;
                    }
                }
            }
        }
    }

    function exec(fn, obj, key, thisObj){
        return fn.call(thisObj, obj[key], key, obj);
    }

    module.exports = forIn;



},{"./hasOwn":35}],34:[function(require,module,exports){
var hasOwn = require('./hasOwn');
var forIn = require('./forIn');

    /**
     * Similar to Array/forEach but works over object properties and fixes Don't
     * Enum bug on IE.
     * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
     */
    function forOwn(obj, fn, thisObj){
        forIn(obj, function(val, key){
            if (hasOwn(obj, key)) {
                return fn.call(thisObj, obj[key], key, obj);
            }
        });
    }

    module.exports = forOwn;



},{"./forIn":33,"./hasOwn":35}],35:[function(require,module,exports){


    /**
     * Safer Object.hasOwnProperty
     */
     function hasOwn(obj, prop){
         return Object.prototype.hasOwnProperty.call(obj, prop);
     }

     module.exports = hasOwn;



},{}],36:[function(require,module,exports){
var forOwn = require('./forOwn');

    /**
    * Combine properties from all the objects into first one.
    * - This method affects target object in place, if you want to create a new Object pass an empty object as first param.
    * @param {object} target    Target Object
    * @param {...object} objects    Objects to be combined (0...n objects).
    * @return {object} Target Object.
    */
    function mixIn(target, objects){
        var i = 0,
            n = arguments.length,
            obj;
        while(++i < n){
            obj = arguments[i];
            if (obj != null) {
                forOwn(obj, copyProp, target);
            }
        }
        return target;
    }

    function copyProp(val, key){
        this[key] = val;
    }

    module.exports = mixIn;


},{"./forOwn":34}],37:[function(require,module,exports){


    /**
     * Get current time in miliseconds
     */
    function now(){
        // yes, we defer the work to another function to allow mocking it
        // during the tests
        return now.get();
    }

    now.get = (typeof Date.now === 'function')? Date.now : function(){
        return +(new Date());
    };

    module.exports = now;



},{}],38:[function(require,module,exports){
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} options
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options){
  options = options || {};
  if ('string' == typeof val) return parse(val);
  return options.long
    ? long(val)
    : short(val);
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = '' + str;
  if (str.length > 10000) return;
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
  if (!match) return;
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function short(ms) {
  if (ms >= d) return Math.round(ms / d) + 'd';
  if (ms >= h) return Math.round(ms / h) + 'h';
  if (ms >= m) return Math.round(ms / m) + 'm';
  if (ms >= s) return Math.round(ms / s) + 's';
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function long(ms) {
  return plural(ms, d, 'day')
    || plural(ms, h, 'hour')
    || plural(ms, m, 'minute')
    || plural(ms, s, 'second')
    || ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) return;
  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
  return Math.ceil(ms / n) + ' ' + name + 's';
}

},{}],39:[function(require,module,exports){
(function (process,global){
/*
defer
*/"use strict"

var kindOf  = require("mout/lang/kindOf"),
    now     = require("mout/time/now"),
    forEach = require("mout/array/forEach"),
    indexOf = require("mout/array/indexOf")

var callbacks = {
    timeout: {},
    frame: [],
    immediate: []
}

var push = function(collection, callback, context, defer){

    var iterator = function(){
        iterate(collection)
    }

    if (!collection.length) defer(iterator)

    var entry = {
        callback: callback,
        context: context
    }

    collection.push(entry)

    return function(){
        var io = indexOf(collection, entry)
        if (io > -1) collection.splice(io, 1)
    }
}

var iterate = function(collection){
    var time = now()

    forEach(collection.splice(0), function(entry) {
        entry.callback.call(entry.context, time)
    })
}

var defer = function(callback, argument, context){
    return (kindOf(argument) === "Number") ? defer.timeout(callback, argument, context) : defer.immediate(callback, argument)
}

if (global.process && process.nextTick){

    defer.immediate = function(callback, context){
        return push(callbacks.immediate, callback, context, process.nextTick)
    }

} else if (global.setImmediate){

    defer.immediate = function(callback, context){
        return push(callbacks.immediate, callback, context, setImmediate)
    }

} else if (global.postMessage && global.addEventListener){

    addEventListener("message", function(event){
        if (event.source === global && event.data === "@deferred"){
            event.stopPropagation()
            iterate(callbacks.immediate)
        }
    }, true)

    defer.immediate = function(callback, context){
        return push(callbacks.immediate, callback, context, function(){
            postMessage("@deferred", "*")
        })
    }

} else {

    defer.immediate = function(callback, context){
        return push(callbacks.immediate, callback, context, function(iterator){
            setTimeout(iterator, 0)
        })
    }

}

var requestAnimationFrame = global.requestAnimationFrame ||
    global.webkitRequestAnimationFrame ||
    global.mozRequestAnimationFrame ||
    global.oRequestAnimationFrame ||
    global.msRequestAnimationFrame ||
    function(callback) {
        setTimeout(callback, 1e3 / 60)
    }

defer.frame = function(callback, context){
    return push(callbacks.frame, callback, context, requestAnimationFrame)
}

var clear

defer.timeout = function(callback, ms, context){
    var ct = callbacks.timeout

    if (!clear) clear = defer.immediate(function(){
        clear = null
        callbacks.timeout = {}
    })

    return push(ct[ms] || (ct[ms] = []), callback, context, function(iterator){
        setTimeout(iterator, ms)
    })
}

module.exports = defer

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":42,"mout/array/forEach":29,"mout/array/indexOf":30,"mout/lang/kindOf":32,"mout/time/now":37}],40:[function(require,module,exports){
/*
Emitter
*/"use strict"

var indexOf = require("mout/array/indexOf"),
    forEach = require("mout/array/forEach")

var prime = require("./index"),
    defer = require("./defer")

var slice = Array.prototype.slice;

var Emitter = prime({

    constructor: function(stoppable){
        this._stoppable = stoppable
    },

    on: function(event, fn){
        var listeners = this._listeners || (this._listeners = {}),
            events = listeners[event] || (listeners[event] = [])

        if (indexOf(events, fn) === -1) events.push(fn)

        return this
    },

    off: function(event, fn){
        var listeners = this._listeners, events
        if (listeners && (events = listeners[event])){

            var io = indexOf(events, fn)
            if (io > -1) events.splice(io, 1)
            if (!events.length) delete listeners[event];
            for (var l in listeners) return this
            delete this._listeners
        }
        return this
    },

    emit: function(event){
        var self = this,
            args = slice.call(arguments, 1)

        var emit = function(){
            var listeners = self._listeners, events
            if (listeners && (events = listeners[event])){
                forEach(events.slice(0), function(event){
                    var result = event.apply(self, args)
                    if (self._stoppable) return result
                })
            }
        }

        if (args[args.length - 1] === Emitter.EMIT_SYNC){
            args.pop()
            emit()
        } else {
            defer(emit)
        }

        return this
    }

})

Emitter.EMIT_SYNC = {}

module.exports = Emitter

},{"./defer":39,"./index":41,"mout/array/forEach":29,"mout/array/indexOf":30}],41:[function(require,module,exports){
/*
prime
 - prototypal inheritance
*/"use strict"

var hasOwn = require("mout/object/hasOwn"),
    mixIn  = require("mout/object/mixIn"),
    create = require("mout/lang/createObject"),
    kindOf = require("mout/lang/kindOf")

var hasDescriptors = true

try {
    Object.defineProperty({}, "~", {})
    Object.getOwnPropertyDescriptor({}, "~")
} catch (e){
    hasDescriptors = false
}

// we only need to be able to implement "toString" and "valueOf" in IE < 9
var hasEnumBug = !({valueOf: 0}).propertyIsEnumerable("valueOf"),
    buggy      = ["toString", "valueOf"]

var verbs = /^constructor|inherits|mixin$/

var implement = function(proto){
    var prototype = this.prototype

    for (var key in proto){
        if (key.match(verbs)) continue
        if (hasDescriptors){
            var descriptor = Object.getOwnPropertyDescriptor(proto, key)
            if (descriptor){
                Object.defineProperty(prototype, key, descriptor)
                continue
            }
        }
        prototype[key] = proto[key]
    }

    if (hasEnumBug) for (var i = 0; (key = buggy[i]); i++){
        var value = proto[key]
        if (value !== Object.prototype[key]) prototype[key] = value
    }

    return this
}

var prime = function(proto){

    if (kindOf(proto) === "Function") proto = {constructor: proto}

    var superprime = proto.inherits

    // if our nice proto object has no own constructor property
    // then we proceed using a ghosting constructor that all it does is
    // call the parent's constructor if it has a superprime, else an empty constructor
    // proto.constructor becomes the effective constructor
    var constructor = (hasOwn(proto, "constructor")) ? proto.constructor : (superprime) ? function(){
        return superprime.apply(this, arguments)
    } : function(){}

    if (superprime){

        mixIn(constructor, superprime)

        var superproto = superprime.prototype
        // inherit from superprime
        var cproto = constructor.prototype = create(superproto)

        // setting constructor.parent to superprime.prototype
        // because it's the shortest possible absolute reference
        constructor.parent = superproto
        cproto.constructor = constructor
    }

    if (!constructor.implement) constructor.implement = implement

    var mixins = proto.mixin
    if (mixins){
        if (kindOf(mixins) !== "Array") mixins = [mixins]
        for (var i = 0; i < mixins.length; i++) constructor.implement(create(mixins[i].prototype))
    }

    // implement proto and return constructor
    return constructor.implement(proto)

}

module.exports = prime

},{"mout/lang/createObject":31,"mout/lang/kindOf":32,"mout/object/hasOwn":35,"mout/object/mixIn":36}],42:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

(function () {
  try {
    cachedSetTimeout = setTimeout;
  } catch (e) {
    cachedSetTimeout = function () {
      throw new Error('setTimeout is not defined');
    }
  }
  try {
    cachedClearTimeout = clearTimeout;
  } catch (e) {
    cachedClearTimeout = function () {
      throw new Error('clearTimeout is not defined');
    }
  }
} ())
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = cachedSetTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    cachedClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        cachedSetTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],43:[function(require,module,exports){
/*jslint node: true */

'use strict';

var ClientRequest = require('./request').ClientRequest;

/**
 * An autoincremented id that is used to distinguish Resolver instances.
 *
 * @type {number}
 * @private
 */
var resolverUID = 0;

/**
 * A resolver takes a request for a resources and sends it through the
 * transport.
 *
 * @constructs Resolver
 */
function Resolver() {
  if (!(this instanceof Resolver))
    return new Resolver();

  /**
   * The resolver's id.
   *
   * @type {number}
   * @protected
   */
  this._id = resolverUID++;

  /**
   * An incrementing ID used for tracking requests.
   *
   * @type {number}
   * @protected
   */
  this._requestID = 0;

  /**
   * Storage for the sent request handlers waiting for a response.
   *
   * @type {Object.<string, function>}
   * @protected
   */
  this._handlers = {};
}
exports.Resolver = Resolver;

/**
 * Adds a handler to the internal storage.
 *
 * @param {number} requestID The identifier for the request.
 * @param {ClientRequest} handler The handler for the request.
 * @protected
 */
Resolver.prototype._addHandler = function(requestID, handler) {
  this._handlers[requestID] = handler;
  return this;
};

/**
 * Removes a handler from the internal storage.
 *
 * @param {number} requestID The identifier for the request.
 * @protected
 */
Resolver.prototype._removeHandler = function(requestID) {
  this._handlers[requestID] = null;
  return this;
};

/**
 * Sends a request through the transport.
 *
 * Subclasses of this class need to implement this method.
 *
 * @param {number} requestID The id of the request.
 * @param {Object} data The payload data for the request.
 * @protected
 */
Resolver.prototype._sendRequest = function(requestID, data) {
  throw new Error('Resolver _sendRequest not implemented.');
};

/**
 * Handles a response from the transport.
 *
 * @param {Object} response The response from the transport.
 * @protected
 */
Resolver.prototype._handleResponse = function(response) {
  throw new Error('Resolver _handleResponse not implemented.');
};

/**
 * Dispatches a request handler with some data.
 *
 * @param {number} requestID The request handler to dispatch.
 * @param {Object} data The response data to send back.
 * @protected
 */
Resolver.prototype._dispatchResponse = function(requestID, requestType, data) {
  var handler = this._handlers[requestID];
  if (!handler) return;
  handler._handleResponse(requestType, data);
};

/**
 * Resolves a request (represented by the data) through the transport.
 *
 * @param {Object} data The data representing the request.
 * @param {function} onsuccess The success handler for the request.
 * @param {function} onerror The error handler for the request.
 */
Resolver.prototype._resolve = function(data, onsuccess, onerror) {
  if (!data || !onsuccess || !onerror ||
      typeof onsuccess != 'function' || typeof onerror != 'function')
    throw new TypeError('Invalid argument length for `resolve`.');

  var requestID = ++this._requestID;
  var request = new ClientRequest(this, requestID, data, onsuccess, onerror);

  this._addHandler(requestID, request);

  request.onClose = this._removeHandler.bind(this);
  request.open();

  return request;
};

/**
 * Resolves a single request (represented by the data) through the transport.
 *
 * @param {Object} data The data representing the request.
 * @param {function} onsuccess The success handler for the request.
 * @param {function} onerror The error handler for the request.
 */
Resolver.prototype.resolve = function(data, onsuccess, onerror) {
  throw new Error('Resolver resolve not implemented.');
};

/**
 * Resolves a subscription request (represented by the data) through the transport.
 *
 * @param {Object} data The data representing the request.
 * @param {function} onsuccess The success handler for the request.
 * @param {function} onerror The error handler for the request.
 */
Resolver.prototype.subscribe = function(data, onsuccess, onerror) {
  throw new Error('Resolver subscribe not implemented.');
};

},{"./request":47}],44:[function(require,module,exports){
(function (global){
/*jslint node: true */

'use strict';

var defer = require('spotify-deferred');
var Resolver = require('./bootstrap').Resolver;

/**
 * A mock resolver for a nodejs environment.
 *
 * This resolver uses regular callbacks as a transport.
 *
 * @constructs Cosmos.MockResolver
 * @extends Cosmos.Resolver
 */
function MockResolver() {
  if (!(this instanceof MockResolver))
    return new MockResolver();
  Resolver.call(this);

  // rebind the _handleResponse method so that we can reuse it for both
  // addEventListener and removeEventListener
  this._handleResponse = this._handleResponse.bind(this);

  /**
   * The identifier for request messages.
   *
   * @type {string}
   * @protected
   */
  this._requestMessageType = 'cosmos-request';

  /**
   * The identifier for response messages.
   *
   * @type {string}
   * @protected
   */
  this._responseMessageType = 'cosmos-response';

  /**
   * Prefix for the requests ids to prevent clashes
   * with bridge requests in webplayer
   *
   * @type {string}
   * @private
   */
  this._requestIdPrefix = 'cosmos_';

  this._handlersMap = {};

  // attach the handler
  this.attach();
}
MockResolver.prototype = new Resolver();
MockResolver.prototype.constructor = MockResolver;
exports.MockResolver = MockResolver;

/**
 * @inheritDoc
 */
MockResolver.prototype._sendRequest = function(requestName, requestID, data) {
  var self = this;

  var message = {
    type: this._requestMessageType,
    resolver: this._id,
    id: this._requestIdPrefix + requestID,
    name: requestName,
    payload: data.serialize ? data.serialize() : data
  };

  if (!this._handlersMap[data._action]) {
    return;
  }

  if (!this._handlersMap[data._action][data._uri]) {
    return;
  }

  this._handlersMap[data._action][data._uri](data, function (status, resp) {
    message.payload = {
      body: typeof resp !== 'undefined' ? resp : status,
      uri: data._uri,
      status: typeof resp !== 'undefined' ? status : 200
    };
    message.type = self._responseMessageType;

    var response = {
      data: message
    };
    self._handleResponse(response);
  });
};

/**
 * @inheritDoc
 */
MockResolver.prototype._handleResponse = function(response) {
  var data = response.data;
  if (typeof data == 'string') {
    try {
      data = JSON.parse(response.data);
    } catch (e) {
      return;
    }
  }
  if (data.type != this._responseMessageType ||
      data.resolver != this._id ||
      !data.payload) return;
  var id = data.id || '';
  var requestID = parseInt(id.replace(this._requestIdPrefix, ''), 10);
  var requestName = data.name || '';
  if (!requestID || !requestName) return;
  this._dispatchResponse(requestID, requestName, data.payload);
};

/**
 * Attaches the resolver so that it could process calls from the window object.
 */
MockResolver.prototype.attach = function() {
  var win = global.window;
  if (win) {
    win._cosmosRequest = this.resolve.bind(this);
  }
};

/**
 * Detaches the resolver so that it doesn't process calls from the window object.
 */
MockResolver.prototype.detach = function() {
  var win = global.window;
  if (win) {
    delete win._cosmosRequest;
  }
};

/**
 * Specific method for the mock resolver to add request handlers
 *
 * @param {string}   method       Type of method (GET, POST, PUT, SUB)
 * @param {string}   uri          Request to handle
 * @param {Function} fn           Function that handles the request
 */
MockResolver.prototype.addHandler = function(method, uri, fn) {
  if (!this._handlersMap[method]) {
    this._handlersMap[method] = {};
  }

  this._handlersMap[method][uri] = fn;
};

/**
 * Specific method for the mock resolver to remove a specific request handler
 *
 * @param {string}   method       Type of method (GET, POST, PUT, SUB)
 * @param {string}   uri          Request to handle
 */
MockResolver.prototype.removeHandler = function(method, uri) {
  if (!this._handlersMap[method]) {
    return;
  }

  if (this._handlersMap[method][uri]) {
    delete this._handlersMap[method][uri];
  }
};

/**
 * Specific method for the mock resolver to remove all handlers
 */
MockResolver.prototype.clearHandlers = function() {
  this._handlersMap = {};
};

/**
 * Resolves a single request (represented by the data) through the transport.
 * Single requests need to be closed immediately after the response is
 * received.
 *
 * @param {Object} data The data representing the request.
 * @param {function} onsuccess The success handler for the request.
 * @param {function} onerror The error handler for the request.
 */
MockResolver.prototype.resolve = function(data, onsuccess, onerror) {
  function onResult(callback, response) {
    defer(callback.bind(this, response));
    request.close();
  }

  var request = this._resolve(data, onResult.bind(this, onsuccess), onResult.bind(this, onerror));
  return request;
};

/**
 * Resolves a  subscription request (represented by the data) through the transport.
 * Subscriptions stay open until they're explicitly closed.
 * Every time the request returns some data pull for next
 * batch is sent.
 *
 * @param {Object} data The data representing the request.
 * @param {function} onsuccess The success handler for the request.
 * @param {function} onerror The error handler for the request.
 */
MockResolver.prototype.subscribe = function(data, onsuccess, onerror) {
  return this._resolve(data, onsuccess, onerror);
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./bootstrap":43,"spotify-deferred":49}],45:[function(require,module,exports){
(function (global){
/*jslint node: true */

'use strict';

var SpotifyApi = global.SpotifyApi;
var useApiRequest = !!(SpotifyApi && SpotifyApi.api &&
    typeof SpotifyApi.api.request === 'function');

var Resolver = require('./bootstrap').Resolver;
var defer = require('spotify-deferred');

/**
 * A resolver for a native environment.
 *
 * This resolver uses the Stitch bridge as a transport
 *
 * @constructs Cosmos.NativeResolver
 * @extends Cosmos.Resolver
 * @param {Object} spBridge Spotify CPP/JS bridge
 */
function NativeResolver(spBridge) {
  if (!(this instanceof NativeResolver))
    return new NativeResolver();
  if (!spBridge) {
    throw new TypeError('Missing `spBridge` parameter');
  }
  Resolver.call(this);

  this._bridge = spBridge;

  this._deferredFlush = false;
}
NativeResolver.prototype = new Resolver();
NativeResolver.prototype.constructor = NativeResolver;
exports.NativeResolver = NativeResolver;

/**
 * Prepare bridge flush.
 * TODO: Move to the separate module
 */
NativeResolver.prototype._prepareCoreFlush = function() {
  if (!this._deferredFlush) {
    this._deferredFlush = true;
    this._defer(this, this._flushRequests);
  }
};

/**
 * Flush bridge requests.
 * TODO: Move to the separate module
 */
NativeResolver.prototype._flushRequests = function() {
  this._deferredFlush = false;
  var flushMsg = JSON.stringify({ name: 'core_flush', args: []});
  this._sendBridgeRequest(flushMsg, {
    onSuccess: function() {},
    onFailure: function() {}
  });
};

/**
 * Defer the function call.
 * TODO: Move to the separate module
 */
NativeResolver.prototype._defer = function(context, callback) {
  defer(callback.bind(context));
};

/**
 * If SpotifyApi is loaded, use api requests to send messages to bridge
 * TODO: Use proxy that will handle Cosmos/Stitch calls for the resolver.
 */
NativeResolver.prototype._sendRequest = function(requestName, requestId, data) {
  var self = this;
  data = (data.serialize ? data.serialize() : data);

  var args = [requestId, data];
  var caller = { self: this, id: requestId, type: requestName };

  if (useApiRequest) {
    this._sendApiRequest(requestName, args, caller, this._handleResponse, this._handleError);
  } else {
    this._sendCosmosRequest(requestName, args, caller, this._handleResponse, this._handleError);
  }
};


/**
 * Talk to bridge directly from Cosmos
 * TODO: Move to the separate module
 */
NativeResolver.prototype._sendCosmosRequest = function(requestName, args, caller, onSuccess, onError) {
  var message = JSON.stringify({
    name: requestName,
    args: args
  });

  this._sendBridgeRequest(message, {
    onSuccess: function(data) {
      onSuccess.call(caller, JSON.parse(data));
    },
    onFailure: function(data) {
      data = JSON.parse(data);
      onError.call(caller, data);
    }
  });

  this._prepareCoreFlush();
};

/**
 * Send message to the bridge
 * @param {string} message The message to send to the bridge.
 * @param {Object.<string, function>} callbackMap The `onSuccess`
 * and `onFailure` functions to be executed after request is completed.
 * TODO: Use proxy that will handle Cosmos/Stitch calls for the resolver.
 */
NativeResolver.prototype._sendBridgeRequest = function(message, callbackMap) {
  this._bridge.executeRequest(message, callbackMap || {});
};

/**
 * Use old API to send messages to the bridge.
 * TODO: Move to the separate module
 */
NativeResolver.prototype._sendApiRequest = function(requestName, args, caller, onSuccess, onError) {
  SpotifyApi.api.request(
      requestName,
      args,
      caller,
      onSuccess,
      onError
  );
};

/**
 * Handles successful responses from the bridge
 * @param {Object} data The response data.
 */
NativeResolver.prototype._handleResponse = function(data) {
  this.self._dispatchResponse(this.id, this.type, data.responses && data.responses[0] || data);
};

/**
 * Handles failed responses from the bridge
 * @param {Object} error The error data.
 */
NativeResolver.prototype._handleError = function(error) {
  this.self._dispatchResponse(this.id, this.type, error);
};

/**
 * Resolves a single request (represented by the data) through the transport.
 * Single requests need to be closed immediately after the response is
 * received.
 *
 * @param {Object} data The data representing the request.
 * @param {function} onsuccess The success handler for the request.
 * @param {function} onerror The error handler for the request.
 */
NativeResolver.prototype.resolve = function(data, onsuccess, onerror) {
  function onResult(callback, response) {
    this._defer(this, callback.bind(this, response));
    request.close();
  }

  var request = this._resolve(data, onResult.bind(this, onsuccess), onResult.bind(this, onerror));
  return request;
};

/**
 * Resolves a  subscription request (represented by the data) through the transport.
 * Subscriptions stay open until they're explicitly closed.
 * Every time the request returns some data pull for next
 * batch is sent.
 *
 * @param {Object} data The data representing the request.
 * @param {function} onsuccess The success handler for the request.
 * @param {function} onerror The error handler for the request.
 */
NativeResolver.prototype.subscribe = function(data, onsuccess, onerror) {
  function onResult(callback, response) {
    callback.call(this, response);
    request.pull();
  }

  var request = this._resolve(data, onResult.bind(this, onsuccess), onResult.bind(this, onerror));
  return request;
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./bootstrap":43,"spotify-deferred":49}],46:[function(require,module,exports){
(function (global){
/*jslint node: true */

'use strict';

var defer = require('spotify-deferred');
var Resolver = require('./bootstrap').Resolver;

/**
 * A resolver for a web-based environment.
 *
 * This resolver uses postMessage as a transport.
 *
 * @constructs Cosmos.WebResolver
 * @extends Cosmos.Resolver
 * @type {string=} opt_target The optional target for the postMessage calls.
 */
function WebResolver(opt_target) {
  if (!(this instanceof WebResolver))
    return new WebResolver(opt_target);
  Resolver.call(this);

  /**
   * The target for postMessage calls.
   *
   * @type {string}
   * @protected
   */
  this._target = opt_target || '*';

  // rebind the _handleResponse method so that we can reuse it for both
  // addEventListener and removeEventListener
  this._handleResponse = this._handleResponse.bind(this);

  /**
   * The identifier for request messages.
   *
   * @type {string}
   * @protected
   */
  this._requestMessageType = 'cosmos-request';

  /**
   * The identifier for response messages.
   *
   * @type {string}
   * @protected
   */
  this._responseMessageType = 'cosmos-response';

  /**
   * Prefix for the requests ids to prevent clashes
   * with bridge requests in webplayer
   *
   * @type {string}
   * @private
   */
  this._requestIdPrefix = 'cosmos_';

  // attach the handler
  this.attach();
}
WebResolver.prototype = new Resolver();
WebResolver.prototype.constructor = WebResolver;
exports.WebResolver = WebResolver;

/**
 * @inheritDoc
 */
WebResolver.prototype._sendRequest = function(requestName, requestID, data) {
  var top = global.window.top;

  var message = {
    type: this._requestMessageType,
    resolver: this._id,
    id: this._requestIdPrefix + requestID,
    name: requestName,
    payload: data.serialize ? data.serialize() : data
  };
  top.postMessage(JSON.stringify(message), this._target);
};

/**
 * @inheritDoc
 */
WebResolver.prototype._handleResponse = function(response) {
  var data = response.data;
  if (typeof data == 'string') {
    try {
      data = JSON.parse(response.data);
    } catch (e) {
      return;
    }
  }
  if (data.type != this._responseMessageType ||
      data.resolver != this._id ||
      !data.payload) return;
  var id = data.id || '';
  var requestID = parseInt(id.replace(this._requestIdPrefix, ''), 10);
  var requestName = data.name || '';
  if (!requestID || !requestName) return;
  this._dispatchResponse(requestID, requestName, data.payload);
};

/**
 * Attaches the resolver so that it could process postMessage calls.
 */
WebResolver.prototype.attach = function() {
  var win = global.window;
  if (win.addEvent && !win.addEventListener) {
    win.addEvent('onmessage', this._handleResponse);
  } else {
    win.addEventListener('message', this._handleResponse, false);
  }
};

/**
 * Detaches the resolver so that it doesn't process postMessage calls.
 */
WebResolver.prototype.detach = function() {
  var win = global.window;
  if (win.removeEvent && !win.removeEventListener) {
    win.removeEvent('onmessage', this._handleResponse);
  } else {
    win.removeEventListener('message', this._handleResponse, false);
  }
};

/**
 * Resolves a single request (represented by the data) through the transport.
 * Single requests need to be closed immediately after the response is
 * received.
 *
 * @param {Object} data The data representing the request.
 * @param {function} onsuccess The success handler for the request.
 * @param {function} onerror The error handler for the request.
 */
WebResolver.prototype.resolve = function(data, onsuccess, onerror) {
  function onResult(callback, response) {
    defer(callback.bind(this, response));
    request.close();
  }

  var request = this._resolve(data, onResult.bind(this, onsuccess), onResult.bind(this, onerror));
  return request;
};

/**
 * Resolves a  subscription request (represented by the data) through the transport.
 * Subscriptions stay open until they're explicitly closed.
 * Every time the request returns some data pull for next
 * batch is sent.
 *
 * @param {Object} data The data representing the request.
 * @param {function} onsuccess The success handler for the request.
 * @param {function} onerror The error handler for the request.
 */
WebResolver.prototype.subscribe = function(data, onsuccess, onerror) {
  return this._resolve(data, onsuccess, onerror);
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./bootstrap":43,"spotify-deferred":49}],47:[function(require,module,exports){
/*jslint node: true */

'use strict';

var defer = require('spotify-deferred');

/**
 * The representation of the connection to the client.
 * With introduction of Cosmos subscription the model of making
 * client requests changed.
 * Each Cosmos requests now needs to be explicitly cancelled to
 * close the connection.
 * Simple requests that only send or retrieve data (e.g POST and GET)
 * need to send 'cosmos_request_cancel' message immediately after the response
 * is received.
 * Subscription requests need to send a 'cosmos_request_pull' message every time
 * they receive data. The consumer of the subscription needs to cancel the subscription
 * when no more data should be sent from the provider.
 */
function ClientRequest(resolver, requestId, data, onsuccess, onerror) {

  /**
   * Request identifier.
   * @type {number}
   */
  this._requestId = requestId;

  /**
   * Either web or native request resolver.
   * @type {Cosmos.Resolver}
   */
  this._resolver = resolver;

  /**
   * Data that should be passed with every request.
   * @type {*}
   */
  this._requestData = data;

  /**
   * Triggered on success
   * @type {function}
   */
  this._successCallback = onsuccess;

  /**
   * Triggered on error
   * @type {function}
   */
  this._errorCallback = onerror;

  /**
   * Current state of the request.
   * @type {ClientRequest.status}
   */
  this._status = ClientRequest.status.INITIALIZED;
}
exports.ClientRequest = ClientRequest;

/**
 * Possible state of the ClientRequest instance.
 */
ClientRequest.status = {
  INITIALIZED: 'INITIALIZED',
  CLOSED: 'CLOSED',
  OPEN: 'OPEN'
};

/**
 * Possible desktop bridge messages.
 */
ClientRequest.messages = {
  OPEN: 'cosmos_request_create',
  PULL: 'cosmos_request_pull',
  CLOSE: 'cosmos_request_cancel'
};

/**
 * Opens the connection with the client.
 */
ClientRequest.prototype.open = function() {
  if (this._status === ClientRequest.status.INITIALIZED) {
    this._status = ClientRequest.status.OPEN;
    this._sendRequest(ClientRequest.messages.OPEN, this._requestData);
  }
};

/**
 * Send pull request for the open connection.
 * For subscriptions pull should resolve to a
 * piece of data.
 */
ClientRequest.prototype.pull = function() {
  if (this._status === ClientRequest.status.OPEN) {
    this._sendRequest(ClientRequest.messages.PULL, this._requestData);
  }
  return this._status;
};

/**
 * Closes the connection with the client.
 */
ClientRequest.prototype.close = function() {
  if (this._status === ClientRequest.status.OPEN) {
    this._status = ClientRequest.status.CLOSE;
    this._sendRequest(ClientRequest.messages.CLOSE);
  }
};

ClientRequest.prototype.onClose = function() {};

/**
 * Sends the request to the platform specific resolver
 * @param {string} requestName The message type. One of the {ClientRequest.messages}.
 * @param {object?} data The data to send with the request.
 */
ClientRequest.prototype._sendRequest = function(requestName, data) {
  this._resolver._sendRequest(requestName, this._requestId, data || {});
};

/**
 * Handles the response for the given request
 * @param {String} requestName The message type. One of the {ClientRequest.messages}.
 * @param {Object} data The response data.
 */
ClientRequest.prototype._handleResponse = function(requestName, data) {
  var self = this;
  var status = data && data.status;
  var callback;

  if (requestName === ClientRequest.messages.CLOSE) {
    this._successCallback = null;
    this._errorCallback = null;
    this._requestData = null;
    this.onClose(this._requestId);
    return;
  }

  callback = this._successCallback;
  callback = typeof callback === 'function' ? callback : function() {};
  defer(callback.bind(this, data));
};

},{"spotify-deferred":49}],48:[function(require,module,exports){
(function (global){
'use strict';

var window = global.window || {};
var process = global.process;

var common = require('cosmos-common-js');
var Resolver = require('./scripts/resolver').Resolver;

var SPResolver = null;
var spResolver = null;

var hasNativeBridge = window._getSpotifyModule &&
    typeof window._getSpotifyModule === 'function' &&
    window._getSpotifyModule('bridge');

var nodeRegex = /(node)|(grunt)|(iojs)(\.exe)*$/;
var isNodeJs = process && process.title && nodeRegex.test(process.argv[0]);

if (!isNodeJs) {
  if (hasNativeBridge) {
    SPResolver = require('./env/bootstrap.native.js').NativeResolver;
    spResolver = new SPResolver(hasNativeBridge);
  } else {
    SPResolver = require('./env/bootstrap.web.js').WebResolver;
    spResolver = new SPResolver();
  }
} else {
  SPResolver = require('./env/bootstrap.mock.js').MockResolver;
  spResolver = new SPResolver();

  exports.mockResolver = {
    addHandler: spResolver.addHandler.bind(spResolver),
    removeHandler: spResolver.removeHandler.bind(spResolver),
    clearHandlers: spResolver.clearHandlers.bind(spResolver)
  };
}

exports.Resolver = Resolver;
exports.Action = common.request.Action;
exports.Request = common.request.Request;
exports.Response = common.response.Response;
exports.resolver = spResolver ? new Resolver(spResolver) : null;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./env/bootstrap.mock.js":44,"./env/bootstrap.native.js":45,"./env/bootstrap.web.js":46,"./scripts/resolver":50,"cosmos-common-js":22}],49:[function(require,module,exports){
/**
 * @file
 * Introduces a function called "defer" that allows functions to be
 * executed in the next available tick.
 *
 * Unlike "setTimeout", "defer" executes the function at the nearest
 * possible time without clamping.
 *
 * @see Spotify.defer
 */
'use strict';

var PostRouter = require('spotify-postrouter');


/**
 * Storage for deferred functions to be executed.
 *
 * @type {Array.<function()>}
 * @private
 */
var deferred = [];


/**
 * A bound version of the postMessage routine used to trigger deferred
 * execution.
 *
 * @type {function()}
 * @private
 */
var send = function () {
  PostRouter.sendLocalMessage('execute_deferreds');
};


/**
 * Executes the deferred functions when the window
 * receives an 'execute_deferreds' message.
 *
 * @private
 */
function executeDeferreds() {
  var fns = deferred.splice(0);
  if (!fns.length) return;
  for (var i = 0, l = fns.length; i < l; i++) {
    try {
      fns[i]();
    } finally {
      // Do nothing.
      null;
    }
  }
}

PostRouter.addMessageHandler('execute_deferreds', executeDeferreds);


/**
 * Executes the function applied at the nearest possible time without
 * clamping.
 *
 * @param {function()} fn The function to execute.
 */
var defer = function(fn) {
  var trigger = !deferred.length;
  deferred.push(fn);
  if (trigger) send();
};


/**
 * Export public interface
 */
module.exports = defer;

},{"spotify-postrouter":56}],50:[function(require,module,exports){
var common = require('cosmos-common-js');

var Request = common.request.Request;
var Action = common.request.Action;
var Response = common.response.Response;

/**
 * Checks whether a status is successful.
 *
 * We define a successful status to be something within the 200 to 299 range.
 *
 * @param {number} status The status to check.
 */
function _isSuccessStatus(status) {
  // This constitutes a successfull status.
  return (status >= 200 && status <= 299);
};


function Resolver(spResolver) {
  if (!spResolver || typeof spResolver.resolve !== 'function') {
    throw TypeError('Incorrect resolver argument');
  }

  this._resolver = spResolver;
}

/**
 * The basic, generic method of sending the requests.
 *
 * For params description:
 * @borrows Resolver#_resolve as Resolver#resolve
 */
Resolver.prototype.resolve = function(request, callback) {
  return this._resolve(request, callback);
};

/**
 * Convenience method for doing GET requests.
 * resolver.get('sp://player') is an equivalent of
 * resolver.resolve(new Request('GET', 'sp://player')).
 *
 * @param {string|Object.<string, object>} options If is a string
 * will be parsed as url. If more data is needed, object notation
 * should be used.
 *  param options.url {string} The url of the request.
 *  param options.body {object=} The request body.
 *  param options.headers {object=} The request headers.
 * @param {function(error=, object?)} callback The function
 * executed after the request has been completed.
 *
 * @return {RequestHandler} The cancellable request handler.
 */
Resolver.prototype.get = function(options, callback) {
  return this._resolveFromParams(Action.GET, options, callback);
};

/**
 * Convenience method for doing POST requests.
 * resolver.post('sp://player') is an equivalent of
 * resolver.resolve(new Request('POST', 'sp://player'))
 *
 * @see Resolver#get for params description and returned value.
 */
Resolver.prototype.post = function(options, callback) {
  return this._resolveFromParams(Action.POST, options, callback);
};

/**
 * Convenience method for doing SUB requests.
 * resolver.subscribe('sp://player') is an equivalent of
 * resolver.resolve(new Request('SUB', 'sp://player'))
 *
 * @see Resolver#get for params description and returned value.
 */
Resolver.prototype.subscribe = function(options, callback) {
  return this._resolveFromParams(Action.SUB, options, callback);
};

/**
 * Convenience method for doing PUT requests.
 * resolver.put('sp://ads/v1/settings/session') is an equivalent of
 * resolver.resolve(new Request('PUT', 'sp://ads/v1/settings/session'))
 *
 * @see Resolver#get for params description and returned value.
 */
Resolver.prototype.put = function(options, callback) {
  return this._resolveFromParams(Action.PUT, options, callback);
};

/**
 * Convenience method for doing PATCH requests.
 * resolver.patch('sp://ads/v1/settings/session') is an equivalent of
 * resolver.resolve(new Request('PATCH', 'sp://ads/v1/settings/session'))
 *
 * @see Resolver#get for params description and returned value.
 */
Resolver.prototype.patch = function(options, callback) {
  return this._resolveFromParams(Action.PATCH, options, callback);
};

/**
 * Convenience method for doing DELETE requests.
 * resolver.delete('sp://player') is an equivalent of
 * resolver.resolve(new Request('DELETE', 'sp://player'))
 *
 * @see Resolver#get for params description and returned value.
 */
Resolver.prototype.delete = function(options, callback) {
  return this._resolveFromParams(Action.DELETE, options, callback);
};

/**
 * @private
 * Sends the request to the platform specific request resolver.
 * If the request action is 'SUB' it will send subscribe request
 * In any other case it will send simple resolve request.
 *
 * @param {Cosmos.Request} request A request object.
 * @param {function(error=, object?)} callback The function
 * executed after the request has been completed.
 *
 * @return {RequestHandler} The cancellable request handler.
 */
Resolver.prototype._resolve = function(request, callback) {
  if (!callback || typeof callback !== 'function') {
    callback = function() {};
  }

  var requestHandler;

  function onSuccess(serverResponse) {
    if (!requestHandler._request) {
      return;
    }

    var response = Response.fromObject(serverResponse);
    if (!response) {
      var error = new Error(
        'Failed to parse response: ' + JSON.stringify(serverResponse));
      return callback(error);
    }

    if (_isSuccessStatus(response.getStatusCode())) {
      return callback(null, response);
    } else {
      // Extract just the initial part of the request uri. It's good to have something
      // but it is also good to avoid having everything, since that can hurt dashboards
      // that group error messages.
      var requestEndpoint = request.toJSON().uri.match(/[^\:]*(\:\/\/)?[^\/]*/)[0];
      var errorMessage = (
        response.getHeader("error") ||
        "Request to " + requestEndpoint + " failed with status code " + response.getStatusCode());
      var error = new Error(errorMessage);
      error.response = response;
      return callback(error, response);
    }
  }

  function onError(serverResponse) {
    return callback(serverResponse instanceof Error ?
      serverResponse :
      new Error('Request failed: ' + JSON.stringify(serverResponse)));
  }

  var resolveFn = request.getAction() === Action.SUB ?
      this._resolver.subscribe : this._resolver.resolve;

  var clientRequest = resolveFn.call(this._resolver, request, onSuccess, onError);

  requestHandler = new RequestHandler(clientRequest);
  return requestHandler;
};

/**
 * @private
 * Creates Request object from supplied params.
 * @param {string} method Request method. One of the Request.Action.
 * @param {string|Object.<string, object>} options If is a string
 * will be parsed as url. If more data is needed, object notation
 * should be used.
 *  param options.url {string} The url of the request.
 *  param options.body {object=} The request body.
 *  param options.headers {object=} The request headers.
 * @param {function(error=, object?)} callback The function
 * executed after the request has been completed.
 *
 * @return {RequestHandler} The cancellable request handler.
 */
Resolver.prototype._resolveFromParams = function(method, options, callback) {
  options = options || {};

  var url = typeof options === 'string' ? options : options.url;
  var headers = options.headers;
  var body = options.body;

  var request = new Request(method, url, headers, body);

  return this._resolve(request, callback);
};

/**
 * The object that wraps the clientRequest
 * in a very simple interface.
 * Separates the implementation of the ClientRequest
 * from the request handler returned by Cosmos API.
 *
 * @param {Cosmos.ClientRequest} request The object
 * representing the newly opened request to the client.
 * Usually a request will be a subscription that
 * needs a close handler.
 */
function RequestHandler(request) {
  if (!request || typeof request.close !== 'function')
    throw new TypeError('Invalid `request` argument.');

  this._request = request;
}

/**
 * Closes the request and removes the object.
 */
RequestHandler.prototype.cancel = function() {
  if (this._request) {
    this._request.close();
    this._request = null;
  }
};

exports.Resolver = Resolver;

},{"cosmos-common-js":22}],51:[function(require,module,exports){
(function() {
  /**
   * @file
   * Introduces a function called "defer" that allows functions to be
   * executed in the next available tick.
   *
   * Unlike "setTimeout", "defer" executes the function at the nearest
   * possible time without clamping.
   *
   * @see Spotify.defer
   */
  'use strict';

  var hasWindow = typeof window != 'undefined';
  var hasDefineProperty = typeof Object.defineProperty == 'function';

  if (hasWindow && window.__modDefFn) {
    // If deferred has been attached to the global scope
    module.exports = window.__modDefFn;
    return;
  }

  /**
   * Storage for deferred functions to be executed.
   *
   * @type {Array.<function()>}
   * @private
   */
  var deferred = [];


  /**
   * A bound version of the postMessage routine used to trigger deferred
   * execution.
   *
   * @type {function()}
   * @private
   */
  var send;
  var origin;

  if (hasWindow && window.postMessage) {
    origin = (window.location.origin ||
          window.location.protocol + '//' + window.location.hostname);
    send = window.postMessage.bind(window, '@execute_deferreds', origin);
    if (!window.__hasDeferredHandler) {
      if (hasDefineProperty) {
        Object.defineProperty(window, '__hasDeferredHandler', {value: 1});
      } else {
        window.__hasDeferredHandler = 1;
      }
      var handler = function(e) {
        if (e.origin != origin && e.data != '@execute_deferreds') {
          return;
        }
        executeDeferreds();
      };
      if (window.addEventListener) {
        window.addEventListener('message', handler);
      } else {
        window.attachEvent('onmessage', handler);
      }
    }
  } else if (typeof setImmediate != 'undefined') {
    send = setImmediate.bind(null, executeDeferreds);
  } else {
    send = setTimeout.bind(null, executeDeferreds, 10);
  }


  /**
   * Executes the deferred functions when the window
   * receives an 'execute_deferreds' message.
   *
   * @private
   */
  function executeDeferreds() {
    var fns = deferred.splice(0);
    if (!fns.length) return;
    for (var i = 0, l = fns.length; i < l; i++) {
      try {
        fns[i]();
      } finally {
        // Do nothing.
        null;
      }
    }
  }


  /**
   * Executes the function applied at the nearest possible time without
   * clamping.
   *
   * @param {function()} fn The function to execute.
   */
  var defer = function(fn) {
    var trigger = !deferred.length;
    deferred.push(fn);
    if (trigger) send();
  };

  if (hasWindow && !window.__modDefFn) {
    if (hasDefineProperty) {
      Object.defineProperty(window, '__modDefFn', {value: defer});
    } else {
      window.__modDefFn = defer;
    }
  }

  /**
   * Export public interface
   */
  module.exports = defer;

})();

},{}],52:[function(require,module,exports){
/**
 * @module spotify-eventemitter
 */
'use strict';

/**
 * @private
 */
var _defer = require('spotify-deferred');

/**
 * The event handlers.
 *
 * @typedef {Array.<function>}
 * @private
 */
var EventHandlers;

/**
 * Represents an Event.
 *
 * **NOTE**: The Event class is an internal class: you cannot instantiate it
 * directly. Instead, you should use the provided
 * {@link module:spotify-eventemitter.createEvent} function.
 *
 * @constructor
 * @param {string} type The type name of the event object.
 * @param {Object} props An object that will be added as properties of the
 *     event object.
 * @see {@link module:spotify-eventemitter.createEvent}
 */
function Event(type, props) {
  /**
   * The type of the event.
   *
   * @type {string}
   */
  this.type = type;

  /**
   * A flag for whether preventDefault was called.
   *
   * @type {boolean}
   * @private
   */
  this._prevented = false;

  /**
   * A flag for whether stopPropagation was called
   *
   * @type {boolean}
   * @private
   */
  this._stopped = false;

  /**
   * A flag for whether stopImmediatePropagation was called.
   *
   * @type {boolean}
   * @private
   */
  this._immediateStopped = false;

  if (props) {
    for (var key in props) {
      if (key == 'type') {
        continue;
      }
      this[key] = props[key];
    }
  }
}

/**
 * Prevents the default operation for the event.
 */
Event.prototype.preventDefault = function() {
  this._prevented = true;
};

/**
 * Returns whether preventDefault was called on the event.
 *
 * @return {boolean} True if preventDefault was called, false otherwise.
 */
Event.prototype.isDefaultPrevented = function() {
  return this._prevented;
};

/**
 * Stops the propagation of the event.
 */
Event.prototype.stopPropagation = function() {
  this._stopped = true;
};

/**
 * Returns whether stopPropagation was called on the event.
 *
 * @return {boolean} True if stopPropagation was called, false otherwise.
 */
Event.prototype.isPropagationStopped = function() {
  return this._stopped;
};

/**
 * Stops the immediate propagation of the event.
 *
 * Handlers added after any event handler calling this method will not receive
 * the event.
 */
Event.prototype.stopImmediatePropagation = function() {
  this._immediateStopped = true;
};

/**
 * Returns whether stopImmediatePropagation was called on the event.
 *
 * @return {boolean} True if stopImmediatePropagation was called, false
 *     otherwise.
 */
Event.prototype.isImmediatePropagationStopped = function() {
  return this._immediateStopped;
};

/**
 * An EventEmitter is an object that can be listened to for events.
 *
 * Instances of this class are not usually used directly; instead, a class that
 * needs EventEmitter functionality would inherit from the EventEmitter class
 * so that it's instances can use events.
 *
 * @constructor
 * @alias module:spotify-eventemitter
 *
 * @example <caption>Direct usage</caption>
 * var EventEmitter = require('spotify-eventemitter');
 * var emitter = new EventEmitter();
 * emitter.addListener('someEvent', function() {
 *     console.log('someEvent fired!');
 * });
 * emitter.emit('someEvent');
 * @example <caption>Inheritance</caption>
 * var EventEmitter = require('spotify-eventemitter');
 * var inherit = require('spotify-inherit/inherit');
 *
 * function MyClass() {
 *   EventEmitter.call(this);
 * }
 * inherit(MyClass, EventEmitter);
 *
 * var instance = new MyClass();
 * instance.addListener('someEvent', function() {
 *     console.log('someEvent fired!');
 * });
 * instance.emit('someEvent');
 */
function EventEmitter() {
  /**
   * A map of event names to event handlers.
   *
   * @type {Object.<string, module:spotify-eventemitter~EventHandlers>}
   * @private
   */
  this._listenerMap = {};
}

/**
 * Creates a new Event object.
 *
 * @param {string} type The type name of the event.
 * @param {Object=} opt_params An object containing properties for the new event
 *     object.
 * @return {module:spotify-eventemitter~Event} The new event object.
 */
EventEmitter.createEvent = function(type, opt_params) {
  return new Event(type, opt_params);
};

/**
 * Adds an event listener to the emitter.
 *
 * This method is idempotent: calling it multiple times using the same type
 * and listener arguments will only set the listener once. This behaviour is
 * done to prevent accidental additions of the same event listener.
 *
 * @param {string} type The type of event to listen to.
 * @param {function} listener A function to be called when the emitter fires
 *     the event specified in the type.
 * @return {module:spotify-eventemitter} The event emitter.
 */
EventEmitter.prototype.addListener = function(type, listener) {
  var _listenerMap = this._listenerMap || (this._listenerMap = {});
  var listeners = _listenerMap[type] || (_listenerMap[type] = []);
  if (listeners.indexOf(listener) != -1) {
    // Handler already added, return quickly.
    return this;
  }
  listeners.push(listener);
  return this;
};

/**
 * Adds multiple event listeners to the emitter.
 *
 * @param {Object.<string, function>} eventListeners An object, the keys of
 *     which correspond to the name of events to listen to, and the value of
 *     each of these keys should be a function that would be added as the
 *     listener for that event.
 * @return {module:spotify-eventemitter} The event emitter.
 */
EventEmitter.prototype.addListeners = function(eventListeners) {
  for (var type in eventListeners) {
    this.addListener(type, eventListeners[type]);
  }
  return this;
};

/**
 * Adds a "once" event listener to the emitter, which will be removed right
 * after it has been fired.
 *
 * In order to achieve the "once" behaviour, the listener argument passed to
 * this method is wrapped in a function, which is then returned by the method.
 *
 * Because of this wrapping, this method is not idempotent: calling it multiple
 * times with the same type and listener arguments will result to multiple
 * event listeners attached.
 *
 * @param {string} type The type of event to listen to.
 * @param {function} listener A function to be called when the emitter fires
 *     the event specified in the type and then automatically removed.
 * @return {function} The function used to wrap the listener function argument.
 *     This function can be used as an argument to removeEvent.
 */
EventEmitter.prototype.addOnceListener = function(type, listener) {
  var wrapper = function() {
    this.removeListener(type, wrapper);
    return listener.apply(this, arguments);
  };
  this.addListener(type, wrapper);
  return wrapper;
};

/**
 * Removes an event listener from the emitter.
 *
 * @param {string} type The type of event to remove.
 * @param {function} listener The listener function to remove. This must be a
 *     function that was added previously using addEvent.
 * @return {module:spotify-eventemitter} The event emitter.
 */
EventEmitter.prototype.removeListener = function(type, listener) {
  var _listenerMap = this._listenerMap;
  var listeners = _listenerMap && _listenerMap[type];
  if (!listeners) {
    return this;
  }
  var index = listeners.indexOf(listener);
  if (index == -1) {
    return this;
  }
  listeners.splice(index, 1);
  if (!listeners.length) {
    _listenerMap[type] = null;
  }
  return this;
};

/**
 * Removes all event listeners from the emitter for a particular type.
 *
 * @param {string} type The event type to remove.
 * @return {module:spotify-eventemitter} The event emitter.
 */
EventEmitter.prototype.removeAllListeners = function(type) {
  var _listenerMap = this._listenerMap;
  if (!_listenerMap) {
    return this;
  }
  _listenerMap[type] = null;
  return this;
};

/**
 * Removes multiple event listeners from the emitter.
 *
 * @param {Object.<string, function>} eventListeners An object, the keys of
 *     which correspond to the name of events to listen to, and the value of
 *     each of these keys should be a function that would be added as the
 *     listener for that event.
 * @return {module:spotify-eventemitter} The event emitter.
 */
EventEmitter.prototype.removeListeners = function(eventListeners) {
  for (var type in eventListeners) {
    this.removeListener(type, eventListeners[type]);
  }
  return this;
};

/**
 * Creates and emits an event on the emitter.
 *
 * This method invokes all the added event listeners of the `type` provided in
 * the order they were added, passing in a new Event object created using the
 * provided `type` and `opt_params` arguments.
 *
 * This method emits events asynchronously: the listeners are not called until
 * the next run loop.
 *
 * @param {string} type The type name of the event to emit.
 * @param {Object=} opt_params An object containing parameters for the Event
 *     object.
 * @return {module:spotify-eventemitter~Event} The Event object that was
 *     created.
 */
EventEmitter.prototype.emit = function(type, opt_params) {
  var event = new Event(type, opt_params);
  _defer(function() {
    this.emitEventSync(event);
  }.bind(this));
  return event;
};

/**
 * Emits an event on the emitter.
 *
 * This method invokes all the added event listeners of the `type` of the 
 * `event` provided in the order they were added, passing in the `event` as an
 * argument.
 *
 * This method emits events asynchronously: the listeners are not called until
 * the next run loop.
 *
 * @param {module:spotify-eventemitter~Event} event The Event object.
 * @return {module:spotify-eventemitter~Event} The Event object that was passed.
 */
EventEmitter.prototype.emitEvent = function(event) {
  _defer(function() {
    this.emitEventSync(event);
  }.bind(this));
  return event;
};

/**
 * Creates and synchronously emits an event on the emitter.
 *
 * This method invokes all the added event listeners of the `type` provided in
 * the order they were added, passing in a new Event object created using the
 * provided `type` and `opt_params` arguments.
 *
 * @param {string} type The type name of event to emit.
 * @param {Object=} opt_params An object containing parameters for the event
 *     object.
 * @return {module:spotify-eventemitter~Event} The Event object that was
 *     created.
 */
EventEmitter.prototype.emitSync = function(type, opt_params) {
  var event = new Event(type, opt_params);
  this.emitEventSync(event);
  return event;
};

/**
 * Synchronously emits an event on the emitter.
 *
 * This method invokes all the added event listeners of the `type` of the
 * `event` provided in the order they were added, passing in the `event` as an
 * argument.
 *
 * @param {module:spotify-eventemitter~Event} event The Event object.
 * @return {module:spotify-eventemitter~Event} The Event object that was passed.
 */
EventEmitter.prototype.emitEventSync = function(event) {
  var type = event.type;
  var _listenerMap = this._listenerMap;
  var listeners = _listenerMap && _listenerMap[type];
  if (!listeners || !listeners.length) {
    return event;
  }
  listeners = listeners.slice(0);
  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i].call(this, event);
    if (event.isImmediatePropagationStopped()) {
      break;
    }
  }
  return event;
};

// DEPRECATED METHODS:

/**
 * Adds an event listener to the emitter.
 *
 * **NOTE**: This method has been deprecated in favor of
 * {@link module:spotify-eventemitter#addListener}.
 *
 * This method is idempotent: calling it multiple times using the same type
 * and listener arguments will only set the listener once. This behaviour is
 * done to prevent accidental additions of the same event listener.
 *
 * @deprecated since v2.0.0.
 * @param {string} type The type of event to listen to.
 * @param {function} listener A function to be called when the emitter fires
 *     the event specified in the type.
 * @return {module:spotify-eventemitter} The event emitter.
 * @see {@link module:spotify-eventemitter#addListener}
 */
EventEmitter.prototype.addEvent = function(type, listener) {
  return this.addListener(type, listener);
};

/**
 * Adds multiple event listeners to the emitter.
 *
 * **NOTE**: This method has been deprecated in favor of
 * {@link module:spotify-eventemitter#addListeners}.
 *
 * @deprecated since v2.0.0.
 * @param {Object.<string, function>} eventListeners An object, the keys of
 *     which correspond to the name of events to listen to, and the value of
 *     each of these keys should be a function that would be added as the
 *     listener for that event.
 * @return {module:spotify-eventemitter} The event emitter.
 * @see {@link module:spotify-eventemitter#addListeners}
 */
EventEmitter.prototype.addEvents = function(eventListeners) {
  return this.addListeners(eventListeners);
};

/**
 * Adds a "once" event listener to the emitter, which will be removed right
 * after it has been fired.
 *
 * **NOTE**: This method has been deprecated in favor of
 * {@link module:spotify-eventemitter#addOnceListener}.
 *
 * In order to achieve the "once" behaviour, the listener argument passed to
 * this method is wrapped in a function, which is then returned by the method.
 *
 * Because of this wrapping, this method is not idempotent: calling it multiple
 * times with the same type and listener arguments will result to multiple
 * event listeners attached.
 *
 * @deprecated since v2.0.0.
 * @param {string} type The type of event to listen to.
 * @param {function} listener A function to be called when the emitter fires
 *     the event specified in the type and then automatically removed.
 * @return {function} The function used to wrap the listener function argument.
 *     This function can be used as an argument to removeEvent.
 * @see {@link module:spotify-eventemitter#addOnceListener}
 */
EventEmitter.prototype.addOnceEvent = function(type, listener) {
  return this.addOnceListener(type, listener);
};

/**
 * Removes an event listener from the emitter.
 *
 * **NOTE**: This method has been deprecated in favor of
 * {@link module:spotify-eventemitter#removeListener}.
 *
 * @deprecated since v2.0.0.
 * @param {string} type The type of event to remove.
 * @param {function} listener The listener function to remove. This must be a
 *     function that was added previously using addEvent.
 * @return {module:spotify-eventemitter} The event emitter.
 * @see {@link module:spotify-eventemitter#removeListener}
 */
EventEmitter.prototype.removeEvent = function(type, listener) {
  return this.removeListener(type, listener);
};

/**
 * Removes multiple event listeners from the emitter.
 *
 * **NOTE**: This method has been deprecated in favor of
 * {@link module:spotify-eventemitter#removeListeners}.
 *
 * @deprecated since v2.0.0.
 * @param {Object.<string, function>} events An object, the keys of which
 *     correspond to the name of events to remove, and the value of each of
 *     these keys should be a function that would be removed as a listener.
 * @return {module:spotify-eventemitter} The event emitter.
 * @see {@link module:spotify-eventemitter#removeListeners}
 */
EventEmitter.prototype.removeEvents = function(eventListeners) {
  return this.removeListeners(eventListeners);
};

/**
 * Fires an event on the emitter, optionally passing arguments to the listeners.
 *
 * **NOTE**: This method has been deprecated in favor of
 * {@link module:spotify-eventemitter#emit}.
 *
 * This method fire events asynchronously: the listeners are not called until
 * the next run loop. A third boolean parameter can be passed to change this
 * behaviour.
 *
 * @deprecated since v2.0.0.
 * @param {string} type The type of event to fire.
 * @param {Array.<*>=} opt_args A set of objects that would be passed to the
 *     event listeners as arguments.
 * @param {boolean=} opt_priority Passing true will fire the event synchronously.
 * @return {module:spotify-eventemitter} The event emitter.
 * @see {@link module:spotify-eventemitter#emit}
 */
EventEmitter.prototype.fireEvent = function(type, opt_args, opt_priority) {
  if (opt_priority) {
    this.fireEventSync(type, opt_args);
  } else {
    var self = this;
    _defer(function() { self.fireEventSync(type, opt_args); });
  }
  return this;
};

/**
 * Fires an event on the emitter synchronously, optionally passing arguments to
 * the listeners.
 *
 * **NOTE**: This method has been deprecated in favor of
 * {@link module:spotify-eventemitter#emitSync}.
 *
 * @deprecated since v2.0.0.
 * @param {string} type The type of event to fire.
 * @param {Array.<*>=} opt_args A set of objects that would be passed to the
 *     event listeners as arguments.
 * @return {module:spotify-eventemitter} The event emitter.
 * @see {@link module:spotify-eventemitter#emitSync}
 */
EventEmitter.prototype.fireEventSync = function(type, opt_args) {
  var self = this;
  var events = this._listenerMap && this._listenerMap[type];
  if (!events || !events.length) return this;
  events = events.slice(0);
  var i, l;
  if (!opt_args) {
    for (i = 0, l = events.length; i < l; i++) {
      events[i].call(self);
    }
  } else {
    if (!Array.isArray(opt_args)) {
      opt_args = [opt_args];
    }
    for (i = 0, l = events.length; i < l; i++) {
      events[i].apply(self, opt_args);
    }
  }
  return this;
};

/**
 * Adds an event listener to the emitter.
 *
 * **NOTE**: This method has been deprecated in favor of
 * {@link module:spotify-eventemitter#addListener}.
 *
 * This method is idempotent: calling it multiple times using the same type
 * and listener arguments will only set the listener once. This behaviour is
 * done to prevent accidental additions of the same event listener.
 *
 * @deprecated since v2.0.0.
 * @param {string} type The type of event to listen to.
 * @param {function} listener A function to be called when the emitter fires
 *     the event specified in the type.
 * @return {module:spotify-eventemitter} The event emitter.
 * @see {@link module:spotify-eventemitter#addListener}
 */
EventEmitter.prototype.on = function(type, listener) {
  return this.addEvent(type, listener);
};

/**
 * Adds a "once" event listener to the emitter, which will be removed right
 * after it has been fired.
 *
 * **NOTE**: This method has been deprecated in favor of
 * {@link module:spotify-eventemitter#addOnceListener}.
 *
 * In order to achieve the "once" behaviour, the listener argument passed to
 * this method is wrapped in a function, which is then returned by the method.
 *
 * Because of this wrapping, this method is not idempotent: calling it multiple
 * times with the same type and listener arguments will result to multiple
 * event listeners attached.
 *
 * @deprecated since v2.0.0.
 * @param {string} type The type of event to listen to.
 * @param {function} listener A function to be called when the emitter fires
 *     the event specified in the type and then automatically removed.
 * @return {function} The function used to wrap the listener function argument.
 *     This function can be used as an argument to removeEvent.
 * @see {@link module:spotify-eventemitter#addOnceListener}
 */
EventEmitter.prototype.once = function(type, listener) {
  return this.addOnceEvent(type, listener);
};

/**
 * Removes an event listener or all event listeners from the emitter.
 *
 * **NOTE**: This method has been deprecated in favor of
 * {@link module:spotify-eventemitter#removeListener}.
 *
 * @deprecated since v2.0.0.
 * @param {string} type The type of event to remove.
 * @param {function=} opt_listener The listener function to remove. This must be
 *     a function that was added previously using addEvent. If this parameter is
 *     not given, all event listeners of the corresponding `type` argument will
 *     be removed.
 * @return {module:spotify-eventemitter} The event emitter.
 * @see {@link module:spotify-eventemitter#removeListener}
 * @see {@link module:spotify-eventemitter#removeListeners}
 */
EventEmitter.prototype.off = function(type, opt_listener) {
  if (typeof opt_listener === 'function') {
    return this.removeEvent(type, opt_listener);
  }
  // if no listener set, remove all the listeners from the event
  this._listenerMap[type] = null;
  return this;
};

/**
 * Exporting
 */
module.exports = EventEmitter;

},{"spotify-deferred":51}],53:[function(require,module,exports){
'use strict';

/**
 * Function to add properties to an object
 * @param {Object} obj The input object
 * @param {Object} args The objects which are going to be injected
 * @return {Object} The extended object
 */
var extend = function(obj, args) {
  var source;

  for (var i = 1; i < arguments.length; i++) {
    source = arguments[i];
    if (source) {
      for (var prop in source) {
        if (source.hasOwnProperty(prop)) {
          obj[prop] = source[prop];
        }
      }
    }
  }
  return obj;
};


/**
 * Export public interface
 */
module.exports = extend;

},{}],54:[function(require,module,exports){
'use strict';

module.exports = {
  inherit: require('./inherit'),
  extend: require('./extend')
};

},{"./extend":53,"./inherit":55}],55:[function(require,module,exports){
'use strict';

/**
 * Makes a class inherit from a superclass' prototype indirectly.
 *
 * @param {Spotify.ClassLike} Sub The class that will inherit.
 * @param {Spotify.ClassLike} Super The class to inherit from.
 */
var inherit = function(Sub, Super) {
  var superProto = Super.prototype;
  function Superclass() {}
  Superclass.prototype = Sub._super = superProto;
  Superclass.prototype.constructor = Super;
  Sub.prototype = new Superclass();
};


/**
 * Export public interface
 */
module.exports = inherit;

},{}],56:[function(require,module,exports){
/**
 * @file
 * Unified window messaging facility.
 *
 * This module exports two functions to the Spotify
 * namespace which allows other subsystems to handle
 * particular types of messages sent through the native
 * window.postMessage method.
 *
 * @see Spotify.addMessageHandler
 * @see Spotify.removeMessageHandler
 */
'use strict';

var POST_ROUTER_ID = 'post-router-msg-' + new Date().getTime();

var hasStructuredClone = false;

var setImmediate = setImmediate ? setImmediate : setTimeout;

var CURRENT_WINDOW_ORIGIN = undefined;

if (typeof window !== 'undefined') {
  CURRENT_WINDOW_ORIGIN = (window.location.origin ||
      window.location.protocol + '//' + window.location.hostname);

  // Hacky solution to make it work for the webplayer.
  if (!window.__forceNoStructuredClone) {
    // Check if the platform has support for structured cloning.
    //
    // In platforms where this is supported, sending a postMessage with an
    // object that contains a function will throw an error, as it is not
    // cloneable.
    try {
      window.postMessage({
        toString: function() {
          return "clone-test";
        }
      }, CURRENT_WINDOW_ORIGIN);
      hasStructuredClone = false;
    } catch(e) {
      hasStructuredClone = true;
    }
  }
}

/**
 * Storage for message handlers.
 *
 * @type {Object.<string, Spotify.Shell.MessageHandler>}
 * @private
 */
var handlers = {};


/**
 * Variable to check if the window is already listening to postMessage events
 *
 * @type {bool}
 * @private
 */
var isListening = false;


function handleImmediateMessage(data) {
  var handler = handlers[data.type];
  if (!handler) return;
  handler.fn.call(this, data);
}


/**
 * Main event handler for the window message event.
 *
 * @param {Event} event The message event object.
 * @private
 */
function handlePostMessage(event) {
  var data = event.data;
  if (!hasStructuredClone) {
    if (typeof data == 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {
        return;
      }
    } else {
      // We only expect strings.
      return;
    }
  }
  if (event.origin == CURRENT_WINDOW_ORIGIN) {
    data = data[POST_ROUTER_ID];
    if (!data) {
      // Not our data, return immediately.
      return;
    }
  }
  var handler = handlers[data.type];
  if (!handler || handler.origin != '*' && event.origin !== handler.origin) {
    return;
  }
  handler.fn.call(this, data, event);
}

/**
 * Attaches the handlePostMessage function to PostMessage events
 *
 * @private
 */
var startListening = function() {
  if (window.attachEvent && !window.addEventListener) {
    // IE8 and Below
    window.attachEvent('onmessage', handlePostMessage);
  } else if (window.attachEvent && window.addEventListener) {
    // IE9
    window.addEventListener('message', handlePostMessage, false);
  } else if (window.addEventListener) {
    // Everyone else
    window.addEventListener('message', handlePostMessage, false);
  }
};


/**
 * Adds a message handler for a particular message type.
 *
 * The message handler function will be invoked when the window receives
 * a message marked as a particular type, receiving an argument. The
 * argument will be the data payload of the event decoded from JSON.
 *
 * @param {string} type The type of the message to handle.
 * @param {function} fn The handler function.
 * @param {string} origin needed
 * @throws {Error} Thrown if the message type being handled already has
 *     a handler function.
 */
var addMessageHandler = function(type, fn, origin) {
  if (typeof window !== 'undefined' && !isListening) {
    startListening();
    isListening = true;
  }

  if (!origin) {
    origin = CURRENT_WINDOW_ORIGIN;
  }

  if (handlers[type]) {
    throw new Error('Rehandling of message "' + type + '" not allowed.');
  }
  handlers[type] = {
    fn: fn,
    origin: origin
  };
  return;
};


/**
 * Removes a message handler for a particular message type.
 *
 * @param {string} type The type of the message to remove.
 * @param {Spotify.Shell.MessageHandler} fn The handler function.
 * @return {boolean} True if the handler function was succesfully removed.
 */
var removeMessageHandler = function(type, fn) {
  if (handlers[type] && (!fn || handlers[type].fn === fn)) {
    handlers[type] = null;
    return true;
  }
  return false;
};


/**
 * Sends a message to the event handler
 *
 * @param {string} type The type of the message to remove.
 * @param {Object} data JSON object to pass to the handler
 */
var sendMessage = function(type, data, destWindow, origin) {
  data = data || {};
  data.type = type;

  if (typeof window === 'undefined') {
    return setImmediate(handleImmediateMessage.bind(null, data));
  }

  destWindow = destWindow || window;

  if (!origin) {
    origin = CURRENT_WINDOW_ORIGIN;
  }

  destWindow.postMessage(JSON.stringify(data), origin);
};

var sendLocalMessage = function(type, data) {
  data = data || {};
  data.type = type;

  if (typeof window === 'undefined') {
    return setImmediate(handleImmediateMessage.bind(null, data));
  }

  // Wrap the data in a custom object to quickly identify the message.
  var wrapper = {};
  wrapper[POST_ROUTER_ID] = data;

  window.postMessage(hasStructuredClone ?
                     wrapper :
                     JSON.stringify(wrapper), CURRENT_WINDOW_ORIGIN);
};


/**
 * Export public interface
 */
module.exports = {
  addMessageHandler: addMessageHandler,
  removeMessageHandler: removeMessageHandler,
  sendMessage: sendMessage,
  sendLocalMessage: sendLocalMessage,
  WINDOW_ORIGIN: CURRENT_WINDOW_ORIGIN
};

},{}]},{},[1]);
