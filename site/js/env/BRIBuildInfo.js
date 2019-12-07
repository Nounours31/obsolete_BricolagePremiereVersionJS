'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-07 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-723';
    this._commitGIT = 'cce5bb60b380951f3073e11ce5cf615e5c8d3437';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}