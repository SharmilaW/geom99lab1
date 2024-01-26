//The Templates are used from Google Maps Platfor template(s) you use:https://developers.google.com/maps/documentation/javascript/reference:
function initMap() {
  // changed the pins into variables for optimization purposes
    const TOKYO = { lat: 35.68137999342221, lng: 139.76713552883564 }; 
    const KYOTO = { lat: 35.3386463081338, lng: 135.78165306284905 };
    const FUKUSHIMA = { lat: 37.48803260041316, lng: 139.92973006890315 };
    const TOWADA = { lat: 40.561708416188054, lng: 140.88740008053503 }; 
    const HIROSAKI = { lat: 40.60790615607367, lng: 140.46435677116432 };
    const RYUSENDO = { lat: 39.8602655829315, lng: 141.797015753679 }; 
    const MORIOKA = { lat: 39.70078749866131, lng: 141.15135829572606 }; 
    const NAMAHAGE = { lat: 39.92947266214928, lng: 139.76665789601114 }; 
    const SENDAI = { lat: 38.25236750172602, lng: 140.85594756211142 };  
    const OKAMA = { lat: 38.13633248475617, lng: 140.44956729592093 }; 
    const KANAZAWA = { lat: 36.5854380667408, lng: 136.6643875516741 }; 
    const FUJI = { lat: 35.36074700281356, lng: 138.72736328044655 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6.5,
      center: { lat: 37.48803260041316, lng: 139.92973006890315}, 
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
  const KYOTOContent = 
  "Kinkaku-ji (金閣寺, literally Temple of the Golden Pavilion), officially named Rokuon-ji (鹿苑寺, lit.'Deer Garden Temple'), is a Zen Buddhist temple in Kyoto, Japan.[2] It is one of the most popular buildings in Kyoto, attracting many visitors annually.[3] It is designated as a National Special Historic Site, a National Special Landscape and is one of 17 locations making up the Historic Monuments of Ancient Kyoto which are World Heritage Sites."
  //<a href="https://en.wikipedia.org/wiki/Kinkaku-ji">"</a>//
  const KYOTOinfowindow = new google.maps.InfoWindow({
    content: KYOTOContent,
    ariaLabel: "Kinkaku-ji",
  });
const KYOTOMarker = new google.maps.Marker({
  position: KYOTO,
  map,
  title: "Kinkaku-ji",
  });

  KYOTOMarker.addListener("click", () => {
    KYOTOinfowindow.open({
  anchor: KYOTOMarker,
  map,
    });
});
//Third Marker:
  const FUKUSHIMAContent = 
  "Aizu-Wakamatsu Castle (会津若松城, Aizu-Wakamatsu-jō), also known as Tsuruga Castle (鶴ヶ城 Tsuru-ga-jō) is a Japanese castle in northern Japan, at the center of the city of Aizuwakamatsu, in Fukushima Prefecture.Aizu Wakamatsu Castle is located in the center of the Aizu basin and at crossroads to Kōriyama to the north and Yonezawa to the east and Murakami on the Sea of Japan coast. Attribution: Aizuwakamatsu Castle."
  //<a href="https://en.wikipedia.org/wiki/Aizuwakamatsu_Castle">"</a>//
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
  anchor: FUKUSHIMAMarker,
  map,
    });
});

//Fourth Marker:
const TOWADAContent = 
" Towada-Hachimantai National Park (十和田八幡平国立公園, Towada-Hachimantai Kokuritsu Kōen) is a national park comprising two separate areas of Aomori, Iwate, and Akita Prefectures, Japan. The Towada-Hakkōda area encompasses Lake Towada, Mount Hakkōda, and most of the Oirase River valley. The Hachimantai area includes Mount Hachimantai, Mount Iwate, Tamagawa Onsen, and Akita Komagatake (秋田駒ヶ岳).[1][2] The two areas are 50 kilometres (31 mi) apart, and cover 854 square kilometres (330 sq mi)..Attribution: Towada-Hachimantai National Park."
//<a href="https://en.wikipedia.org/wiki/Towada-Hachimantai_National_Park">"</a>;
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
const SENDAIContent = 
"Aoba Castle (青葉城, Aoba-jō) is a Japanese castle located in Sendai, Miyagi Prefecture, Japan. Throughout the Edo period, Aoba Castle was home to the Date clan, daimyō of Sendai Domain. The castle was also known as Sendai-jō (仙台城) or as Gojō-rō (五城楼). In 2003, the castle ruins were designated a National Historic Site."
//<a href="https://en.wikipedia.org/wiki/Aoba_Castle"></a>";
const SENDAIinfowindow = new google.maps.InfoWindow({
  content: SENDAIContent,
  ariaLabel: "Aoba Castle",
});
const SENDAIMarker = new google.maps.Marker({
  position: SENDAI,
  map,
  title: "Aoba Castle",
});

SENDAIMarker.addListener("click", () => {
  SENDAIinfowindow.open({
    anchor: SENDAIMarker,
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
const KANAZAWAContent = 
"Kenroku-en (Japanese: 兼六園, Garden of Six Attributes), located in Kanazawa, Ishikawa, Japan, is a strolling style garden constructed during the Edo period by the Maeda clan.[1] Along with Kairaku-en and Kōraku-en, Kenroku-en is considered one of the Three Great Gardens of Japan and is noted for its beauty across all seasons, particularly in winter. Spread over nearly 25 acres, features of the landscape include meandering paths, a large pond, several tea houses, and one of Japan's oldest fountains."
// <a href="https://en.wikipedia.org/wiki/Kenroku-en"></a>";
const KANAZAWAinfowindow = new google.maps.InfoWindow({
  content: KANAZAWAContent,
  ariaLabel: "Kenroku-en"
});
const KANAZAWAMarker = new google.maps.Marker({
  position: KANAZAWA,
  map,
  title: "Kenroku-en",
});

KANAZAWAMarker.addListener("click", () => {
  KANAZAWAinfowindow.open({
    anchor: KANAZAWAMarker,
    map,
    });
});
//Eleventh Marker:
const FUJIContent = 
"Mount Fuji (富士山, Fujisan) is an active stratovolcano located on the Japanese island of Honshū, with a summit elevation of 3,776.24 m (12,389 ft 3 in). It is the tallest mountain in Japan, the second-highest volcano located on an island in Asia (after Mount Kerinci on the island of Sumatra), and seventh-highest peak of an island on Earth.[1] Mount Fuji last erupted from 1707 to 1708.[4][5] The mountain is located about 100 km (62 mi) southwest of Tokyo and is visible from the Japanese capital on clear days. Mount Fuji's exceptionally symmetrical cone, which is covered in snow for about five months of the year, is commonly used as a cultural icon of Japan and is frequently depicted in art and photography, as well as visited by sightseers, hikers and mountain climbers."
// <a href="https://en.wikipedia.org/wiki/Mount_Fuji"></a>";
const FUJIinfowindow = new google.maps.InfoWindow({
  content: FUJIContent,
  ariaLabel: "Mount Fuji"
});
const FUJIMarker = new google.maps.Marker({
  position: FUJI,
  map,
  title: "Mount Fuji",
});

FUJIMarker.addListener("click", () => {
  FUJIinfowindow.open({
    anchor: FUJIMarker,
    map,
    });
});

}
window.initMap = initMap; 
