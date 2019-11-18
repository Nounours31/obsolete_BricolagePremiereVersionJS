'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-18 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-647';
    this._commitGIT = '5361be0a4fde00567b538d33f13a1e698602ff51';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}