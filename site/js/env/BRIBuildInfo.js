'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-26 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1050';
    this._commitGIT = '462733bd050e404d18fabc6935f3878678c0ef22';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}