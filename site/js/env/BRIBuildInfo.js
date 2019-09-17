'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-17 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-399';
    this._commitGIT = 'ff9439575b7b1a6123d76a0fbae23e0c4976c8d7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}