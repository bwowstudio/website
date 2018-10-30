# Angular Project
## Mobile Resolutions
$resolution-320-width
$resolution-360-width
$resolution-375-width
$resolution-411-width

## Tablet Resolutions
$resolution-600-width
$resolution-768-width

## Desktop Resolutions
$resolution-1024-width
$resolution-1280-width
$resolution-1440-width

## Media Queries Mobile
@media only screen and (min-width: $resolution-320-width) {}
@media only screen and (min-width: $resolution-360-width) {}
@media only screen and (min-width: $resolution-375-width) {}
@media only screen and (min-width: $resolution-411-width) {}

## Media Queries Table
@media only screen and (min-width: $resolution-600-width) {}
@media only screen and (min-width: $resolution-768-width) {}

## Media Queries Desktop
@media only screen and (min-width: $resolution-1024-width) {}
@media only screen and (min-width: $resolution-1280-width) {}
@media only screen and (min-width: $resolution-1440-width) {}

##Imports scss
@import '../../../styles/fonts.scss';
@import '../../../styles/mixins.scss';
@import '../../../styles/palette.scss';
@import '../../../styles/variables.scss';
@import '../../../styles/fonts.scss';

## Config package.json
Introduce your url from githubpages to run: `npm run deploy`