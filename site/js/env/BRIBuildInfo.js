'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-14 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2095';
    this._commitGIT = '8a1ad2a1112f230543229af32a39f0b12af7ec30';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}