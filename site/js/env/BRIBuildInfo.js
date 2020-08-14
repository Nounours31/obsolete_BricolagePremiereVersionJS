'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-14 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1729';
    this._commitGIT = '935ee0a8450a264b3d081d292a2492662d769fe0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}