'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-26 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-799';
    this._commitGIT = '67a6a7ff7cc1237d550fe16c24131cbf82ee3661';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}