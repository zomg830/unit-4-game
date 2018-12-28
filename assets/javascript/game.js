$(document).ready(function(){

    //Individual hero objects
    var boba = {
        name: "BobaFett",
        fullName: "Boba Fett",
        HP: 100,
        AP: 10,
        image: '<img src="assets/images/boba-fett.jpg" class="image">'
    };

    var ig88 = {
        name: "IG88",
        fullName: "IG-88",
        HP: 200,
        AP: 20,
        image: '<img src="assets/images/ig88.jpg" class="image">'
    };

    var kylo = {
        name: "KyloRen",
        fullName: "Kylo Ren",
        HP: 300,
        AP: 30,
        image: '<img src="assets/images/kylo-ren.jpg" class="image">'
    };

    var luke = {
        name: "LukeSkywalker",
        fullName: "Luke Skywalker",
        HP: 400,
        AP: 40,
        image: '<img src="assets/images/luke-skywalker.jpg" class="image">'
    };

    //charObjs array to store heroes 
    var charObjs = [boba, ig88, kylo, luke];

    var characters = [];
    var $yourChar;
    var $currentEnemy;
    var yourHP;
    var yourAP;
    var enemyHP;
    var enemyAP;
    var combAP = 0;
    var enemyChosen = false;

    function initialize(){
        initializeChars(charObjs);
        chooseChar();
        chooseOpponent();
    };

    //Function to Initialize Characters
    function initializeChars(arr){
        if (arr.length === 4) {
            for (var i = 0; i < arr.length; i++){
                var $char = $('<div id='+arr[i].name+'>');
                $char.append('<div class="characterName">'+arr[i].fullName);
                $char.append(arr[i].image);
				$char.append('<div class="characterHealth">HP: '+arr[i].HP);
				$char.attr('data_nickName', arr[i].name);
				$char.attr("data_name", arr[i].fullName);
				$char.attr('data_attack', arr[i].AP);
				$char.attr('data_health', arr[i].HP);
                $char.attr('class', 'character col-md-3');
                
                characters.push(arr[i].name);

				$('#heroes').append($char);
            }
        }
 
        else if (arr.length <= 3){
            $('#enemies').empty();
            characters = [];
            $('#enemies').append('<div class="title">Remaining Enemies</div>');
            for (var i = 0; i < arr.length; i++){
                var $char = $('<div id='+arr[i].name+'>');
                $char.append('<div class="characterName">'+arr[i].fullName);
                $char.append(arr[i].image);
                $char.append('<div class="characterHealth">'+arr[i].HP);
                $char.attr('data_nickName', arr[i].name);
                $char.attr("data_name", arr[i].fullName);
                $char.attr('data_attack', arr[i].AP);
                $char.attr('data_health', arr[i].HP);
                $char.attr('class', 'enemy');

                characters.push(arr[i].name);

                $('#enemies').append($char);
            }

            if (!$currentEnemy) {
                chooseOpponent();
            }
        }
    };
    //End of character initialize function

    function chooseChar(){
        $('.character').on('click', function() {
			$('#heroes').empty();
			$('#heroes').append('<div class="title">Your Character</div>')

			$yourChar = $(this);
			$yourChar.addClass('yourCharacter');
			$yourChar.removeClass('col-md-3 character');

			yourHP = parseInt($yourChar.attr('data_health'));
			yourAP = parseInt($yourChar.attr('data_attack'));

			$('#heroes').append($yourChar);

			$('#enemies').append('<div class="title">Pick Your Enemy</div>');

            var indexRemove = characters.indexOf($yourChar.attr('data_nickName'));
            console.log ("chooseChar indexRemove: " + indexRemove);
            charObjs.splice(indexRemove, 1);
            console.log ("Character Objects: " + charObjs);

			initializeChars(charObjs);

		});
    };

    function chooseOpponent(){
        $('.enemy').on('click', function() {
            $('#heroes').empty();
            $('#currentEnemy').empty();
            $('#fightBtn').empty();

            $currentEnemy = $(this);

            $currentEnemy.addClass('currentEnemy');
            $currentEnemy.removeClass('enemy');

            $('#yourHero').append($yourChar);

            $('#fightBtn').append('<button id="fight">Click to Attack!</button>')

            $('#currentEnemy').append($currentEnemy);
            enemyChosen = true;


            var indexRemove = characters.indexOf($currentEnemy.attr('data_nickName'));
            console.log("indexRemove: " + indexRemove);
            charObjs.splice(indexRemove, 1);

            initializeChars(charObjs);

            enemyAP = 0;
            console.log(enemyAP);

            enemyAP = parseInt($currentEnemy.attr('data_attack'));
            enemyHP = parseInt($currentEnemy.attr('data_health'));

            console.log('IS THERE OPPONENT: ' + enemyChosen)

            $('#fight').on('click', function() {
                if (enemyChosen) {
                    battle();
                } else {
                    alert('YOU NEED TO PICK AN OPPONENT');
                }
            });
        });
    };

    function battle() {
			combAP += yourAP;
			enemyHP = enemyHP - combAP;
			yourHP = yourHP - enemyAP;
            $('.currentEnemy > .characterHealth').html(enemyHP);
			if (enemyHP <= 0 && yourHP > 0) {
				enemyChosen = false;
				yourHP = yourHP - enemyAP;
				$('#currentEnemy').empty();
				if (characters.length === 0) {
					alert("You Won!");
					resetGame();
				} else {
					chooseOpponent();
				};
			}

			else if (yourHP <= 0) {
				alert("You have been defeated");
				resetGame();
			};
    };
    
    function resetGame() {
		$('.row').empty();
		$('.reset').append('<button class="restartBtn btn btn-lg btn-warning">Restart Game</button>');
			$('.restartBtn').on('click', function() {
				location.reload();
			});
	};

    initialize();

});