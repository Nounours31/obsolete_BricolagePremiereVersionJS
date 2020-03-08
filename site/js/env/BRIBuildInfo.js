'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-08 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1094';
    this._commitGIT = 'd42419a5596747668011bbfaa6ebce0835c59872';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}