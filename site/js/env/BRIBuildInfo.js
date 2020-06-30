'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-30 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1547';
    this._commitGIT = 'c556ad625b769f9a97c145b73ca8110bd5de1348';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}