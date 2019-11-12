'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-12 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-626';
    this._commitGIT = '86fb680d71eeae7b4d7ea303df4ae5c3bb418059';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}