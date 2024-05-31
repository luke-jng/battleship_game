# battleship_game

## A Battleship Game played between a User and a CPU written with HTML, CSS, and Javascript with a Retro-futuristic design

This project is created based on the Battleship Project provided by The Odin Project. It is built with the requirements of three factory components:
* Ship
* Gameboard
* Player

The ship factory is used to create instances of the different ship pieces for the game, holding the details of each ship and their damage and sinking conditions.
The gameboard factory is used to create the board that the player and the cpu will use in the game to position their ships. It holds the details of each ships' tile positions, attacked tiles, amount of sunken ships, and missed attacks.
The player factory is used to create instances of different players, such as the actual player and the CPU. It holds the details of the player's turn and attack behaviors.

The front-end design is based on retro-futuristic visual design philosophy on colors and typography. Colors palletes are comprised of a limited set of colors, such as the green, orange, red, black, and white used by this project. Fonts are blocky and remain 'sans-serif' to express a mechanical and streamlined lettering. 


# Setup

To setup the project and play it in a local environment, please follow the instructions below: 

1. Download the zip folder from Github and extract it to a location of preference.
2. Open the extracted project in an IDE and run the command 'npm install webpack webpack-cli --save-dev' in the IDE's terminal to install the node_modules library required by the project.
3. Run npx webpack to compile and build the project.
4. Double-click on the 'index.html' file from within file explorer to open up the game and start playing.


# Feature goals for future implementation

1. Colorcode text inside rules.
2. Revise the front-end design to be more intuitive.
3. Add a history log for player and cpu actions.


# References

* https://www.theodinproject.com/lessons/node-path-javascript-battleship 
* https://www.youtube.com/watch?v=aS8nnjrMlQc 
