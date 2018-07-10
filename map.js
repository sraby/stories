
$(document).ready(function () {
                cartodb.createVis('map', 'http://uducla.carto.com/u/uducla/api/v2/viz/664b2ba5-b804-4fd8-b734-c813d78242de/viz.json', {
                        shareable: false, 
                        search: true,
                        infowindow: true,
                        loaderControl: false,
                        layer_selector: true,
                        detectRetina: true,
                        center_lat: 33.936454,
                        center_lon: -118.232699,
                        zoom: 10
                    }).on('done', function(vis,layers) {
                        // Get the "native" Leaflet map and add a zoom control to it 
                        vis.getNativeMap().addControl(L.control.zoom());
                        var sublayer = layers[1].getSubLayer(1);
                        sublayer.infowindow.set('template_type', 'mustache');
                        sublayer.infowindow.set('sanitizeTemplate',false);
                        sublayer.infowindow.set('template', $('#infowindow_template').html());
                        //var popupTemplate = '<div class="cartodb-popup v2"><a href="#close" class="cartodb-popup-close-button close">x</a> <div class="cartodb-popup-content-wrapper"><div class="cartodb-popup-content">{{name}}{{videoframe}}</div></div><div class="cartodb-popup-tip-container"></div> </div>';
  
                        }).on('error', function() {
                    console.log("some error occurred");
            });
});
