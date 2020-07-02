'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-02 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-1557';
    this._commitGIT = 'deaca49a88a3ddeb8a0d72f6ff5b2f0c2cbccd82';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}