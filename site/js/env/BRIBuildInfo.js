'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-29 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-814';
    this._commitGIT = '53467a9c72caa0a224ff18be3631b539952fe1c5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}