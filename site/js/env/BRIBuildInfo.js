'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-02 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-583';
    this._commitGIT = '071271e14cd651b3d55c66822a948bf388f6837e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}