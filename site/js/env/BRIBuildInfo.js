'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-21 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1270';
    this._commitGIT = 'df1402f269f7b265958383b7a7a2c018ee3f7f75';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}