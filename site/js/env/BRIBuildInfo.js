'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-14 12:00:10';
    this._versionBuild = 'jenkins-Bricolage-140';
    this._commitGIT = '22b02c69a85a56a14f83ca7860a65331a001bf1d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}