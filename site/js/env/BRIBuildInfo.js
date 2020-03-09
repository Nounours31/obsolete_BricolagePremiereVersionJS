'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-09 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1096';
    this._commitGIT = 'b5f8016befe05022f1ad5fbea6c72f8c714e58d0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}