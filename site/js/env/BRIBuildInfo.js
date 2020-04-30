'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-30 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1303';
    this._commitGIT = 'bf40d840a9f6a5156c18b3ea0cf2d59bd1054095';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}