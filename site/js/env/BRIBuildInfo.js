'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 11:38:07';
    this._versionBuild = 'jenkins-Bricolage-109';
    this._commitGIT = 'c1ade84d6e677f9c78f21883cfe3b07d7523c8ad';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}