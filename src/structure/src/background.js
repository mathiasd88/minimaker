'use strict';

/**
 * Background logic for your extension defined in your manifest.json file.
 */

chrome.runtime.onInstalled.addListener(function() {
  console.log('console.log from the background script.');
});
