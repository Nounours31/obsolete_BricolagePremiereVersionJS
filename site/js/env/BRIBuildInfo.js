'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-13 16:00:11';
    this._versionBuild = 'jenkins-Bricolage-1725';
    this._commitGIT = '173a2a0c0fca380d4714c95bfcf0b496f6024f4e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}