'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-01 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1432';
    this._commitGIT = '86280693fa60942ec1b691f2f50093bb82abfddc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}