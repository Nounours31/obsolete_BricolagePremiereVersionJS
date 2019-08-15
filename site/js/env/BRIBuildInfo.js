'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-15 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-269';
    this._commitGIT = '103da6ddb1920d2cf181083b291c83839ec4b448';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}