(function () {
  
  function initialize () {
    var items = ko.observableArray(Util.map(Constants.list, function(item) { return new ListItemModel(item) }));
    var searchFilter = ko.observable(store.get('searchFilter') || '');
    var stateFilter = ko.observable(store.get('stateFilter') || 'California');
    var isNavOpen = ko.observable(false);
    var local = new LocalStorageModel(searchFilter, stateFilter);
    
    ko.applyBindings(new NavModel(isNavOpen), document.getElementById('menu'));
    ko.applyBindings(new MapModel(items, searchFilter, stateFilter), document.getElementById('map'));
    ko.applyBindings(new ListModel(items, searchFilter, stateFilter), document.getElementById('list'));
    ko.applyBindings(new SearchModel(searchFilter, stateFilter), document.getElementById('search'));
    ko.applyBindings(new StateFilterModel(items, stateFilter), document.getElementById('state'));
    ko.applyBindings(new DescriptionModel(items, searchFilter), document.getElementById('description'));
    ko.applyBindings(new PhotosModel(items, searchFilter), document.getElementById('photos'));
  }
  
  // Run the initialize after the window loading finished
  google.maps.event.addDomListener(window, 'load', initialize);
})();