var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_PotencialesProductivosSantaCruz_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Potenciales Productivos Santa Cruz<br />\
    <img src="styles/legend/PotencialesProductivosSantaCruz_1_0.png" /> AGROINDUSTRIAL Y EXPORTACION<br />\
    <img src="styles/legend/PotencialesProductivosSantaCruz_1_1.png" /> AGROPECUARIO<br />\
    <img src="styles/legend/PotencialesProductivosSantaCruz_1_2.png" /> CULTIVOS AGRICOLAS<br />\
    <img src="styles/legend/PotencialesProductivosSantaCruz_1_3.png" /> CULTIVOS AGRICOLAS LIMITADO<br />\
    <img src="styles/legend/PotencialesProductivosSantaCruz_1_4.png" /> CULTIVOS AGRICOLAS MERCADO LOCAL<br />\
    <img src="styles/legend/PotencialesProductivosSantaCruz_1_5.png" /> CULTIVOS INDUSTRIALES Y DE CONSUMO<br />\
    <img src="styles/legend/PotencialesProductivosSantaCruz_1_6.png" /> EXPLOTACION DE YACIMIENTOS MINEROS<br />\
    <img src="styles/legend/PotencialesProductivosSantaCruz_1_7.png" /> EXTRACTIVO FORESTAL Y PETROLERO<br />\
    <img src="styles/legend/PotencialesProductivosSantaCruz_1_8.png" /> FORESTAL LIMITADO<br />\
    <img src="styles/legend/PotencialesProductivosSantaCruz_1_9.png" /> FORESTAL MADERABLE<br />\
    <img src="styles/legend/PotencialesProductivosSantaCruz_1_10.png" /> FORESTAL MADERABLE Y NO MADERABLE<br />\
    <img src="styles/legend/PotencialesProductivosSantaCruz_1_11.png" /> FORESTAL MADERABLE Y NO MADERABLE LIMITADO<br />\
    <img src="styles/legend/PotencialesProductivosSantaCruz_1_12.png" /> GANADERIA<br />\
    <img src="styles/legend/PotencialesProductivosSantaCruz_1_13.png" /> GANADERIA BOVINA<br />\
    <img src="styles/legend/PotencialesProductivosSantaCruz_1_14.png" /> GANADERIA BOVINA USO LIMITADO<br />\
    <img src="styles/legend/PotencialesProductivosSantaCruz_1_15.png" /> GANADERIA LIMITADO<br />\
    <img src="styles/legend/PotencialesProductivosSantaCruz_1_16.png" /> PASTOREO EXTENSIVO<br />\
    <img src="styles/legend/PotencialesProductivosSantaCruz_1_17.png" /> PASTOREO LIMITADO<br />\
    <img src="styles/legend/PotencialesProductivosSantaCruz_1_18.png" /> PASTOREO Y RAMONEO<br />\
    <img src="styles/legend/PotencialesProductivosSantaCruz_1_19.png" /> PISCICOLA Y CAPTACION DE AGUA<br />\
    <img src="styles/legend/PotencialesProductivosSantaCruz_1_20.png" /> PROTECCION Y VIDA SILVESTRE<br />\
    <img src="styles/legend/PotencialesProductivosSantaCruz_1_21.png" /> SILVOPASTORIL<br />\
    <img src="styles/legend/PotencialesProductivosSantaCruz_1_22.png" /> TURISTICO ESCENICO<br />\
    <img src="styles/legend/PotencialesProductivosSantaCruz_1_23.png" /> ZONA  URBANA<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PotencialesProductivosSantaCruz_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7784530.756036, -2624326.938884, -6378100.508078, -1071371.544357]
        })
    });
var format_MunicipiosPotencialesProductivosSantaCruz_2 = new ol.format.GeoJSON();
var features_MunicipiosPotencialesProductivosSantaCruz_2 = format_MunicipiosPotencialesProductivosSantaCruz_2.readFeatures(json_MunicipiosPotencialesProductivosSantaCruz_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosPotencialesProductivosSantaCruz_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiosPotencialesProductivosSantaCruz_2.addFeatures(features_MunicipiosPotencialesProductivosSantaCruz_2);
var lyr_MunicipiosPotencialesProductivosSantaCruz_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipiosPotencialesProductivosSantaCruz_2, 
                style: style_MunicipiosPotencialesProductivosSantaCruz_2,
                popuplayertitle: 'Municipios Potenciales Productivos Santa Cruz',
                interactive: true,
                title: '<img src="styles/legend/MunicipiosPotencialesProductivosSantaCruz_2.png" /> Municipios Potenciales Productivos Santa Cruz'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PotencialesProductivosSantaCruz_1.setVisible(true);lyr_MunicipiosPotencialesProductivosSantaCruz_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PotencialesProductivosSantaCruz_1,lyr_MunicipiosPotencialesProductivosSantaCruz_2];
lyr_MunicipiosPotencialesProductivosSantaCruz_2.set('fieldAliases', {'DEPTO': 'DEPTO', 'PROV': 'PROV', 'MUNICIPIO': 'MUNICIPIO', 'ZONA': 'ZONA', 'POT PROD': 'POT PROD', 'REGION': 'REGION', });
lyr_MunicipiosPotencialesProductivosSantaCruz_2.set('fieldImages', {'DEPTO': 'TextEdit', 'PROV': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'ZONA': 'TextEdit', 'POT PROD': 'TextEdit', 'REGION': 'TextEdit', });
lyr_MunicipiosPotencialesProductivosSantaCruz_2.set('fieldLabels', {'DEPTO': 'inline label - always visible', 'PROV': 'inline label - always visible', 'MUNICIPIO': 'inline label - always visible', 'ZONA': 'inline label - always visible', 'POT PROD': 'inline label - always visible', 'REGION': 'inline label - always visible', });
lyr_MunicipiosPotencialesProductivosSantaCruz_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});