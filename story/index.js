function initMap() {
  // changed the pins into variables for optimization purposes
    const TOKYO = { lat: 35.68137999342221, lng: 139.76713552883564 }; 
    const INAWASHIRO = { lat: 37.46760868372383, lng: 140.04733240489307 };
    const FUKUSHIMA = { lat: 37.48803260041316, lng: 139.92973006890315 };
    const TOWADA = { lat: 40.561708416188054, lng: 140.88740008053503 }; 
    const HIROSAKI = { lat: 40.60790615607367, lng: 140.46435677116432 };
    const RYUSENDO = { lat: 39.8602655829315, lng: 141.797015753679 }; 
    const MORIOKA = { lat: 39.70078749866131, lng: 141.15135829572606 }; 
    const NAMAHAGE = { lat: 39.92947266214928, lng: 139.76665789601114 }; 
    const YAMAGATA = { lat: 38.25569596959157, lng: 140.32776969592692 }; 
    const OKAMA = { lat: 38.13633248475617, lng: 140.44956729592093 }; 
    const YAMADERA = { lat: 38.316284479407855, lng: 140.43409491290072 }; 
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: 39.8602655829315, lng: 141.797015753679 }, 
    });
    


// The following script is taken (and modified) from: https://developers.google.com/maps/documentation/javascript/custom-markers
// As well as: https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple
// And also: https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple



    //First Marker:
  const TOKYOContent = 
  "Tōkyō Station (Japanese: 東京駅, pronounced [to̞ːkʲo̞ːe̞kʲi]) is a major railway station in Chiyoda, Tokyo, Japan.Served by the high-speed rail lines of the Shinkansen network, Tōkyō Station is the main inter-city rail terminal in Tokyo. It is the busiest station in Japan, with more than 4,000 trains arriving and departing daily,[1] and the fifth-busiest in eastern Japan in terms of passenger throughput;[2] on average, more than 500,000 people use Tōkyō Station every day.[1] The station is also served by many regional commuter lines of Japan Railways, as well as the Tokyo Metro network.Attribution: TOKYO STATION."
  //<a href="https://en.wikipedia.org/wiki/Tokyo_Station">"</a>;
const TOKYOinfowindow = new google.maps.InfoWindow({
  content: TOKYOContent,
  ariaLabel: "Tokyo Station"
  });
const TOKYOMarker = new google.maps.Marker({
  position: TOKYO,
  map,
  title: "Tokyo Station",
  });

TOKYOMarker.addListener("click", () => {
  TOKYOinfowindow.open({
    anchor:TOKYOMarker,
    map,
    });
 });    
    
    
//Second Marker://
  const INAWASHIROContent = 
  "Lake Inawashiro (猪苗代湖, Inawashiro-ko) is the fourth-largest lake in Japan,[1] located in central Fukushima Prefecture, south of Mount Bandai. It is also known as the 'Heavenly Mirror Lake' (天鏡湖, Tenkyōko). The lake is located within the borders of Bandai-Asahi National Park. It is a surface area of 104 square kilometres (40 sq mi), circumference of 63 kilometres (39 mi), depth of 94 metres (308 ft) and is located at an altitude of 514 metres (1,686 ft).[2] In winter swans migrate to the beaches of the lake and stay there until spring. .Attribution: Inawashiro Lake."
  //<a href="https://en.wikipedia.org/wiki/Lake_Inawashiro">"</a>//
  const INAWASHIROinfowindow = new google.maps.InfoWindow({
  content: INAWASHIROContent,
  ariaLabel: "Inawashiro Lake",
  });
const INAWASHIROMarker = new google.maps.Marker({
  position: INAWASHIRO,
  map,
  title: "Inawashiro Lake",
  });

INAWASHIROMarker.addListener("click", () => {
  INAWASHIROinfowindow.open({
  anchor: INAWASHIROMarker,
  map,
    });
});
//Third Marker:
const FUKUSHIMAContent = 
"Aizu-Wakamatsu Castle (会津若松城, Aizu-Wakamatsu-jō), also known as Tsuruga Castle (鶴ヶ城 Tsuru-ga-jō) is a Japanese castle in northern Japan, at the center of the city of Aizuwakamatsu, in Fukushima Prefecture.Aizu Wakamatsu Castle is located in the center of the Aizu basin and at crossroads to Kōriyama to the north and Yonezawa to the east and Murakami on the Sea of Japan coast. Attribution: Aizuwakamatsu Castle."
// <a href="https://en.wikipedia.org/wiki/Aizuwakamatsu_Castle">"</a>;//
const FUKUSHIMAinfowindow = new google.maps.InfoWindow({
content: FUKUSHIMAContent,
ariaLabel: "Aizuwakamatsu Castle",
});
const FUKUSHIMAMarker = new google.maps.Marker({
position: FUKUSHIMA,
map,
title: "Aizuwakamatsu Castle",
});

FUKUSHIMAMarker.addListener("click", () => {
FUKUSHIMAinfowindow.open({
anchor: FUKUSHIMA,
map,
});
});
//Fourth Marker:
const TOWADAContent = 
" Towada-Hachimantai National Park (十和田八幡平国立公園, Towada-Hachimantai Kokuritsu Kōen) is a national park comprising two separate areas of Aomori, Iwate, and Akita Prefectures, Japan. The Towada-Hakkōda area encompasses Lake Towada, Mount Hakkōda, and most of the Oirase River valley. The Hachimantai area includes Mount Hachimantai, Mount Iwate, Tamagawa Onsen, and Akita Komagatake (秋田駒ヶ岳).[1][2] The two areas are 50 kilometres (31 mi) apart, and cover 854 square kilometres (330 sq mi)..Attribution: Towada-Hachimantai National Park."
//<a href="https://en.wikipedia.org/wiki/Towada-Hachimantai_National_Park">"</a>;//
const TOWADAinfowindow = new google.maps.InfoWindow({
content: TOWADAContent,
ariaLabel: "Towada-Hachimantai National Park",
});
const TOWADAMarker = new google.maps.Marker({
position: TOWADA,
map,
title: "Towada-Hachimantai National Park",
});

TOWADAMarker.addListener("click", () => {
TOWADAinfowindow.open({
anchor: TOWADAMarker,
map,
});
});
//Fifth Marker:
const HIROSAKIContent = 
" Hirosaki Castle (弘前城, Hirosaki-jō) is a hirayama-style Japanese castle constructed in 1611. It was the seat of the Tsugaru clan, a 47,000 koku tozama daimyō clan who ruled over Hirosaki Domain, Mutsu Province, in what is now central Hirosaki, Aomori Prefecture, Japan. It was also referred to as Takaoka Castle (鷹岡城 or 高岡城, Takaoka-jō)..Attribution: HIROSAKI CASTLE."
//<a href="https://en.wikipedia.org/wiki/Hirosaki_Castle>"></a>;
const HIROSAKIinfowindow = new google.maps.InfoWindow({
  content: HIROSAKIContent,
  ariaLabel: "HIROSAKI CASTLE",
});
const HIROSAKIMarker = new google.maps.Marker({
  position: HIROSAKI,
  map,
  title: "HIROSAKI CASTLE",
});

HIROSAKIMarker.addListener("click", () => {
  HIROSAKIinfowindow.open({
  anchor: HIROSAKIMarker,
  map,
});
});
//Sixth Marker:
const RYUSENDOContent = 
"Ryūsendō (龍泉洞) is one of Japan's three largest limestone caverns.[1] It is located in the town of Iwaizumi, Iwate Prefecture, in the Tōhoku region of northern Japan.Ryūsendō has an accessible length of 1,200 meters, making it the 62nd longest in Japan; however, its depth of 249 metres (817 ft) from the entrance to its lowest point is the 5th deepest in Japan. The total confirmed length of the cave is currently 3,631 metres (11,913 ft), although the cave may extend much further. Further exploration has been banned following a fatality in December 1968. The cave system includes at least four underground lakes, the third of which has a depth of 98 metres (322 ft), and the fourth of which (not accessible to the public) has a depth of over 120 metres (390 ft). The cave system is also home to colonies of Greater horseshoe bat, Eastern long-fingered bat, Brown long-eared bat and Hilgendorf's tube-nosed bat as well as Microbats.Attribution: Ryūsendō."
//<a href="https://en.wikipedia.org/wiki/Ry%C5%ABsend%C5%8D">"</a>;
const RYUSENDOinfowindow = new google.maps.InfoWindow({
  content: RYUSENDOContent,
  ariaLabel: "Ryūsendō",
});
const RYUSENDOMarker = new google.maps.Marker({
  position: RYUSENDO,
  map,
  title: "Ryūsendō",
});

RYUSENDOMarker.addListener("click", () => {
  RYUSENDOinfowindow.open({
  anchor: RYUSENDOMarker,
  map,
});
});
//Seventh Marker:
const MORIOKAcontent = 
"Morioka Castle (盛岡城, Morioka-jō) is a hirayama-style Japanese castle constructed in 1611. It was the seat of the Nanbu clan, a tozama daimyō clan who ruled over Morioka Domain, Mutsu Province in the Tōhoku region of northern Japan during the Edo period Tokugawa shogunate. The castle is located in what is now the center of the city of Morioka, Iwate Prefecture, Japan. It was also referred to as Kozukata Castle (不来方城, Kozukata-jō), but strictly speaking this name pertains to the predecessor of Morioka Castle on the same site..Attribution: Morioka Castle."
//<a href="https://en.wikipedia.org/wiki/Morioka_Castle"></a>";
const MORIOKAinfowindow = new google.maps.InfoWindow({
  content: MORIOKAcontent,
  ariaLabel: "MORIOKA CASTLE",
});
const MORIOKAMarker = new google.maps.Marker({
  position: MORIOKA,
  map,
  title: "MORIOKA CASTLE",
});

MORIOKAMarker.addListener("click", () => {
  MORIOKAinfowindow.open({
  anchor: MORIOKAMarker,
  map,
});
});
//Eighth Marker:
const NAMAHAGEContent = 
"The Namahage (生剥げ, なまはげ)[1] are demonlike beings portrayed by men wearing hefty oni (ogre) masks and traditional straw capes (mino) during a New Year's ritual, in local northern Japanese folklore of the Oga Peninsula area of Akita Prefecture.Oga City's Namahage Museum highlights all things Namahage through various displays. The Namahage Seizoroi Corner features masks and costumes from 60 districts around Oga. The Shinpi Hall explores the nature and customs of Oga, and the Densho Hall features a large screen which plays a film showcasing the Namahage Festival on New Year's Eve. At the Namahage Transformation Corner, visitors can try on authentic Namahage costumes for themselves..Attribution: TOKYO STATION."
//<a href="https://en.wikipedia.org/wiki/Namahage">"</a>;
const NAMAHAGEinfowindow = new google.maps.InfoWindow({
  content: NAMAHAGEContent,
  ariaLabel: "NAMAHAGE MUSEUM",
});
const NAMAHAGEMarker = new google.maps.Marker({
  position: NAMAHAGE,
  map,
  title: "NAMAHAGE",
});

NAMAHAGEMarker.addListener("click", () => {
  NAMAHAGEinfowindow.open({
  anchor: NAMAHAGEMarker,
  map,
  });
});
//Ninth Marker:
const YAMAGATAContent = 
"Yamagata Castle (山形城, Yamagata-jō) is a flatland-style Japanese castle located in the center of the city of Yamagata, eastern Yamagata Prefecture, Japan. Throughout the Edo period, Yamagata Castle was the headquarters for the daimyō of Yamagata Domain. The castle was also known as Ka-jō (霞城). The castle grounds are protected as a National Historic Site by the Japanese government.Attribution: Yamagata Castle."
//<a href="https://en.wikipedia.org/wiki/Yamagata_Castle"></a>";
const YAMAGATAinfowindow = new google.maps.InfoWindow({
  content: YAMAGATAContent,
  ariaLabel: "YAMAGATA CASTLE",
});
const YAMAGATAMarker = new google.maps.Marker({
  position: YAMAGATA,
  map,
  title: "YAMAGATA CASTLE",
});

YAMAGATAMarker.addListener("click", () => {
  YAMAGATAinfowindow.open({
  anchor: YAMAGATAMarker,
  map,
  });
});
const OKAMAContent = 
"Okama (Japanese: 御釜), meaning an honourable cauldron, is the inactive volcanic crater (crater lake) on top of Mount Zaō, located in Kawasaki, Miyagi, on the border with Yamagata, Japan. While local people call it affectionately Okama, the visitors tend to call it Goshiki-numa (五色沼), meaning Five Color Pond, because its color changes depending on the time of the day, the weather, or the season of the year.Attribution: Okama Crater Lake."
//<a href="https://en.wikipedia.org/wiki/Okama_Crater_Lake"></a>";
const OKAMAinfowindow = new google.maps.InfoWindow({
  content: OKAMAContent,
  ariaLabel: "OKAMA CRATER LAKE",
});
const OKAMAMarker = new google.maps.Marker({
  position: OKAMA,
  map,
  title: "OKAMA CRATER LAKE",
});

OKAMAMarker.addListener("click", () => {
  OKAMAinfowindow.open({
  anchor: OKAMAMarker,
  map,
  });
});
//Tenth Marker:
const YAMADERAContent = 
"Yama-dera (山寺, lit. Mountain Temple), (山号 宝珠山; Sangō Hōshu-zan) is the popular name for the Buddhist temple of Risshaku-ji (立石寺) located northeast of Yamagata City, in Yamagata Prefecture, Japan. Its main image is a hibutsu statue of Yakushi Nyōrai. The temple has been a place for pilgrimage for centuries, and is designated as both a Place of Scenic Beauty and as a National Historic Site[1] It is located within the borders of the Zaō Quasi-National Park. The temple buildings clinging to the steep, forested, rocky hillsides are picturesque and unusual.Attribution: Yama-dera."
// <a href="https://en.wikipedia.org/wiki/Yama-dera"></a>";
const YAMADERAinfowindow = new google.maps.InfoWindow({
  content: YAMADERAContent,
  ariaLabel: "Yama-dera"
});
const YAMADERAMarker = new google.maps.Marker({
position: YAMADERA,
map,
title: "Yama-dera",
});

YAMADERAMarker.addListener("click", () => {
  YAMADERAinfowindow.open({
  anchor: YAMADERAMarker,
  map,
  });
});

}
window.initMap = initMap; 
