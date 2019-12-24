'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-24 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-792';
    this._commitGIT = '050af022aeb4f830029a95c6690fabe1b4240011';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}