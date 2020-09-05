'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-05 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1818';
    this._commitGIT = '27aaeaf4b4a2fca067523fdff404d0d87c324cb1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}