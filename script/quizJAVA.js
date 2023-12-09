
        let winLyd = document.getElementById("riktigLyd");
        let wrongLyd = document.getElementById("feilLyd");

        let navnElement = document.getElementById("navn");
        let navn;

        let fyllInnElement = document.getElementById("fyllInn");
        let brukerElement = document.getElementById("bruker");
        
        

        let sporsmalElement = document.getElementById("sporsmal");
        let sporsmal2Element = document.getElementById("sporsmal2");
        let sporsmal3Element = document.getElementById("sporsmal3");
        let sporsmal4Element = document.getElementById("sporsmal4");
        let sporsmal5Element = document.getElementById("sporsmal5");
        let sporsmal6Element = document.getElementById("sporsmal6");
        let sporsmal7Element = document.getElementById("sporsmal7");
        let sporsmal8Element = document.getElementById("sporsmal8");
        let sporsmal9Element = document.getElementById("sporsmal9");
        let sporsmal10Element = document.getElementById("sporsmal10");


        let scoreElements = document.getElementById("navn")

        let sekunderElement = [
            document.getElementById("tid1"),
            document.getElementById("tid2"),
            document.getElementById("tid3"),
            document.getElementById("tid4"),
            document.getElementById("tid5"),
            document.getElementById("tid6"),
            document.getElementById("tid7"),
            document.getElementById("tid8"),
            document.getElementById("tid9"),
            document.getElementById("tid10")
        ];

        let currentSekundIndex = 0;

        let sekunder = 0;
        let poengsum = 0;
        let maksTid = 999;
        let tid = 0;
        let poengTid;
        


        function startTid() {
            nullstillTid();
            tid = setInterval(oppdaterTid, 10);
        }

        function stoppTid() {
            clearInterval(tid);
            poengTid = maksTid - sekunder;
            poengsum += poengTid;

            sekunderElement[currentSekundIndex].style.display = "block";

            scoreElements.innerHTML = navn + '<br>' + poengsum+ " Poeng";
            sekunderElement[currentSekundIndex].innerHTML = poengTid + " Poeng";

            currentSekundIndex++;
            
        }

        function feilTid(){
            clearInterval(tid);

            sekunderElement[currentSekundIndex].style.display = "block";

            scoreElements.innerHTML = navn + '<br>' + poengsum+ " Poeng";
            sekunderElement[currentSekundIndex].innerHTML = 0 + " Poeng";



            currentSekundIndex++;
        }
        
        function tidUte(){
            clearInterval(tid);
            sekunderElement[currentSekundIndex].style.display = "none"; 
        }

        function oppdaterTid() {
            sekunder += 1;
            sekunderElement[currentSekundIndex].innerHTML = "Tid igjen" + '<br>' + Math.trunc((maksTid - sekunder)/100);
            if (sekunder + 10 >= maksTid){
                tidUte();
            }   
            
        }

        function nullstillTid() {
            clearInterval(tid);
            sekunder = 0;
            sekunderElement.innerHTML = "0 sekunder.";
        }
        

        function fjernInnhold(){

            startTid();
            
            navn = brukerElement.value;

            if (!navn) {
              alert("Vennligst skriv inn brukernavnet ditt.");
              return;
          }
            
            
            fyllInnElement.style.display = "none";
            
           
            navnElement.style.display = 'flex';
            navnElement.innerHTML = navn + '<br>' + poengsum+ " Poeng"; //br = linjeskift

            
            
            sporsmalElement.style.display = "block";

            let nesteKnapp = document.getElementById("neste1")
            nesteKnapp.classList.add("gjettet");

            sekunderElement[currentSekundIndex].display = "block";


        }

        

        
        let alleKnappene = document.querySelectorAll(".answer-button");
    
        function svar(button) {
            
            
            
            let riktig = "Paris";
            let brukerSvar = button.textContent;
            let riktigSvar = document.getElementById("riktig1");

            let svarElement = document.getElementById("resultat");
            let nesteKnapp = document.getElementById("neste1")

            

            
            

            if (brukerSvar === riktig){
                stoppTid();
                button.classList.add('riktig');
                winLyd.play();
                
            } else {
                feilTid();
                button.classList.add("feil");
                wrongLyd.play();
                riktigSvar.classList.add("riktig")
            }


            alleKnappene.forEach(knapp => {
                knapp.classList.add("deaktiver");
            });

            nesteKnapp.classList.remove("gjettet");

            save();
        }


        function svar2(button){


            let riktig = "London";
            let brukerSvar = button.textContent;
            let riktigSvar = document.getElementById("riktig2");

            let svarElement = document.getElementById("resultat2");
            let nesteKnapp = document.getElementById("neste2")



            if (brukerSvar === riktig){
                stoppTid();
                button.classList.add('riktig');
                winLyd.play();
                
            } else {
                feilTid();
                button.classList.add("feil");
                wrongLyd.play();
                riktigSvar.classList.add("riktig")
            }

            alleKnappene.forEach(knapp => {
                knapp.classList.add("deaktiver");
            });

            nesteKnapp.classList.remove("gjettet");

            save();
        }

        function svar3(button){


            let riktig = "Berlin";
            let brukerSvar = button.textContent;
            let riktigSvar = document.getElementById("riktig3");

            let svarElement = document.getElementById("resultat3");
            let nesteKnapp = document.getElementById("neste3")


            if (brukerSvar === riktig){
                stoppTid();
                button.classList.add('riktig');
                winLyd.play();
                
            } else {
                feilTid();
                button.classList.add("feil");
                wrongLyd.play();
                riktigSvar.classList.add("riktig")
            }

            alleKnappene.forEach(knapp => {
                knapp.classList.add("deaktiver");
            });

            nesteKnapp.classList.remove("gjettet");

            save();
        }

        function svar4(button){


            let riktig = "Hanoi";
            let brukerSvar = button.textContent;
            let riktigSvar = document.getElementById("riktig4");

            let svarElement = document.getElementById("resultat4");
            let nesteKnapp = document.getElementById("neste4")

 

            if (brukerSvar === riktig){
                stoppTid();
                button.classList.add('riktig');
                winLyd.play();
                
            } else {
                feilTid();
                button.classList.add("feil");
                wrongLyd.play();
                riktigSvar.classList.add("riktig")
            }

            alleKnappene.forEach(knapp => {
                knapp.classList.add("deaktiver");
            });

            nesteKnapp.classList.remove("gjettet");

            save();
        }


        function svar5(button){


            let riktig = "Colombo";
            let brukerSvar = button.textContent;
            let riktigSvar = document.getElementById("riktig5");

            let svarElement = document.getElementById("resultat5");
            let nesteKnapp = document.getElementById("neste5")



            if (brukerSvar === riktig){
                stoppTid();
                button.classList.add('riktig');
                winLyd.play();
                
            } else {
                feilTid();
                button.classList.add("feil");
                wrongLyd.play();
                riktigSvar.classList.add("riktig")
            }

            alleKnappene.forEach(knapp => {
                knapp.classList.add("deaktiver");
            });

            nesteKnapp.classList.remove("gjettet");

            save();
        }

        function svar6(button){


            let riktig = "Mogadishu";
            let brukerSvar = button.textContent;
            let riktigSvar = document.getElementById("riktig6");

            let svarElement = document.getElementById("resultat6");
            let nesteKnapp = document.getElementById("neste6")

      

            if (brukerSvar === riktig){
                stoppTid();
                button.classList.add('riktig');
                winLyd.play();
                
            } else {
                feilTid();
                button.classList.add("feil");
                wrongLyd.play();
                riktigSvar.classList.add("riktig")
            }

            alleKnappene.forEach(knapp => {
                knapp.classList.add("deaktiver");
            });

            nesteKnapp.classList.remove("gjettet");

            save();
        }

        function svar7(button){

            let riktig = "La Paz";
            let brukerSvar = button.textContent;
            let riktigSvar = document.getElementById("riktig7");

            let svarElement = document.getElementById("resultat7");
            let nesteKnapp = document.getElementById("neste7")



            if (brukerSvar === riktig){
                stoppTid();
                button.classList.add('riktig');
                winLyd.play();
                
            } else {
                feilTid();
                button.classList.add("feil");
                wrongLyd.play();
                riktigSvar.classList.add("riktig")
            }

            alleKnappene.forEach(knapp => {
                knapp.classList.add("deaktiver");
            });

            nesteKnapp.classList.remove("gjettet");

            save();
        }

        function svar8(button){


            let riktig = "Washington DC";
            let brukerSvar = button.textContent;
            let riktigSvar = document.getElementById("riktig8");

            let svarElement = document.getElementById("resultat8");
            let nesteKnapp = document.getElementById("neste8")

    

            if (brukerSvar === riktig){
                stoppTid();
                button.classList.add('riktig');
                winLyd.play();
                
            } else {
                feilTid();
                button.classList.add("feil");
                wrongLyd.play();
                riktigSvar.classList.add("riktig")
            }

            alleKnappene.forEach(knapp => {
                knapp.classList.add("deaktiver");
            });

            nesteKnapp.classList.remove("gjettet");

            save();
        }

        function svar9(button){

 

            let riktig = "Ottowa";
            let brukerSvar = button.textContent;
            let riktigSvar = document.getElementById("riktig9");

            let svarElement = document.getElementById("resultat9");
            let nesteKnapp = document.getElementById("neste9")

       

            if (brukerSvar === riktig){
                stoppTid();
                button.classList.add('riktig');
                winLyd.play();
                
            } else {
                feilTid();
                button.classList.add("feil");
                wrongLyd.play();
                riktigSvar.classList.add("riktig")
            }

            alleKnappene.forEach(knapp => {
                knapp.classList.add("deaktiver");
            });

            nesteKnapp.classList.remove("gjettet");

            save();
        }
        
        function svar10(button){



            let riktig = "Ouagadougou";
            let brukerSvar = button.textContent;
            let riktigSvar = document.getElementById("riktig10");

            let svarElement = document.getElementById("resultat10");
            let nesteKnapp = document.getElementById("neste10")

          

            if (brukerSvar === riktig){
                stoppTid();
                button.classList.add('riktig');
                winLyd.play();
                
            } else {
                feilTid();
                button.classList.add("feil");
                wrongLyd.play();
                riktigSvar.classList.add("riktig")
            }

            alleKnappene.forEach(knapp => {
                knapp.classList.add("deaktiver");
            });

            nesteKnapp.classList.remove("gjettet");

            save();            
        }

        

        function sporsmal2(){

            startTid();

            sporsmalElement.style.display = "none";
            sporsmal2Element.style.display = "block";
            
            

            alleKnappene.forEach(knapp => {
                knapp.classList.remove("deaktiver");
            });

            let nesteKnapp = document.getElementById("neste2")
            nesteKnapp.classList.add('gjettet');




        }

        function sporsmal3(){

            startTid();

            sporsmal2Element.style.display = "none";
            sporsmal3Element.style.display = "block";
            
            

            alleKnappene.forEach(knapp => {
                knapp.classList.remove("deaktiver");
            });

            let nesteKnapp = document.getElementById("neste3")
            nesteKnapp.classList.add('gjettet');



        }

        function sporsmal4(){

            startTid();

            sporsmal3Element.style.display = "none";
            sporsmal4Element.style.display = "block";
            
           

            alleKnappene.forEach(knapp => {
                knapp.classList.remove("deaktiver");
            });

            let nesteKnapp = document.getElementById("neste4")
            nesteKnapp.classList.add('gjettet');



        }

        function sporsmal5(){

            startTid();

            sporsmal4Element.style.display = "none";
            sporsmal5Element.style.display = "block";
            
           

            alleKnappene.forEach(knapp => {
                knapp.classList.remove("deaktiver");
            });

            let nesteKnapp = document.getElementById("neste5")
            nesteKnapp.classList.add('gjettet');



        }

        function sporsmal6(){

            startTid();

            sporsmal5Element.style.display = "none";
            sporsmal6Element.style.display = "block";
            
          

            alleKnappene.forEach(knapp => {
                knapp.classList.remove("deaktiver");
            });

            let nesteKnapp = document.getElementById("neste6")
            nesteKnapp.classList.add('gjettet');



        }

        function sporsmal7(){

            startTid();

            sporsmal6Element.style.display = "none";
            sporsmal7Element.style.display = "block";
            

            alleKnappene.forEach(knapp => {
                knapp.classList.remove("deaktiver");
            });

            let nesteKnapp = document.getElementById("neste7")
            nesteKnapp.classList.add('gjettet');



        }

        function sporsmal8(){

            startTid();

            sporsmal7Element.style.display = "none";
            sporsmal8Element.style.display = "block";
            
       

            alleKnappene.forEach(knapp => {
                knapp.classList.remove("deaktiver");
            });

            let nesteKnapp = document.getElementById("neste8")
            nesteKnapp.classList.add('gjettet');



        }

        function sporsmal9(){
            
            startTid();

            sporsmal8Element.style.display = "none";
            sporsmal9Element.style.display = "block";
            
           

            alleKnappene.forEach(knapp => {
                knapp.classList.remove("deaktiver");
            });

            let nesteKnapp = document.getElementById("neste9")
            nesteKnapp.classList.add('gjettet');



        }

        function sporsmal10(){
            
            startTid();

            sporsmal9Element.style.display = "none";
            sporsmal10Element.style.display = "block";
            
            

            alleKnappene.forEach(knapp => {
                knapp.classList.remove("deaktiver");
            });

            let nesteKnapp = document.getElementById("neste10")
            nesteKnapp.classList.add('gjettet');



        }

        function tilfeldig(){

            show();

            navn = brukerElement.value;

            if (!navn) {
              tilfeldigNavn();
            }
            
            
            fyllInnElement.style.display = "none";

            poengsum = Math.floor(Math.random() * 9999) + 1;

            ferdigElement.style.display = "flex";
            totalPoengElement.innerHTML = navn + "<br>" + poengsum+ " Poeng";

            save();
        }

        function tilfeldigNavnQuiz(){

            show();

            navn = velgNavn + velgTall;

            if (!navn) {
              tilfeldigNavn();
            }
            
            
            fyllInnElement.style.display = "none";


            navnElement.style.display = 'flex';
            navnElement.innerHTML = navn + '<br>' + poengsum+ " Poeng"; //br = linjeskift

            
            
            sporsmalElement.style.display = "block";

            let nesteKnapp = document.getElementById("neste1")
            nesteKnapp.classList.add("gjettet");

            sekunderElement[currentSekundIndex].display = "block";

            startTid();

        }

        let ranNavn1 = ["Lars", "Ingvill" , "Mathias", "Saga" , "Mahdiya" , "Linnea" , "Silas" , "Felix" , "Kristian", "Oliver"]
        let velgNavn = ranNavn1[Math.floor(Math.random() * ranNavn1.length)];
        let velgTall = Math.floor(Math.random() * 99);

        function tilfeldigNavn(){
            
        navn = velgNavn + velgTall;

        }

        function reset(){
            alert("Er du sikker?");
            localStorage.clear();
        }


        let highscore;

        function ferdig(){
            sporsmal10Element.style.display = "none";
            navnElement.style.display = "none";

            ferdigElement.style.display = "flex";
            totalPoengElement.innerHTML = navn + "<br>" + poengsum+ " Poeng";

            save();

            
        }

        let ferdigElement = document.getElementById("scoreTable");
        let totalPoengElement = document.getElementById("poengsum");



        function save(){

            const HighscoreArray = poengsum;
            localStorage.setItem(navn, HighscoreArray);


            show();

        }

        show();

        function show(){
            const HighscoreData = localStorage.getItem(navn);

            
            const top = Object.entries(localStorage);

            function sammenlignFunksjon(a, b) {

            const verdiA = parseInt(a[1]); // Konverter til tall hvis det er nødvendig
            const verdiB = parseInt(b[1]); // Konverter til tall hvis det er nødvendig

            if (verdiA < verdiB) {
                return 1;
            } else if (verdiA > verdiB) {
                return -1;
            } else {
                return 0;
            }
            }

            top.sort(sammenlignFunksjon);
            console.log(top);

            let topFem = top.slice(0, 5);
            let topFemDiv = document.getElementById("scores");

            // Bruk map for å konvertere hvert element til en HTML-streng
            let htmlArray = topFem.map(function(item) {
            return "<div class='navnScore'>" + item[0] + ": " + item[1] + "</div>";
            });

            // Bruk join for å kombinere HTML-strengene
            let htmlString = htmlArray.join("");

            // Sett den genererte HTML-strengen som innholdet til div-elementet
            topFemDiv.innerHTML = htmlString;
            }

            

        
        

        
