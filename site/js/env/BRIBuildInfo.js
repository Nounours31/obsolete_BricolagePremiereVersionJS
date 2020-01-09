'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-09 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-856';
    this._commitGIT = '9edb6ab90a418edc7fc506c92db61ef5a012cdca';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}