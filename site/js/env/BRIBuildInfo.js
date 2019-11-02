'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-02 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-585';
    this._commitGIT = 'e50962b41438d5b058dd65a5014222fc1d1b9787';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}