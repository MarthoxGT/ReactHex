# React Hex

## Description

Hex is a connection strategy game for two players

### Rules

1. Players choose a colour and takes turns. On each turn one counter is placed in an empty hexagonal cell.
2. Counters may not be moved except with the swap rule
3. The first player to form a connected path of their counters linking the opposing sides of the board marked by their colour wins.
4. The four corner hexagons belong to both adjacent sides.

#### Swap rule

On their first move the second player may move normally, or choose to swap their piece with that placed by the first player. [This encourages the first player to only choose a moderately strong first move and so reduces any advantage of going first. Ignore the swap rule for the first few games.]

### Basic Strategy

1. Play defensively: defence is also attack.
1. Use bridges to make connections between your pieces and simultaneously to block your opponent.
1. If you can think of a strong response to your own move then look for a better one!
1. Never give up the game until it is clearly over but abandon areas of the board which are hopeless.

## Local setup

### Requisites:

- node (version 18)
- yarn

### Steps

1. Clone this repo
2. Get inside the project: `cd ReactHex`
3. Install the dependencies by typing: `yarn install`
4. Start the project by typing: `yarn start`

### Post setup

After the setup you just need to run `yarn start`

## Docker setup

### Requisites

- Docker

### Steps

1. Clone this repo
2. Get inside the project: `cd ReactHex`
3. Build the image: `docker build -t reacthex ./`
4. Run the container: `docker run -d --name react-hex -v $PROJECTDIR:/app -p 3000:3000 reacthex`

Note: $PROJECTDIR must be the absolute path of the project folder, once inside the path you can obtain it by typing `pwd` in your terminala

### Post setup

After the setup you just need to run: `docker start reacthex`
