'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-15 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-635';
    this._commitGIT = 'd3ba41001fa696306021873a3640ee14617aa762';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}