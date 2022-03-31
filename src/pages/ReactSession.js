import React from 'react';

export default function ReactSession() {
  const SESSION_OBJECT_NAME = "__react_session__";
  const COOKIE_EXPIRATION_DAYS = 7; // TODO: Make this a prop?
  var SessionWriter = null;
  var sessionData = {};

  var get = function(key) {
    return SessionWriter.get(key);
  };

  var set = function(key, value) {
    SessionWriter.set(key, value);
  };

  var remove = function(key) {
    SessionWriter.remove(key);
  };

  var setStoreType = function(storeType) {
    SessionWriter = getSessionWriter(storeType);
  };

  var getSessionWriter = function(storeType) {
    return SessionStorageWriter;
  };

  var SessionStorageWriter = {
    set: function(key, value) {
      setItem(sessionStorage, key, value);
    },
    get: function(key) {
      return getItem(sessionStorage, key);
    },
    remove: function(key) {
      removeItem(sessionStorage, key);
    }
  };

  var setItem = function(storageObject, key, value) {
    const item = getStorageItem(storageObject);
    item[key] = value;
    setStorageItem(storageObject, item);
  }

  var getItem = function(storageObject, key) {
    const item = getStorageItem(storageObject);
    return item[key];
  }

  var removeItem = function(storageObject, key) {
    const item = getStorageItem(storageObject);
    delete item[key];
    setStorageItem(storageObject, item);
  }

  var getStorageItem = function(storageObject) {
    const item = storageObject.getItem(SESSION_OBJECT_NAME);
    return item ? JSON.parse(item) : {};
  }

  var setStorageItem = function(storageObject, item) {
    storageObject.setItem(SESSION_OBJECT_NAME, JSON.stringify(item));
  }
}

// ReactSession.set("username", this.state.username);
// ReactSession.remove("username");
// ReactSession.get("username");
// ReactSession.setStoreType("sessionStorage");