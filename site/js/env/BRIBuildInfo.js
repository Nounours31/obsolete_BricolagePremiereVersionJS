'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-28 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1783';
    this._commitGIT = '2d89ae225a06c4f1c33ef1cc29a5e172254e7842';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}