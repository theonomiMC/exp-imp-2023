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
  { id: 1, month: "April", mode: "export", cost: 230054016.116925 },
  { id: 2, month: "April", mode: "import", cost: 877332736.962505 },
  { id: 3, month: "August", mode: "export", cost: 235916105.540455 },
  { id: 4, month: "August", mode: "import", cost: 960974963.15283 },
  { id: 5, month: "February", mode: "export", cost: 263218059.304299 },
  { id: 6, month: "February", mode: "import", cost: 762161241.126729 },
  { id: 7, month: "January", mode: "export", cost: 275678488.837586 },
  { id: 8, month: "January", mode: "import", cost: 747561914.159295 },
  { id: 9, month: "July", mode: "export", cost: 266981086.860915 },
  { id: 10, month: "July", mode: "import", cost: 885462373.474701 },
  { id: 11, month: "June", mode: "export", cost: 256463705.87687 },
  { id: 12, month: "June", mode: "import", cost: 968099541.809025 },
  { id: 13, month: "March", mode: "export", cost: 289939423.747616 },
  { id: 14, month: "March", mode: "import", cost: 993247365.681001 },
  { id: 15, month: "May", mode: "export", cost: 238991654.378799 },
  { id: 16, month: "May", mode: "import", cost: 917490623.235604 },
  { id: 17, month: "October", mode: "export", cost: 234835708.750213 },
  { id: 18, month: "October", mode: "import", cost: 955262007.809156 },
  { id: 19, month: "September", mode: "export", cost: 253928224.242932 },
  { id: 20, month: "September", mode: "import", cost: 937680562.100422 },
];

const topExpPro = [
  {
    id: 178,
    cat_code: "p2603",
    mode: "export",
    cost: 466033867.93881,
    category: "Copper ores and concentrates",
  },
  {
    id: 179,
    cat_code: "p2204",
    mode: "export",
    cost: 217020553.174052,
    category: "Wine",
  },
  {
    id: 180,
    cat_code: "p7202",
    mode: "export",
    cost: 145011196.322098,
    category: "Ferro-alloys",
  },
  {
    id: 181,
    cat_code: "p3102",
    mode: "export",
    cost: 136565361.358535,
    category: "Mineral or chemical fertilisers, nitrogenous",
  },
  {
    id: 182,
    cat_code: "p2208",
    mode: "export",
    cost: 127835528.579293,
    category: "Undenatured ethyl alcohol",
  },
  {
    id: 183,
    cat_code: "p2201",
    mode: "export",
    cost: 114456216.331728,
    category: "Waters, including natural or artificial mineral waters..",
  },
  {
    id: 184,
    cat_code: "p2202",
    mode: "export",
    cost: 93797779.3530652,
    category: "Waters, including mineral waters, containing added sugar",
  },
  {
    id: 185,
    cat_code: "p7108",
    mode: "export",
    cost: 70467785.18,
    category: "Gold",
  },
  {
    id: 186,
    cat_code: "p0102",
    mode: "export",
    cost: 66247811.7775559,
    category: "Live bovine animals",
  },
  {
    id: 187,
    cat_code: "p0802",
    mode: "export",
    cost: 62949986.9401142,
    category: "Other nuts",
  },
  {
    id: 188,
    cat_code: "p2710",
    mode: "import",
    cost: 906596671.065927,
    category: "Petroleum oils",
  },
  {
    id: 189,
    cat_code: "p2711",
    mode: "import",
    cost: 418193606.937315,
    category: "Petroleum gases and other gaseous hydrocarbons",
  },
  {
    id: 190,
    cat_code: "p3004",
    mode: "import",
    cost: 341821219.041505,
    category: "Medicaments",
  },
  {
    id: 191,
    cat_code: "p8517",
    mode: "import",
    cost: 294468927.888126,
    category: "Telephone sets and others",
  },
  {
    id: 192,
    cat_code: "p8471",
    mode: "import",
    cost: 116660211.515169,
    category: "Automatic data-processing machines ..",
  },
  {
    id: 193,
    cat_code: "p7308",
    mode: "import",
    cost: 106953683.679725,
    category: "Structures and parts of structures (for ex. birdges)",
  },
  {
    id: 194,
    cat_code: "p7214",
    mode: "import",
    cost: 97265239.6672732,
    category: "Other bars and rods of iron or non-alloy steel",
  },
  {
    id: 195,
    cat_code: "p8429",
    mode: "import",
    cost: 96715919.2506825,
    category: "Self-propelled bulldozers, excavators ..",
  },
  {
    id: 196,
    cat_code: "p1701",
    mode: "import",
    cost: 83803169.1524681,
    category: "Cane or beet sugar and chemically pure sucrose, in solid form",
  },
  {
    id: 197,
    cat_code: "p2402",
    mode: "import",
    cost: 78945456.0886023,
    category: "Cigars, cheroots, cigarillos and cigarettes..",
  },
];

module.exports = {
  countries,
  monthly,
  topExpPro,
};