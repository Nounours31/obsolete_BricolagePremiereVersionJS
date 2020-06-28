'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-28 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1540';
    this._commitGIT = '341f34d4aafba862c334c07aa95072b377585743';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}