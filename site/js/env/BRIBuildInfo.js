'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-11 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-377';
    this._commitGIT = '4f6dc02915807be10b57fd4fb75b53fcf5ab4598';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}