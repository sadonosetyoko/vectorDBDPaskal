var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_BataswilayahRTRWKelPasirkaliki_1 = new ol.format.GeoJSON();
var features_BataswilayahRTRWKelPasirkaliki_1 = format_BataswilayahRTRWKelPasirkaliki_1.readFeatures(json_BataswilayahRTRWKelPasirkaliki_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BataswilayahRTRWKelPasirkaliki_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BataswilayahRTRWKelPasirkaliki_1.addFeatures(features_BataswilayahRTRWKelPasirkaliki_1);
var lyr_BataswilayahRTRWKelPasirkaliki_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BataswilayahRTRWKelPasirkaliki_1, 
                style: style_BataswilayahRTRWKelPasirkaliki_1,
                popuplayertitle: "Batas wilayah RT/RW Kel. Pasirkaliki",
                interactive: true,
                title: '<img src="styles/legend/BataswilayahRTRWKelPasirkaliki_1.png" /> Batas wilayah RT/RW Kel. Pasirkaliki'
            });
var format_Buffering200m_2 = new ol.format.GeoJSON();
var features_Buffering200m_2 = format_Buffering200m_2.readFeatures(json_Buffering200m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffering200m_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffering200m_2.addFeatures(features_Buffering200m_2);
var lyr_Buffering200m_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffering200m_2, 
                style: style_Buffering200m_2,
                popuplayertitle: "Buffering 200m",
                interactive: true,
                title: '<img src="styles/legend/Buffering200m_2.png" /> Buffering 200m'
            });
var format_VektorDBDChikungunya_3 = new ol.format.GeoJSON();
var features_VektorDBDChikungunya_3 = format_VektorDBDChikungunya_3.readFeatures(json_VektorDBDChikungunya_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VektorDBDChikungunya_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VektorDBDChikungunya_3.addFeatures(features_VektorDBDChikungunya_3);
var lyr_VektorDBDChikungunya_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VektorDBDChikungunya_3, 
                style: style_VektorDBDChikungunya_3,
                popuplayertitle: "Vektor DBD-Chikungunya",
                interactive: true,
                title: '<img src="styles/legend/VektorDBDChikungunya_3.png" /> Vektor DBD-Chikungunya'
            });

lyr_ESRIStandard_0.setVisible(true);lyr_BataswilayahRTRWKelPasirkaliki_1.setVisible(true);lyr_Buffering200m_2.setVisible(true);lyr_VektorDBDChikungunya_3.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_BataswilayahRTRWKelPasirkaliki_1,lyr_Buffering200m_2,lyr_VektorDBDChikungunya_3];
lyr_BataswilayahRTRWKelPasirkaliki_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_Buffering200m_2.set('fieldAliases', {'Name': 'Name', });
lyr_VektorDBDChikungunya_3.set('fieldAliases', {'Name': 'Name', });
lyr_BataswilayahRTRWKelPasirkaliki_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_Buffering200m_2.set('fieldImages', {'Name': 'TextEdit', });
lyr_VektorDBDChikungunya_3.set('fieldImages', {'Name': 'TextEdit', });
lyr_BataswilayahRTRWKelPasirkaliki_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_Buffering200m_2.set('fieldLabels', {'Name': 'no label', });
lyr_VektorDBDChikungunya_3.set('fieldLabels', {'Name': 'no label', });
lyr_VektorDBDChikungunya_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});