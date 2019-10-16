'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-16 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-518';
    this._commitGIT = '2f72d582dcf70010b8a8727e813f98ecebc67cd1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}