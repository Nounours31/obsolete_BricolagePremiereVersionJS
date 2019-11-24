'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-24 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-672';
    this._commitGIT = '6c5062a67f54486635b1090f3058464b3f8f22e0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}