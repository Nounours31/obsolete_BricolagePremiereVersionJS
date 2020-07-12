'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-12 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1596';
    this._commitGIT = 'a9dd5e1d75a09399b061b321ec4f9cf63f1222c7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}