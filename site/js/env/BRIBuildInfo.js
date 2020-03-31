'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-31 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1186';
    this._commitGIT = 'e14087b93a2d8a289169ca8e2a7b65e8694d71d0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}