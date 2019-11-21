// stampare gennaio 2018 (E SOLO QUELLO) con caratterizzazione delle relative festività,
// recuperate interrogando l’API

$(document).ready(function(){






  $.ajax({


    url:"https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
    method: "GET",
    success: function(data){
      var numeroGiorni = moment("2018-01", "YYYY-MM").daysInMonth();
      // console.log(numeroGiorni);
      // ciclo su tutti i giorni
      for (var i = 1; i <= numeroGiorni; i++) {
        // console.log(numeroGiorni);
        //Strutturo la data simile alla chiamata ajax
        var currentDate = moment('2018-01-'+i, 'YYYY-MM-D').format('YYYY-MM-DD');

        var currentDay =  moment(currentDate).format("DD MMMM");
        // console.log(currentDay);
        $(".giorni").append('<li data-date="'+ currentDate +'">'+ currentDay +'</li>')
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




})
