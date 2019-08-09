'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-09 20:00:15';
    this._versionBuild = 'jenkins-Bricolage-246';
    this._commitGIT = '8b31c27693f7c514eefa01260fbb68c97de634e7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}