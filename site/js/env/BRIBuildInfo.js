'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-12 16:00:15';
    this._versionBuild = 'jenkins-Bricolage-257';
    this._commitGIT = '3b0826cf56e6bbd9cc1808d25abfc4e3b153fe12';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}