'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-20 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-901';
    this._commitGIT = 'cd64606fb439e953f63d1db23b5dbe9a20fd92ea';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}