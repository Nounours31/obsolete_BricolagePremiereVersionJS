'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-22 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1031';
    this._commitGIT = 'dbde87deb9ac18540beff317bfe629f95c0ca313';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}