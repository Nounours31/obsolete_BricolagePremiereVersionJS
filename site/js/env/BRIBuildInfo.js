'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-10 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-374';
    this._commitGIT = '9e9ed644fd36cc56000009d2c20113d8d701b46c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}