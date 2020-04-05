'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-05 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-1204';
    this._commitGIT = '4ed9f8366d78fe44ceffdc3ef6c45a957751de87';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}