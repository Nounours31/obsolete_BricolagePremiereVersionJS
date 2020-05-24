'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-24 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1401';
    this._commitGIT = '3ceec792ef26fe009b6442f70f7fafd594efd519';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}