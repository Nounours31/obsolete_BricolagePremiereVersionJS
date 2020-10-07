'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-07 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1943';
    this._commitGIT = '73311556b021d1a52de60947b2f5fb2e55c470e4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}