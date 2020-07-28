atualizaStatus();

$('.escolheLogo').click(function() {
    var id = $(this).attr('id');
    $("#logoTopo").attr("src", "img/logos/habbid-"+id+".png");
    $("#logoEsc").css("background-image", "url(img/logos/habbid-"+id+".png)");
    document.cookie = "logo="+id+"; expires=Thu, 18 Dec 2021 12:00:00 UTC";
    $('#modalLogo').modal('toggle');
});

$('.escolheFundo').click(function() {
    var id = $(this).attr('id');
    $("body").css("background", "url(img/fundos/"+id+".gif)");
    $("#fundoEsc").css("background-image", "url(img/fundos/"+id+".gif)");
    document.cookie = "fundo="+id+"; expires=Thu, 18 Dec 2021 12:00:00 UTC";
    $('#modalFundo').modal('toggle');
});

$('.escolheTopo').click(function() {
    var id = $(this).attr('id');

    if(id == 1){
      $("#nuvens").css("background", "url(img/nuvens.png), url(img/fundo.png)");
    }else{
      $("#nuvens").css("background", "url(img/topos/"+id+".gif)");
    }

    $("#topoEsc").css("background-image", "url(img/fundos/"+id+".gif)");
    document.cookie = "topo="+id+"; expires=Thu, 18 Dec 2021 12:00:00 UTC";
    $('#modalTopo').modal('toggle');
});


var st = document.getElementById("stream");

function play(){
  $("#pause").css("display", "block");
  $("#play").css("display", "none");
}

function pause(){
  $("#play").css("display", "block");
  $("#pause").css("display", "none");
}
//PLAY
$('#play').click(function() {
  st.src = "https://sonic.dedicado.stream:7022/;type=mp3?t=" + Date.now();
  st.play();
  play();
});

//PAUSE
$('#pause').click(function() {
  st.pause();
  pause();
});

//MAIS
$('#mais').click(function() {
  if(st.volume < 1){
    st.volume = st.volume+0.1;
  }
});

//MENOS
$('#menos').click(function() {
  if(st.volume > 0.1){
    st.volume = st.volume-0.1;
  }
});

window.setInterval(function() {
  	if (!st.paused) {
      play();
  	}else{
      pause();
    }
}, 1000);

window.setInterval(function() {
	if (st.played.length !== 1) {
		st.play();
		console.log("...");
	}
}, 3000);

setInterval(function() {
    if (st.played.length !== 1 || st.ended === true) {
        st.src = '';
        st.src = "https://sonic.dedicado.stream:7022/;type=mp3?t=" + Date.now();
        console.log(".");
        st.load();
		atualizaStatus();
    }
}, 4000);

window.setInterval(function() {
	atualizaStatus();
}, 15000);

function atualizaStatus(){
  $.getJSON("https://habbid.com.br/api/dados_radio.json", function(result){
        if(result.locutor){
          $("#locutorHD").html(result.locutor);
        }

        if(result.programa){
          $("#programaHD").html(result.programa);
        }
        if(parseInt(result.ouvintes)){
          $("#ouvintesHD").html('<img src="img/icon-boneco.png"> '+result.ouvintes);
        }

        $("#avatarloc").html('<img src="https://www.habbo.com.br/habbo-imaging/avatarimage?img_format=gif&user='+result.locutor+'&direction=2&head_direction=3&gesture=sml&size=b">');
      });
}
