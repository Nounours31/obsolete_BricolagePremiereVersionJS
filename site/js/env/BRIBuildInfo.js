'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-19 12:00:13';
    this._versionBuild = 'jenkins-Bricolage-160';
    this._commitGIT = 'e37bf2fbe411b518db8d375c73de2e5d294d2a06';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}