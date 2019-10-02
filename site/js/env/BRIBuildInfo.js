'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-02 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-461';
    this._commitGIT = '9c41b2ec16a4b526118728e7bf64cbb1a6facbac';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}