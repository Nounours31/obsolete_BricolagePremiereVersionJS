'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-28 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-321';
    this._commitGIT = '622424f2273353e7281c0dfa199b6d8fb960abe8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}