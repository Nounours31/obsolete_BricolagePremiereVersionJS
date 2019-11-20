'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-20 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-657';
    this._commitGIT = '5d8900cb6bd868796ad5abbff6b82a439d143b40';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}