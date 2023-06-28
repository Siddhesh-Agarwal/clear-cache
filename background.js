/*
Service Worker for Google Chrome Extension
Handles when extension is installed
Handles when message is received
*/

// console.log when extension is installed
chrome.runtime.onInstalled.addListener(function () {
    console.log("Extension installed");
});

// send response when message is received and console.log when message is received
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("Message received");
    sendResponse("Message received");
});