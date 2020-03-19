'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-19 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1138';
    this._commitGIT = '4bc5d7945149cb57b2404e8c4a61f9301699a628';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}