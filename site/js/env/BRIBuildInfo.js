'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-17 08:00:09';
    this._versionBuild = 'jenkins-Bricolage-1495';
    this._commitGIT = '352c888bba8285c68f488405dab71f72fcab435d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}