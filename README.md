# Pitou - Malware #

Pitou malware is a little program to troll your friends.

## Context ##
Pitou is my cat and I love him so much that I've decided to honour him doing this program.
Please, he is so nice so take care of him and he will be happy, and you'll never forget him ...
Lila is his mother and Clony is his sister.

## How to build ## 
1) Download the last version of [Node-js](https://nodejs.org/en/download/) - I've been developing the program using Node v16.17.1.
2) Put the content of Node's downloaded folder in the root directory of Pitou Malware.
3) Execute the following command `npm install` - which will just install the libs referenced in package.json.

## Start Pitou Malware ##
- Execute the command `npm run start`

or if you want an executable : 

Note that if you are not on windows you need to modify the cpp file a little bit.
- Using a c++ compiler, compile `./src/launcher.cpp` - launcher of Pitou Malware - g++ command for windows : `g++ ./src/lancher.cpp ./launcher.exe ./rsrc.res`.

## Stop Pitou Malware ##

- Windows : Execute the command `taskkill /im node.exe /F`
- Linux : Execute the command `pkill -f node`

or if you want an executable : 

Note that if you are not on windows you need to modify the cpp file a little bit.
- Using a c++ compiler, compile `./src/killer.cpp` - quiter of Pitou Malware - g++ command for windows : `g++ ./src/killer.cpp ./killer.exe`.

![alt text](./Demo.PNG)