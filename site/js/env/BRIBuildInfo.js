'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-25 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-795';
    this._commitGIT = 'f2fe27cb96e7f3ba56c20d365875259f963cb210';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}