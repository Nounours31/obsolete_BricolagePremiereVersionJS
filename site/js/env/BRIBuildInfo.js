'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-27 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-2024';
    this._commitGIT = '94f71974a9b1186a6b2f761ab8eb44a1a14284ec';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}