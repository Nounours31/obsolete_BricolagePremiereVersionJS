'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-17 20:00:10';
    this._versionBuild = 'jenkins-Bricolage-1742';
    this._commitGIT = '0281fbe2c4007c84f164a409be5ef44ca94d0ece';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}