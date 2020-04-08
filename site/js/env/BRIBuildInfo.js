'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-08 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1217';
    this._commitGIT = 'e2aa946f6b360ecb6a1ae6bce7b32cbdebd356cd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}