let submitButton = document.getElementById("submit-button")
submitButton.addEventListener("click", processResults)

let resetButton = document.getElementById("reset-button")
resetButton.addEventListener("click", resetQuiz)

let resultArea = document.getElementById("result")

$('#reset-button').click(function() {
    location.reload();
});


//process results
function processResults() {
  let personalityResult = getPersonality();
  console.log(personalityResult)

  resultArea.innerHTML = "You are " + personalityResult

  let picture2 = document.getElementById("picture")
  if (personalityResult == "Nanami Chiaki from 'Danganronpa Trigger Happy Havoc' " ){
picture2.src="https://gifimage.net/wp-content/uploads/2017/10/chiaki-nanami-gif-3.gif"
} else if (personalityResult == "Shiroe from 'Log horizon' "){
picture2.src="https://media1.tenor.com/images/01f3172376ed6d13f00fe6c796e6e0a9/tenor.gif?itemid=5486686"
} else if (personalityResult == "Rimuru Tempest (Satoru Mikami) from 'Tensei Shitara Slime Datta Ken' and/or 'That Time I got Reincarnated as a Slime' "){
picture2.src="https://i.pinimg.com/originals/75/a3/5b/75a35be279174cca6c8a768aad099ad5.gif"
} else if (personalityResult == "Ainz Ooal Gown (Suzuki Satoru) 'from Overlord' "){
picture2.src="https://static.comicvine.com/uploads/original/11123/111237136/5025486-ainz.gif"
} else if (personalityResult == "Kaneki Ken from 'Tokyo Ghoul' ") {
picture2.src="https://media1.tenor.com/images/0351932815870044910445c945c74e21/tenor.gif?itemid=11878169"
} else if (personalityResult == "Tanaka from 'Tanaka-kun wa Itsumo Kedaruge' and/or 'Tanaka-kun is Always Listless' "){
picture2.src="http://68.media.tumblr.com/f98f46671935f2c546902dcd770e689b/tumblr_orzu8xmHwu1wskyx5o1_500.gif"
} else if (personalityResult == "Hei (BK-201) 'from Darker Than Black' "){
picture2.src="https://66.media.tumblr.com/b2fcb510645cd04f146a122d4ab52a35/tumblr_myyl5vAwMT1qcexlbo2_500.gif"
} else if (personalityResult == "Tatsuya Shiba from 'Mahouka Koukou no Rettousei Wiki' and/or 'The Irregular Magic High School' "){
picture2.src="http://38.media.tumblr.com/409bc5c7539d7d6445ecdf5b00231cf8/tumblr_nemi83hdfb1tsajh1o1_500.gif"
} else if (personalityResult == "Rem 'Re:zero' "){
picture2.src="https://thumbs.gfycat.com/GleefulCooperativeAdmiralbutterfly-size_restricted.gif"
}else if (personalityResult == "Chika fujiwara from 'love is war' and/or 'kaguya-sama wa kokurasetai' "){
picture2.src="https://media1.tenor.com/images/b924e35dc0eba4e34318e86481db69eb/tenor.gif?itemid=13410604"
}else if (personalityResult == "Zero Two from 'DARLING in the FRANXX' "){
picture2.src="https://thumbs.gfycat.com/PlayfulEachGrouper-max-1mb.gif"
}else if (personalityResult == "Eren Yeager from 'Shingeki no Kyojin' and/or 'Attack on Titan' "){
picture2.src="https://media1.tenor.com/images/0759ff0dd5c33a7ccefe929ba3f18cc2/tenor.gif?itemid=8524166"
} else {
picture2.src="https://media1.tenor.com/images/1cf020bf50d58c3f07ecab092e1f2911/tenor.gif?itemid=10467096"
}
  function getPersonality() {
    let animeChoice = document.querySelector('input[name="anime"]:checked');
    // console.log(toppingChoice.id)
    let mangaChoice = document.querySelector('input[name="manga"]:checked');
    // console.log(weaponChoice.id)
    let genreChoice = document.querySelector('input[name="genre"]:checked');
    // console.log(colorChoice.id)
    let weaponChoice = document.querySelector('input[name="weapon"]:checked');




    let totalPoints = 0;
    totalPoints = totalPoints + animePoints[animeChoice.id]
    console.log(animePoints[animeChoice.id])
    totalPoints = totalPoints + mangaPoints[mangaChoice.id]
    console.log(mangaPoints[mangaChoice.id])
    totalPoints = totalPoints + genrePoints[genreChoice.id]
    console.log(genrePoints[genreChoice.id])
    totalPoints = totalPoints + weaponPoints[weaponChoice.id]
    console.log(weaponPoints[weaponChoice.id])
    console.log(totalPoints)




    animeChoice.checked = false;
    mangaChoice.checked = false;
    genreChoice.checked = false;
    weaponChoice.checked = false;

    if (totalPoints == 0 ) {
      return "Naruto Uzumaki from 'Naruto' TRASH NARUTO SOOOOOOOO BAD"
    } else if (totalPoints == 1 ) {
      return "Eren Yeager from 'Shingeki no Kyojin' and/or 'Attack on Titan' "
    } else if (totalPoints == 2 ) {
      return "Tatsuya Shiba from 'Mahouka Koukou no Rettousei Wiki' and/or 'The Irregular Magic High School' "
    } else if (totalPoints == 3 ) {
      return "Rem 'Re:zero' "
    } else if (totalPoints == 4 ) {
      return "Hei (BK-201) 'from Darker Than Black' "
    } else if (totalPoints == 5 ) {
      return "Tanaka from 'Tanaka-kun wa Itsumo Kedaruge' and/or 'Tanaka-kun is Always Listless' "
    } else if (totalPoints == 6 ){
      return "Chika fujiwara from 'love is war' and/or 'kaguya-sama wa kokurasetai' "
    } else if (totalPoints == 7 ) {
      return "Kaneki Ken from 'Tokyo Ghoul' "
    } else if (totalPoints == 8 ) {
      return "Ainz Ooal Gown (Suzuki Satoru) 'from Overlord' "
    } else if (totalPoints == 9 ){
      return "Zero Two from 'DARLING in the FRANXX' "
    } else if (totalPoints == 10 ){
      return "Rimuru Tempest (Satoru Mikami) from 'Tensei Shitara Slime Datta Ken' and/or 'That Time I got Reincarnated as a Slime' "
    } else if (totalPoints == 11 ){
      return "Shiroe from 'Log horizon' "
    } else {
      return "Nanami Chiaki from 'Danganronpa Trigger Happy Havoc' "
    }
  }
}

//resets display on page
function resetQuiz() {
  resultArea.innerHTML = "";
}

//point system
let animePoints = {
  q1c1: 0,
  q1c2: 1,
  q1c3: 2,
  q1c4: 3
}

let mangaPoints = {
  q2c1: 0,
  q2c2: 1,
  q2c3: 2,
  q2c4: 3,

}

let genrePoints = {
  q3c1: 0,
  q3c2: 1,
  q3c3: 2,
  q3c4: 3
}

let weaponPoints = {
  q4c1: 0,
  q4c2: 1,
  q4c3: 2,
  q4c4: 3
}


// $("#picture").hover(enter, leave);
// function enter() {
//   this.src = "https://i.imgur.com/WyMHuyL.gif";
// }
// function leave() {
//   this.src = "https://i.pinimg.com/originals/bb/01/36/bb013692bb7ec1cdd2b804746f3631a3.png";
// }
