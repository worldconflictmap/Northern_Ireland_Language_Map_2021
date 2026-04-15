var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_2 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_3 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
        attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',  // ← https, not http
        tileLoadFunction: function(imageTile, src) {
            var img = imageTile.getImage();
            img.referrerPolicy = 'origin';
            img.src = src;
        }
    })
});
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'NI languages',
                interactive: true,});

var format__4_2 = new ol.format.GeoJSON();
var features__4_2 = format__4.readFeatures(json__4_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4_2.addFeatures(features__4_2);
var lyr__4_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4_2, 
                style: style__4_2,
                popuplayertitle: 'NI languages',
                interactive: true,});

var group_NI_languages = new ol.layer.Group({
                                layers: [lyr__4,lyr__4_2,],
				fold: 'open',
                                title: 'NI languages<br />\
    <img src="styles/legend/ni_4_0.png" /> English_100<br />\
    <img src="styles/legend/ni_4_1.png" /> English_90<br />\
    <img src="styles/legend/ni_4_2.png" /> English_80<br />\
    <img src="styles/legend/ni_4_3.png" /> English_70<br />\
    <img src="styles/legend/ni_4_4.png" /> English_60<br />\
    <img src="styles/legend/ni_4_5.png" /> English_50<br />\
    <img src="styles/legend/ni_4_6.png" /> English_40<br />'});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_GoogleLabels_2.setVisible(true);lyr_OSMStandard_3.setVisible(true);lyr__4.setVisible(true);lyr__4_2.setVisible(true);group_NI_languages.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleHybrid_1,lyr_GoogleLabels_2,lyr_OSMStandard_3,group_NI_languages];
lyr__4.set('fieldAliases', {'Code': 'Code', 'ni Data_Zone': 'ni Data_Zone', 'ni result_English': 'ni result_English', 'ni result_Polish': 'ni result_Polish', 'ni result_Lithuanian': 'ni result_Lithuanian', 'ni result_Irish': 'ni result_Irish', 'ni result_Romanian': 'ni result_Romanian', 'ni result_Portuguese': 'ni result_Portuguese', 'ni result_Arabic': 'ni result_Arabic', 'ni result_Bulgarian': 'ni result_Bulgarian', 'ni result_Chinese (not otherwise specified)': 'ni result_Chinese (not otherwise specified)', 'ni result_Slovak': 'ni result_Slovak', 'ni result_Hungarian': 'ni result_Hungarian', 'ni result_Spanish': 'ni result_Spanish', 'ni result_Latvian': 'ni result_Latvian', 'ni result_Russian': 'ni result_Russian', 'ni result_Tetun': 'ni result_Tetun', 'ni result_Malayalam': 'ni result_Malayalam', 'ni result_Tagalog/Filipino': 'ni result_Tagalog/Filipino', 'ni result_Cantonese': 'ni result_Cantonese', 'ni result_Other languages': 'ni result_Other languages', 'Eng_Per': 'Eng_Per', 'English': 'English', 'Polish': 'Polish', 'Lithuanian': 'Lithuanian', 'Irish': 'Irish', 'Romanian': 'Romanian', 'Portuguese': 'Portuguese', 'Arabic': 'Arabic', 'Bulgarian': 'Bulgarian', 'Chinese': 'Chinese', 'Slovak': 'Slovak', 'Hungarian': 'Hungarian', 'Spanish': 'Spanish', 'Latvian': 'Latvian', 'Russian': 'Russian', 'Tetun': 'Tetun', 'Malayalam': 'Malayalam', 'Tagalog': 'Tagalog', 'Cantonese': 'Cantonese', 'Other languages': 'Other languages', });
lyr__4.set('fieldImages', {'Code': 'TextEdit', 'ni Data_Zone': 'TextEdit', 'ni result_English': 'TextEdit', 'ni result_Polish': 'TextEdit', 'ni result_Lithuanian': 'TextEdit', 'ni result_Irish': 'TextEdit', 'ni result_Romanian': 'TextEdit', 'ni result_Portuguese': 'TextEdit', 'ni result_Arabic': 'TextEdit', 'ni result_Bulgarian': 'TextEdit', 'ni result_Chinese (not otherwise specified)': 'TextEdit', 'ni result_Slovak': 'TextEdit', 'ni result_Hungarian': 'TextEdit', 'ni result_Spanish': 'TextEdit', 'ni result_Latvian': 'TextEdit', 'ni result_Russian': 'TextEdit', 'ni result_Tetun': 'TextEdit', 'ni result_Malayalam': 'TextEdit', 'ni result_Tagalog/Filipino': 'TextEdit', 'ni result_Cantonese': 'TextEdit', 'ni result_Other languages': 'TextEdit', 'Eng_Per': 'TextEdit', 'English': 'TextEdit', 'Polish': 'TextEdit', 'Lithuanian': 'TextEdit', 'Irish': 'TextEdit', 'Romanian': 'TextEdit', 'Portuguese': 'TextEdit', 'Arabic': 'TextEdit', 'Bulgarian': 'TextEdit', 'Chinese': 'TextEdit', 'Slovak': 'TextEdit', 'Hungarian': 'TextEdit', 'Spanish': 'TextEdit', 'Latvian': 'TextEdit', 'Russian': 'TextEdit', 'Tetun': 'TextEdit', 'Malayalam': 'TextEdit', 'Tagalog': 'TextEdit', 'Cantonese': 'TextEdit', 'Other languages': 'TextEdit',  });
lyr__4.set('fieldLabels', {'Code': 'inline label - always visible', 'ni Data_Zone': 'inline label - always visible', 'ni result_English': 'hidden field', 'ni result_Polish': 'hidden field', 'ni result_Lithuanian': 'hidden field', 'ni result_Irish': 'hidden field', 'ni result_Romanian': 'hidden field', 'ni result_Portuguese': 'hidden field', 'ni result_Arabic': 'hidden field', 'ni result_Bulgarian': 'hidden field', 'ni result_Chinese (not otherwise specified)': 'hidden field', 'ni result_Slovak': 'hidden field', 'ni result_Hungarian': 'hidden field', 'ni result_Spanish': 'hidden field', 'ni result_Latvian': 'hidden field', 'ni result_Russian': 'hidden field', 'ni result_Tetun': 'hidden field', 'ni result_Malayalam': 'hidden field', 'ni result_Tagalog/Filipino': 'hidden field', 'ni result_Cantonese': 'hidden field', 'ni result_Other languages': 'hidden field', 'Eng_Per': 'hidden field', 'English': 'inline label - always visible', 'Polish': 'inline label - always visible', 'Lithuanian': 'inline label - always visible', 'Irish': 'inline label - always visible', 'Romanian': 'inline label - always visible', 'Portuguese': 'inline label - always visible', 'Arabic': 'inline label - always visible', 'Bulgarian': 'inline label - always visible', 'Chinese': 'inline label - always visible', 'Slovak': 'inline label - always visible', 'Hungarian': 'inline label - always visible', 'Spanish': 'inline label - always visible', 'Latvian': 'inline label - always visible', 'Russian': 'inline label - always visible', 'Tetun': 'inline label - always visible', 'Malayalam': 'inline label - always visible', 'Tagalog': 'inline label - always visible', 'Cantonese': 'inline label - always visible', 'Other languages': 'inline label - always visible', });
lyr__4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});


lyr__4_2.set('fieldAliases', {'Code': 'Code', 'ni Data_Zone': 'ni Data_Zone', 'ni result_English': 'ni result_English', 'ni result_Polish': 'ni result_Polish', 'ni result_Lithuanian': 'ni result_Lithuanian', 'ni result_Irish': 'ni result_Irish', 'ni result_Romanian': 'ni result_Romanian', 'ni result_Portuguese': 'ni result_Portuguese', 'ni result_Arabic': 'ni result_Arabic', 'ni result_Bulgarian': 'ni result_Bulgarian', 'ni result_Chinese (not otherwise specified)': 'ni result_Chinese (not otherwise specified)', 'ni result_Slovak': 'ni result_Slovak', 'ni result_Hungarian': 'ni result_Hungarian', 'ni result_Spanish': 'ni result_Spanish', 'ni result_Latvian': 'ni result_Latvian', 'ni result_Russian': 'ni result_Russian', 'ni result_Tetun': 'ni result_Tetun', 'ni result_Malayalam': 'ni result_Malayalam', 'ni result_Tagalog/Filipino': 'ni result_Tagalog/Filipino', 'ni result_Cantonese': 'ni result_Cantonese', 'ni result_Other languages': 'ni result_Other languages', 'Eng_Per': 'Eng_Per', 'English': 'English', 'Polish': 'Polish', 'Lithuanian': 'Lithuanian', 'Irish': 'Irish', 'Romanian': 'Romanian', 'Portuguese': 'Portuguese', 'Arabic': 'Arabic', 'Bulgarian': 'Bulgarian', 'Chinese': 'Chinese', 'Slovak': 'Slovak', 'Hungarian': 'Hungarian', 'Spanish': 'Spanish', 'Latvian': 'Latvian', 'Russian': 'Russian', 'Tetun': 'Tetun', 'Malayalam': 'Malayalam', 'Tagalog': 'Tagalog', 'Cantonese': 'Cantonese', 'Other languages': 'Other languages', });
lyr__4_2.set('fieldImages', {'Code': 'TextEdit', 'ni Data_Zone': 'TextEdit', 'ni result_English': 'TextEdit', 'ni result_Polish': 'TextEdit', 'ni result_Lithuanian': 'TextEdit', 'ni result_Irish': 'TextEdit', 'ni result_Romanian': 'TextEdit', 'ni result_Portuguese': 'TextEdit', 'ni result_Arabic': 'TextEdit', 'ni result_Bulgarian': 'TextEdit', 'ni result_Chinese (not otherwise specified)': 'TextEdit', 'ni result_Slovak': 'TextEdit', 'ni result_Hungarian': 'TextEdit', 'ni result_Spanish': 'TextEdit', 'ni result_Latvian': 'TextEdit', 'ni result_Russian': 'TextEdit', 'ni result_Tetun': 'TextEdit', 'ni result_Malayalam': 'TextEdit', 'ni result_Tagalog/Filipino': 'TextEdit', 'ni result_Cantonese': 'TextEdit', 'ni result_Other languages': 'TextEdit', 'Eng_Per': 'TextEdit', 'English': 'TextEdit', 'Polish': 'TextEdit', 'Lithuanian': 'TextEdit', 'Irish': 'TextEdit', 'Romanian': 'TextEdit', 'Portuguese': 'TextEdit', 'Arabic': 'TextEdit', 'Bulgarian': 'TextEdit', 'Chinese': 'TextEdit', 'Slovak': 'TextEdit', 'Hungarian': 'TextEdit', 'Spanish': 'TextEdit', 'Latvian': 'TextEdit', 'Russian': 'TextEdit', 'Tetun': 'TextEdit', 'Malayalam': 'TextEdit', 'Tagalog': 'TextEdit', 'Cantonese': 'TextEdit', 'Other languages': 'TextEdit',  });
lyr__4_2.set('fieldLabels', {'Code': 'inline label - always visible', 'ni Data_Zone': 'inline label - always visible', 'ni result_English': 'hidden field', 'ni result_Polish': 'hidden field', 'ni result_Lithuanian': 'hidden field', 'ni result_Irish': 'hidden field', 'ni result_Romanian': 'hidden field', 'ni result_Portuguese': 'hidden field', 'ni result_Arabic': 'hidden field', 'ni result_Bulgarian': 'hidden field', 'ni result_Chinese (not otherwise specified)': 'hidden field', 'ni result_Slovak': 'hidden field', 'ni result_Hungarian': 'hidden field', 'ni result_Spanish': 'hidden field', 'ni result_Latvian': 'hidden field', 'ni result_Russian': 'hidden field', 'ni result_Tetun': 'hidden field', 'ni result_Malayalam': 'hidden field', 'ni result_Tagalog/Filipino': 'hidden field', 'ni result_Cantonese': 'hidden field', 'ni result_Other languages': 'hidden field', 'Eng_Per': 'hidden field', 'English': 'inline label - always visible', 'Polish': 'inline label - always visible', 'Lithuanian': 'inline label - always visible', 'Irish': 'inline label - always visible', 'Romanian': 'inline label - always visible', 'Portuguese': 'inline label - always visible', 'Arabic': 'inline label - always visible', 'Bulgarian': 'inline label - always visible', 'Chinese': 'inline label - always visible', 'Slovak': 'inline label - always visible', 'Hungarian': 'inline label - always visible', 'Spanish': 'inline label - always visible', 'Latvian': 'inline label - always visible', 'Russian': 'inline label - always visible', 'Tetun': 'inline label - always visible', 'Malayalam': 'inline label - always visible', 'Tagalog': 'inline label - always visible', 'Cantonese': 'inline label - always visible', 'Other languages': 'inline label - always visible', });
lyr__4_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
