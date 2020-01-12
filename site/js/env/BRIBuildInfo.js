'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-12 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-868';
    this._commitGIT = '95cc8ca40ce311485127ed80e88b53e92b843cd6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}