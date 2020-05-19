'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-19 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1380';
    this._commitGIT = '53b70ea9899113fa322580e009fc061b5ec41099';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}