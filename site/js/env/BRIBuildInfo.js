'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-19 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-1625';
    this._commitGIT = 'e0cb6c961d4b7dbc917d16933671486230f083c0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}