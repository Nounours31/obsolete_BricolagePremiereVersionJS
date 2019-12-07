'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-07 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-725';
    this._commitGIT = '6d885046f6de994f5100a7ba429d3853c0056cd4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}