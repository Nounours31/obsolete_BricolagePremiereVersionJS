'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-27 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1053';
    this._commitGIT = 'abf24f78c432c6d353ba99e1e18ed3f05d8f4c9a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}