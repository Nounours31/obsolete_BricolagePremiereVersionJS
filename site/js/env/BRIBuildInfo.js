'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-03 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1196';
    this._commitGIT = '9d08e8eed9f81e9087811ac634295adb30c90308';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}