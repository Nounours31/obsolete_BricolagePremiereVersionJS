'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-07 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-973';
    this._commitGIT = 'ee43d784f74b3cf6e2b66ac1f8a4e1ac519a80a4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}