'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-04 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-959';
    this._commitGIT = '7ef7d131425fb220b6a2c8a0d61c35205422565c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}