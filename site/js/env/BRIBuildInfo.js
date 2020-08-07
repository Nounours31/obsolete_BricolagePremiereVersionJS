'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-07 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1699';
    this._commitGIT = '25412d872ff476ca0c0ffec2e0b58366cbf3c660';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}