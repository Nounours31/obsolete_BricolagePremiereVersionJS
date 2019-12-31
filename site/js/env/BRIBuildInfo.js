'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-31 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-822';
    this._commitGIT = 'f7b1c7b1993dadba8e909110bfcc75c52125de72';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}