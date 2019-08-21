'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-21 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-293';
    this._commitGIT = '67cd0a61689845fa3f8e63994943a15a1353606d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}