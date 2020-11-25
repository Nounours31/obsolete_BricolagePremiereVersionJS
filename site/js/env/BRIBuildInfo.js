'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-25 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-2142';
    this._commitGIT = 'f75e3bb69b30ca2db280e8388b79e99ee237b097';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}