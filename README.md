# node-dashbutton
## Use Amazon DashButtons to anything you want :)

## Setup your DashButton
First of all: Setup your Dashbutton via the Amazon Android- or Apple-App:
NOTE: IF YOU ARE USING THE DASHBUTTONS OUTSIDE THE USA, YOU HAVE TO SWITCH THE COUNTRY-CODE OF YOUR APP TO U.S.

- init your DashButton and connect it with the Internet.
- cancle the Product-List view

- go to your Router and take a look of your IP-Adresses.
- locate your Dash.
- force the current IP Adress to use it every time the DashButton connect with your WLAN

## PIMP YOUR MACHINE!
- Make NodeJS & NPM running
- Install "forever" $npm install -g forever

## INIT THE APP
- clone this App.
- install dependencies with $npm install
- run the node server: $forever --spinSleepTime 1 --minUptime 100 hackDash.js

## GET IT
Everytime you clicked a Button you can see the Output.
