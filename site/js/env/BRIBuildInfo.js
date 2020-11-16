'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-16 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-2103';
    this._commitGIT = 'b664227ff018c57cd83960fbc6bd2080fd128402';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}