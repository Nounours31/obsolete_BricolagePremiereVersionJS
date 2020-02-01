'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-01 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-950';
    this._commitGIT = '84aedb5e53f2d113deb0c7661c5e39aeea2eb4b1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}