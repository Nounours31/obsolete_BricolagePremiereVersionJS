'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-10 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-986';
    this._commitGIT = '6a2e41a75bbe32e6d49207bb4f731c2a16e44ded';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}