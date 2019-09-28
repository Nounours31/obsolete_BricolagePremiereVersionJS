'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-28 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-443';
    this._commitGIT = 'd8c3255fb2ba2c00d37ea1b97dd45e6b87d10920';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}