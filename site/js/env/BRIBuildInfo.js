'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-06 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1819';
    this._commitGIT = 'b4973f9046cf37011a6231edc0cc4169c75d448f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}