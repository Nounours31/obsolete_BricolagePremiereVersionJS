'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-07 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-360';
    this._commitGIT = 'cc0188ca3ae1f6d4e4ff43299659e67f6f4b87f6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}