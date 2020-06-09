'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-09 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1463';
    this._commitGIT = '560cdd989c5ed2df8431548a197a9843f9756aa3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}