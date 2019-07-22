'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-22 12:00:14';
    this._versionBuild = 'jenkins-Bricolage-172';
    this._commitGIT = '5858d8b7f78c7f4d83b157d129c5e575c45295a4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}