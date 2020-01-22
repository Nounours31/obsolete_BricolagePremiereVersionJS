'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-22 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-910';
    this._commitGIT = '95c16537c9d1474c9652d0446be1a3404ab41e54';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}