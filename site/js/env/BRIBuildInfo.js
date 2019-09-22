'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-22 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-422';
    this._commitGIT = '08de487172b7dd1c2a616621dd8974356ad84acc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}