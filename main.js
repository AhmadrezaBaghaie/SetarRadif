let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_folder = document.querySelector(".track-folder");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
  {
    "name": "1.Ramkeli",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Abuata/1.Ramkeli.mp3",
    "folder": "Abuata"
  },
  {
    "name": "2.Daramad",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Abuata/2.Daramad.mp3",
    "folder": "Abuata"
  },
  {
    "name": "3.Sayakhi",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Abuata/3.Sayakhi.mp3",
    "folder": "Abuata"
  },
  {
    "name": "4.Hejaz",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Abuata/4.Hejaz.mp3",
    "folder": "Abuata"
  },
  {
    "name": "5.Basteh-negar",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Abuata/5.Basteh-negar.mp3",
    "folder": "Abuata"
  },
  {
    "name": "6.Chahar-pareh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Abuata/6.Chahar-pareh.mp3",
    "folder": "Abuata"
  },
  {
    "name": "7.Gabri",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Abuata/7.Gabri.mp3",
    "folder": "Abuata"
  },
  {
    "name": "1.Daramad",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Afshari/1.Daramad.mp3",
    "folder": "Afshari"
  },
  {
    "name": "2.Basteh-negar",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Afshari/2.Basteh-negar.mp3",
    "folder": "Afshari"
  },
  {
    "name": "3.Araq",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Afshari/3.Araq.mp3",
    "folder": "Afshari"
  },
  {
    "name": "4.Qarai",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Afshari/4.Qarai.mp3",
    "folder": "Afshari"
  },
  {
    "name": "1.Daramad",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Esfahan/1.Daramad.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "2.Jameh daran",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Esfahan/2.Jameh daran.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "3.Bayat-e-Jameh va Forud",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Esfahan/3.Bayat-e-Jameh va Forud.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "4.Naghmeh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Esfahan/4.Naghmeh.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "5.Suz-o-godaz",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Esfahan/5.Suz-o-godaz.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "1.Daramad-e-avval",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Kord/1.Daramad-e-avval.mp3",
    "folder": "Bayat-e-Kord"
  },
  {
    "name": "2.Daramad-e-dovvom",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Kord/2.Daramad-e-dovvom.mp3",
    "folder": "Bayat-e-Kord"
  },
  {
    "name": "3.Basteh-negar",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Kord/3.Basteh-negar.mp3",
    "folder": "Bayat-e-Kord"
  },
  {
    "name": "4.Haji Hasani",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Kord/4.Haji Hasani.mp3",
    "folder": "Bayat-e-Kord"
  },
  {
    "name": "5.Daramad-e-sevvom",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Kord/5.Daramad-e-sevvom.mp3",
    "folder": "Bayat-e-Kord"
  },
  {
    "name": "6.Daramad-e-chaharom",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Kord/6.Daramad-e-chaharom.mp3",
    "folder": "Bayat-e-Kord"
  },
  {
    "name": "1.Daramad-e-avval",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Tork/1.Daramad-e-avval.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "2.Dogah",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Tork/2.Dogah.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "3.Daramad-e-dovvom",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Tork/3.Daramad-e-dovvom.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "4.Daramad-e-sevvom",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Tork/4.Daramad-e-sevvom.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "5.Haji Hasani",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Tork/5.Haji Hasani.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "6.Basteh-negar",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Tork/6.Basteh-negar.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "7.Zanguleh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Tork/7.Zanguleh.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "8.Khosravani",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Tork/8.Khosravani.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "9.Naghmeh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Tork/9.Naghmeh.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "10.Feyli",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Tork/10.Feyli.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "11.Shekasteh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Tork/11.Shekasteh.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "12.Mehrabi",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Tork/12.Mehrabi.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "13.Jameh-daran",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Tork/13.Jameh-daran.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "14.Mehdi Zarrabi",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Tork/14.Mehdi Zarrabi.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "15.Ruh-ol-arvah",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Tork/15.Ruh-ol-arvah.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "16.Qatar",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Bayat-e-Tork/16.Qatar.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "1.Daramad-e-avval",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/1.Daramad-e-avval.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "2.Daramad-dovvom",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/2.Daramad-dovvom.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "3.Daramad-sevvom",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/3.Daramad-sevvom.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "4.Daramad-e-chaharom",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/4.Daramad-e-chaharom.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "5.Naghmeh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/5.Naghmeh.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "6.Kereshmeh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/6.Kereshmeh.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "7.Kereshmh ba Muyeh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/7.Kereshmh ba Muyeh.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "8.Zang-e-shotor",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/8.Zang-e-shotor.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "9.Zabol",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/9.Zabol.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "10.Basteh-negar",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/10.Basteh-negar.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "11.Muyeh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/11.Muyeh.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "12.Forud",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/12.Forud.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "13.Hesar",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/13.Hesar.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "14.Hesar qesmat-e-dovvom",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/14.Hesar qesmat-e-dovvom.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "15.Hesar qesmat-e-sevvom",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/15.Hesar qesmat-e-sevvom.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "16.Hesar qesmat-e-chaharom",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/16.Hesar qesmat-e-chaharom.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "17.Chahar-mezrab",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/17.Chahar-mezrab.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "18.Pas Hesar",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/18.Pas Hesar.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "19.Muyeh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/19.Muyeh.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "20.Mokhalef",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/20.Mokhalef.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "21.Haji Hasani",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/21.Haji Hasani.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "22.Basteh-negar",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/22.Basteh-negar.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "23.Maghlub",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/23.Maghlub.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "24.Naghmeh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/24.Naghmeh.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "25.Hazin",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/25.Hazin.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "26.Hodi",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/26.Hodi.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "27.Pahlavi",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/27.Pahlavi.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "28.Rajaz",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/28.Rajaz.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "29.Mansuri",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/29.Mansuri.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "30.mansuri qesmat-e-dovvom",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/30.mansuri qesmat-e-dovvom.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "31.mansuri qesmat-e-sevvom",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/31.mansuri qesmat-e-sevvom.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "32.Lezgi",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/32.Lezgi.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "33.Matn va Hashieh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/33.Matn va Hashieh.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "34.Reng-e-Shahr-ashub",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Chahargah/34.Reng-e-Shahr-ashub.mp3",
    "folder": "Chahargah"
  },
  {
    "name": "1.Daramad",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Dashti/1.Daramad.mp3",
    "folder": "Dashti"
  },
  {
    "name": "2.Oj",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Dashti/2.Oj.mp3",
    "folder": "Dashti"
  },
  {
    "name": "3.Bideghani",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Dashti/3.Bideghani.mp3",
    "folder": "Dashti"
  },
  {
    "name": "4.Hajiani",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Dashti/4.Hajiani.mp3",
    "folder": "Dashti"
  },
  {
    "name": "5.Gham-angiz",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Dashti/5.Gham-angiz.mp3",
    "folder": "Dashti"
  },
  {
    "name": "6.Gilaki",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Dashti/6.Gilaki.mp3",
    "folder": "Dashti"
  },
  {
    "name": "1.Chahar-mezrab",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/1.Chahar-mezrab.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "2.Daramad-e-avval",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/2.Daramad-e-avval.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "3.Daramad-e-dovvom(Zang-e-shotor",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/3.Daramad-e-dovvom(Zang-e-shotor.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "4.Mavalian",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/4.Mavalian.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "5.Chakavak",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/5.Chakavak.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "6.Tarz",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/6.Tarz.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "7.Bidad",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/7.Bidad.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "8.Bidad-e-kot",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/8.Bidad-e-kot.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "9.Ney Davud",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/9.Ney Davud.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "10.Bavi ba chahar mezrab",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/10.Bavi ba chahar mezrab.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "11.Suz o Godaz",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/11.Suz o Godaz.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "12.Abol chap",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/12.Abol chap.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "13.Leyli o Majnun",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/13.Leyli o Majnun.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "14.Ravandi",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/14.Ravandi.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "15.Noruz-e-Arab",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/15.Noruz-e-Arab.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "16.Noruz-e-Saba",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/16.Noruz-e-Saba.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "17.Noruz-e-Khara",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/17.Noruz-e-Khara.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "18.Nafir",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/18.Nafir.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "19.Farang ba Shushtari gardan",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/19.Farang ba Shushtari gardan.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "20.Shushtari",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/20.Shushtari.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "21.Jameh-daran",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/21.Jameh-daran.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "22.Raz o niyaz",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/22.Raz o niyaz.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "23.Meygoli",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/23.Meygoli.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "24.Moalef",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/24.Moalef.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "25.Bakhtiyari ba Moalef",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/25.Bakhtiyari ba Moalef.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "26.Ozzal",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/26.Ozzal.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "27.Denasori",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/27.Denasori.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "28.Reng-e-Farah",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Homayoun/28.Reng-e-Farah.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "1.Daramad",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/1.Daramad.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "2.Kereshmeh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/2.Kereshmeh.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "10.Khavaran",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/10.Khavaran.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "11.Tarab-angiz",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/11.Tarab-angiz.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "12.Neyshaburak",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/12.Neyshaburak.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "13.Nasirkhani ya Tusi",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/13.Nasirkhani ya Tusi.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "14.Chahar pareh ya Moradkhani",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/14.Chahar pareh ya Moradkhani.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "15.Feyli",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/15.Feyli.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "16.Mahur-e-saghir",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/16.Mahur-e-saghir.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "17.Azarbayejani",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/17.Azarbayejani.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "18.Hesar-e-Mahur ya Abol",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/18.Hesar-e-Mahur ya Abol.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "19.Zir-afkand",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/19.Zir-afkand.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "20.Neyriz",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/20.Neyriz.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "21.Shekasteh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/21.Shekasteh.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "22.Araq",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/22.Araq.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "23.Nahib",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/23.Nahib.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "24.Mohayyer",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/24.Mohayyer.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "25.Ashur-avand",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/25.Ashur-avand.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "26.Esfehanak",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/26.Esfehanak.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "27.Hazin",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/27.Hazin.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "28.Kereshmeh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/28.Kereshmeh.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "29.Zanguleh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/29.Zanguleh.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "30.Rak-e-Hendi",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/30.Rak-e-Hendi.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "31.Rak-e-Keshmir",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/31.Rak-e-Keshmir.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "32.Rak-e-Abdollah",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/32.Rak-e-Abdollah.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "33.Kereshmeh-ye-Rak",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/33.Kereshmeh-ye-Rak.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "34.Safir-e-Rak",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/34.Safir-e-Rak.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "35.Reng-e-Harbi",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/35.Reng-e-Harbi.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "36.Reng-e-yek chubeh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/36.Reng-e-yek chubeh.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "37.Reng-e-Shalakhu",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/37.Reng-e-Shalakhu.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "38.Saqi-mameh,Sufi-nameh va Koshteh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Mahoor/38.Saqi-mameh,Sufi-nameh va Koshteh.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "1.Chahar-mezrab",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Nava/1.Chahar-mezrab.mp3",
    "folder": "Nava"
  },
  {
    "name": "2.Daramad-e-avval",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Nava/2.Daramad-e-avval.mp3",
    "folder": "Nava"
  },
  {
    "name": "3.Daramad-e-dovvom",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Nava/3.Daramad-e-dovvom.mp3",
    "folder": "Nava"
  },
  {
    "name": "4.Kereshmeh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Nava/4.Kereshmeh.mp3",
    "folder": "Nava"
  },
  {
    "name": "5.Gardunieh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Nava/5.Gardunieh.mp3",
    "folder": "Nava"
  },
  {
    "name": "6.Naghmeh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Nava/6.Naghmeh.mp3",
    "folder": "Nava"
  },
  {
    "name": "7.Bayat-e-Rajeh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Nava/7.Bayat-e-Rajeh.mp3",
    "folder": "Nava"
  },
  {
    "name": "8.Hazin",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Nava/8.Hazin.mp3",
    "folder": "Nava"
  },
  {
    "name": "9.Oshshaq",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Nava/9.Oshshaq.mp3",
    "folder": "Nava"
  },
  {
    "name": "10.Nahoft",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Nava/10.Nahoft.mp3",
    "folder": "Nava"
  },
  {
    "name": "11.Gavesht",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Nava/11.Gavesht.mp3",
    "folder": "Nava"
  },
  {
    "name": "12.Ashiran",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Nava/12.Ashiran.mp3",
    "folder": "Nava"
  },
  {
    "name": "13.Neyshaburak",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Nava/13.Neyshaburak.mp3",
    "folder": "Nava"
  },
  {
    "name": "14.Majosli",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Nava/14.Majosli.mp3",
    "folder": "Nava"
  },
  {
    "name": "15.Khojasteh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Nava/15.Khojasteh.mp3",
    "folder": "Nava"
  },
  {
    "name": "16.Malek Hoseyn",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Nava/16.Malek Hoseyn.mp3",
    "folder": "Nava"
  },
  {
    "name": "17.Hoseyn",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Nava/17.Hoseyn.mp3",
    "folder": "Nava"
  },
  {
    "name": "18.Busalik",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Nava/18.Busalik.mp3",
    "folder": "Nava"
  },
  {
    "name": "19.Neyriz",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Nava/19.Neyriz.mp3",
    "folder": "Nava"
  },
  {
    "name": "20.Reng-e-Nastari",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Nava/20.Reng-e-Nastari.mp3",
    "folder": "Nava"
  },
  {
    "name": "21.Reng-e-Nava",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Nava/21.Reng-e-Nava.mp3",
    "folder": "Nava"
  },
  {
    "name": "1.Daramad",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Rast-Panjgah/1.Daramad.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "2.Daramad-e-dovvom,Zang-e-shotor",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Rast-Panjgah/2.Daramad-e-dovvom,Zang-e-shotor.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "3.Zanguleh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Rast-Panjgah/3.Zanguleh.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "4.Parvaneh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Rast-Panjgah/4.Parvaneh.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "5.Khosravani",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Rast-Panjgah/5.Khosravani.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "6.Ruh-afza",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Rast-Panjgah/6.Ruh-afza.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "7.Panjgah",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Rast-Panjgah/7.Panjgah.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "8.Sepehr",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Rast-Panjgah/8.Sepehr.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "9.Oshshaq",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Rast-Panjgah/9.Oshshaq.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "10.Neyriz",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Rast-Panjgah/10.Neyriz.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "11.Bayat-e-Agam",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Rast-Panjgah/11.Bayat-e-Agam.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "12.Bahr-e-Nur",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Rast-Panjgah/12.Bahr-e-Nur.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "13.Qaracheh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Rast-Panjgah/13.Qaracheh.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "14.Mobarqa",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Rast-Panjgah/14.Mobarqa.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "15.Tarz",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Rast-Panjgah/15.Tarz.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "16.Abol chap",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Rast-Panjgah/16.Abol chap.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "17.Leyli-o-Majnun",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Rast-Panjgah/17.Leyli-o-Majnun.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "18.Ravandi",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Rast-Panjgah/18.Ravandi.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "19.Noruz-e-Arab",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Rast-Panjgah/19.Noruz-e-Arab.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "20.Noruz-e-Khara",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Rast-Panjgah/20.Noruz-e-Khara.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "21.Noruz-e-Saba",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Rast-Panjgah/21.Noruz-e-Saba.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "22.Mavara-o-Nahr (from radif of Aqa Hoseinqoli)",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Rast-Panjgah/22.Mavara-o-Nahr (from radif of Aqa Hoseinqoli).mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "23.Nafir",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Rast-Panjgah/23.Nafir.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "24.Farang",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Rast-Panjgah/24.Farang.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "1.Chahar-mezrab",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Segah/1.Chahar-mezrab.mp3",
    "folder": "Segah"
  },
  {
    "name": "2.Daramad",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Segah/2.Daramad.mp3",
    "folder": "Segah"
  },
  {
    "name": "3.Naghmeh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Segah/3.Naghmeh.mp3",
    "folder": "Segah"
  },
  {
    "name": "4.Kereshmeh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Segah/4.Kereshmeh.mp3",
    "folder": "Segah"
  },
  {
    "name": "5.Kereshmeh ba Muyeh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Segah/5.Kereshmeh ba Muyeh.mp3",
    "folder": "Segah"
  },
  {
    "name": "6.Zang-e-Shotor",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Segah/6.Zang-e-Shotor.mp3",
    "folder": "Segah"
  },
  {
    "name": "7.Zabol",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Segah/7.Zabol.mp3",
    "folder": "Segah"
  },
  {
    "name": "8.Basteh-negar",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Segah/8.Basteh-negar.mp3",
    "folder": "Segah"
  },
  {
    "name": "9.Muyeh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Segah/9.Muyeh.mp3",
    "folder": "Segah"
  },
  {
    "name": "10.Mokhalef",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Segah/10.Mokhalef.mp3",
    "folder": "Segah"
  },
  {
    "name": "11.Haji Hasani",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Segah/11.Haji Hasani.mp3",
    "folder": "Segah"
  },
  {
    "name": "12.Basteh-negar",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Segah/12.Basteh-negar.mp3",
    "folder": "Segah"
  },
  {
    "name": "13.Maghlub",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Segah/13.Maghlub.mp3",
    "folder": "Segah"
  },
  {
    "name": "14.Naghmeh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Segah/14.Naghmeh.mp3",
    "folder": "Segah"
  },
  {
    "name": "15.Hazin",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Segah/15.Hazin.mp3",
    "folder": "Segah"
  },
  {
    "name": "16.Muyeh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Segah/16.Muyeh.mp3",
    "folder": "Segah"
  },
  {
    "name": "17.Rahab",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Segah/17.Rahab.mp3",
    "folder": "Segah"
  },
  {
    "name": "18.Masihi",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Segah/18.Masihi.mp3",
    "folder": "Segah"
  },
  {
    "name": "19.Shah khatai",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Segah/19.Shah khatai.mp3",
    "folder": "Segah"
  },
  {
    "name": "20.Thakht-e-Taqdis",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Segah/20.Thakht-e-Taqdis.mp3",
    "folder": "Segah"
  },
  {
    "name": "21.Reng-e-Delgosha",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Segah/21.Reng-e-Delgosha.mp3",
    "folder": "Segah"
  },
  {
    "name": "1.Daramad",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/1.Daramad.mp3",
    "folder": "Shoor"
  },
  {
    "name": "2.Panjeh Sheri",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/2.Panjeh Sheri.mp3",
    "folder": "Shoor"
  },
  {
    "name": "3.Kereshmeh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/3.Kereshmeh.mp3",
    "folder": "Shoor"
  },
  {
    "name": "4.Rahab",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/4.Rahab.mp3",
    "folder": "Shoor"
  },
  {
    "name": "5.Oj",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/5.Oj.mp3",
    "folder": "Shoor"
  },
  {
    "name": "6.Molla Nazi",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/6.Molla Nazi.mp3",
    "folder": "Shoor"
  },
  {
    "name": "7.Naghmeh-ye-avval",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/7.Naghmeh-ye-avval.mp3",
    "folder": "Shoor"
  },
  {
    "name": "8.Naghmeh-ye-dovvom",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/8.Naghmeh-ye-dovvom.mp3",
    "folder": "Shoor"
  },
  {
    "name": "9.Zirkesh-e-Salmak",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/9.Zirkesh-e-Salmak.mp3",
    "folder": "Shoor"
  },
  {
    "name": "10.Salmak",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/10.Salmak.mp3",
    "folder": "Shoor"
  },
  {
    "name": "11.Golriz",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/11.Golriz.mp3",
    "folder": "Shoor"
  },
  {
    "name": "12.Majles-afruz",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/12.Majles-afruz.mp3",
    "folder": "Shoor"
  },
  {
    "name": "13.Ozzal",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/13.Ozzal.mp3",
    "folder": "Shoor"
  },
  {
    "name": "14.Safa",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/14.Safa.mp3",
    "folder": "Shoor"
  },
  {
    "name": "15.Bozorg",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/15.Bozorg.mp3",
    "folder": "Shoor"
  },
  {
    "name": "16.Kuchak",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/16.Kuchak.mp3",
    "folder": "Shoor"
  },
  {
    "name": "17.Dobeyti",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/17.Dobeyti.mp3",
    "folder": "Shoor"
  },
  {
    "name": "18.Khara",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/18.Khara.mp3",
    "folder": "Shoor"
  },
  {
    "name": "19.Qajar",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/19.Qajar.mp3",
    "folder": "Shoor"
  },
  {
    "name": "20.Hazin",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/20.Hazin.mp3",
    "folder": "Shoor"
  },
  {
    "name": "21.Shur-e-pain dasteh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/21.Shur-e-pain dasteh.mp3",
    "folder": "Shoor"
  },
  {
    "name": "22.Rahab",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/22.Rahab.mp3",
    "folder": "Shoor"
  },
  {
    "name": "23.Chahar gusheh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/23.Chahar gusheh.mp3",
    "folder": "Shoor"
  },
  {
    "name": "24.Moqaddameh-ye-gereyli",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/24.Moqaddameh-ye-gereyli.mp3",
    "folder": "Shoor"
  },
  {
    "name": "25.Razavi",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/25.Razavi.mp3",
    "folder": "Shoor"
  },
  {
    "name": "26.Shahnaz",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/26.Shahnaz.mp3",
    "folder": "Shoor"
  },
  {
    "name": "27.Moqaddameh-ye-qaracheh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/27.Moqaddameh-ye-qaracheh.mp3",
    "folder": "Shoor"
  },
  {
    "name": "28.Qaracheh",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/28.Qaracheh.mp3",
    "folder": "Shoor"
  },
  {
    "name": "29.Shahnaz-e-kot(Asheq-kosh)",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/29.Shahnaz-e-kot(Asheq-kosh).mp3",
    "folder": "Shoor"
  },
  {
    "name": "30.Gereyli",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/30.Gereyli.mp3",
    "folder": "Shoor"
  },
  {
    "name": "31.Gereyli-ye-shasti",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/31.Gereyli-ye-shasti.mp3",
    "folder": "Shoor"
  },
  {
    "name": "32.Reng-e-Hashtari",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/32.Reng-e-Hashtari.mp3",
    "folder": "Shoor"
  },
  {
    "name": "33.Reng-e-Shahr-ashub",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/33.Reng-e-Shahr-ashub.mp3",
    "folder": "Shoor"
  },
  {
    "name": "34.Reng-e-Zarb-e-osul",
    "artist": "Dariush Talaei",
    "image": "Setar - Talaei/setar.jpeg",
    "path": "Setar - Talaei/Shoor/34.Reng-e-Zarb-e-osul.mp3",
    "folder": "Shoor"
  }
];


function random_bg_color() {

  // Get a number between 128 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 128;
  let green = Math.floor(Math.random() * 256) + 128;
  let blue = Math.floor(Math.random() * 256) + 128;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
}

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url('" + track_list[track_index].image + "')";
  track_name.textContent = track_list[track_index].name;
  track_folder.textContent = track_list[track_index].folder;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "Playing " + (track_index + 1) + " of " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  //random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}


function createScrollableList() {
  const trackListContainer = document.getElementById('trackList');
  const folders = {};

  track_list.forEach((track, index) => {
    if (!folders[track.folder]) {
      folders[track.folder] = true;

      const folderItem = document.createElement('div');
      folderItem.textContent = track.folder;
      folderItem.classList.add('listItem', 'folderName');
      trackListContainer.appendChild(folderItem);
    }

    const trackItem = document.createElement('div');
    const spaces = '\xa0'.repeat(track.folder.length); // '\xa0' is a non-breaking space
    trackItem.textContent = `${spaces} ${track.name}`;
    trackItem.classList.add('listItem', 'trackItem');
    trackItem.addEventListener('click', function() {
      track_index = index;
      loadTrack(track_index);
      playTrack();
      highlightTrack(track_index);
    });

    trackListContainer.appendChild(trackItem);
  });
}


function highlightTrack(index) {
  const trackItems = document.querySelectorAll('.trackItem');
  trackItems.forEach((item, idx) => {
    if (idx === index) {
      item.classList.add('activeTrack'); // Apply a class to highlight the active track
    } else {
      item.classList.remove('activeTrack'); // Remove the class from other tracks
    }
  });
}



// Call the function to generate the scrollable list
createScrollableList();



// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
  highlightTrack(track_index);
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
  highlightTrack(track_index);
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
  highlightTrack(track_index);
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

