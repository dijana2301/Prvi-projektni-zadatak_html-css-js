var pitanja = [
    {
        tekst: "Izrazom Conditio sine qua non ističe se da je nešto:",
        odgovor1: "Nejasan uslov",
        odgovor2: "Neophodan uslov",
        odgovor3: "Pogrešan zaključak",
        odgovor4:"Ispravan zaključak",
        tacanOdgovor: "Neophodan uslov"
    },

    {
        tekst: "Od čega je SMS skraćenica?",
        odgovor1: "Safe Message Sending",
        odgovor2: "Secret Message Stuff",
        odgovor3: "Short Message Service",
        odgovor4:"Secret Messaging Saver",
        tacanOdgovor: "Short Message Service"
    },
    {
        tekst: "Finale NBA lige 2016, 2016 i 2017 igrala su dva kluba:",
        odgovor1: "Čikago (Bools) i Boston (Celtics)",
        odgovor2: "Golden Stejt (Warriors) i Boston (Celtics)",
        odgovor3: "Los Anđeles (Lakers) i Klivlend (Cavaliers)",
        odgovor4:"Toronto (Raptors) i San Antonio (Spurs)",
        tacanOdgovor: "Los Anđeles (Lakers) i Klivlend (Cavaliers)"
    },
    {
        tekst: "Kada neko igra fudbal žinga (ginga) stilom, on je verovatno iz:",
        odgovor1: "Italije",
        odgovor2: "Meksika",
        odgovor3: "Albanije",
        odgovor4:"Brazila",
        tacanOdgovor: "Brazila"
    },
    {
        tekst: "Koji je glavni grad Australije?",
        odgovor1: "Sydney",
        odgovor2: "Melbourne",
        odgovor3: "Canberra",
        odgovor4:"Brisbane",
        tacanOdgovor: "Canberra"
    },
    {
        tekst: "Šta su ligature?",
        odgovor1: "Ukrasne minijature na sakralnim objektima",
        odgovor2: "Grafički znak dobijen spajanjem dva ili tri slova",
        odgovor3: "Delovi u liturgiji koji se ponavljaju",
        odgovor4:"Oznake na turističkim mapama",
        tacanOdgovor: "Grafički znak dobijen spajanjem dva ili tri slova"
    },
    {
        tekst: "Koji od kraljeva u kartama za igru nema brkove?",
        odgovor1: "Pik",
        odgovor2: "Herc",
        odgovor3: "Karo",
        odgovor4:"Svi imaju brkove",
        tacanOdgovor: "Herc"
    },
    {
        tekst: "Koje godine je preminuo Fidel Kastro?",
        odgovor1: "2010",
        odgovor2: "2011",
        odgovor3: "2016",
        odgovor4:"2017",
        tacanOdgovor: "2016"
    },
    {
        tekst: "Ako znamo da neku osobinu prenose 2 gena, a da se njeno određeno ispoljavanje nasleđuje recesivno, kolika je verovatnoća da će potomak imati upravo takvo ispoljavanje te osobine?",
        odgovor1: "0%",
        odgovor2: "25%",
        odgovor3: "50%",
        odgovor4:"75%",
        tacanOdgovor: "25%"
    },
    {
        tekst: "Sredstva za odbijanje insekata zovu se?",
        odgovor1: "Insekticidi",
        odgovor2: "Insektofobi",
        odgovor3: "Repelanti",
        odgovor4:"Iritanti",
        tacanOdgovor: "Repelanti"
    },
    
];

function prikaziPitanja() {
    var div = document.getElementById("pitanja");
    var form = "<form action=\"javascript:obradiOdgovore()\">";

    for (i = 0; i < pitanja.length; i++) {
        form += "<p style=\"color:darkblue\">" + (i + 1) + ". " + pitanja[i].tekst + "</p>";

        form += "<input type=\"radio\" name=\"odgovor" + i + "\" value=\""
            + pitanja[i].odgovor1 + "\"/>" + pitanja[i].odgovor1 + "<br/>";

        form += "<input type=\"radio\" name=\"odgovor" + i + "\" value=\""
            + pitanja[i].odgovor2 + "\"/>" + pitanja[i].odgovor2 + "<br/>";

        form += "<input type=\"radio\" name=\"odgovor" + i + "\" value=\""
            + pitanja[i].odgovor3 + "\"/>" + pitanja[i].odgovor3 + "<br/>";

        form += "<input type=\"radio\" name=\"odgovor" + i + "\" value=\""
            + pitanja[i].odgovor4 + "\"/>" + pitanja[i].odgovor4 + "<br/><hr>";


    }
  
    form += "<input type=\"submit\" value=\"Obradi odgovore\"/></form>";

    div.innerHTML = form;
}

function obradiOdgovore() {
    var form = document.forms[0];
    var brojTacnihOdgovora = 0;
    var poruka = "";

    for (i = 0; i < pitanja.length; i++) {
        if (form['odgovor' + i].value == pitanja[i].tacanOdgovor) {
            brojTacnihOdgovora++;
        } else {
            poruka += "<p style=\"color:red\">Tacan odgovor na "
                + (i + 1) + " pitanje je " + pitanja[i].tacanOdgovor;
        }
    }

    poruka += "<p>Broj tacnih odgovora: "
        + brojTacnihOdgovora + "</p>";

    document.getElementById("rezultat").innerHTML = poruka;
}
