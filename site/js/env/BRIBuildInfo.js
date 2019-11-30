'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-30 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-696';
    this._commitGIT = '6c988c6207c32940fb00b9f974503cf2b5142064';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}