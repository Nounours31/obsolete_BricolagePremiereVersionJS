'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-27 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1538';
    this._commitGIT = '506bb78d5ee70a6054acad49306f19b4c2cd107a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}