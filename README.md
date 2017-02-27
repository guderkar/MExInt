# MExInt
========
## Primitive Thunderbird plugin for communicating with MS Exchange via Exchange Web Services (EWS)

==================================================================================================

## Adding Exchange Account
Account Settings -> Account Actions -> Add Microsoft Exchange Account

## Supported Operations
1. Fetching e-mail messages from server -- works only by right clicking Exchange account in left pane and selecting Get Messages option, also works only with Inbox
2. Sending e-mail messages -- works in standard way (not all of the Thunderbird features work e.g. vCard, embeded images)

## Server Communication
For cummunication with Exchange server bundled Node.js binary + [ews-javascript-api] (https://github.com/gautamsi/ews-javascript-api) is used. Thanks gautamsi for providing such a great API and helping out using it.

## Download
[Here] (http://webdev.fit.cvut.cz/~guderkar/mexint)
