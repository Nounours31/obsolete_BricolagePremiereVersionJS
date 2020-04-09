'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-09 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-1219';
    this._commitGIT = 'b3e06a089b898d84ce8b8e2492138e0dbbe8684d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}