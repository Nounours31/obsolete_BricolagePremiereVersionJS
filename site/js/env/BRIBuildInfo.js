'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-11 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-741';
    this._commitGIT = 'b34ac36c26399e41660de97a0269d70caddd922f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}