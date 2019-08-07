'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-07 12:00:14';
    this._versionBuild = 'jenkins-Bricolage-236';
    this._commitGIT = '65bf71405f0c590ad615985c868baefda1cff4ac';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}