/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// Background
let bg = {
  fill:{
    r:0,
    g:0,
    b:0,
  }
}

// MONTREAL MAP OBJECT
let montreal ={
  //IMAGE
  img : undefined,
  //OBJECT
  obj : undefined,
}
// // MONTREAL IMAGE
// let mapMTL;


// MAP PRIVATE PLACES
let mapPrivate = {
  // IMAGES
  images : [],
  // NAMES OF IMAGES
  names: [
    `mapHome`,
    `mapClem`,
    `mapInes`,
    // `mapClebard`,
    // `mapTattoo`,
  ],
  // // PATH OF VIDEOS
  // path: [
  //   `home`,
  //   `chezClem`,
  //   `chezInes`,
  //   `clebard`,
  // ],
  // OBJECTS ICONS CARTE PRIVATE
  objects: [],
  // COORDINATES AND NAMES FOR ICONS
  coordinates: [
    [1675,740,"mapHome"], // HOME
    [1693,960,"mapClem"], // CLEM
    [1642,866,"mapInes"], // INES
    // [1500,850,"mapClebard"], // CLEBARD
    // [0,0,0,0,0,0,0,0,"mapTattoo"] // TATTOO
  ],
  // REC ICONS COORDINATES CORRESPONDING TO MAPS // ON 1920x1080 BASIS
  recs: {
    coordinates:[
      // MAP HOME
      [ ["27092021_2215", 948, 603.4, "home",],
      	["27092021_2222", 966.5, 489.5, "home",],
      	["27092021_2158", 1056.7, 449.1, "home",],
      	["13092021_1650", 1062.6, 489.4, "home",],
      	["09092021_1020", 1092.5, 578.5, "home",],
      	["24092021_2141", 1183.1, 380.1, "home",],
      	["21092021_2239", 1221.7, 410.2, "home",],
      	["10092021_1851", 1374.3, 367.3, "home",],
      	["14092021_1631", 1308.6, 506.4, "home",],
      	["25092021_0107", 1374.3, 506.4, "home",],
      	["14092021_2122", 1444.5, 512.6, "home",],
      	["10092021_1925", 1576.3, 406.5, "home",],
      	["18092021_1259", 1558.2, 436.4, "home",],
      	["14092021_2017", 1570.8, 461.8, "home",],
      	["18092021_1301", 1552.7, 505.8, "home",],
      	["15092021_1136", 1583.2, 513.8, "home",],
      	["09092021_1334", 1527.8, 587.7, "home",],
      	["10092021_1110", 1273, 562.9, "home",],
      	["18092021_1253", 1250.6, 588.5, "home",],
      	["13092021_1132", 1273.9, 598.6, "home",],
      	["24092021_2030", 1273.7, 616.1, "home",],
      	["24092021_2045", 1326.1, 664.3, "home",],
      	["22092021_2203", 1386.7, 660.9, "home",],
      	["22092021_2205", 1411.5, 673.7, "home",],
      	["11092021_1328", 1524.3, 694.3, "home",],
      	["25092021_0103", 1719.4, 518.5, "home",],
      	["10092021_1928", 1661.3, 712.2, "home",],
      	["11092021_1345", 1688.6, 699.4, "home",],
      	["23092021_1219", 1669.6, 748.2, "home",],
      	["09092021_1754", 1713.5, 735.5, "home",],
      	["13092021_1239", 1707, 756.2, "home",],
      	["18092021_1225", 1707, 803.7, "home",],
      	["17092021_1114", 1588.8, 861.9, "home",],
      	["11092021_1116", 1601.3, 875.4, "home",],
      	["08092021_0738", 1610.7, 861.8, "home",],
      	["17092021_1110", 1627.8, 870.3, "home",],
      	["10092021_1913", 1636.5, 855.1, "home",],
      	["10092021_1912", 1649.1, 861.8, "home",],
      	["10092021_1924", 1649, 894.1, "home",],
      	["20092021_2059", 1671.8, 920.3, "home",],
      	["13092021_2209", 1684.2, 887.2, "home",],
      	["12092021_1156", 1701, 880.5, "home",],
      	["18092021_1220", 1707, 907.6, "home",],
    ],
    // FIN MAP HOME

    // MAP CLEM
    [	["01012022_0008", 482.5, 271.5, "chezClem",],
    	["03012022_1408", 507.5, 311.5, "chezClem",],
    	["03012022_1901", 414.5, 497.5, "chezClem",],
    	["04012022_1052", 386.5, 217.5, "chezClem",],
    	["06122021_0151", 958.5, 284.5, "chezClem",],
    	["06122021_1623", 460.5, 548.5, "chezClem",],
    	["10012022_1150", 431.5, 570.5, "chezClem",],
    	["08122021_0141", 429.5, 285.5, "chezClem",],
    	["08012022_1700", 558.5, 510.5, "chezClem",],
    	["08012022_1044", 459.5, 409.5, "chezClem",],
    	["06122021_1254", 600.5, 817.5, "chezClem",],
    	["06122021_0152", 701.5, 337.5, "chezClem",],
    	["06122021_0154", 509.5, 377.5, "chezClem",],
    	["08012022_1706", 613.5, 409.5, "chezClem",],
    	["08012022_1903", 508.5, 571.5, "chezClem",],
    	["08012022_2121", 559.5, 551.5, "chezClem",],
    	["11122021_2241", 244.5, 636.5, "chezClem",],
    	["12122021_2251", 600.5, 484.5, "chezClem",],
    	["13112021_0420", 431.5, 245.5, "chezClem",],
    	["13122021_0133", 447.5, 514.5, "chezClem",],
    	["14102021_1246", 460.5, 311.5, "chezClem",],
    	["15122021_2000", 369.5, 298.5, "chezClem",],
    	["16112021_0112", 389.5, 251.5, "chezClem",],
    	["16112021_1151", 339.5, 245.5, "chezClem",],
    	["16112021_1902", 482.5, 518.5, "chezClem",],
    	["18122021_0201", 510.5, 484.5, "chezClem",],
    	["18122021_0209", 463.5, 360.5, "chezClem",],
    	["18122021_0210", 425.5, 364.5, "chezClem",],
    	["18122021_1702", 664.5, 458.5, "chezClem",],
    	["18122021_1824", 748.5, 695.5, "chezClem",],
    	["20112021_1324", 173.5, 596.5, "chezClem",],
    	["23102021_2147", 447.5, 622.5, "chezClem",],
    	["26112021_2228", 190.5, 723.5, "chezClem",],
    	["26112021_2229", 207.5, 775.5, "chezClem",],
    	["29112021_0048", 352.5, 377.5, "chezClem",],
    	["30112021_0054", 595.5, 653.5, "chezClem",],
    	["30112021_2353", 447.5, 456.5, "chezClem",],
    ],
    //FIN MAP CLEM

    // MAP INES
    [	["05102021_2253", 514.5, 344.5, "chezInes"],
    	["05102021_2255", 477.5, 335.5, "chezInes"],
    	["05102021_2315", 1050.5, 899.5, "chezInes"],
    	["05102021_2351", 1022.5, 882.5, "chezInes"],
    	["07102021_1952", 148.5, 460.5, "chezInes"],
    	["07102021_2118", 1077.5, 883.5, "chezInes"],
    	["07102021_2200", 1123.5, 892.5, "chezInes"],
    	["07102021_2254", 1104.5, 899.5, "chezInes"],
    	["12112021_1956", 382.5, 238.5, "chezInes"],
    	["12112021_2037", 404.5, 214.5, "chezInes"],
    	["14092021_2227", 223.5, 177.5, "chezInes"],
    	["16102021_1801", 316.5, 319.5, "chezInes"],
    	["16102021_1835", 329.5, 351.5, "chezInes"],
    	["16102021_1843", 432.5, 236.5, "chezInes"],
    	["20102021_1857", 457.5, 561.5, "chezInes"],
    	["20102021_1933", 500.5, 199.5, "chezInes"],
    	["20102021_2207", 184.5, 159.5, "chezInes"],
    	["24102021_1517", 274.5, 302.5, "chezInes"],
    	["24102021_1554", 255.5, 326.5, "chezInes"],
    	["28092021_1937", 388.5, 298.5, "chezInes"],
    	["28092021_1938", 360.5, 277.5, "chezInes"],
    	["31102021_0133", 1333.5, 836.5, "chezInes"],
    ],
    //FIN MAP INES

    // // MAP CLEBARD
    // [],
    // //FIN MAP CLEBARD
  ],
  objects:[
    [],
    [],
    [],
    // [],
  ],
}
};

// RED DOTS FOR 'REC ICONS' = VIDEOS
// PUBLIC = DISPLAYED IN MONTREAL MAP
let recPublic = {
  //REC COORDONNEES AND NAMES
  coordinates: [
    ["02122021_2122", 1601.4, 1095.9],
  	["02122021_2054", 1601.7, 1091.2],
  	["27112021_2004", 1642.9, 952],
  	["02122021_2246", 1611.4, 1088.2],
  	["24092021_2239", 1615.7, 834.9],
  	["24092021_2144", 1654.6, 774.8],
  	["13092021_1821", 1666.6, 665.6],
  	["28102021_1959", 1576.3, 736.8],
  	["19102021_1925", 1697.8, 760.7],
  	["28092021_2107", 1701.4, 755.6],
  	["21092021_2048", 1700.2, 765.9],
  	["07102021_1806", 1637.9, 974.1],
  	["08092021_2205", 1477, 1071.3],
  	["11092021_1621", 1595.2, 716.4],
  	["27112021_1709", 1614.3, 1054.2],
  	["30112021_1915", 1594.1, 1079.9],
  	["02122021_2205", 1602.6, 1086.4],
  	["03122021_2056", 1701.4, 1116.9],
  	["31102021_2246", 1635.2, 1097.2],
  	["17092021_1349", 1534, 1116.4],
  	["08092021_1928", 1657.1, 765.9],
  	["09112021_2010", 1640.4, 841.2],
  	["17092021_1300", 1589.9, 1025.2],
  	["31102021_2031", 1643.3, 999.3],
  	["23102021_1637", 1640.1, 1025.7],
  	["24112021_1740", 1821.6, 567.4],
  	// ["DUMPLINGS_FIRST_TIME_24_x2F_10" class="st8" cx="1642.7, 942.1],
  	["11092021_1724", 1603.1, 834.9],
  	["14112021_2113", 1703.6, 740],
  	["03122021_2138", 1694.5, 1012.1],
  	// ["29112021_1958_00000001648314220388138950000015895171949988726416_", 1531, 923.8],
  	["11102021_1648", 1648.8, 1013.5],
  	["22112021_1344", 1653.2, 996.7],
  	["27102021_2359", 1660.5, 760.5],
  	["03122021_2132", 1645.2, 1094.2],
  	["13092021_1901", 1678.3, 683.8],
  	// ["CONCERT_GRATOS_PAS_LOIN_PLACE_DES_ARTS_16_x2F_09" class="st8" cx="1618.7, 1029.5],
  	["16102021_2138", 1650.3, 1004.8],
  	["12092021_1946", 1627.5, 1002.3],
  	["07092021_1639", 170.2, 1550.3],
  	["25102021_2030", 1648.7, 1088.9],
  	["30112021_1943", 1543.5, 1155],
  	["12092021_2052", 1632.7, 993.8],
  	["11092021_2003", 1586.6, 881.9],
  	["26092021_0221", 1643.7, 826.4],
  	["22112021_1728", 1516.1, 842.1],
  	["04122021_0125", 1704.8, 928.6],
  	["15092021_2303", 863.2, 563.3],
  	["21112021_0000", 1644.5, 937.9],
  	["11092021_1701", 1614.7, 823.4],
    // ["17092021_2000_00000149350246532432809740000012875354200003096507_", 1606.2, 111.2],
  	["03122021_2038", 1704.3, 1060.3],
  	["29112021_1954", 1531.6, 914.7],
  	["07102021_1730", 1652.1, 868],
  	["11092021_1525", 1659.2, 753.7],
  	["07092021_1648", 251, 1540.2],
  	["03122021_2056_2", 1697.8, 1122.9],
  	["19112021_1832", 1580.4, 962.9],
  	["25102021_1947", 1649.2, 1076.5],
  	["11092921_1936", 1581.9, 879.2],
  	["23112021_2055", 1704.3, 1074.5],
  	["05112021_1503", 1722.9, 1030],
  	["27102021_2051", 1721.9, 778.8],
  	["10092021_1427", 1565.7, 770.3],
  	["21092021_1404", 1542.5, 1150.3],
  	["16102021_1732", 1651.1, 793.2],
  	["28112021_1635", 1642, 861.8],
  	["17092021_1938", 1608.2, 40],
  	["17092021_1817", 1594.1, 634.7],
  	["20102021_1630", 1624.5, 929.3],
  	["06112021_0755", 209.3, 1546.5],
  	["01122021_1750", 1713.9, 1081.5],
  	["31102021_2253", 1602.3, 1069.5],
  	["11102021_1647", 1643.6, 1013.3],
  	["09092021_2334", 1585.5, 873.9],
  	["26092021_0035", 1625.4, 934.9],
  	["16102021_2359", 1544.3, 879],
  	["27092021_2152", 1665.9, 757.5],
  	["10092021_1729", 1498.1, 870.4],
  	["01122021_1648", 1635.2, 1016.3],
  	["16092021_2018", 1621.7, 1039.3],
  	["13092021_1935", 1660.5, 741.8],
  	["08092021_1950", 1513.1, 852.1],
  	["19102021_0044", 1732.7, 834.4],
  	// ["METRO_21_x2F_09__x3F__x3F__x3F__x3F__x3F_" class="st8" cx="1645.9, 986.4],
  	["30112021_1845", 1610, 1025.6],
  	["19102021_0051", 1732.5, 759.9],
  	["30102021_0009_2", 1222.5, 671.8],
  	["15092021_2322", 1442.1, 803.5],
  	["15092021_2323", 1480.1, 823.2],
  	["20102021_1717", 1673.9, 882.2],
  	["19092021_1929", 1703.9, 924.3],
  	["27102021_1959", 1701.7, 802.6],
  	["16092021_2104", 1626.7, 1025.1],
  	["29102021_1655", 1706.2, 788.9],
  	["04122021_0124", 1700.9, 928.6],
  	["30102021_1801", 1570.3, 760.7],
  	["30102021_1804", 1572.2, 756.4],
  	["10092021_1801", 1605.6, 977.9],
  	["26112021_1714", 1624.4, 988.3],
  	["20102021_1721", 1664.5, 875.9],
  	["10092021_2217", 1501.6, 849.1],
  	["20102021_1652", 1634.7, 937.4],
  	["02122021_1758", 1818.6, 559.5],
  	["11092021_2052", 1590.7, 884],
  	["07092021_1846", 462.1, 1303.9],
  	["07092021_2215", 1702, 999.8],
  	["08092021_1205", 1535.7, 1143.3],
  	["07092021_1735", 310.4, 1490.9],
  	["02122021_2207", 1609.3, 1092.9],
  	["26092021_1806", 1617.1, 800.2],
  	["13092021_0024", 1617.9, 892.8],
  	["02122021_1402", 1258.8, 674.3],
  	["15092021_1944", 1153.9, 647.2],
  	["26112021_1743", 1589, 953.4],
  	["26112021_1742", 1594.4, 959.7],
  	["26112021_1741", 1597.9, 952],
  	["25092021_2136", 1610.9, 921.3],
  	["25092021_2102", 1614.9, 924.3],
  	["20102021_2331", 1668.3, 748.1],
  	["19092021_2036", 1621.3, 862],
  	["09092021_0019", 1654.6, 747.8],
  	["13092021_0019", 1609.5, 886.2],
  	["15092021_0003", 1638.9, 851.3],
  	["11092021_0105", 1547.3, 748.8],
  	["24092021_0004", 1648.1, 806.8],
  	["17092021_1919", 1560.6, 124.6],
  	["01122021_1741", 1716.9, 1056.1],
  	["12092021_1856", 1609, 965.7],
  	["29102021_2335", 1159.9, 612.9],
  	["29102021_2035", 1150.9, 619.9],
  	["31102021_2215", 1752.5, 1112.2],
  	["28092021_1827", 1621.7, 845.4],
  	["28092021_1826", 1630.8, 842],
  	["10092021_1544", 1541.3, 802.1],
  	["10092021_1638", 1510.7, 840.9],
  	["22112021_2054", 1651.9, 946],
  	["01122021_1817", 1624.2, 1073.5],
  	["08092021_2012", 1519.1, 829.2],
  	["07092021_1828", 371.1, 1415.1],
  	["08092021_1331", 1539.5, 1137],
  	["30102021_0009", 1210.4, 667.8],
  	["10092021_2220", 1501.2, 849.8],
  	["08092021_1844", 1771.4, 411.5],
  	["08092021_1859", 1711.3, 780.1],
  	["08092021_1858", 1717.3, 781.2],
  	["08092021_1857_2", 1723, 773.2],
  	["08092021_1857", 1727.3, 766.9],
  	["07092021_1907", 772.9, 1661.6],
  	["07092021_1920", 1321.3, 1480.8],
  	["07092021_1930", 1474.5, 1290.6],
  	["20112021_1324", 1692.2, 961.7],
  	["14092021_2220", 1643.8, 864.8],
  	["20102021_1639", 1634.5, 932.7],
  	["03122021_2128", 1656.5, 1097.8],
  	["23112021_2304", 1699.9, 1073.5],
  	["17092021_1348", 1529.7, 1125.7],
  	["16102021_1748", 1640, 860.3],
  	["02122021_1827", 1805.5, 556.5],
  	["24092021_2240", 1621.7, 831.9],
  	["11092021_2018", 1586.6, 887],
  	["16092021_2116", 1630, 1022.6],
  	["07092021_1606", 67.9, 1523],
  	["07092021_1622", 70.9, 1562.2],
  	["28102021_1859", 1577.2, 740.4],
  	["17092021_2026", 1614.2, 121.6],
  	["17092021_2027", 1608.2, 130.6],
  	["10092021_1428", 1567.3, 777.8],
  	["24092021_2145", 1660.8, 775.8],
  ],

  // REC OBJECTS DOTS WITH x,y,name as variables which contains videos
  objects: [],
}

// SCALE FOR ZOOM
let zoom = {
  nav : 1,
  max : 5,
  min : 0.5,
  sensativity : 0.001
}
// centre coordonnees
let centre = {
  x : 0,
  y : 0,
  speed : 5,
  offsetX : 0,
  offsetY : 0,
  dragging : false,

}




let state = `mapMontreal`; // Can be : mapMontreal, privateMap (mapHome, mapClem, mapInes, mapClebard, mapTattoo)


/**
Description of preload
*/
function preload() {
  // MONTREAL MAP
  montreal.img = loadImage('assets/images/mapMTL.png');
  // PRIVATE MAPS NAMES IMAGES
  for(let i = 0; i < mapPrivate.names.length; i++) {
  let map = mapPrivate.names[i];
  let mapPNG = loadImage('assets/images/'+map+'.png');
  mapPrivate.images.push(mapPNG);
}

}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth,windowHeight);

  // POINT DE TRANSLATION
    centre.x = -width/2.45;
    centre.y = -height/3.5;

  montreal.obj = new Montreal(montreal.img);
  // mapPrivate.objects = new CartePrivate(mapPrivate.images);
  // mapPrivate.objects = new Carte(mapPrivate.x, mapPrivate.y, mapPrivate.img);

  setupMaps();

  setupRec(); // position x, y, names
}

function setupMaps(){

  // // MAP NAMES
  // for(let i = 0; i < mapPrivate.names.length; i++) {
  //   let map = new Carte(mapPrivate.names[i]);
  //   mapPrivate.objects.push(map);
  // }
  // ICONS POSITIONS AND NAMES
  for ( let i = 0; i < mapPrivate.coordinates.length; i ++ ) {
  let coord = mapPrivate.coordinates[i];
  let data = new CartePrivate(coord[0],coord[1],mapPrivate.images[i]);
  mapPrivate.objects.push(data);
    }

  // // PRIVATE MAPS IMAGES IN OBJECTS
  // for(let i = 0; i < mapPrivate.objects.length; i++) {
  // let map = mapPrivate.objects[i];
  // let mapPNG = loadImage('assets/images/'+map+'.png');
  // mapPrivate.objects.push(mapPNG);
  //   }
}

function setupRec() {
  // REC ICONS POSITIONS AND NAMES
  for ( let i = 0; i < recPublic.coordinates.length; i ++ ) {
	let coord = recPublic.coordinates[i];
	let data = new RecPublic(coord[1],coord[2],coord[0]);
	recPublic.objects.push(data);
    }


  for ( let i = 0; i < mapPrivate.recs.coordinates.length; i ++ ) {
    for ( let j = 0; j < mapPrivate.recs.coordinates[i].length; j ++ ) {
      let coord = mapPrivate.recs.coordinates[i][j];
      let data = new RecPrivate(coord[1],coord[2],coord[0],coord[3]);
      mapPrivate.recs.objects[i].push(data);
    }
  }

}

/**
Description of draw()
*/
function draw() {
  background(bg.fill.r,bg.fill.g,bg.fill.b);
  translate(centre.x,centre.y);

  // MOVE WHOLE CANVAS
  moveMontreal();

  if(state === `mapMontreal`) {
    mapMontreal();
  }
  //COMMON STATE FOR PRIVATE PLACES ?
  else if(state === `privateMap`) {
    privateMap();
  }
}

// MOVE MONTREAL
function moveMontreal() {
  navigationMouse();
  navigationArrows();
}
function navigationMouse() {
    //MOUSEDRAG MAP
    if(centre.dragging) {
      centre.x = mouseX + centre.offsetX;
      centre.y = mouseY + centre.offsetY;
  }

}
function navigationArrows(){
  // NAVIGATION WITH ARROWS KEYS
  if(keyIsDown(UP_ARROW)) {
    centre.y -= centre.speed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    centre.y += centre.speed;
  }
  else if (keyIsDown(LEFT_ARROW)) {
    centre.x -= centre.speed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    centre.x += centre.speed;
  }

}


function mapMontreal() {
  // // SCALE ONLY MAP !!!
  // scale(zoom.nav);
  // MAP BACKGROUND
  montreal.obj.display();
  // CYAN ICONS GROW WHEN MOUSEOVER, TRIGGERS STATE PRIVATE MAP (UNDER VIDEO DISPLAY!)
  displayPrivatePlace();
  // REC ICONS GROW WHEN MOUSE OVER AND TRIGGERS VIDEOS WHEN CLICKED OVER PLACES ICONS
  displayRecPublic();
}

// DISPLAY CYAN ICONS TRIGGERS NEW STATE
function displayPrivatePlace() {
  // DISPLAY CYAN ICONS
  for (let i = 0; i < mapPrivate.objects.length; i++) {
   let icon = mapPrivate.objects[i];
   icon.display();
 }
}
// DISPLAY REC OBJECTS ICONS (TRIGGERS VIDEO WHEN CLICKED, MOUSE OVER = GROW)
function  displayRecPublic(){
  // DISPLAY REC RED DOT ICONS
  for (let i = 0; i < recPublic.objects.length; i++) {
   let icon = recPublic.objects[i];
   icon.displayRec();
 }
 // DISPLAY VIDEOS OVER THE REC ICONS
 for (let i = 0; i < recPublic.objects.length; i++) {
  let icon = recPublic.objects[i];
  icon.displayVideo();
}
}

// DISPLAY PRIVATE MAP AS BACKGROUND REC ICONS AND VIDEOS LINKED (VIDEO OVER ICONS)
function privateMap() {
  // DISPLAY CORRESPONDING IMAGE MAP PRIVATE AS BACKGROUND OF PRIVATE MAP STATE
  // DISPLAY IMAGES WHEN CLICK ON ICONS
  for (let i = 0; i < mapPrivate.objects.length; i++) {
   let img = mapPrivate.objects[i];
   img.bg();
 }

  // DISPLAY PRIVATE REC ICONS CORRESPONDING
  // DISPLAY REC RED DOT ICONS
  for (let i = 0; i < mapPrivate.recs.objects.length; i++) {
   if (mapPrivate.objects[i].imgdisplayed){
     for (let j = 0; j < mapPrivate.recs.objects[i].length; j++) {
       let icon = mapPrivate.recs.objects[i][j];
       icon.displayRec();
     }
   }
 }
// DISPLAY VIDEOS OVER ICONS
 for (let i = 0; i < mapPrivate.recs.objects.length; i++) {
  if (mapPrivate.objects[i].imgdisplayed){
    for (let j = 0; j < mapPrivate.recs.objects[i].length; j++) {
      let icon = mapPrivate.recs.objects[i][j];
      icon.displayVideo();
    }
  }
}
}


function mousePressed() {
  // TRIGGERS NAVIGATION
  centre.dragging = true;
 // PRIVATE PLACES ICONS CLICK TRIGGERS CHANGE STATE
  for (let i = 0; i < mapPrivate.objects.length; i++) {
    let icon = mapPrivate.objects[i];
    icon.mousePressed();
  };
 // REC ICONS PUBLIC (IN MONTREAL MAP) CLICK TRIGGERS VIDEO RUN & DISPLAY
  for (let i = 0; i < recPublic.objects.length; i++) {
    let video = recPublic.objects[i];
    video.mousePressed();
  };

 // REC ICONS PRIVATE (IN PLACES MAP) CLICK TRIGGERS VIDEO RUN & DISPLAY
  for (let i = 0; i < mapPrivate.recs.objects.length; i++) {
   if (mapPrivate.objects[i].imgdisplayed){
     for (let j = 0; j < mapPrivate.recs.objects[i].length; j++) {
       let video = mapPrivate.recs.objects[i][j];
       video.mousePressed();
     }
   }
  }

  if(mouseButton === RIGHT) {
    state = `mapMontreal`
    // CHANGEMENT POINT TRANSLATION POUR CENTRER PUBLIC MAP
    centre.x = -width/2.45;
    centre.y = -height/3.5;
    for (let i = 0; i < mapPrivate.objects.length; i++) {
     mapPrivate.object[i].imgdisplayed = false;
   }
  }
  // CALCULATE THE POSITION OF THE MOUSE PAR RAPPORT AU POINT DE TRANSLATION TO PERMIT NAVIGATION
  centre.offsetX = centre.x-mouseX;
  centre.offsetY = centre.y-mouseY;

};

function mouseReleased(){
    centre.dragging = false;
}
// // MOUSEWHEEL TO SCALE FOR ZOOM
// function mouseWheel(event) {
//   push();
//   translate(-centre.x,-centre.y);
//   print(event.delta);
//   zoom.nav *= (1+zoom.sensativity*event.delta);
//   zoom.nav = constrain(zoom.nav,zoom.min,zoom.max);
//   pop();
//
//   for (let i = 0; i < rec.objects.length; i++) {
//     let video = rec.objects[i];
//     video.mouseWheel();
//   };
// }
