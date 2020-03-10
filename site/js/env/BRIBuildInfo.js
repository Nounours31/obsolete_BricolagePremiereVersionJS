'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-10 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1102';
    this._commitGIT = '430b8d4a9c4cd3a3dcf97c7dc00bd73c0dbdc2b4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}