'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-16 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1249';
    this._commitGIT = '25362cea7c0d74538f46543703a3cd15119faea3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}