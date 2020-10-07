'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-07 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1944';
    this._commitGIT = '4ec8c9efd446dcad54b8c274f8b8172fb558aeab';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}