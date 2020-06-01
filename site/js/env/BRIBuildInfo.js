'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-01 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1431';
    this._commitGIT = '379b80c010708d0e0275a15b2ae1c8a5dc08f4a8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}