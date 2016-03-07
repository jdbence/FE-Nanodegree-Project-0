var Constants = (function() {
  return {
    LIST: [
      {pos: [44.3385597,-68.2755179], state: 'Maine', label: 'Acadia National Park', type:'mountain'},
      {pos: [38.7330852,-109.5946972], state: 'Utah', label: 'Arches National Park', type:'desert'},
      {pos: [43.8553842,-102.3418745], state: 'South Dakota', label: 'Badlands National Park', type:'grass'},
      {pos: [29.1274916,-103.2447212], state: 'Texas', label: 'Big Bend National Park', type:'desert'},
      {pos: [25.4824277,-80.2104936], state: 'Florida', label: 'Biscayne National Park', type:'island'},
      {pos: [38.5753978,-107.7437794], state: 'Colorado', label: 'Black Canyon of the Gunnison National Park', type:'mountain'},
      {pos: [37.5930419,-112.1892728], state: 'Utah', label: 'Bryce Canyon National Park', type:'desert'},
      {pos: [38.3268735,-109.8804425], state: 'Utah', label: 'Canyonlands National Park', type:'desert'},
      {pos: [38.3669745,-111.2636875], state: 'Utah', label: 'Capitol Reef National Park', type:'desert'},
      {pos: [32.1478598,-104.5588971], state: 'New Mexico', label: 'Carlsbad Caverns National Park', type:'desert'},
      {pos: [33.9960781,-119.7713465], state: 'California', label: 'Channel Islands National Park', type:'island'},
      {pos: [33.7950042,-80.7733291], state: 'South Carolina', label: 'Congaree National Park', type:'forest'},
      {pos: [42.868445,-122.1706672], state: 'Oregon', label: 'Crater Lake National Park', type:'lake'},
      {pos: [41.2808288,-81.5700007], state: 'Ohio', label: 'Cuyahoga Valley National Park', type:'forest'},
      {pos: [36.5053934,-117.0815965], state: 'California', label: 'Death Valley National Park', type:'desert'},
      {pos: [63.1148026,-151.1947945], state: 'Alaska', label: 'Denali National Park', type:'forest'},
      {pos: [24.6284819,-82.8753761], state: 'Florida', label: 'Dry Tortugas National Park', type:'island'},
      {pos: [25.2866203,-80.9008396], state: 'Florida', label: 'Everglades National Park', type:'grass'},
      {pos: [67.6854561,-153.3275855], state: 'Alaska', label: 'Gates of the Arctic National Park', type:'forest'},
      {pos: [58.6658101,-136.9024034], state: 'Alaska', label: 'Glacier Bay National Park', type:'glacier'},
      {pos: [48.7596163,-113.7892112], state: 'Montana', label: 'Glacier National Park', type:'glacier'},
      {pos: [36.1069695,-112.1151859], state: 'Arizona', label: 'Grand Canyon National Park', type:'desert'},
      {pos: [43.7904321,-110.6839514], state: 'Wyoming', label: 'Grand Teton National Park', type:'forest'},
      {pos: [38.9833371,-114.3021887], state: 'Nevada', label: 'Great Basin National Park', type:'desert'},
      {pos: [37.7916001,-105.5965163], state: 'Colorado', label: 'Great Sand Dunes National Park and Preserve', type:'desert'},
      {pos: [35.6117687,-83.4917336], state: 'North Carolina', label: 'Great Smoky Mountains National Park', type:'mountain'},
      {pos: [31.8920125,-104.8226648], state: 'Texas', label: 'Guadalupe Mountains National Park', type:'mountain'},
      {pos: [20.7203876,-156.1573411], state: 'Hawaii', label: 'Haleakala National Park', type:'island'},
      {pos: [19.4193747,-155.2906856], state: 'Hawaii', label: 'Hawaii Volcanoes National Park', type:'volcano'},
      {pos: [34.5172375,-93.0482342], state: 'Arkansas', label: 'Hot Springs National Park', type:'forest'},
      {pos: [47.995869,-88.9114786], state: 'Michigan', label: 'Isle Royale National Park', type:'lake'},
      {pos: [33.8734194,-115.903181], state: 'California', label: 'Joshua Tree National Park', type:'desert'},
      {pos: [58.5975314,-154.6959172], state: 'Alaska', label: 'Katmai National Park and Preserve', type:'forest'},
      {pos: [60.0437764,-149.8185584], state: 'Alaska', label: 'Kenai Fjords National Park', type:'fjord'},
      {pos: [36.7999916,-118.5500469], state: 'California', label: 'Kings Canyon National Park', type:'forest'},
      {pos: [67.3543542,-159.1498261], state: 'Alaska', label: 'Kobuk Valley National Park', type:'forest'},
      {pos: [60.4300199,-154.3053671], state: 'Alaska', label: 'Lake Clark National Park', type:'lake'},
      {pos: [40.4976641,-121.4228385], state: 'California', label: 'Lassen Volcanic National Park', type:'volcano'},
      {pos: [37.1870021,-86.1027113], state: 'Kentucky', label: 'Mammoth Cave National Park', type:'forest'},
      {pos: [37.2308772,-108.4640168], state: 'Colorado', label: 'Mesa Verde National Park', type:'desert'},
      {pos: [46.8799699,-121.7290927], state: 'Washington', label: 'Mount Rainier National Park', type:'forest'},
      {pos: [-14.2583281,-170.6855166], state: 'Hawaii', label: 'National Park of American Samoa', type:'island'},
      {pos: [48.7718209,-121.3006481], state: 'Washington', label: 'North Cascades National Park', type:'forest'},
      {pos: [47.9690718,-123.500434], state: 'Washington', label: 'Olympic National Park', type:'forest'},
      {pos: [35.0659644,-109.7995067], state: 'Arizona', label: 'Petrified Forest National Park', type:'desert'},
      {pos: [41.2131828,-124.0068109], state: 'California', label: 'Redwood National Park', type:'forest'},
      {pos: [40.3427973,-105.6858222], state: 'Colorado', label: 'Rocky Mountain National Park', type:'mountain'},
      {pos: [32.2967404,-111.1687983], state: 'Arizona', label: 'Saguaro National Park', type:'desert'},
      {pos: [36.4863711,-118.5679349], state: 'California', label: 'Sequoia National Park', type:'forest'},
      {pos: [38.29276,-78.6817723], state: 'Virginia', label: 'Shenandoah National Park', type:'forest'},
      {pos: [46.9789686,-103.5408924], state: 'North Dakota', label: 'Theodore Roosevelt National Park', type:'grass'},
      {pos: [18.3424098,-64.7507592], state: 'Virgin Islands', label: 'Virgin Islands National Park', type:'island'},
      {pos: [48.5844479,-93.16385], state: 'Minnesota', label: 'Voyageurs National Park', type:'lake'},
      {pos: [43.604585,-103.4235266], state: 'South Dakota', label: 'Wind Cave National Park', type:'grass'},
      {pos: [61.7104448, -142.9856804], state: 'Alaska', label: 'Wrangell St. Elias National Park and Preserve', type:'mountain'},
      {pos: [44.4279668,-110.5906383], state: 'Wyoming', label: 'Yellowstone National Park', type:'forest'},
      {pos: [37.8651053,-119.5405127], state: 'California', label: 'Yosemite National Park', type:'mountain'},
      {pos: [37.2982064,-113.0284838], state: 'Utah', label: 'Zion National Park', type:'desert'}
    ]
  };
})();