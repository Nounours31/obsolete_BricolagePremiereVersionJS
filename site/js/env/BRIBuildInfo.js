'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-03 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-1809';
    this._commitGIT = '783ba59a57c4fe6aff4e256ef7691309b529aff0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}