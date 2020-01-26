
/* This code is the JS Script supporting device.css 
device.css is a Android and iOS device selector */
var classNames = [];
if (​navigator​.​userAgent​.​match​(​/​(iPad​|​iPhone​|​iPod)​/​i​)) classNames​.​push​(​'​device-ios​'​);
if (​navigator​.​userAgent​.​match​(​/​android​/​i​)) classNames​.​push​(​'​device-android​'​);

var html = document​.​getElementsByTagName​(​'​html​'​)[​0​];

if (classNames.length) classNames​.​push​(​'​on-device​'​);
if (html.classList) html​.​classList​.​add​.​apply​(​html​.​classList​, classNames);