'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-09 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-614';
    this._commitGIT = '4887b0f6377a11c938a0b23656ac0b60323e994c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}