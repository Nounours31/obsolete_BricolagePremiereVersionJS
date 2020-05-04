'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-04 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1320';
    this._commitGIT = '5059c2a1bec48c39d65e5b7e0ec2f7d26c669dca';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}