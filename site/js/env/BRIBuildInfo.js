'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-20 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1995';
    this._commitGIT = 'f02b8ce23f876f2fddc5872600b01b27ab969af6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}