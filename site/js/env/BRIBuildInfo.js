'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-10 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1100';
    this._commitGIT = 'bd0ed957e920f6ece274a8cf73bfec4e250a6d74';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}