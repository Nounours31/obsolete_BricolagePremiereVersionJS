'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-29 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-812';
    this._commitGIT = '57f9b2bcd7b4ec5a412ca48e21e7467f3aaede11';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}