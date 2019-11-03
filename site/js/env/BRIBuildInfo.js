'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-03 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-587';
    this._commitGIT = '9e9c0903a58306c8edd62bc8f44127806c351c73';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}