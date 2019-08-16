'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-16 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-272';
    this._commitGIT = '7c10ec543e21d453eea4c6c303776ad30f6e0b21';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}