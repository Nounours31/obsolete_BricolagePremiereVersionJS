'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-14 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1851';
    this._commitGIT = '989162023c429c1816a4c23ddcc54a8646b0cba6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}