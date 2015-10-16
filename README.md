# Voyager
Voyager - An app for finding nearby places.
Live on [seansassenrath.github.com/voyager](seansassenrath.github.com/voyager)

##How to use it
Voyager is an app for finding places to go in a particular area. First enter in an activity or place you'd like to find, for example "coffee shop". Next, either enter in a city or zipcode, or type nothing at all to use your current location. The page will automatically scroll down to the query results upon selecting the "Search" button. Results of the query will be displayed on a map as well as a row for each individual location providing information such as the address, rating and if the establishment is currently opened or closed.

##Technologies/Frameworks Used
####Bower
Allowed me to easily add libraries such as jQuery, Angular and Foundation to my project.

####Gulp
Used for concatenating and minifying my JavaScript and CSS for faster dev time and better web performance.

####AngularJS
Used for capturing query parameters, building GooglePlaces API calls and ng directives. Will be useful for building out next steps where I'll require sessions for user data and custom directives for modularizing more complex functionality.

####Jquery
Used for building smooth scroll functionality upon selecting the "Search" button.

####Foundation5
Used in conjunction with custom media queries to provide a fully responsive UX.

####CSS
CSS selectors were formatted on the basis of the [Emmet Cheat Sheet](http://docs.emmet.io/cheat-sheet/). Building CSS class selectors for each rule allowed me to reuse rules when needed.

####GooglePlaces API
Used GooglePlaces API to return places results from the submitted query.

##Next Steps
* Allow users to create an account
* Build user functionatily to store favorite locations
* Hook up Facebook oAuth for users to share places on their timeline


