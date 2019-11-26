'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-26 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-679';
    this._commitGIT = 'c0995fdce7909af989be6b08815240c97a8429ab';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}