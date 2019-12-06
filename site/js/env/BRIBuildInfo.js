'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-06 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-721';
    this._commitGIT = 'ca46401faf0945a14a675e07a1c70580b07d2cc0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}