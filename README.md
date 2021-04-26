# Plugin for Streamdeck to control Triones BLE Lights 


## What is This ?
Control your triones BLE lights from your Streamdeck device.

>**Disclaimer** : *This plugin has no dynamic BLE devices searching feature. All triones BLE lights listed are just for me and my 
configuration. Please, be carefull to read Streamdeck documentation before download this plugin.*

## Pre-Requisites
- [Dotnet Core SDK](https://dotnet.microsoft.com/download) (vesion 3.1 or above) installed
- [The Streamdeck software](https://www.elgato.com/fr/downloads) to test your progess
- [visual Studio Community Edition](https://visualstudio.microsoft.com/fr/downloads/) to modify and compile your project
- Raspberry pi with ssh connection and [bluez](http://www.bluez.org/) installed


## Installation
- Download the project in your project folder
- Open Visual Studio, click on "Open a project or solution" and find the "BtTrionesBLELightStreamdeckPlugin.csproj" file
- Change the IP address of your raspberry pi
  - ```StreamdeckPluginTrionesBleLightsAction.cs``` file
- Change the MAC address of your lights
  - ```property_inspector.html```
- Apply other modification as you want
- compile the project
- open your favorite shell and go to the project folder
- Past this line ```.\RegisterPluginAndStartStreamDeck.ps1```
- The Streamdeck software is open now
- You can drag and drop the action from the "Triones BLE Lights" tab
  ![plugin tab](https://i.imgur.com/hDg1Jn8.png)

## Usage

![plugin view](https://i.imgur.com/0dCQ0lm.png "plugin view")

Now, you can see this view:
- "Title" : give a name to your action (optionnal)
- "Lights" : Select your light
- "Switch" : switch on or switch off your light
- "Color" : Select the color you want

You have just to select what you want and no need to save anything 

## TODO
- Create a post on my [Dev.to profile](https://dev.to/multiplaie) to explain all the specification of this project
- Config file to change lights and RPI address easily.
- Dynamic lights listing from config file
- Recap ssh connection to RPI
- Power status off RPI 

## Source
- [How to understand hack BLE device with your phone](https://urish.medium.com/reverse-engineering-a-bluetooth-lightbulb-56580fcb7546)
- [Doc for data to send to BLE Trines device](https://github.com/madhead/saberlight/blob/master/protocols/Triones/protocol.md)
- [How to create a Streamdeck plugin in C#](https://www.youtube.com/watch?v=yxtxwlnUCws)
- [Streamdeck documentation](https://developer.elgato.com/documentation/stream-deck/sdk/create-your-own-plugin/)
- [StreamDeck Toolkit](https://github.com/FritzAndFriends/StreamDeckToolkit)