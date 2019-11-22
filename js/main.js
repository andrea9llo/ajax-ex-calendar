// stampare gennaio 2018 (E SOLO QUELLO) con caratterizzazione delle relative festività,
// recuperate interrogando l’API

// funzione per generare i giorni del mese
function giorniMese(mese) { //1


  $.ajax({


    url:"https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=" + (mese-1),
    method: "GET",
    success: function(data){
      // ripulisco l'html
      $(".giorni").html("");
      $(".mesi").html("");
      // nome del mese
      var nomeMese = moment("2018-" + mese,"YYYY-M").format('MMMM YYYY');
      $(".mesi").append('<h3>'+ nomeMese +'</h3>');

      var numeroGiorni = moment("2018-" + mese, "YYYY-M").daysInMonth();
      // console.log(numeroGiorni);
      // ciclo su tutti i giorni
      for (var i = 1; i <= numeroGiorni; i++) {
        // console.log(numeroGiorni);
        //Strutturo la data simile alla chiamata ajax
        var currentDate = moment('2018-'+mese+'-'+i, 'YYYY-M-D').format('YYYY-MM-DD');

        var currentDay =  moment(currentDate).format("DD dddd");
        // console.log(currentDay);
        $(".giorni").append('<li data-date="'+ currentDate +'">'+ currentDay +'</li>');
      };

      var dayParty = data.response;
      // console.log(dayParty);
      for (var j = 0; j < dayParty.length; j++) {
        // console.log(dayParty[i]);
        var oggetti = dayParty[j];

        var giornoFesta = oggetti.date;
        // console.log(giornoFesta);
        var nomeFesta = oggetti.name;

        // usa l'att selezionato per andare a inserire le festività nei giorni dove ci sono
        var dataSelezionata = $('li[data-date="'+ giornoFesta +'"]')
        // console.log(dataSelezionata);
        dataSelezionata.addClass("red").append(" " + nomeFesta);


      }

    }


  })


}


$(document).ready(function(){

  giorniMese(1);


  var num = 1;

  $(".right").click(function(){

    if (num === 12 ) {
      alert("mese non disponibile")
    } else {
      num++;
      giorniMese(num);
    }
  })


  $(".left").click(function(){

    if (num === 1 ) {
      alert("mese non disponibile")
    } else {
      num--;
      giorniMese(num);
    }
  })





})
