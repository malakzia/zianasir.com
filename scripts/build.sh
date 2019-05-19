run-s clean build bower
rimraf dist
bower install
ncp src dist
ncp bower_components dist/lib
