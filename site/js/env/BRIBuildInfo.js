'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-04 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-836';
    this._commitGIT = '3fc3cb7170a503b4e8d749e6cbcbf2381d759a0b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}