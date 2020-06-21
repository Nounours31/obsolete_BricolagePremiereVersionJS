'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-21 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1511';
    this._commitGIT = '5b6fe01d7c8f5b620f2967db9cee8ab24df5eb80';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}