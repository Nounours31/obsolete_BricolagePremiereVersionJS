'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-19 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-774';
    this._commitGIT = '34c268db63ae14d6764da10e8678697dc749ded1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}