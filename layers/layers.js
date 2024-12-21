var wms_layers = [];


        var lyr_Voyagerretina_0 = new ol.layer.Tile({
            'title': 'Voyager (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}@2x.png'
            })
        });
var format_Lebenslauf_1 = new ol.format.GeoJSON();
var features_Lebenslauf_1 = format_Lebenslauf_1.readFeatures(json_Lebenslauf_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lebenslauf_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lebenslauf_1.addFeatures(features_Lebenslauf_1);
var lyr_Lebenslauf_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lebenslauf_1, 
                style: style_Lebenslauf_1,
                popuplayertitle: 'Lebenslauf',
                interactive: true,
    title: 'Lebenslauf<br />\
    <img src="styles/legend/Lebenslauf_1_0.png" /> Arbeit<br />\
    <img src="styles/legend/Lebenslauf_1_1.png" /> Ausbildung<br />\
    <img src="styles/legend/Lebenslauf_1_2.png" /> Praktikum<br />\
    <img src="styles/legend/Lebenslauf_1_3.png" /> Privat<br />'
        });
var format_virtual_layer_2 = new ol.format.GeoJSON();
var features_virtual_layer_2 = format_virtual_layer_2.readFeatures(json_virtual_layer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_virtual_layer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_virtual_layer_2.addFeatures(features_virtual_layer_2);
var lyr_virtual_layer_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_virtual_layer_2, 
                style: style_virtual_layer_2,
                popuplayertitle: 'virtual_layer',
                interactive: true,
    title: 'virtual_layer<br />\
    <img src="styles/legend/virtual_layer_2_0.png" /> Auto<br />\
    <img src="styles/legend/virtual_layer_2_1.png" /> Flugzeug<br />\
    <img src="styles/legend/virtual_layer_2_2.png" /> Zug<br />'
        });

lyr_Voyagerretina_0.setVisible(true);lyr_Lebenslauf_1.setVisible(true);lyr_virtual_layer_2.setVisible(true);
var layersList = [lyr_Voyagerretina_0,lyr_Lebenslauf_1,lyr_virtual_layer_2];
lyr_Lebenslauf_1.set('fieldAliases', {'fid': 'fid', 'Type': 'Type', 'Titel': 'Titel', 'Institution': 'Institution', 'Stadt': 'Stadt', 'Land': 'Land', 'start_date': 'start_date', 'end_date': 'end_date', 'Kurzbeschreibung': 'Kurzbeschreibung', 'Link': 'Link', 'total_time': 'total_time', });
lyr_virtual_layer_2.set('fieldAliases', {'startID': 'startID', 'endID': 'endID', 'transport': 'transport', 'zweck': 'zweck', 'weight': 'weight', });
lyr_Lebenslauf_1.set('fieldImages', {'fid': 'TextEdit', 'Type': 'ValueMap', 'Titel': 'TextEdit', 'Institution': 'TextEdit', 'Stadt': 'TextEdit', 'Land': 'TextEdit', 'start_date': 'DateTime', 'end_date': 'DateTime', 'Kurzbeschreibung': 'TextEdit', 'Link': 'TextEdit', 'total_time': 'TextEdit', });
lyr_virtual_layer_2.set('fieldImages', {'startID': 'TextEdit', 'endID': 'TextEdit', 'transport': 'TextEdit', 'zweck': 'TextEdit', 'weight': 'TextEdit', });
lyr_Lebenslauf_1.set('fieldLabels', {'fid': 'no label', 'Type': 'header label - visible with data', 'Titel': 'no label', 'Institution': 'no label', 'Stadt': 'no label', 'Land': 'no label', 'start_date': 'no label', 'end_date': 'no label', 'Kurzbeschreibung': 'no label', 'Link': 'no label', 'total_time': 'no label', });
lyr_virtual_layer_2.set('fieldLabels', {'startID': 'no label', 'endID': 'no label', 'transport': 'header label - visible with data', 'zweck': 'no label', 'weight': 'no label', });
lyr_virtual_layer_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});