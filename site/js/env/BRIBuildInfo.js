'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-19 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-529';
    this._commitGIT = 'f269c229e0acfaaad964da50855673a015af1dea';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}