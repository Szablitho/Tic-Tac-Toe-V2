Due to big amount of code and different element targets, it has been separated on few files. In styles folder there is: 
## Styles
 - style.css which holds general CSS styling for whole page,
 - overlays.css that defines look of all overlays -> in this project configuration panel and backdrop. However it can be reusable and its appropiate for mobile and PC layouts.
 - configuration.css that contains specific rules to config-overlay
 - game.css holds all styles of game area
 ## JavaScript
 - app.js contains global variables and their corresponding elements with event listeners
 ### all logic functions is stored in
 - config.js where form functionality is stored along with validation and displaying form as overlay on the page, also there are stored player's data
 - game.js is responsible for game logic