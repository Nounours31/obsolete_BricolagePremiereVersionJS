'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-30 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-328';
    this._commitGIT = 'bc7ed1ceaefe2030ea003cdc164370b0c9e082dc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}