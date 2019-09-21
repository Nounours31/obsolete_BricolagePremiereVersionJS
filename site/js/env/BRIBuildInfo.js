'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-21 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-415';
    this._commitGIT = 'b11acb56321e5db6ccbb99346f71048e1d95087a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}