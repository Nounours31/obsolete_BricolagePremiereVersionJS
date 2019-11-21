'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-21 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-660';
    this._commitGIT = 'abcdc198f610c2b21686328d45012e8387890ba3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}