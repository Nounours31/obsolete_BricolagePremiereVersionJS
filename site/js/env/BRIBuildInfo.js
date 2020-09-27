'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-27 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1905';
    this._commitGIT = 'df959231705cda40814aea0f095532fa208df8d3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}