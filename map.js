
$(document).ready(function () {
    cartodb.createVis('map', 'http://uducla.carto.com/u/uducla/api/v2/viz/664b2ba5-b804-4fd8-b734-c813d78242de/viz.json', {
            shareable: false, 
            search: true,
            infowindow: true,
            tooltip: true,
            loaderControl: false,
            layer_selector: true,
            detectRetina: true,
            center_lat: 33.936454,
            center_lon: -118.232699,
            zoom: 10
        }).on('done', function(vis,layers) {
            // Get the "native" Leaflet map
            var map = vis.getNativeMap();

            // Add a zoom control to it 
            map.addControl(L.control.zoom());

            // Set infowindow
            var sublayer = layers[1].getSubLayer(1);
            sublayer.setInteraction(true);
            sublayer.setInteractivity('cartodb_id,name,textshort,textlong,lat,lng,photo1cap,photo1url,photo2cap,photo2url,photo3cap,photo3url,videocap,videourl,videoframe,audiocap,audiourl');

            sublayer.infowindow.set('sanitizeTemplate',false);
            sublayer.infowindow.set('template', $('#infowindow_template').html());

            // Set tooltip
            vis.addOverlay({
                  type: 'tooltip',
                  layer: sublayer,
                  template: $('#hover_template').html(),
                  position: 'top|right',
                  fields: [{name: 'name', textshort: 'textshort'}]
                }); 

            // Set map pan on point click
            sublayer.on('featureClick', function(e, latlng, pos, data, layerNumber) {
                map.panTo(latlng);
                $('.cartodb-legend').hide();
                console.log("hidden");
            })

        }).on('error', function() {
            console.log("some error occurred");
    });
});

function popupclose() {
    $('.cartodb-legend').show();
    $('iframe').attr('src', $('iframe').attr('src'));
}




