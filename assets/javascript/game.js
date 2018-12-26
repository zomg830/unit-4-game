    //Initialize global variables - attacker is your chosen character, defender is NPC
    var atk;
    var def;
    var atkchar;
    var attackerHP;
    var attackerAP;
    var attackerCAP;
    var defendChar;
    var defendHP;
    var defendAP;
    var defendCAP;
    var name;
    var yourChar;
    var yourDefend;
    var myChar = "";
    var myDef = "";

    //Global array for heroes
    var chars = {
        BobaFett: {
            name: "BobaFett",
            pic: 'assets/images/boba-fett.jpg',
            HP: 100,
            AP: 10,
            counterAP: 10,
            fullName: "Boba Fett"
        },

        IG88: {
            name: "IG88",
            pic: 'assets/images/ig88.jpg',
            HP: 100,
            AP: 10,
            counterAP: 10,
            fullName: "IG-88"
        },

        KyloRen: {
            name: "KyloRen",
            pic: 'assets/images/kylo-ren.jpg',
            HP: 100,
            AP: 10,
            counterAP: 10,
            fullName: "Kylo Ren"
        },

        LukeSkywalker: {
            name: "LukeSkywalker",
            pic: 'assets/images/luke-skywalker.jpg',
            HP: 100,
            AP: 10,
            counterAP: 10,
            fullName: "Luke Skywalker"
        },
    };

//Beginning of JS game
$(document).ready(function(){

    //Create on-click function for the charPics in HTML file
    //Move selected hero to 
    $(".charPic").on("click",function(){
        if (myChar === ""){
        myChar = $(this);
        yourChar = myChar.closest("div").prop("id");
        $(this).next().appendTo("#charSelect");
        $(this).prependTo("#charSelect");
        console.log("myChar" + myChar);
        console.log("yourChar: "+ yourChar);
        }
        if (yourChar === chars.BobaFett.name){
            attackerHP = chars.BobaFett.HP;
            attackerAP = chars.BobaFett.AP;
            attackerCAP = chars.BobaFett.counterAP;
            atk = chars.BobaFett;
            console.log("Attacker HP: "+ attackerHP);
            console.log("Attacker AP: "+ attackerAP);
            console.log("Attacker Counter AP: " + attackerCAP);
        }
        else if (yourChar === chars.IG88.name){
            attackerHP = chars.IG88.HP;
            attackerAP = chars.IG88.AP;
            attackerCAP = chars.IG88.counterAP;
            atk = chars.IG88;
            console.log("Attacker HP: "+ attackerHP);
            console.log("Attacker AP: "+ attackerAP);
            console.log("Attacker Counter AP: " + attackerCAP);
        }
        else if (yourChar === chars.KyloRen.name){
            attackerHP = chars.KyloRen.HP;
            attackerAP = chars.KyloRen.AP;
            attackerCAP = chars.KyloRen.counterAP;
            atk = chars.KyloRen;
            console.log("Attacker HP: "+ attackerHP);
            console.log("Attacker AP: "+ attackerAP);
            console.log("Attacker Counter AP: " + attackerCAP);
        }
        else if(yourChar === chars.LukeSkywalker.name){
            attackerHP = chars.LukeSkywalker.HP;
            attackerAP = chars.LukeSkywalker.AP;
            attackerCAP = chars.LukeSkywalker.counterAP;
            atk = chars.LukeSkywalker;
            console.log("Attacker HP: "+ attackerHP);
            console.log("Attacker AP: "+ attackerAP);
            console.log("Attacker Counter AP: " + attackerCAP);
        }

        //Move all characters that are not my character into enemies array
        $.each(chars,function(index,value){
            console.log("index: " + index);
            console.log("value: " + value);
            $("#"+index).appendTo("#enemies");
        });
        $("#"+yourChar).remove();
    });

    //Upon clicking an enemy portrait
    $(".enemy").on("click","img",function(){
        $(this.closest("div")).appendTo("#defender");

    });


});