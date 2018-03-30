'use strict';

/**
 * Background logic for your extension defined in your manifest.json file.
 */
chrome.runtime.onInstalled.addListener(() => {
  // TODO: set up database
});

chrome.runtime.onSuspend.addListener(() => {
  // TODO: close open connections
});