'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-30 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-329';
    this._commitGIT = '76b960172fd2baacd476d94e2f85e2308238cd11';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}