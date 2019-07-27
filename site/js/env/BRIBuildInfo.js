'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-27 16:00:11';
    this._versionBuild = 'jenkins-Bricolage-193';
    this._commitGIT = '702cee8f494f11570ab1a7bcfa8003fa9af3c980';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}