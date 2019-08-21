'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-21 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-294';
    this._commitGIT = '83433a000d72f515784cd48b5774b8893160c3a0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}