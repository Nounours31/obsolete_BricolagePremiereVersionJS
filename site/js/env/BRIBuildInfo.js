'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-02 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1680';
    this._commitGIT = '602c870faa6ccb9d673972bc7992714610da1fa9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}