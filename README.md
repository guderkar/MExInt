# MExInt
========

## Primitive Thunderbird plugin for communicating with MS Exchange via Exchange Web Services (EWS)
==================================================================================================

## Adding Exchange Account
Account Settings -> Account Actions -> Add Microsoft Exchange Account

## Supported Operations
1. Fetching e-mail messages from server - works by clicking any Get Messages button (works only with Inbox)
2. Sending e-mail messages - works in standard way (not all of the Thunderbird features work e.g. vCard, embeded images)
3. Deleting messages

## Supported Exchange versions
* Office 365
* Exchange on-premises (2007 - 2016)

## Supported Authentication
* Basic
* NTLM

## Server Communication
For cummunication with Exchange server bundled Node.js binary + [ews-javascript-api](https://github.com/gautamsi/ews-javascript-api) is used. Thanks gautamsi for providing such a great API and helping out using it.

## Download
[Here](https://github.com/guderkar/MExInt/tree/master/xpi)
