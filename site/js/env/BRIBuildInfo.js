'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-30 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-571';
    this._commitGIT = 'e8a95e20333a201b965f95f3202d71a977c75ce4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}