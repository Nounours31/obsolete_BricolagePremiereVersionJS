'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-14 12:00:16';
    this._versionBuild = 'jenkins-Bricolage-264';
    this._commitGIT = '50d696c56d1fdad4135f07fb2e89a72245e99c02';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}