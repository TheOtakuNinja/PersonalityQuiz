let submitButton = document.getElementById("submit-button")
submitButton.addEventListener("click", processResults)

let resetButton = document.getElementById("reset-button")
resetButton.addEventListener("click", resetQuiz)

let resultArea = document.getElementById("result")


//process results
function processResults() {
  let personalityResult = getPersonality();
  console.log(personalityResult)

  resultArea.innerHTML = "You are " + personalityResult

  let picture2 = document.getElementById("picture")
  if (personalityResult == "Nanami Chiaki from 'Danganronpa Trigger Happy Havoc' " ){
picture2.src="https://files.gamebanana.com/img/ico/sprays/57e5e032eeb8a.png"
} else if (personalityResult == "Shiroe from 'Log horizon' "){
picture2.src="https://i.pinimg.com/originals/b4/cb/9a/b4cb9a678eac1c2b9dd32445edd76315.jpg"
} else if (personalityResult == "Rimuru Tempest (Satoru Mikami) from 'Tensei Shitara Slime Datta Ken' and/or 'That Time I got Reincarnated as a Slime' "){
picture2.src="https://i.imgur.com/h86Fsne.jpg"
} else if (personalityResult == "Ainz Ooal Gown (Suzuki Satoru) 'from Overlord' "){
picture2.src="https://i.imgur.com/3XHgqvt.png"
} else if (personalityResult == "Kaneki Ken from 'Tokyo Ghoul' ") {
picture2.src="https://m.media-amazon.com/images/M/MV5BMWJlNzdlNDctNDE0Zi00MDQ0LWFhY2YtMDcwMjQyNjYxODNjXkEyXkFqcGdeQXVyNzQxMzEwMTY@._V1_.jpg"
} else if (personalityResult == "Tanaka from 'Tanaka-kun wa Itsumo Kedaruge' and/or 'Tanaka-kun is Always Listless' "){
picture2.src="http://www.otakuusamagazine.com/Uploads/Public/Images/Anime/Tanaka-kun/tanakakun0.jpg"
} else if (personalityResult == "Hei (BK-201) 'from Darker Than Black' "){
picture2.src="https://steamuserimages-a.akamaihd.net/ugc/107357514777154090/A053E1673791414763178ED134A6E0A6C34AFDFD/"
} else if (personalityResult == "Tatsuya Shiba from 'Mahouka Koukou no Rettousei Wiki' and/or 'The Irregular Magic High School' "){
picture2.src="https://4.bp.blogspot.com/-oK0L7-fFTKU/VQtruwB39yI/AAAAAAAAAVw/j_rF8yhKmKE/s1600/Tatsuya%2B-%2BThumbnails.png"
} else if (personalityResult == "Eren Yeager from 'Shingeki no Kyojin' and/or 'Attack on Titan' "){
picture2.src="http://pm1.narvii.com/5984/7e6f7a293365ba5ad75075c994e928c5c219efa9_00.jpg"
} else {
picture2.src="https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTchUnAj40aHvUUo7k4TwoaCpZO27NRghcEK2tizD.Eyd2wDhRaYXz0OiGUw4EmWznInThMyIISqSkVRyxQgUIdGKsQQ2ykjwRk144gwcL0Y1.tslxhfnlXWvumypxP8dGsISaldsFK8MJekAJIDuKuEGER8EcbN8hrroMSRiv09JM-&h=1080&w=1920&format=jpg"
}
  function getPersonality() {
    let animeChoice = document.querySelector('input[name="anime"]:checked');
    // console.log(toppingChoice.id)
    let mangaChoice = document.querySelector('input[name="manga"]:checked');
    // console.log(weaponChoice.id)
    let genreChoice = document.querySelector('input[name="genre"]:checked');
    // console.log(colorChoice.id)
    let totalPoints = 0;
    totalPoints = totalPoints + animePoints[animeChoice.id]
    console.log(animePoints[animeChoice.id])
    totalPoints = totalPoints + mangaPoints[mangaChoice.id]
    console.log(mangaPoints[mangaChoice.id])
    totalPoints = totalPoints + genrePoints[genreChoice.id]
    console.log(genrePoints[genreChoice.id])
    console.log(totalPoints)

    animeChoice.checked = false;
    mangaChoice.checked = false;
    genreChoice.checked = false;

    if (totalPoints == 0 ) {
      return "Naruto Uzumaki from 'Naruto' TRASH NARUTO SOOOOOOOO BAD"
    } else if (totalPoints == 1 ) {
      return "Eren Yeager from 'Shingeki no Kyojin' and/or 'Attack on Titan' "
    } else if (totalPoints == 2 ) {
      return "Tatsuya Shiba from 'Mahouka Koukou no Rettousei Wiki' and/or 'The Irregular Magic High School' "
    } else if (totalPoints == 3 ) {
      return "Hei (BK-201) 'from Darker Than Black' "
    } else if (totalPoints == 4 ) {
      return "Tanaka from 'Tanaka-kun wa Itsumo Kedaruge' and/or 'Tanaka-kun is Always Listless' "
    } else if (totalPoints == 5 ) {
      return "Kaneki Ken from 'Tokyo Ghoul' "
    } else if (totalPoints == 6 ) {
      return "Ainz Ooal Gown (Suzuki Satoru) 'from Overlord' "
    } else if (totalPoints == 7 ) {
      return "Rimuru Tempest (Satoru Mikami) from 'Tensei Shitara Slime Datta Ken' and/or 'That Time I got Reincarnated as a Slime' "
    } else if (totalPoints == 8 ) {
      return "Shiroe from 'Log horizon' "
    } else {
      return "Nanami Chiaki from 'Danganronpa Trigger Happy Havoc' "
    }
  }
}

//resets display on page
function resetQuiz() {
  resultArea.innerHTML = ""

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
