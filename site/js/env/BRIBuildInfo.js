'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-16 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-762';
    this._commitGIT = 'd43871f2f8563592b501f711fb35a459e37775dc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}