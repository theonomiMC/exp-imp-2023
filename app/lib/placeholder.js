const countries = [
  {
    id: 0,
    country: "Turkey",
    mode: "import",
    cost: 1823078991.62058,
    share: 0.202445714295662,
  },
  {
    id: 1,
    country: "russia",
    mode: "import",
    cost: 1502942620.86801,
    share: 0.166895836014516,
  },
  {
    id: 2,
    country: "China",
    mode: "import",
    cost: 1045905720.90118,
    share: 0.116143695213962,
  },
  {
    id: 3,
    country: "Azerbaijan",
    mode: "import",
    cost: 491930317.643613,
    share: 0.0546269168789695,
  },
  {
    id: 4,
    country: "Germany",
    mode: "import",
    cost: 389948463.13027,
    share: 0.0433022351306502,
  },
  {
    id: 5,
    country: "Italy",
    mode: "import",
    cost: 268843553.616067,
    share: 0.029854013729382,
  },
  {
    id: 6,
    country: "UA Emirates",
    mode: "import",
    cost: 268261631.181113,
    share: 0.0297893935436685,
  },
  {
    id: 7,
    country: "France",
    mode: "import",
    cost: 190348444.004553,
    share: 0.0211374421452328,
  },
  {
    id: 8,
    country: "Netherlands",
    mode: "import",
    cost: 190153006.32224,
    share: 0.0211157395632943,
  },
  {
    id: 9,
    country: "Iran",
    mode: "import",
    cost: 183429324.252942,
    share: 0.0203691012522434,
  },
  {
    id: 10,
    country: "Other Countries",
    mode: "import",
    cost: 2650431255.97071,
    share: 0.29431991223242,
  },
  {
    id: 11,
    country: "russia",
    mode: "export",
    cost: 472226613.372367,
    share: 0.185477381247248,
  },
  {
    id: 12,
    country: "Turkey",
    mode: "export",
    cost: 271381197.932952,
    share: 0.106590930047083,
  },
  {
    id: 13,
    country: "China",
    mode: "export",
    cost: 261579595.295276,
    share: 0.10274113518635,
  },
  {
    id: 14,
    country: "Bulgaria",
    mode: "export",
    cost: 226738696.596792,
    share: 0.0890566064708969,
  },
  {
    id: 15,
    country: "Armenia",
    mode: "export",
    cost: 166157646.97951,
    share: 0.06526206775149,
  },
  {
    id: 16,
    country: "Azerbaijan",
    mode: "export",
    cost: 136849047.535638,
    share: 0.0537504711600725,
  },
  {
    id: 17,
    country: "Spain",
    mode: "export",
    cost: 73285803.2737025,
    share: 0.0287846099497337,
  },
  {
    id: 18,
    country: "Switzerland",
    mode: "export",
    cost: 72445293.1019132,
    share: 0.0284544811065882,
  },
  {
    id: 19,
    country: "USA",
    mode: "export",
    cost: 72103027.1743487,
    share: 0.0283200486410364,
  },
  {
    id: 20,
    country: "Ukraine",
    mode: "export",
    cost: 66310370.4954717,
    share: 0.0260448554163477,
  },
  {
    id: 21,
    country: "Other Countries",
    mode: "export",
    cost: 726929181.898638,
    share: 0.285517413023154,
  },
];

const monthly = [
  { id: 1, month: "April", export: 230054016.116925, import: 877332736.962505 },
  { id: 2, month: "August", export: 235916105.540455, import: 960974963.15283 },
  {
    id: 3,
    month: "February",
    export: 263218059.304299,
    import: 762161241.126729,
  },
  {
    id: 4,
    month: "January",
    export: 275678488.837586,
    import: 747561914.159295,
  },
  { id: 5, month: "July", export: 266981086.860915, import: 885462373.474701 },
  { id: 6, month: "June", export: 256463705.87687, import: 968099541.809025 },
  { id: 7, month: "March", export: 289939423.747616, import: 993247365.681001 },
  { id: 8, month: "May", export: 238991654.378799, import: 917490623.235604 },
  {
    id: 9,
    month: "October",
    export: 234835708.750213,
    import: 955262007.809156,
  },
  {
    id: 10,
    month: "September",
    export: 253928224.242932,
    import: 937680562.100422,
  },
];

const products = [
  {
    id: 178,
    code: "p2603",
    mode: "export",
    cost: 466033867.93881,
    category: "Copper ores and concentrates",
  },
  {
    id: 179,
    code: "p2204",
    mode: "export",
    cost: 217020553.174052,
    category: "Wine",
  },
  {
    id: 180,
    code: "p7202",
    mode: "export",
    cost: 145011196.322098,
    category: "Ferro-alloys",
  },
  {
    id: 181,
    code: "p3102",
    mode: "export",
    cost: 136565361.358535,
    category: "Mineral or chemical fertilisers, nitrogenous",
  },
  {
    id: 182,
    code: "p2208",
    mode: "export",
    cost: 127835528.579293,
    category: "Undenatured ethyl alcohol",
  },
  {
    id: 183,
    code: "p2201",
    mode: "export",
    cost: 114456216.331728,
    category: "Waters, including natural or artificial mineral waters..",
  },
  {
    id: 184,
    code: "p2202",
    mode: "export",
    cost: 93797779.3530652,
    category: "Waters, including mineral waters",
  },
  {
    id: 185,
    code: "p7108",
    mode: "export",
    cost: 70467785.18,
    category: "Gold",
  },
  {
    id: 186,
    code: "p0102",
    mode: "export",
    cost: 66247811.7775559,
    category: "Live bovine animals",
  },
  {
    id: 187,
    code: "p0802",
    mode: "export",
    cost: 62949986.9401142,
    category: "Nuts",
  },
  {
    id: 188,
    code: "p2710",
    mode: "import",
    cost: 906596671.065927,
    category: "Petroleum oils",
  },
  {
    id: 189,
    code: "p2711",
    mode: "import",
    cost: 418193606.937315,
    category: "Petroleum gases and other gaseous hydrocarbons",
  },
  {
    id: 190,
    code: "p3004",
    mode: "import",
    cost: 341821219.041505,
    category: "Medicaments",
  },
  {
    id: 191,
    code: "p8517",
    mode: "import",
    cost: 294468927.888126,
    category: "Telephone sets and others",
  },
  {
    id: 192,
    code: "p8471",
    mode: "import",
    cost: 116660211.515169,
    category: "Automatic data-processing machines ..",
  },
  {
    id: 193,
    code: "p7308",
    mode: "import",
    cost: 106953683.679725,
    category: "Structures and parts of structures",
  },
  {
    id: 194,
    code: "p7214",
    mode: "import",
    cost: 97265239.6672732,
    category: "Other bars and rods of iron or non-alloy steel",
  },
  {
    id: 195,
    code: "p8429",
    mode: "import",
    cost: 96715919.2506825,
    category: "Self-propelled bulldozers, excavators ..",
  },
  {
    id: 196,
    code: "p1701",
    mode: "import",
    cost: 83803169.1524681,
    category: "Cane or beet sugar and chemically pure sucrose, in solid form",
  },
  {
    id: 197,
    code: "p2402",
    mode: "import",
    cost: 78945456.0886023,
    category: "Cigars, cheroots, cigarillos and cigarettes..",
  },
];
const top_countries_items = [
  {
    id: 1,
    country: "Turkey",
    mode: "import",
    code: "p3004",
    cost: 59214602.0651935,
    total: 1823078991.62058,
    pct: 0.173232668911649,
    category: "Medicaments",
  },
  {
    id: 2,
    country: "Turkey",
    mode: "import",
    code: "p2402",
    cost: 51804542.7653679,
    total: 1823078991.62058,
    pct: 0.656206770244338,
    category: "Cigars, cheroots, etc.",
  },
  {
    id: 3,
    country: "Turkey",
    mode: "import",
    code: "p7308",
    cost: 50837292.6598602,
    total: 1823078991.62058,
    pct: 0.475320633294816,
    category: "Structures and parts of structures",
  },
  {
    id: 4,
    country: "Turkey",
    mode: "import",
    code: "p3402",
    cost: 38537969.6552864,
    total: 1823078991.62058,
    pct: 0.676398661903043,
    category: "Organic surface-active agents",
  },
  {
    id: 5,
    country: "Turkey",
    mode: "import",
    code: "p7306",
    cost: 34309671.0971691,
    total: 1823078991.62058,
    pct: 0.518923681785888,
    category:
      "Other tubes, pipes and hollow profiles (open seam or welded,etc.)",
  },
  {
    id: 6,
    country: "russia",
    mode: "import",
    code: "p2710",
    cost: 501460188.486834,
    total: 1502942620.86801,
    pct: 0.553123791969415,
    category: "Petroleum oils",
  },
  {
    id: 7,
    country: "russia",
    mode: "import",
    code: "p2711",
    cost: 159242962.243317,
    total: 1502942620.86801,
    pct: 0.38078765337794,
    category: "Petroleum gases and other gaseous hydrocarbons",
  },
  {
    id: 8,
    country: "russia",
    mode: "import",
    code: "p1001",
    cost: 44697333.2148963,
    total: 1502942620.86801,
    pct: 0.983749266730664,
    category: "Wheat and meslin",
  },
  {
    id: 9,
    country: "russia",
    mode: "import",
    code: "p7010",
    cost: 39197795.5885246,
    total: 1502942620.86801,
    pct: 0.60710386922994,
    category:
      "Carboys, bottles, flasks, jars, pots, phials, ampoules and other containers",
  },
  {
    id: 10,
    country: "russia",
    mode: "import",
    code: "p7214",
    cost: 38834257.5796911,
    total: 1502942620.86801,
    pct: 0.399261418699384,
    category: "Other bars and rods of iron or non-alloy steel",
  },
  {
    id: 11,
    country: "China",
    mode: "import",
    code: "p7210",
    cost: 42790549.4914775,
    total: 1045905720.90118,
    pct: 0.636541156355445,
    category: "Flat-rolled products of iron or non-alloy steel",
  },
  {
    id: 12,
    country: "China",
    mode: "import",
    code: "p8471",
    cost: 38966952.8420348,
    total: 1045905720.90118,
    pct: 0.33402093426659,
    category: "Automatic data-processing machines",
  },
  {
    id: 13,
    country: "China",
    mode: "import",
    code: "p4011",
    cost: 37775132.2952346,
    total: 1045905720.90118,
    pct: 0.580231587663155,
    category: "New pneumatic tyres, of rubber",
  },
  {
    id: 14,
    country: "China",
    mode: "import",
    code: "p8415",
    cost: 32711790.8721876,
    total: 1045905720.90118,
    pct: 0.598094014104359,
    category: "Air-conditioning machines, comprising a motor-driven fan, etc.",
  },
  {
    id: 15,
    country: "China",
    mode: "import",
    code: "p9405",
    cost: 22770797.4958397,
    total: 1045905720.90118,
    pct: 0.480748261136926,
    category:
      "Lamps and lighting fittings including searchlights and spotlights and parts thereof",
  },
  {
    id: 16,
    country: "Azerbaijan",
    mode: "import",
    code: "p2711",
    cost: 258595737.33,
    total: 491930317.643613,
    pct: 0.618363679023822,
    category: "Petroleum gases and other gaseous hydrocarbons",
  },
  {
    id: 17,
    country: "Azerbaijan",
    mode: "import",
    code: "p2710",
    cost: 65512133.643816,
    total: 491930317.643613,
    pct: 0.0722616084248252,
    category: "Petroleum oils",
  },
  {
    id: 18,
    country: "Azerbaijan",
    mode: "import",
    code: "p2523",
    cost: 46499793.9158268,
    total: 491930317.643613,
    pct: 0.767772738324697,
    category: "Portland cement, aluminous cement",
  },
  {
    id: 19,
    country: "Azerbaijan",
    mode: "import",
    code: "p7214",
    cost: 28529843.7298456,
    total: 491930317.643613,
    pct: 0.293320037327221,
    category: "Other bars and rods of iron or non-alloy steel",
  },
  {
    id: 20,
    country: "Azerbaijan",
    mode: "import",
    code: "p6809",
    cost: 8787331.24837493,
    total: 491930317.643613,
    pct: 0.660310773731452,
    category: "Articles of plaster or of compositions based on plaster",
  },
  {
    id: 21,
    country: "Germany",
    mode: "import",
    code: "p3004",
    cost: 44719945.7097142,
    total: 389948463.13027,
    pct: 0.13082846593056,
    category: "Medicaments",
  },
  {
    id: 22,
    country: "Germany",
    mode: "import",
    code: "p2710",
    cost: 11185134.5816019,
    total: 389948463.13027,
    pct: 0.012337497961967,
    category: "Petroleum oils",
  },
  {
    id: 23,
    country: "Germany",
    mode: "import",
    code: "p8471",
    cost: 10197004.1924766,
    total: 389948463.13027,
    pct: 0.0874077293366699,
    category: "Automatic data-processing machines",
  },
  {
    id: 24,
    country: "Germany",
    mode: "import",
    code: "p9018",
    cost: 9682214.52876235,
    total: 389948463.13027,
    pct: 0.217070233580158,
    category:
      "Instruments and appliances used in medical, surgical, dental or veterinary sciences",
  },
  {
    id: 25,
    country: "Germany",
    mode: "import",
    code: "p8708",
    cost: 7816243.21798715,
    total: 389948463.13027,
    pct: 0.124926361045607,
    category: "Parts and accessories of the motor vehicles",
  },
  {
    id: 26,
    country: "Italy",
    mode: "import",
    code: "p9403",
    cost: 9499067.12037112,
    total: 268843553.616067,
    pct: 0.121158491770121,
    category: "furniture and parts",
  },
  {
    id: 27,
    country: "Italy",
    mode: "import",
    code: "p8403",
    cost: 8133890.04669698,
    total: 268843553.616067,
    pct: 0.366185360521248,
    category: "Central heating boilers",
  },
  {
    id: 28,
    country: "Italy",
    mode: "import",
    code: "p6403",
    cost: 7801228.50816621,
    total: 268843553.616067,
    pct: 0.286546994483353,
    category: "Footwear with outer soles of rubber, plastics, leather, etc.",
  },
  {
    id: 29,
    country: "Italy",
    mode: "import",
    code: "p3004",
    cost: 7359637.45956669,
    total: 268843553.616067,
    pct: 0.0215306629594374,
    category: "Medicaments",
  },
  {
    id: 30,
    country: "Italy",
    mode: "import",
    code: "p0602",
    cost: 6395071.09653039,
    total: 268843553.616067,
    pct: 0.223253931378703,
    category:
      "Other live plants (including their roots), cuttings and slips; mushroom spawn",
  },
  {
    id: 31,
    country: "UA Emirates",
    mode: "import",
    code: "p8517",
    cost: 146939562.956148,
    total: 268261631.181113,
    pct: 0.498998532748326,
    category: "Telephone sets and others",
  },
  {
    id: 32,
    country: "UA Emirates",
    mode: "import",
    code: "p9504",
    cost: 12035619.6294495,
    total: 268261631.181113,
    pct: 0.325411245295087,
    category: "Video game consoles and machines, etc.",
  },
  {
    id: 33,
    country: "UA Emirates",
    mode: "import",
    code: "p1701",
    cost: 9162020,
    total: 268261631.181113,
    pct: 0.109327846341121,
    category: "Cane or beet sugar and chemically pure sucrose, in solid form",
  },
  {
    id: 34,
    country: "UA Emirates",
    mode: "import",
    code: "p8471",
    cost: 8934511.69761445,
    total: 268261631.181113,
    pct: 0.0765857663171879,
    category: "Automatic data-processing machines",
  },
  {
    id: 35,
    country: "UA Emirates",
    mode: "import",
    code: "p8802",
    cost: 7160829.50249336,
    total: 268261631.181113,
    pct: 0.357280611507336,
    category: "Other aircraft; spacecraft",
  },
  {
    id: 36,
    country: "France",
    mode: "import",
    code: "p3302",
    cost: 31834819.9894675,
    total: 190348444.004553,
    pct: 0.733430462467732,
    category: "Mixtures of odoriferous substances and mixtures",
  },
  {
    id: 37,
    country: "France",
    mode: "import",
    code: "p3004",
    cost: 25222942.9720093,
    total: 190348444.004553,
    pct: 0.0737898689927339,
    category: "Medicaments",
  },
  {
    id: 38,
    country: "France",
    mode: "import",
    code: "p3304",
    cost: 12524491.6272681,
    total: 190348444.004553,
    pct: 0.216360894168638,
    category: "Beauty/make-up/skincare preparations",
  },
  {
    id: 39,
    country: "France",
    mode: "import",
    code: "p0405",
    cost: 10104085.8641091,
    total: 190348444.004553,
    pct: 0.34635214147978,
    category: "Butter and other fats and oils derived from milk; dairy spreads",
  },
  {
    id: 40,
    country: "France",
    mode: "import",
    code: "p3303",
    cost: 7363544.30552086,
    total: 190348444.004553,
    pct: 0.287542533352376,
    category: "Perfumes and toilet waters",
  },
  {
    id: 41,
    country: "Netherlands",
    mode: "import",
    code: "p8471",
    cost: 13378951.7090805,
    total: 190153006.32224,
    pct: 0.114683074334567,
    category: "Automatic data-processing machines",
  },
  {
    id: 42,
    country: "Netherlands",
    mode: "import",
    code: "p8907",
    cost: 12174376.343292,
    total: 190153006.32224,
    pct: 0.972806580351975,
    category: "Other floating structures (rafts, tanks, coffer-dams, etc.)",
  },
  {
    id: 43,
    country: "Netherlands",
    mode: "import",
    code: "p8517",
    cost: 9221989.50788218,
    total: 190153006.32224,
    pct: 0.031317360286603,
    category: "Telephone sets and others",
  },
  {
    id: 44,
    country: "Netherlands",
    mode: "import",
    code: "p3004",
    cost: 8428319.90159688,
    total: 190153006.32224,
    pct: 0.0246570997705484,
    category: "Medicaments",
  },
  {
    id: 45,
    country: "Netherlands",
    mode: "import",
    code: "p0207",
    cost: 7487573.06420871,
    total: 190153006.32224,
    pct: 0.106943967380174,
    category: "Meat and edible offal",
  },
  {
    id: 46,
    country: "Iran",
    mode: "import",
    code: "p7214",
    cost: 28491944.28,
    total: 183429324.252942,
    pct: 0.292930386821292,
    category: "Other bars and rods of iron or non-alloy steel",
  },
  {
    id: 47,
    country: "Iran",
    mode: "import",
    code: "p6907",
    cost: 24322072.1326,
    total: 183429324.252942,
    pct: 0.336245341661556,
    category: "Ceramic flags and paving, hearth or wall tiles",
  },
  {
    id: 48,
    country: "Iran",
    mode: "import",
    code: "p3901",
    cost: 16943364.42,
    total: 183429324.252942,
    pct: 0.530636412245513,
    category: "Polymers of ethylene, in primary forms",
  },
  {
    id: 49,
    country: "Iran",
    mode: "import",
    code: "p7216",
    cost: 9983236.22,
    total: 183429324.252942,
    pct: 0.245060114393703,
    category: "Angles, shapes and sections of iron or non-alloy steel",
  },
  {
    id: 50,
    country: "Iran",
    mode: "import",
    code: "p7306",
    cost: 9300981.57,
    total: 183429324.252942,
    pct: 0.140674609991389,
    category:
      "Other tubes, pipes and hollow profiles (open seam or welded,etc.)",
  },
  {
    id: 51,
    country: "russia",
    mode: "export",
    code: "p2204",
    cost: 144314749.50375,
    total: 472226613.372367,
    pct: 0.664981944765428,
    category: "Wine",
  },
  {
    id: 52,
    country: "russia",
    mode: "export",
    code: "p2201",
    cost: 54113242.5036059,
    total: 472226613.372367,
    pct: 0.472785526535051,
    category: "Waters (natural or artificial)",
  },
  {
    id: 53,
    country: "russia",
    mode: "export",
    code: "p2202",
    cost: 52996321.9552195,
    total: 472226613.372367,
    pct: 0.565006147488157,
    category: "Mineral Waters",
  },
  {
    id: 54,
    country: "russia",
    mode: "export",
    code: "p2208",
    cost: 50225573.2481659,
    total: 472226613.372367,
    pct: 0.392892131055823,
    category: "Undenatured ethyl alcohol",
  },
  {
    id: 55,
    country: "russia",
    mode: "export",
    code: "p7202",
    cost: 46599555.67,
    total: 472226613.372367,
    pct: 0.321351432523137,
    category: "Ferro-alloys",
  },
  {
    id: 56,
    country: "Turkey",
    mode: "export",
    code: "p2716",
    cost: 52672095.4212828,
    total: 271381197.932952,
    pct: 0.849998452417524,
    category: "Electrical energy",
  },
  {
    id: 57,
    country: "Turkey",
    mode: "export",
    code: "p6109",
    cost: 48901126.2611346,
    total: 271381197.932952,
    pct: 0.859411662802927,
    category: "T-shirts (knitted/crocheted)",
  },
  {
    id: 58,
    country: "Turkey",
    mode: "export",
    code: "p6103",
    cost: 30089021.1738931,
    total: 271381197.932952,
    pct: 0.985537810009125,
    category: "Men's or boys' cloths",
  },
  {
    id: 59,
    country: "Turkey",
    mode: "export",
    code: "p7202",
    cost: 28540280.46,
    total: 271381197.932952,
    pct: 0.196814323196166,
    category: "Ferro-alloys",
  },
  {
    id: 60,
    country: "Turkey",
    mode: "export",
    code: "p8705",
    cost: 13002316.6882158,
    total: 271381197.932952,
    pct: 0.989884191660561,
    category: "Special purpose motor vehicles",
  },
  {
    id: 61,
    country: "China",
    mode: "export",
    code: "p2603",
    cost: 190888955.938191,
    total: 261579595.295276,
    pct: 0.409603183524968,
    category: "Copper ores and concentrates",
  },
  {
    id: 62,
    country: "China",
    mode: "export",
    code: "p2616",
    cost: 46818888.65,
    total: 261579595.295276,
    pct: 0.903378612305234,
    category: "Precious-metal ores and concentrates",
  },
  {
    id: 63,
    country: "China",
    mode: "export",
    code: "p2204",
    cost: 9402780.35562648,
    total: 261579595.295276,
    pct: 0.0433266813585411,
    category: "Wine",
  },
  {
    id: 64,
    country: "China",
    mode: "export",
    code: "p0910",
    cost: 5039333.12661304,
    total: 261579595.295276,
    pct: 0.419574759212141,
    category: "Ginger, saffron, turmeric and other spices",
  },
  {
    id: 65,
    country: "China",
    mode: "export",
    code: "p7404",
    cost: 2875103.79,
    total: 261579595.295276,
    pct: 0.127423611426693,
    category: "Copper waste and scrap",
  },
  {
    id: 66,
    country: "Bulgaria",
    mode: "export",
    code: "p2603",
    cost: 218653880.228451,
    total: 226738696.596792,
    pct: 0.469180236182234,
    category: "Copper ores and concentrates",
  },
  {
    id: 67,
    country: "Bulgaria",
    mode: "export",
    code: "p3102",
    cost: 1755600,
    total: 226738696.596792,
    pct: 0.0128553828184212,
    category: "Mineral or chemical fertilisers, nitrogenous",
  },
  {
    id: 68,
    country: "Bulgaria",
    mode: "export",
    code: "p7404",
    cost: 1690800.98742773,
    total: 226738696.596792,
    pct: 0.0749357184151811,
    category: "Copper waste and scrap",
  },
  {
    id: 69,
    country: "Bulgaria",
    mode: "export",
    code: "p6305",
    cost: 1223127.52164376,
    total: 226738696.596792,
    pct: 0.16302582584537,
    category: "Sacks and bags, of a kind used for the packing of goods",
  },
  {
    id: 70,
    country: "Bulgaria",
    mode: "export",
    code: "p6205",
    cost: 543033.798835516,
    total: 226738696.596792,
    pct: 0.93719406172483,
    category: "Men's or boys' shirts",
  },
  {
    id: 71,
    country: "Armenia",
    mode: "export",
    code: "p8429",
    cost: 16403308.427863,
    total: 166157646.97951,
    pct: 0.691805468459874,
    category: "Self-propelled bulldozers, excavators",
  },
  {
    id: 72,
    country: "Armenia",
    mode: "export",
    code: "p2208",
    cost: 14134998.9,
    total: 166157646.97951,
    pct: 0.110571756201817,
    category: "Undenatured ethyl alcohol",
  },
  {
    id: 73,
    country: "Armenia",
    mode: "export",
    code: "p2202",
    cost: 9527691.7172838,
    total: 166157646.97951,
    pct: 0.101576943324218,
    category: "Mineral Waters",
  },
  {
    id: 74,
    country: "Armenia",
    mode: "export",
    code: "p6809",
    cost: 7444013.56945802,
    total: 166157646.97951,
    pct: 0.998644089731593,
    category: "Articles of plaster or of compositions based on plaster",
  },
  {
    id: 75,
    country: "Armenia",
    mode: "export",
    code: "p2301",
    cost: 7287318,
    total: 166157646.97951,
    pct: 0.479231082522556,
    category: "Flours, meals and pellets",
  },
  {
    id: 76,
    country: "Azerbaijan",
    mode: "export",
    code: "p0102",
    cost: 16068295.4,
    total: 136849047.535638,
    pct: 0.242548319240391,
    category: "Live bovine animals",
  },
  {
    id: 77,
    country: "Azerbaijan",
    mode: "export",
    code: "p0104",
    cost: 14424057.4,
    total: 136849047.535638,
    pct: 0.365198499021606,
    category: "Live sheep and goats",
  },
  {
    id: 78,
    country: "Azerbaijan",
    mode: "export",
    code: "p2202",
    cost: 11400060.1416349,
    total: 136849047.535638,
    pct: 0.121538699746012,
    category: "Mineral Waters",
  },
  {
    id: 79,
    country: "Azerbaijan",
    mode: "export",
    code: "p7202",
    cost: 5985610.4861309,
    total: 136849047.535638,
    pct: 0.0412768850815885,
    category: "Ferro-alloys",
  },
  {
    id: 80,
    country: "Azerbaijan",
    mode: "export",
    code: "p8429",
    cost: 5492664.95859213,
    total: 136849047.535638,
    pct: 0.231651783631493,
    category: "Self-propelled bulldozers, excavators",
  },
  {
    id: 81,
    country: "Spain",
    mode: "export",
    code: "p2603",
    cost: 56490905.5065137,
    total: 73285803.2737025,
    pct: 0.121216309356149,
    category: "Copper ores and concentrates",
  },
  {
    id: 82,
    country: "Spain",
    mode: "export",
    code: "p2208",
    cost: 5041349.80688596,
    total: 73285803.2737025,
    pct: 0.0394362182635241,
    category: "Undenatured ethyl alcohol",
  },
  {
    id: 83,
    country: "Spain",
    mode: "export",
    code: "p0802",
    cost: 4919933.34781953,
    total: 73285803.2737025,
    pct: 0.0781562250759477,
    category: "Nuts",
  },
  {
    id: 84,
    country: "Spain",
    mode: "export",
    code: "p3102",
    cost: 4328708.83370411,
    total: 73285803.2737025,
    pct: 0.0316969749184028,
    category: "Mineral or chemical fertilisers, nitrogenous",
  },
  {
    id: 85,
    country: "Spain",
    mode: "export",
    code: "p2820",
    cost: 477750,
    total: 73285803.2737025,
    pct: 0.0381414893561565,
    category: "Manganese oxides",
  },
  {
    id: 86,
    country: "Switzerland",
    mode: "export",
    code: "p7108",
    cost: 62112726,
    total: 72445293.1019132,
    pct: 0.881434343953649,
    category: "Gold",
  },
  {
    id: 87,
    country: "Switzerland",
    mode: "export",
    code: "p2710",
    cost: 4117615.8,
    total: 72445293.1019132,
    pct: 0.17470485491544,
    category: "Petroleum oils",
  },
  {
    id: 88,
    country: "Switzerland",
    mode: "export",
    code: "p2616",
    cost: 3442480.59,
    total: 72445293.1019132,
    pct: 0.066423262660719,
    category: "Precious-metal ores and concentrates",
  },
  {
    id: 89,
    country: "Switzerland",
    mode: "export",
    code: "p0802",
    cost: 1066670,
    total: 72445293.1019132,
    pct: 0.0169447215456097,
    category: "Nuts",
  },
  {
    id: 90,
    country: "Switzerland",
    mode: "export",
    code: "p3304",
    cost: 674220.980603991,
    total: 72445293.1019132,
    pct: 0.1065250043013,
    category: "Beauty/make-up/skincare preparations",
  },
  {
    id: 91,
    country: "USA",
    mode: "export",
    code: "p7202",
    cost: 51790447.55,
    total: 72103027.1743487,
    pct: 0.357147922805653,
    category: "Ferro-alloys",
  },
  {
    id: 92,
    country: "USA",
    mode: "export",
    code: "p2204",
    cost: 4242537.11829441,
    total: 72103027.1743487,
    pct: 0.0195490107100219,
    category: "Wine",
  },
  {
    id: 93,
    country: "USA",
    mode: "export",
    code: "p2009",
    cost: 2456869.60009011,
    total: 72103027.1743487,
    pct: 0.198833162812329,
    category: "Fruit juices",
  },
  {
    id: 94,
    country: "USA",
    mode: "export",
    code: "p8708",
    cost: 1366854.8,
    total: 72103027.1743487,
    pct: 0.3612832102514,
    category: "Parts and accessories of the motor vehicles",
  },
  {
    id: 95,
    country: "USA",
    mode: "export",
    code: "p8803",
    cost: 1264244.78,
    total: 72103027.1743487,
    pct: 0.3106716087257,
    category: "Parts of goods of heading 8801 or 8802",
  },
  {
    id: 96,
    country: "Ukraine",
    mode: "export",
    code: "p2208",
    cost: 19391634.9968303,
    total: 66310370.4954717,
    pct: 0.151692062545838,
    category: "Undenatured ethyl alcohol",
  },
  {
    id: 97,
    country: "Ukraine",
    mode: "export",
    code: "p2201",
    cost: 11780859.33,
    total: 66310370.4954717,
    pct: 0.102928960152374,
    category: "Waters (natural or artificial)",
  },
  {
    id: 98,
    country: "Ukraine",
    mode: "export",
    code: "p2204",
    cost: 11612887.3727397,
    total: 66310370.4954717,
    pct: 0.0535105417569648,
    category: "Wine",
  },
  {
    id: 99,
    country: "Ukraine",
    mode: "export",
    code: "p2710",
    cost: 5199825.53638359,
    total: 66310370.4954717,
    pct: 0.220621546556018,
    category: "Petroleum oils",
  },
  {
    id: 100,
    country: "Ukraine",
    mode: "export",
    code: "p7404",
    cost: 3827443.59189515,
    total: 66310370.4954717,
    pct: 0.169630984003967,
    category: "Copper waste and scrap",
  },
];
module.exports = {
  countries,
  monthly,
  products,
  top_countries_items,
};
