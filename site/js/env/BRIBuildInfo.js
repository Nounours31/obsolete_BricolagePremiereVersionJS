'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-26 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1049';
    this._commitGIT = '6c2cdf8443724806dc00cd8741f1db6c0b8df44a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}