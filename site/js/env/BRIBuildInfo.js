'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-07 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-1213';
    this._commitGIT = '73e49f41069fa345cff58e3de767ad7c6dbb9e1d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}