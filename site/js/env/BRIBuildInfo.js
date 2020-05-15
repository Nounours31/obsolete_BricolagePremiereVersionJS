'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-15 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-1366';
    this._commitGIT = 'd7e95b60cc2e03c70b2ee1d21ee4f75f85e85715';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}