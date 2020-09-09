'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-09 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1832';
    this._commitGIT = '61082a333971a63cf9a06f6df51d2251efaa90f4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}