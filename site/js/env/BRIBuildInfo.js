'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-13 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-1236';
    this._commitGIT = '940435fc3d5285e0aae438f2b4f20bba552c2132';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}