'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-29 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-811';
    this._commitGIT = '24a4898c75d0eb7cc5bb64f9c1497c83b70183a3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}