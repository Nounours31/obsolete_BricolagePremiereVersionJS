'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-12 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-744';
    this._commitGIT = '64bc7136dccdb3cbfc012192369f9c88bb35f9af';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}