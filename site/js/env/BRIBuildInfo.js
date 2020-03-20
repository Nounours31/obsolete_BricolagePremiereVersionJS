'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-20 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1142';
    this._commitGIT = '636e37fa68d4820c25e711ef4d0d2f95d6a130a1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}