'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-28 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1786';
    this._commitGIT = '5464b686fee159e68658778fe036eec2c26fb917';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}