'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-29 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1059';
    this._commitGIT = '1d647955513f3f4c4981cacf3bdb6414a0c57cce';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}