'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-04 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2175';
    this._commitGIT = 'bda31ede16505abd228f650f5cd23b8390bfc922';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}