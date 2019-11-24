'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-24 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-674';
    this._commitGIT = '5c3562823da2815421e0e2459153ab949ce74e63';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}