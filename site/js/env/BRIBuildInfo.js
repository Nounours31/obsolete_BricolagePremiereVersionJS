'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-21 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-781';
    this._commitGIT = '78c20c3d2651a959d5002b1abc76c59d2aa3b465';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}